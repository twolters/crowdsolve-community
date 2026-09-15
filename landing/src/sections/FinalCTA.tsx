import JoinCohortButton from '../components/ui/JoinCohortButton';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-brand-900 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Your idea deserves ten honest weeks.
        </h2>
        <p className="text-brand-200 text-lg font-medium mb-10">
          An evergreen cohort — join anytime and start in whichever stage fits where you
          are. 25 seats left. A hundred dollars a month, and no equity, ever.
        </p>
        <JoinCohortButton variant="light" size="lg" className="mx-auto" />
        <div className="mt-4">
          <a
            href="#sit-in"
            className="text-sm text-brand-200 hover:text-white underline underline-offset-4 transition-colors"
          >
            Or sit in on a session first →
          </a>
        </div>
      </div>
    </section>
  );
}
