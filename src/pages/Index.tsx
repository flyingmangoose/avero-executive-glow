import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SpeakingSection from "@/components/SpeakingSection";
import BookSection from "@/components/BookSection";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PersonalSection from "@/components/PersonalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpeakingSection />
      <BookSection />
      <FeaturedSection />
      <TestimonialsSection />
      <PersonalSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
