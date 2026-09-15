import { CheckCircle2, XCircle } from 'lucide-react';

const FIT = [
  "You have an idea you're serious about pursuing",
  "You're pre-revenue, pre-product, or just getting started",
  'You can give it about five hours a week for ten weeks',
  'You want to be pushed, not just supported',
];

const NOT_FIT = [
  'You want a course you can do passively',
  'You already have a funded product in market',
  "You're not ready to put your idea in front of other people",
];

export default function FitCheck() {
  return (
    <section className="py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-brand-900">This isn't for everyone.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-2xl bg-white border border-brand-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-brand-900" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900">You're a fit if:</h3>
            </div>
            <ul className="space-y-6">
              {FIT.map((item) => (
                <li key={item} className="flex gap-4 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 rounded-2xl bg-white border border-brand-900/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                It's probably not for you if:
              </h3>
            </div>
            <ul className="space-y-6">
              {NOT_FIT.map((item) => (
                <li key={item} className="flex gap-4 text-slate-500">
                  <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
