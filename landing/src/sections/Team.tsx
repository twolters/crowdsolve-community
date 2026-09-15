// landing/src/sections/Team.tsx
import { motion } from 'motion/react';

const TEAM = [
  {
    name: 'Tim Wolters',
    title: 'Founder & CEO — runs the sessions and the coaching',
    photo: '/images/tim.png',
    bio: "Three-time founder with exits in enterprise SaaS, edtech and clean energy. Fifteen years taking companies from napkin sketch to acquisition, through Techstars, and advising for the Watson Institute and the New Venture Challenge. He designed the curriculum and he won't let you off the hook.",
  },
  {
    name: 'Patrick McHeyser',
    title: 'Co-Founder & COO — builds the platform you run on',
    photo: '/images/patrick.jpeg',
    bio: 'Software architect turned startup operator, with products shipped across fintech, proptech and developer tools. He builds the systems a cohort runs on, so the program stays the same for founder number fifty as it was for founder number five.',
  },
];

export default function Team() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">
            Who you'll actually be working with.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {TEAM.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-28 h-28 rounded-2xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-brand-900">{person.name}</h3>
                <div className="text-sm font-semibold text-brand-600 mb-3">
                  {person.title}
                </div>
                <p className="text-slate-600 leading-relaxed">{person.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
