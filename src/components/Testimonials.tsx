
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "RootAgent helped us cut churn by 30% in 3 months. The AI does what 3 CSMs used to!",
    author: "Sam R.",
    title: "Head of Customer Success",
    company: "TechFlow Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "The predictive insights are game-changing. We now reach out to at-risk customers before they even realize they're unhappy.",
    author: "Maria Chen",
    title: "VP of Customer Experience",
    company: "ScaleUp Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Finally, a platform that actually understands our workflow. The AI-human collaboration is seamless.",
    author: "David Kumar",
    title: "Director of Success Operations",
    company: "CloudFirst",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by Customer Success Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what industry leaders are saying about RootAgent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-card hover:bg-accent/50 transition-all duration-300 hover:scale-105 border-border hover:border-[#FF3B3B]/20"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FF3B3B] fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-[#FF3B3B]">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
