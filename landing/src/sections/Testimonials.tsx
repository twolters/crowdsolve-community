// landing/src/sections/Testimonials.tsx
import { motion } from 'motion/react';
import Todo from '../components/ui/Todo';

type Testimonial = {
  name: string;
  roleLabel: string;
  company?: { name: string; url: string };
  photo?: string;
  content?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Cody',
    roleLabel: 'Solo founder',
    company: { name: 'Tap Energy', url: 'https://tapenergy.eco' },
    photo: '/images/cody.png',
    content:
      "I can get a little distracted by the next shiny object and so this forces me to sit down and go okay... I'm following a set of guidelines that is moving my business forward.",
  },
  {
    name: 'Mel',
    roleLabel: 'Founder, sustainable consumer goods',
    photo: '/images/mel.jpg',
    content:
      'It gets lonely. It gets really lonely. Just to look at what people are going through — their wins — that gives me energy.',
  },
  {
    name: 'Frank',
    roleLabel: 'Founder',
    company: { name: 'Go Good Travel', url: 'https://gogoodtravel.com' },
    photo: '/images/frank.jpg',
    content:
      "It's really the outside input, feedback, focusing on some of the important components that need to be in place to be successful.",
  },
  {
    name: 'Eliot',
    roleLabel: 'Founder',
    company: { name: 'Pandacore', url: 'https://pandacore.io' },
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">
            Founders who've been through it.
          </h2>
          <div className="w-20 h-1.5 bg-brand-500 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-brand-900/5"
            >
              {t.content ? (
                <p className="text-lg text-slate-800 italic leading-snug mb-8">
                  "{t.content}"
                </p>
              ) : (
                <div className="mb-8">
                  <Todo>a real quote from {t.name}</Todo>
                </div>
              )}
              <div className="flex items-center gap-3">
                {t.photo ? (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-dashed border-brand-900/20 flex items-center justify-center text-brand-900/30 text-xs font-bold flex-shrink-0">
                    ?
                  </div>
                )}
                <div>
                  <div className="font-bold text-brand-900">{t.name}</div>
                  <div className="text-sm text-slate-500">
                    {t.company ? (
                      <>
                        {t.roleLabel},{' '}
                        <a
                          href={t.company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-brand-700"
                        >
                          {t.company.name}
                        </a>
                      </>
                    ) : (
                      t.roleLabel
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
