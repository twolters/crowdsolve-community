// landing/src/sections/PricingBenefits.tsx
import { BookOpen, CalendarClock, Bot, Handshake, UsersRound, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const CARDS = [
  {
    icon: BookOpen,
    title: 'A curriculum, not a course',
    desc: "Problem statement, solution hypothesis, market discovery, pitch deck — in the order they actually need to happen, with a deliverable at the end of every module.",
  },
  {
    icon: CalendarClock,
    title: 'Two live sessions a week',
    desc: "Accountability and execution, on the calendar, in sync with whatever module you're in. Momentum you don't have to generate by yourself on a Tuesday night.",
  },
  {
    icon: Bot,
    title: 'Marvin, our AI, on call',
    desc: 'Built into every step of the curriculum to help you form your ideas and pressure-test them — between sessions, when the real work happens.',
  },
  {
    icon: Handshake,
    title: 'Been there, done that mentors',
    desc: 'Operators who have built and sold companies, plus the connections that come with them. The boost that founders from money and founders on their second company already have.',
  },
  {
    icon: UsersRound,
    title: 'Founders at your exact stage',
    desc: 'A small cohort going through the same week you are. Not a Slack channel of 4,000 people posting links.',
  },
];

export default function PricingBenefits() {
  return (
    <section className="py-28 bg-cream textured-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">
            What a hundred dollars a month actually buys.
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Five things most first-time founders never get at this stage — because nobody
            sells them at this stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 rounded-2xl bg-white border border-brand-900/5"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border-2 border-brand-600">
                <c.icon className="w-6 h-6 text-brand-600" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{c.title}</h3>
              <p className="text-slate-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: CARDS.length * 0.08 }}
            className="p-8 rounded-2xl bg-brand-900 text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-3">And no equity. Ever.</h3>
              <p className="text-brand-100 leading-relaxed mb-6">
                Programs that help founders at this stage usually want a piece of the
                company. We ask for a hundred dollars a month.
              </p>
            </div>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 text-brand-200 font-semibold hover:text-white transition-colors"
            >
              See what's included
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
