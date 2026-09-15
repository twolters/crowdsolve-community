import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import JoinCohortButton from '../components/ui/JoinCohortButton';
import LegalAcknowledgment from '../components/ui/LegalAcknowledgment';

const PRICE_CARD_ITEMS = [
  'The full 10-week curriculum',
  'Two live sessions every week',
  'Marvin, our AI, at every step',
  'Mentor office hours & expert AMAs',
  'A cohort of founders at your stage',
  'Pitch day in front of real investors',
];

function PriceCard() {
  return (
    <div className="rounded-[22px] bg-white border border-[#E7E4DD] shadow-xl shadow-brand-900/5 p-8">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-5xl font-display font-extrabold text-brand-900">$100</span>
        <span className="text-slate-500 font-medium">/ month</span>
      </div>
      <div className="text-sm font-bold text-brand-700 mb-6">No equity. Ever.</div>
      <div className="h-px bg-brand-900/10 mb-6" />
      <ul className="space-y-4 mb-6">
        {PRICE_CARD_ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-2xl bg-brand-50 p-5 text-sm text-brand-900 font-medium leading-relaxed">
        25 seats left in this cohort. Climate related startups eligible for non-dilutive
        grant funding through{' '}
        <a
          href="https://1000gretas.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-2 hover:text-brand-700"
        >
          1000 Gretas
        </a>
        .
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Ideate and Market Discovery Cohorts Open
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-900 leading-[1.1] mb-8">
              Ten weeks to turn your idea into something{' '}
              <br className="sm:hidden" />
              you can <em className="italic text-brand-600 font-light">prove</em>.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              CrowdSolve takes first-time founders from a hunch to a tested problem
              statement, a validated market, and a pitch deck worth showing. Structured
              curriculum, two working sessions a week, mentors who have actually done it —
              and an AI named Marvin in your corner the whole way.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <JoinCohortButton size="lg" className="w-full sm:w-auto">
                Join the cohort — $100/mo
              </JoinCohortButton>
              <a
                href="#the-10-weeks"
                className="inline-flex items-center justify-center gap-2 border border-brand-900 text-brand-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-50 transition-all w-full sm:w-auto"
              >
                See the 10 weeks
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-slate-500 mb-3">
              Evergreen cohort — join anytime and start in whichever stage fits where
              you are · No equity taken, ever
            </p>
            <LegalAcknowledgment />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5"
          >
            <PriceCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
