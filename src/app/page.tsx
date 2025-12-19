import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ServicesSection } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { FAQSection } from "@/components/sections/FAQ";
import { LocationsSection } from "@/components/sections/Locations";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/features/ContactForm";
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

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Hablemos de tu Evento</h2>
          <p className="text-muted-foreground text-lg">
            Completa el formulario y te contactaremos a la brevedad para agendar una reunión o enviar tu cotización.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
