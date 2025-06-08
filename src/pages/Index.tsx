
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CompetitiveTable from '@/components/CompetitiveTable';
import CTASection from '@/components/CTASection';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <CompetitiveTable />
      <CTASection />
    </div>
  );
};

export default Index;
