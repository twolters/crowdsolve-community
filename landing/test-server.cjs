// Smoke test for the application pipeline API.
// Usage: ADMIN_KEY=testkey123 node server.cjs & sleep 1 && node test-server.cjs; kill %1
const BASE = 'http://localhost:3000';
const AUTH = { 'Authorization': 'Bearer testkey123', 'Content-Type': 'application/json' };
let passed = 0, failed = 0;

async function test(name, fn) {
  try {
    await fn();
    console.log(`  PASS: ${name}`);
    passed++;
  } catch (e) {
    console.error(`  FAIL: ${name} -- ${e.message}`);
    failed++;
  }
}

function assert(condition, msg) { if (!condition) throw new Error(msg); }

(async () => {
  console.log('Running smoke tests...\n');

  const testEmail = `smoke-${Date.now()}@test.com`;

  // 1. Submit application
  await test('POST /api/apply -- submit application', async () => {
    const res = await fetch(`${BASE}/api/apply`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Smoke Test', email: testEmail,
        startup_idea: 'Testing', action_taken: 'Testing',
        community_contribution: 'Testing',
        commit_showing_up: true, commit_openness: true,
      }),
    });
    const data = await res.json();
    assert(res.status === 201, `Expected 201, got ${res.status}`);
    assert(data.success === true, 'Expected success: true');
  });

  // 2. Auth rejection
  await test('GET /api/applications -- rejects without auth', async () => {
    const res = await fetch(`${BASE}/api/applications`);
    assert(res.status === 401, `Expected 401, got ${res.status}`);
  });

  // 3. List applications
  let appId;
  await test('GET /api/applications -- returns list with auth', async () => {
    const res = await fetch(`${BASE}/api/applications`, { headers: AUTH });
    const data = await res.json();
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(typeof data.count === 'number', 'Expected count');
    const app = data.applications.find(a => a.email === testEmail);
    assert(app, 'Test application not found');
    appId = app.id;
  });

  // 4. Status filter
  await test('GET /api/applications?status=new -- filters', async () => {
    const res = await fetch(`${BASE}/api/applications?status=new`, { headers: AUTH });
    const data = await res.json();
    assert(data.applications.every(a => a.status === 'new'), 'Not all status=new');
  });

  // 5. Get single application
  await test('GET /api/applications/:id -- returns single app', async () => {
    const res = await fetch(`${BASE}/api/applications/${appId}`, { headers: AUTH });
    const data = await res.json();
    assert(res.status === 200, `Expected 200, got ${res.status}`);
    assert(data.email === testEmail, `Expected ${testEmail}, got ${data.email}`);
  });

  // 6. Approve
  await test('PATCH -- approve application', async () => {
    const res = await fetch(`${BASE}/api/applications/${appId}`, {
      method: 'PATCH', headers: AUTH,
      body: JSON.stringify({ status: 'approved', notes: 'Smoke test approval' }),
    });
    const data = await res.json();
    assert(data.status === 'approved', `Expected approved, got ${data.status}`);
    assert(data.notes === 'Smoke test approval', 'Notes not set');
    assert(data.updated_at, 'updated_at not set');
  });

  // 7. 404 on non-existent
  await test('PATCH -- 404 for non-existent ID', async () => {
    const res = await fetch(`${BASE}/api/applications/99999`, {
      method: 'PATCH', headers: AUTH,
      body: JSON.stringify({ status: 'approved' }),
    });
    assert(res.status === 404, `Expected 404, got ${res.status}`);
  });

  // 8. Invalid status
  await test('PATCH -- 400 for invalid status', async () => {
    const res = await fetch(`${BASE}/api/applications/${appId}`, {
      method: 'PATCH', headers: AUTH,
      body: JSON.stringify({ status: 'invalid' }),
    });
    assert(res.status === 400, `Expected 400, got ${res.status}`);
  });

  // 9. Send-payment without STRIPE_PAYMENT_URL (server started without it)
  await test('POST /send-payment -- 400 without STRIPE_PAYMENT_URL', async () => {
    const res = await fetch(`${BASE}/api/applications/${appId}/send-payment`, {
      method: 'POST', headers: AUTH,
    });
    assert(res.status === 400, `Expected 400, got ${res.status}`);
  });

  // 10. Decline
  await test('PATCH -- decline application', async () => {
    const res = await fetch(`${BASE}/api/applications/${appId}`, {
      method: 'PATCH', headers: AUTH,
      body: JSON.stringify({ status: 'declined' }),
    });
    const data = await res.json();
    assert(data.status === 'declined', `Expected declined, got ${data.status}`);
  });

  // 11. Update payment_status
  await test('PATCH -- update payment_status', async () => {
    const res = await fetch(`${BASE}/api/applications/${appId}`, {
      method: 'PATCH', headers: AUTH,
      body: JSON.stringify({ payment_status: 'paid' }),
    });
    const data = await res.json();
    assert(data.payment_status === 'paid', `Expected paid, got ${data.payment_status}`);
  });

  console.log(`\n${passed} passed, ${failed} failed out of ${passed + failed} tests`);
  process.exit(failed > 0 ? 1 : 0);
})();
