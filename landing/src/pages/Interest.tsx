import ApplicationForm from '../ApplicationForm';
import Logo from '../components/ui/Logo';

export default function Interest() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="pt-10 pb-6 px-6">
        <a href="/" className="inline-flex items-center">
          <Logo className="h-10" />
        </a>
      </header>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-brand-900 mb-4">Not ready yet?</h1>
            <p className="text-slate-600 text-lg font-medium">
              Send us some info and we'll be happy to chat about the next opportunity.
            </p>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-brand-900/5 shadow-sm">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
