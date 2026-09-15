import JoinCohortButton from '../components/ui/JoinCohortButton';
import CheckItem from '../components/ui/CheckItem';
import Todo from '../components/ui/Todo';

const INCLUDES = [
  'Full 10-week curriculum',
  'Two live sessions a week',
  'Marvin at every step',
  'Mentor office hours',
  'Expert AMAs',
  'Pitch day with a real panel',
  'The founder community',
  '1000 Gretas grant eligibility',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 rounded-2xl bg-brand-900 text-white p-10 md:p-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-6">
              The whole thing
            </div>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-6xl md:text-7xl font-display font-extrabold">$100</span>
              <span className="text-brand-200 text-xl font-medium">per month</span>
            </div>
            <p className="text-brand-100 text-lg leading-relaxed mb-10 max-w-xl">
              Programs that help founders at this stage usually want equity for it. We ask
              for a hundred dollars a month instead.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {INCLUDES.map((item) => (
                <CheckItem key={item} tone="dark">
                  {item}
                </CheckItem>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <JoinCohortButton variant="light" size="lg" />
              <Todo>terms — cancel/refund policy</Todo>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-8">
            <div id="for-programs" className="rounded-2xl bg-white border border-brand-900/5 p-8">
              <h3 className="text-xl font-bold text-brand-900 mb-3">Running a program?</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                CrowdSolve is the platform behind entrepreneurship programs, venture
                challenges and grant makers who need their founders to make real progress on
                a real clock.
              </p>
              <a
                href="mailto:patrick@crowdsolve.eco"
                className="font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                Talk to us about your cohort →
              </a>
            </div>

            <div id="sit-in" className="rounded-2xl bg-brand-50 p-8">
              <h3 className="text-xl font-bold text-brand-900 mb-1">Not sure yet?</h3>
              <p className="text-xs text-slate-500 mb-3">
                <Todo>only ship this card if you'll actually offer open sessions</Todo>
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Come to the next open session and see how a cohort actually runs before you
                pay anything.
              </p>
              {/* TODO: no destination was specified for signing up to sit in on a session */}
              <a
                href="#"
                className="font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                Sit in on a session →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
