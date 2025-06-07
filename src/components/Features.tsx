
import { Card, CardContent } from '@/components/ui/card';
import { Activity, AlertTriangle, MessageSquare, Zap, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: "Real-Time Health Monitoring",
    description: "Instantly assess customer satisfaction and risk with AI-powered analytics"
  },
  {
    icon: AlertTriangle,
    title: "Churn Prediction",
    description: "Know who's slipping away before they churn with predictive modeling"
  },
  {
    icon: MessageSquare,
    title: "Autonomous Outreach",
    description: "Smart AI drafts and sends personalized messages automatically"
  },
  {
    icon: Zap,
    title: "Cross-Tool Integration",
    description: "Works seamlessly with CRMs, support systems, analytics, and billing"
  },
  {
    icon: BarChart3,
    title: "CSM Dashboard",
    description: "One unified interface to review AI insights, campaigns, and decisions"
  },
  {
    icon: Users,
    title: "Human + AI Collaboration",
    description: "Augment—not replace—your customer success teams"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Customer Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your customer success strategy with intelligent automation and predictive insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card hover:bg-accent/50 transition-all duration-300 hover:scale-105 border-border hover:border-[#FF3B3B]/20"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FF3B3B]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF3B3B]/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-[#FF3B3B]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
