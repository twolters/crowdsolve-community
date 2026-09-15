import Interest from './pages/Interest';
import Terms from './pages/Terms';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import PartnerBand from './sections/PartnerBand';
import PricingBenefits from './sections/PricingBenefits';
import Marvin from './sections/Marvin';
import Curriculum from './sections/Curriculum';
import Cadence from './sections/Cadence';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import Pricing from './sections/Pricing';
import FitCheck from './sections/FitCheck';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

export default function App() {
  // No router in this app — the Express fallback in server.cjs already serves index.html
  // for any path, so a plain pathname check is enough for this one extra "page".
  if (typeof window !== 'undefined' && window.location.pathname === '/interest') {
    return <Interest />;
  }
  if (typeof window !== 'undefined' && window.location.pathname === '/terms') {
    return <Terms />;
  }

  return (
    <div className="min-h-screen selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <PartnerBand />
        <PricingBenefits />
        <Marvin />
        <Curriculum />
        <Cadence />
        <Testimonials />
        <Team />
        <Pricing />
        <FitCheck />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
