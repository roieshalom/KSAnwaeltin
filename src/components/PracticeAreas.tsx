import { Heart, Users, Home, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PracticeAreas = () => {
  const areas = [
    {
      icon: Heart,
      title: "Divorce & Separation",
      description: "Guidance through all aspects of divorce proceedings, including mediation and litigation."
    },
    {
      icon: Users,
      title: "Child Custody & Support",
      description: "Protecting your parental rights and ensuring the best interests of your children."
    },
    {
      icon: Home,
      title: "Property Division",
      description: "Fair distribution of marital assets and resolution of financial matters."
    },
    {
      icon: FileText,
      title: "Prenuptial Agreements",
      description: "Drafting and reviewing marriage contracts to protect your future interests."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive family law services tailored to your unique situation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
