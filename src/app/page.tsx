import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ProcessSection />
        <SocialProofSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
