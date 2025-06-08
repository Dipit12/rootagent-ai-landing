
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToWaitlist = () => {
    const ctaSection = document.getElementById('waitlist-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#FF3B3B] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#FF3B3B] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF3B3B] rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Proactive Customer Success,{' '}
            <span className="bg-gradient-to-r from-[#FF3B3B] to-[#FF6B6B] bg-clip-text text-transparent">
              Powered by Agentic AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            RootAgent transforms how you retain, engage, and understand your customers—before churn happens.
          </p>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
