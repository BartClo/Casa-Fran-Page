import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ServicesSection } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { FAQSection } from "@/components/sections/FAQ";
import { LocationsSection } from "@/components/sections/Locations";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/features/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary/30">
      <Navbar />

      <Hero />

      <AboutSection />

      <ServicesSection />

      <Gallery />

      <TestimonialsSection />

      <LocationsSection />

      <FAQSection />



      <ContactSection />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
