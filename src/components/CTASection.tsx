
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-48 h-48 bg-[#FF3B3B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#FF3B3B] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Don't Let Churn{' '}
            <span className="bg-gradient-to-r from-[#FF3B3B] to-[#FF6B6B] bg-clip-text text-transparent">
              Steal Your Revenue
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join early adopters using AI to scale customer success intelligently.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white px-12 py-6 text-xl font-semibold transition-all duration-300 hover:scale-105 group"
            >
              Get Early Access
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Early Access</div>
              <div className="text-lg font-semibold">Free for 3 months</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Setup Time</div>
              <div className="text-lg font-semibold">Under 24 hours</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Support</div>
              <div className="text-lg font-semibold">White-glove onboarding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
