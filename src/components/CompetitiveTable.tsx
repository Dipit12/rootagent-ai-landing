
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const CompetitiveTable = () => {
  const features = [
    {
      name: "Agentic AI Automation",
      rootAgent: { status: true, description: "Full-stack AI agents" },
      competitor1: { status: false, description: "Basic AI" },
      competitor2: { status: false, description: "Scripted triggers only" }
    },
    {
      name: "Proactive Churn Prediction",
      rootAgent: { status: true, description: "Yes" },
      competitor1: { status: true, description: "Delayed" },
      competitor2: { status: true, description: "Partial" }
    },

    {
      name: "Unified Customer Health View",
      rootAgent: { status: true, description: "Yes" },
      competitor1: { status: true, description: "Yes" },
      competitor2: { status: true, description: "Yes" }
    },
    {
      name: "Autonomous Task Recommendations",
      rootAgent: { status: true, description: "Personalized + Automated" },
      competitor1: { status: false, description: "Manual" },
      competitor2: { status: false, description: "Semi-Automated" }
    },
    {
      name: "MCP Server Integration",
      rootAgent: { status: true, description: "Connects everything" },
      competitor1: { status: false, description: "Limited" },
      competitor2: { status: false, description: "Limited" }
    },
    {
      name: "Real-Time Multi-Source Data Sync",
      rootAgent: { status: true, description: "Yes-core focus" },
      competitor1: { status: false, description: "Some Integrations" },
      competitor2: { status: true, description: "Yes" }
    },
    {
      name: "Autonomous Email/Playbook Generation",
      rootAgent: { status: true, description: "Intuitive + Actionable" },
      competitor1: { status: false, description: "Complex" },
      competitor2: { status: false, description: "Fragmented UI" }
    },
    {
      name: "CSM-AI Collaboration",
      rootAgent: { status: true, description: "Human in loop" },
      competitor1: { status: false, description: "Minimal" },
      competitor2: { status: false, description: "Minimal" }
    },

    {
      name: "Explainable AI (Why churn is predicted)",
      rootAgent: { status: true, description: "Yes - Transparent" },
      competitor1: { status: false, description: "None" },
      competitor2: { status: false, description: "Minimal" }
    },
    
  ];

  return (
    <section id="comparison" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose RootAgent Over the Competition?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we stack up against traditional customer success platforms
          </p>
        </div>

        <Card className="overflow-hidden bg-card border-border">
          <CardHeader className="bg-accent/50 p-0">
            <div className="grid grid-cols-4 gap-4 p-6">
              <div className="font-semibold">Feature</div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 bg-[#FF3B3B] rounded-md flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <span className="font-semibold text-[#FF3B3B]">RootAgent</span>
                </div>
              </div>
              <div className="text-center font-semibold text-muted-foreground">GainInsights</div>
              <div className="text-center font-semibold text-muted-foreground">ChurnZero</div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="grid grid-cols-4 gap-4 p-6 border-b border-border last:border-b-0 hover:bg-accent/20 transition-colors"
              >
                <div className="font-medium">{feature.name}</div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-muted-foreground">{feature.rootAgent.description}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    {feature.competitor1.status ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                    <span className="text-sm text-muted-foreground">{feature.competitor1.description}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    {feature.competitor2.status ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                    <span className="text-sm text-muted-foreground">{feature.competitor2.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CompetitiveTable;
