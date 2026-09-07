import { Navbar } from "./components/01-navbar";
import { HeroSection } from "./components/02-hero-section";
import { AboutSection } from "./components/03-about-section";
import { MethodologySection } from "./components/04-methodology-section";
import { BenefitsSection } from "./components/05-benefits-section";
import { PreparationSection } from "./components/06-preparation-section";
import { PricingSection } from "./components/07-pricing-section";
import { Footer } from "./components/09-footer";
import { WhatsApp } from "./components/10-whatsapp";

export default function RootPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MethodologySection />
        <BenefitsSection />
        <PreparationSection />
        <PricingSection />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
}
