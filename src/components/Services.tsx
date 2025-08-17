import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, HeadphonesIcon, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Settings,
      title: "Maintenance Préventive",
      description: "Programmes de maintenance régulière pour optimiser les performances et prolonger la durée de vie de vos équipements.",
      benefits: ["Réduction des pannes", "Performances optimales", "Durée de vie prolongée"]
    },
    {
      icon: HeadphonesIcon,
      title: "Support Technique 24/7",
      description: "Assistance technique disponible en permanence pour résoudre rapidement vos problèmes et minimiser les arrêts de production.",
      benefits: ["Disponibilité 24h/24", "Intervention rapide", "Expertise technique"]
    },
    {
      icon: Truck,
      title: "Service sur Site",
      description: "Interventions directement dans vos locaux pour installation, réparation et maintenance de vos imprimantes LEIBINGER.",
      benefits: ["Intervention sur site", "Installation complète", "Formation utilisateurs"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">
                Nos Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Service Client d'Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Notre engagement va au-delà de la vente. Nous accompagnons nos clients avec 
                des services complets de maintenance, support technique et formation pour 
                garantir la performance optimale de leurs équipements.
              </p>
            </div>

            <div className="space-y-6">
              {mainServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="border-0 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-1 text-xs text-primary">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button size="lg" className="group shadow-card">
              Demander une intervention
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={servicesImage}
                alt="Services de maintenance et support technique"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute top-8 right-8 bg-background rounded-xl p-6 shadow-elevated">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support disponible</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-background rounded-xl p-6 shadow-elevated">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;