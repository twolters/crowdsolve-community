import Logo from '../components/ui/Logo';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-brand-900/5 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="/" className="flex items-center">
          <Logo className="h-8" />
        </a>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-brand-900">How it works</a>
          <a href="#pricing" className="hover:text-brand-900">Pricing</a>
          <a href="#for-programs" className="hover:text-brand-900">For programs</a>
          {/* This is the "modest link near the bottom" the brief asks for, keeping the
              existing lead form's submit handler reachable without it being a headline CTA. */}
          <a href="/interest" className="hover:text-brand-900">Send us some info</a>
          {/* TODO: point at the real member login URL — no login destination was specified in the brief, and no login flow exists in this codebase today */}
          <a href="#" className="hover:text-brand-900">Log in</a>
          <a href="/terms" className="hover:text-brand-900">Terms of Service</a>
          <a href="/privacy" className="hover:text-brand-900">Privacy Policy</a>
        </div>
        <a
          href="mailto:patrick@crowdsolve.eco"
          className="text-slate-500 text-sm hover:text-brand-900"
        >
          patrick@crowdsolve.eco
        </a>
      </div>
    </footer>
  );
}
