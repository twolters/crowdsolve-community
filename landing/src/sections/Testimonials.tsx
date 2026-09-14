// landing/src/sections/Testimonials.tsx
import { motion } from 'motion/react';
import Todo from '../components/ui/Todo';

const TESTIMONIALS = [
  {
    name: 'Cody',
    role: 'Solo founder, clean energy',
    photo: '/images/cody.png',
    content:
      "I can get a little distracted by the next shiny object and so this forces me to sit down and go okay... I'm following a set of guidelines that is moving my business forward.",
  },
  {
    name: 'Mel',
    role: 'Founder, sustainable consumer goods',
    photo: '/images/mel.jpg',
    content:
      'It gets lonely. It gets really lonely. Just to look at what people are going through — their wins — that gives me energy.',
  },
  {
    name: 'Frank',
    role: 'Founder, climate infrastructure',
    photo: '/images/frank.jpg',
    content:
      "It's really the outside input, feedback, focusing on some of the important components that need to be in place to be successful.",
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
              <p className="text-lg text-slate-800 italic leading-snug mb-8">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-brand-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="p-8 rounded-2xl bg-white border border-dashed border-yellow-600 flex items-center justify-center text-center">
            <Todo>
              real photo, last name and company for a non-climate founder — without one,
              the page still looks climate-only
            </Todo>
          </div>
        </div>
      </div>
    </section>
  );
}
