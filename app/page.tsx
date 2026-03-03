import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 flex flex-col gap-[60px] mb-[60px] overflow-x-hidden">
        <HeroSection />
        <ScrollReveal direction="up" delay={80}>
          <div id="products" className="scroll-mt-20"><ProductsSection /></div>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={80}>
          <HowItWorksSection />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={80}>
          <StatsSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={80}>
          <CTASection />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={80}>
          <div id="services" className="scroll-mt-20"><ServicesSection /></div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={80}>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={80}>
          <FAQSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
