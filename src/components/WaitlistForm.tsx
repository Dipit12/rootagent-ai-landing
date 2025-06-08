'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WaitlistForm = () => {
  const [state, handleSubmit] = useForm('xdkzeoqe'); // replace with your Formspree ID

  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-semibold mb-4 text-[#FF3B3B]">You're on the list!</h3>
        <p className="text-muted-foreground">We'll notify you when RootAgent is ready.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
     <Input
      id="email"
      name="email"  // <-- add this!
      type="email"
      placeholder="Enter your email"
      required
      className="flex-1 px-4 py-3 text-lg"
/>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Button 
        type="submit"
        disabled={state.submitting}
        size="lg"
        className="bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 group whitespace-nowrap"
      >
        Join Waitlist
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};

export default WaitlistForm;
