// landing/src/sections/PartnerBand.tsx
import Todo from '../components/ui/Todo';

const PARTNERS = [
  {
    name: 'Colorado School of Mines',
    descriptor: 'Entrepreneurship Program',
    logo: '/images/mines-logo-white.png',
  },
  { name: 'The Colorado Impact Challenge', descriptor: 'Statewide venture challenge' },
  { name: '1000 Gretas', descriptor: 'Non-dilutive grant making' },
  { name: 'New Venture Challenge', descriptor: 'University of Colorado' },
];

export default function PartnerBand() {
  return (
    <section className="py-16 bg-brand-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* emerald-300 (#6EE7B7) is the exact hex the brief specifies for this label; the
            custom brand-* scale skips 300, so this is the one spot using Tailwind's
            built-in emerald-300 rather than a brand-* token. */}
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-10 text-center">
          The launch platform behind
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {PARTNERS.map((p) => (
            <div key={p.name} className="flex flex-col items-center">
              {p.logo ? (
                <img src={p.logo} alt={p.name} className="h-12 w-auto mb-1 object-contain" />
              ) : (
                <div className="text-white font-semibold mb-1">{p.name}</div>
              )}
              <div className="text-brand-200 text-sm">{p.descriptor}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Todo>replace the remaining 3 partner names with real logos, knocked back to white on the dark band</Todo>
        </div>
      </div>
    </section>
  );
}
