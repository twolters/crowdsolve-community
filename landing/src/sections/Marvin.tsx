import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

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

          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-white/[7%] border border-brand-200/[22%] p-2">
              <img
                src="/images/marvin-feedback-screenshot.png"
                alt="Marvin reviewing a founder's market discovery interview questions, with strengths and areas for refinement called out question by question"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <p className="text-sm text-brand-200 mt-4">
              Marvin giving a founder feedback on their customer-discovery interview
              questions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
