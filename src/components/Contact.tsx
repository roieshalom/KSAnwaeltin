import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Unter den Linden 42", "10117 Berlin", "Germany"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+49 30 1234 5678"],
      action: "tel:+493012345678"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@familylaw-berlin.de"],
      action: "mailto:contact@familylaw-berlin.de"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 - 18:00", "By appointment only"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a consultation to discuss your family law matter
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      info.action && i === 0 ? (
                        <a
                          key={i}
                          href={info.action}
                          className="block text-muted-foreground hover:text-accent transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      )
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6 transition-all hover:scale-105"
            onClick={() => window.location.href = 'tel:+493012345678'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now for Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
