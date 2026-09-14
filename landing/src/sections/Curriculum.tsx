// landing/src/sections/Curriculum.tsx
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const CARDS = [
  {
    eyebrow: 'Weeks 1–3 · Sharpen the idea',
    body: "Nail the problem you're actually solving, the solution you're betting on, and why you're the one to build it. Stop building on assumptions you've never said out loud.",
    items: [
      'A written problem statement',
      'A testable solution hypothesis',
      'An honest read on founder fit',
    ],
  },
  {
    eyebrow: 'Weeks 4–10 · Market discovery',
    body: "Take the hypothesis out of the building. Define who it's for, run real customer conversations, and find out which of your assumptions survive contact with the market.",
    items: [
      'A defined ICP, not a guess',
      'Evidence from real conversations',
      'The value props your MVP needs',
    ],
  },
  {
    eyebrow: 'Throughout → Pitch day · Your first real pitch',
    body: 'Build the deck as the evidence comes in, then present it to a panel of mentors, investors and peers. Walk away with real feedback — and proof you can tell the story.',
    items: [
      'An initial pitch deck',
      "A panel's honest reaction to it",
      'A path to non-dilutive funding',
    ],
  },
];

export default function Curriculum() {
  return (
    <section id="the-10-weeks" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">
            Ten weeks. Three things you walk out with.
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Not modules completed. Artifacts you can put in front of a customer or an
            investor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-brand-900/5 border-t-4 border-t-brand-600 p-8 flex flex-col"
            >
              <div className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-3">
                {c.eyebrow}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">{c.body}</p>
              <div className="h-px bg-brand-900/10 mb-6" />
              <div className="text-xs font-bold text-brand-900 uppercase tracking-wider mb-4">
                You leave with
              </div>
              <ul className="space-y-3">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
