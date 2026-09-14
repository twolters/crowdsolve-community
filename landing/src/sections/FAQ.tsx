import Todo from '../components/ui/Todo';

const FAQS = [
  {
    q: 'Do you take equity?',
    a: 'No. Not now, not later. A hundred dollars a month is the whole arrangement.',
  },
  {
    q: 'Does my idea have to be climate or sustainability?',
    a: "No. CrowdSolve works for any early-stage founder — software, services, hardware, consumer, B2B. The method is the same wherever you're pointed.",
  },
  {
    q: "What if I don't have a co-founder, a product, or a company yet?",
    a: 'Then you are exactly who this was built for. That is the stage the whole program is designed around.',
  },
  {
    q: 'How much time does it take?',
    a: 'About five hours a week. Two of those are live sessions; the rest is the work itself.',
  },
  {
    q: 'What do I actually walk out with?',
    a: "A tested problem statement, a defined ICP backed by real customer conversations, and an initial pitch deck you've presented to a panel.",
  },
];

export default function FAQ() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-900">
            Questions people actually ask.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {FAQS.map((item) => (
            <div key={item.q}>
              <h3 className="text-lg font-bold text-brand-900 mb-2">{item.q}</h3>
              <p className="text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold text-brand-900 mb-2">
              What happens after the ten weeks?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              <Todo>
                alumni community? a next stage? grant intros? This is the question that
                decides whether $100/mo keeps renewing.
              </Todo>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
