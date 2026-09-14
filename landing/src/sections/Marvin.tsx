import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Todo from '../components/ui/Todo';

const CARDS = [
  {
    title: 'Helps you form the idea',
    desc: 'Turns the thing in your head into a problem statement and a solution hypothesis you can actually put in front of someone.',
  },
  {
    title: 'Helps you test it',
    desc: 'Pulls the assumptions out of your hypothesis, helps you design the discovery conversations that would prove them wrong, and makes sense of what you heard.',
  },
  {
    title: 'Every step, not just the first one',
    desc: 'Marvin runs through the whole ten weeks alongside the curriculum, so nothing you decided in week two gets quietly forgotten by week eight.',
  },
];

export default function Marvin() {
  return (
    <section id="marvin" className="py-28 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4">
              The part nobody else has
            </div>
            <h2 className="text-4xl font-bold mb-6">Meet Marvin.</h2>
            <p className="text-brand-100 text-lg leading-relaxed mb-8">
              Marvin is the AI built into the CrowdSolve curriculum. He knows the module
              you're on, the problem statement you wrote, and the assumptions you said
              you'd test — so when you're stuck at eleven at night between sessions, you're
              not stuck alone.
            </p>
            {/* TODO: no destination was specified for this link — decide where "seeing Marvin work" should point */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-brand-200 font-semibold hover:text-white transition-colors"
            >
              See Marvin work through a problem statement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="md:col-span-7 space-y-5">
            {CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[7%] border border-brand-200/[22%]"
              >
                <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-brand-100 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
            <div className="text-sm">
              <Todo>
                a real screenshot or transcript snippet of Marvin would beat all three of
                these cards
              </Todo>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
