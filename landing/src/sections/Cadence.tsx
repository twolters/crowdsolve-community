export default function Cadence() {
  return (
    <section id="how-it-works" className="py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold text-brand-900 mb-6 leading-snug">
              The single biggest difference between founders who finish and founders who
              drift is whether anyone is expecting them on Thursday.
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              Roughly five hours a week total. Two of them are live, with other people.
            </p>
          </div>

          <div className="md:col-span-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-white border border-brand-900/5">
                <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                  Session one
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">Execution</h3>
                <p className="text-slate-600 leading-relaxed">
                  Work through the module with Tim and the cohort. Workshop your answers out
                  loud, get unstuck in real time.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-brand-900/5">
                <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                  Session two
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">Accountability</h3>
                <p className="text-slate-600 leading-relaxed">
                  A structured working hour. Show up, commit to one thing, get it done,
                  report back. Simple, and it works.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-brand-900/5 grid sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-brand-900 mb-2">Mentor office hours</h4>
                <p className="text-sm text-slate-600">
                  Deep-dive, personalized 1:1 coaching.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-900 mb-2">Expert AMAs</h4>
                <p className="text-sm text-slate-600">
                  Operators and investors on sourcing customers, validating demand,
                  positioning.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-900 mb-2">Pitch competition</h4>
                <p className="text-sm text-slate-600">Once per quarter with investor panel.</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 bg-yellow-50 rounded-xl p-4 border border-dashed border-yellow-600">
              TODO: the live site currently advertises four session types — biweekly live
              sessions, biweekly office hours, weekly founder workouts, three AMAs. Confirm
              what's actually on the calendar and make this section match it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
