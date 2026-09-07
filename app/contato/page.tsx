import { ContactSection } from "@/components/pages/root/components/08-contact-section";
import { Footer } from "@/components/pages/root/components/09-footer";
import { Navbar } from "@/components/pages/root/components/01-navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
