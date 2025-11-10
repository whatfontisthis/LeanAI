import { PageWrapper } from "@/components/page-wrapper";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProcessSection } from "@/components/process-section";
import { CaseStudies } from "@/components/case-studies";
import { MarqueeTestimonials } from "@/components/marquee-testimonials";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <PageWrapper>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <CaseStudies />
        <MarqueeTestimonials />
        <PricingSection />
        <FAQSection />
        <AboutSection />
        <Footer />
      </PageWrapper>
    </main>
  );
}
