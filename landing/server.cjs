const express = require('express');
const path = require('path');
const fs = require('fs');
const { DatabaseSync } = require('node:sqlite');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '100kb' }));

// Serve Vite build output
app.use(express.static(path.join(__dirname, 'dist')));

// --- Database ---
const dataDir = path.join(__dirname, 'data');
fs.mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(path.join(dataDir, 'applications.db'));
db.exec('PRAGMA journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    startup_idea TEXT,
    action_taken TEXT,
    community_contribution TEXT,
    commit_showing_up INTEGER DEFAULT 0,
    commit_openness INTEGER DEFAULT 0,
    referral_source TEXT,
    status TEXT DEFAULT 'new',
    created_at TEXT DEFAULT (datetime('now')),
    notes TEXT
  )
`);

// --- Schema migrations (idempotent) ---
try { db.exec('ALTER TABLE applications ADD COLUMN updated_at TEXT'); } catch (e) {
  if (!e.message.includes('duplicate column')) throw e;
}
try { db.exec("ALTER TABLE applications ADD COLUMN payment_status TEXT DEFAULT 'pending'"); } catch (e) {
  if (!e.message.includes('duplicate column')) throw e;
}
// Backfill existing rows that have NULL payment_status
db.exec("UPDATE applications SET payment_status = 'pending' WHERE payment_status IS NULL");

const insertApp = db.prepare(`
  INSERT INTO applications (name, email, startup_idea, action_taken, community_contribution, commit_showing_up, commit_openness, referral_source)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

const getAllApps = db.prepare('SELECT * FROM applications ORDER BY created_at DESC');
const getAppsByStatus = db.prepare('SELECT * FROM applications WHERE status = ? ORDER BY created_at DESC');
const getAppById = db.prepare('SELECT * FROM applications WHERE id = ?');
const updateApp = db.prepare(`
  UPDATE applications
  SET status = COALESCE(?, status),
      notes = COALESCE(?, notes),
      payment_status = COALESCE(?, payment_status),
      updated_at = datetime('now')
  WHERE id = ?
`);
const updatePaymentStatus = db.prepare(`
  UPDATE applications SET payment_status = ?, updated_at = datetime('now') WHERE id = ?
`);

// --- Email (AgentMail) ---
const AGENTMAIL_API = 'https://api.agentmail.to/v0';
const AGENTMAIL_INBOX = process.env.AGENTMAIL_INBOX || 'tmac@agentmail.to';
// NOTIFY_EMAILS: comma-separated additional recipients for application notifications.
// AGENTMAIL_INBOX (Terry) always receives. NOTIFY_EMAILS adds Patrick, etc.
const NOTIFY_EMAILS = (process.env.NOTIFY_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean);

function stripHtml(str) {
  if (!str) return '';
  return String(str).replace(/<[^>]*>/g, '').trim().slice(0, 2000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendEmail(to, subject, text) {
  const apiKey = process.env.AGENTMAIL_API_KEY;
  if (!apiKey) { console.log('AGENTMAIL_API_KEY not set, skipping email to', to); return; }

  try {
    // URL path = sender inbox. "to" field = recipient (can be external address).
    const res = await fetch(
      `${AGENTMAIL_API}/inboxes/${encodeURIComponent(AGENTMAIL_INBOX)}/messages/send`,
      {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, text })
      }
    );
    if (res.ok) {
      console.log(`Email sent to ${to}: ${subject}`);
    } else {
      console.error(`Email to ${to} failed:`, res.status, await res.text());
    }
  } catch (err) {
    console.error(`Email to ${to} failed:`, err.message);
  }
}

function formatNotificationBody(data) {
  return [
    `${data.name} (${data.email}) just applied for the CrowdSolve Beta.`,
    '',
    `Startup idea: ${data.startup_idea || '(not provided)'}`,
    '',
    `Action taken: ${data.action_taken || '(not provided)'}`,
    '',
    `What they'd bring: ${data.community_contribution || '(not provided)'}`,
    '',
    `Heard about us: ${data.referral_source || '(not provided)'}`,
    '',
    `Commitments: ${data.commit_showing_up ? '[x]' : '[ ]'} Show up & engage  ${data.commit_openness ? '[x]' : '[ ]'} Share openly & give feedback`,
  ].join('\n');
}

function sendNotification(data) {
  const subject = `New CrowdSolve Beta Application: ${data.name}`;
  const text = formatNotificationBody(data);

  // Terry (always)
  sendEmail(AGENTMAIL_INBOX, subject, text);

  // Additional recipients (fire-and-forget)
  for (const email of NOTIFY_EMAILS) {
    sendEmail(email, subject, text);
  }
}

// --- Applicant Email Templates ---

function sendApprovalEmail(to, firstName, paymentUrl) {
  const subject = "You're in - next steps for CrowdSolve Beta";
  const text = `Hey ${firstName},

Your application to the CrowdSolve Beta cohort has been accepted.

To confirm your spot, complete payment here: ${paymentUrl}

The cohort kicks off April 13 and runs 10 weeks. Once payment is confirmed, you'll get an invite to the Circle community where everything happens.

Questions? Reply to this email.

- The CrowdSolve Team`;

  sendEmail(to, subject, text);
}

function sendDeclineEmail(to, firstName) {
  const subject = 'CrowdSolve Beta - Update on your application';
  const text = `Hey ${firstName},

Thanks for applying to the CrowdSolve Beta. We had a lot of strong applications for this cohort and unfortunately we're not able to offer you a spot this time.

We'll keep your application on file and reach out if a spot opens up or when we launch the next cohort.

- The CrowdSolve Team`;

  sendEmail(to, subject, text);
}

// --- API Routes ---

function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  const adminKey = process.env.ADMIN_KEY;
  if (!adminKey || !authHeader || authHeader !== `Bearer ${adminKey}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

app.post('/api/apply', (req, res) => {
  const { name, email, startup_idea, action_taken, community_contribution, commit_showing_up, commit_openness, referral_source } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'validation', message: 'Name and email are required' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, error: 'validation', message: 'Please enter a valid email address' });
  }
  if (!commit_showing_up || !commit_openness) {
    return res.status(400).json({ success: false, error: 'validation', message: 'Both commitments are required to apply' });
  }

  const data = {
    name: stripHtml(name),
    email: stripHtml(email).toLowerCase(),
    startup_idea: stripHtml(startup_idea),
    action_taken: stripHtml(action_taken),
    community_contribution: stripHtml(community_contribution),
    commit_showing_up: commit_showing_up ? 1 : 0,
    commit_openness: commit_openness ? 1 : 0,
    referral_source: stripHtml(referral_source)
  };

  try {
    insertApp.run(data.name, data.email, data.startup_idea, data.action_taken, data.community_contribution, data.commit_showing_up, data.commit_openness, data.referral_source);
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE' || (err.message && err.message.includes('UNIQUE constraint'))) {
      return res.status(409).json({ success: false, error: 'duplicate', message: 'This email has already been used to apply' });
    }
    console.error('Database error:', err.message);
    return res.status(500).json({ success: false, error: 'server', message: 'Something went wrong' });
  }

  sendNotification(data);
  res.status(201).json({ success: true, message: 'Application received' });
});

app.get('/api/applications', requireAdmin, (req, res) => {
  const { status } = req.query;
  const validStatuses = ['new', 'approved', 'declined', 'waitlisted'];

  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` });
  }

  const applications = status ? getAppsByStatus.all(status) : getAllApps.all();
  res.json({ count: applications.length, applications });
});

app.get('/api/applications/:id', requireAdmin, (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const record = getAppById.get(id);
  if (!record) return res.status(404).json({ error: `No application found with ID ${id}` });

  res.json(record);
});

const VALID_STATUSES = ['new', 'approved', 'declined', 'waitlisted'];
const VALID_PAYMENT_STATUSES = ['pending', 'sent', 'paid', 'failed'];

app.patch('/api/applications/:id', requireAdmin, (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const record = getAppById.get(id);
  if (!record) return res.status(404).json({ error: `No application found with ID ${id}` });

  const { status, notes, payment_status } = req.body;

  if (status && !VALID_STATUSES.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}` });
  }
  if (payment_status && !VALID_PAYMENT_STATUSES.includes(payment_status)) {
    return res.status(400).json({ error: `Invalid payment_status. Must be one of: ${VALID_PAYMENT_STATUSES.join(', ')}` });
  }

  const sanitizedNotes = notes ? stripHtml(notes) : null;
  updateApp.run(status || null, sanitizedNotes, payment_status || null, id);

  const updated = getAppById.get(id);

  // Auto-send payment email if approving with ?send_payment=true
  if (status === 'approved' && req.query.send_payment === 'true') {
    const paymentUrl = process.env.STRIPE_PAYMENT_URL;
    if (!paymentUrl) {
      return res.status(400).json({ error: 'Approved but STRIPE_PAYMENT_URL not configured - payment email not sent', application: updated });
    }
    const firstName = updated.name.split(' ')[0] || updated.name;
    sendApprovalEmail(updated.email, firstName, paymentUrl);
    updatePaymentStatus.run('sent', id);
    const final = getAppById.get(id);
    return res.json(final);
  }

  // Auto-send decline email if declining with ?send_decline=true
  if (status === 'declined' && req.query.send_decline === 'true') {
    const firstName = updated.name.split(' ')[0] || updated.name;
    sendDeclineEmail(updated.email, firstName);
  }

  res.json(updated);
});

app.post('/api/applications/:id/send-payment', requireAdmin, (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const record = getAppById.get(id);
  if (!record) return res.status(404).json({ error: `No application found with ID ${id}` });

  const paymentUrl = process.env.STRIPE_PAYMENT_URL;
  if (!paymentUrl) {
    return res.status(400).json({ error: 'STRIPE_PAYMENT_URL is not configured. Set it before sending payment links.' });
  }

  // Double-send guard
  if ((record.payment_status === 'sent' || record.payment_status === 'paid') && req.query.force !== 'true') {
    return res.json({
      warning: `Payment link already sent (status: ${record.payment_status}). Use ?force=true to resend.`,
      payment_status: record.payment_status
    });
  }

  const firstName = record.name.split(' ')[0] || record.name;
  sendApprovalEmail(record.email, firstName, paymentUrl);
  updatePaymentStatus.run('sent', id);

  const updated = getAppById.get(id);
  res.json(updated);
});

// SPA fallback — serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`CrowdSolve running on port ${PORT}`);
});
