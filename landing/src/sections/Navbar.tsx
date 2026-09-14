import Logo from '../components/ui/Logo';
import JoinCohortButton from '../components/ui/JoinCohortButton';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-brand-900/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Logo className="h-10" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-brand-900 transition-colors">How it works</a>
          <a href="#the-10-weeks" className="hover:text-brand-900 transition-colors">The 10 weeks</a>
          <a href="#marvin" className="hover:text-brand-900 transition-colors">Marvin</a>
          <a href="#pricing" className="hover:text-brand-900 transition-colors">Pricing</a>
          <a href="#for-programs" className="hover:text-brand-900 transition-colors">For programs</a>
        </div>
        <div className="flex items-center gap-6">
          {/* TODO: point at the real member login URL — no login destination was specified in the brief, and no login flow exists in this codebase today */}
          <a
            href="#"
            className="hidden sm:inline text-sm font-medium text-slate-500 hover:text-brand-900 transition-colors"
          >
            Log in
          </a>
          <JoinCohortButton size="sm" />
        </div>
      </div>
    </nav>
  );
}
