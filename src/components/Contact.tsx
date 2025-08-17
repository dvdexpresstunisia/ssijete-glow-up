import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: [
        "127, Avenue 20 Mars",
        "Immeuble La Pèrle",
        "Le Bardo 2000, Tunisie"
      ]
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+216 23 20 49 39"]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "contact@ssijete.com.tn",
        "service@ssijete.com.tn"
      ]
    },
    {
      icon: Clock,
      title: "Horaires",
      details: [
        "Lundi - Samedi",
        "09:00 - 18:00"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nous Contacter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Besoin d'informations, d'un devis ou d'une intervention ? 
            Notre équipe est à votre disposition pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informations de Contact
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border-0 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {info.title}
                            </h4>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Actions Rapides</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="group shadow-card">
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="group">
                  <Mail className="w-4 h-4 mr-2" />
                  Envoyer un email
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Notre Localisation
              </h3>
              
              {/* Map Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-elevated h-96 bg-gradient-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                      <MapPin className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Le Bardo, Tunisie</p>
                      <p className="text-muted-foreground">127, Avenue 20 Mars</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-primary rounded-xl p-8 shadow-card">
              <h4 className="text-xl font-semibold text-primary-foreground mb-3">
                Assistance Urgente ?
              </h4>
              <p className="text-primary-foreground/90 mb-4">
                Pour toute intervention urgente ou support technique, 
                notre équipe est disponible 24h/24 et 7j/7.
              </p>
              <Button variant="secondary" size="lg" className="w-full group shadow-elevated">
                Support d'urgence 24/7
                <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;