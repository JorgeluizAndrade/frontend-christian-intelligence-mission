import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import ImportanceSection from '@/components/landing/importance-section';
import HowItWorksSection from '@/components/landing/how-it-works-section';
import TrustSection from '@/components/landing/trust-section';
import CtaSection from '@/components/landing/cta-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ImportanceSection />
        <HowItWorksSection />
        <TrustSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
