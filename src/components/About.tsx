import { CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    "Over 15 years of family law experience",
    "Personalized approach to each case",
    "Fluent in German and English",
    "Licensed to practice in Berlin courts"
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Trusted Legal Counsel
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
            With extensive experience in family law matters throughout Berlin, we provide 
            compassionate and effective legal representation during life's most challenging moments.
          </p>
          
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <p className="text-foreground mb-6 leading-relaxed">
              Our practice focuses exclusively on family law, ensuring you receive specialized 
              expertise for matters including divorce proceedings, child custody arrangements, 
              spousal support, property division, and domestic partnership issues. We understand 
              that family legal matters are deeply personal, and we're committed to protecting 
              your rights while working toward the best possible outcome for you and your family.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
