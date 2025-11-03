import Navbar from './Navbar';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import DesignerShowcase from './DesignerShowcase';
import AboutSection from './AboutSection';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <HowItWorks />
        <DesignerShowcase />
        <AboutSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
