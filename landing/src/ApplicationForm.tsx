import { useState, type FormEvent } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error';

export default function ApplicationForm() {
  const [state, setState] = useState<FormState>('idle');
  const [firstName, setFirstName] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const commitShowingUp = form.commit_showing_up?.checked;
    const commitOpenness = form.commit_openness?.checked;

    const newErrors: Record<string, boolean> = {};
    if (!name) newErrors.name = true;
    if (!email) newErrors.email = true;
    if (!commitShowingUp) newErrors.commit_showing_up = true;
    if (!commitOpenness) newErrors.commit_openness = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setState('submitting');
    setFirstName(name.split(' ')[0]);

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          startup_idea: (formData.get('startup_idea') as string || '').trim(),
          action_taken: (formData.get('action_taken') as string || '').trim(),
          community_contribution: (formData.get('community_contribution') as string || '').trim(),
          commit_showing_up: commitShowingUp,
          commit_openness: commitOpenness,
          referral_source: formData.get('referral_source') || ''
        })
      });
      const data = await res.json();

      if (data.success) {
        setState('success');
      } else if (data.error === 'duplicate') {
        setState('duplicate');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="text-center py-12">
        <h3 className="text-3xl font-bold text-brand-900 mb-4">Thanks, {firstName}!</h3>
        <p className="text-slate-600 text-lg">We'll be in touch soon about the next opportunity.</p>
      </div>
    );
  }

  if (state === 'duplicate') {
    return (
      <div className="text-center py-12">
        <h3 className="text-3xl font-bold text-brand-900 mb-4">You're already on our list!</h3>
        <p className="text-slate-600 text-lg">
          Looks like you've sent us info before. Check your email or reach out to{' '}
          <a href="mailto:patrick@crowdsolve.eco" className="text-brand-600 underline">patrick@crowdsolve.eco</a>.
        </p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${errors[field] ? 'border-red-400' : 'border-brand-900/10'} bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brand-900 mb-1.5">Full name *</label>
          <input type="text" id="name" name="name" autoComplete="name" className={inputClass('name')} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-900 mb-1.5">Email *</label>
          <input type="email" id="email" name="email" autoComplete="email" className={inputClass('email')} />
        </div>
      </div>

      <div>
        <label htmlFor="startup_idea" className="block text-sm font-semibold text-brand-900 mb-1.5">What's your startup idea?</label>
        <textarea id="startup_idea" name="startup_idea" rows={2} placeholder="A sentence or two is fine." className={inputClass('startup_idea')} />
      </div>

      <div>
        <label htmlFor="action_taken" className="block text-sm font-semibold text-brand-900 mb-1.5">What's one thing you've already done to move it forward?</label>
        <textarea id="action_taken" name="action_taken" rows={2} placeholder="Talked to customers, built a prototype, researched the market — anything counts." className={inputClass('action_taken')} />
      </div>

      <div>
        <label htmlFor="community_contribution" className="block text-sm font-semibold text-brand-900 mb-1.5">What would you bring to a cohort of other founders?</label>
        <textarea id="community_contribution" name="community_contribution" rows={2} placeholder="Skills, experience, perspective, energy — what makes you a good person to build with?" className={inputClass('community_contribution')} />
      </div>

      <div className="space-y-3 pt-2">
        <label className={`flex items-start gap-3 cursor-pointer ${errors.commit_showing_up ? 'text-red-600' : ''}`}>
          <input type="checkbox" name="commit_showing_up" className="mt-1.5 w-4 h-4 rounded border-brand-900/20 accent-brand-600 cursor-pointer" />
          <span className="text-sm font-semibold text-brand-900 leading-relaxed">I'll show up - participating in community posts, attending events, and engaging with the curriculum for the full 10 weeks</span>
        </label>
        <label className={`flex items-start gap-3 cursor-pointer ${errors.commit_openness ? 'text-red-600' : ''}`}>
          <input type="checkbox" name="commit_openness" className="mt-1.5 w-4 h-4 rounded border-brand-900/20 accent-brand-600 cursor-pointer" />
          <span className="text-sm font-semibold text-brand-900 leading-relaxed">I'm ready to share my work openly and give feedback to other founders</span>
        </label>
      </div>

      <div>
        <label htmlFor="referral_source" className="block text-sm font-semibold text-brand-900 mb-1.5">How did you hear about CrowdSolve?</label>
        <select id="referral_source" name="referral_source" defaultValue="" className={inputClass('referral_source')}>
          <option value="" disabled>Select one...</option>
          <option value="Alpha member">Alpha member</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Referral">Referral</option>
          <option value="Event">Event</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full bg-brand-900 text-white py-4 rounded-full text-lg font-bold hover:bg-brand-800 transition-all disabled:bg-slate-300 disabled:cursor-not-allowed shadow-lg shadow-brand-900/10"
      >
        {state === 'submitting' ? 'Sending...' : state === 'error' ? 'Something went wrong — try again' : 'Send Info →'}
      </button>

      <p className="text-center text-sm text-slate-500 pt-1">
        Questions? Reach out to <a href="mailto:patrick@crowdsolve.eco" className="text-brand-600 underline">patrick@crowdsolve.eco</a>
      </p>
    </form>
  );
}
