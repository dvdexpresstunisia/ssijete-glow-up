import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Wrench, ShieldCheck, Users, ArrowRight, Calendar } from "lucide-react";

const Maintenance = () => {
  const maintenanceTypes = [
    {
      title: "Maintenance Préventive",
      description: "Programmes planifiés pour éviter les pannes et optimiser les performances",
      icon: Calendar,
      features: ["Contrôles réguliers", "Remplacement préventif", "Calibrage précision", "Rapport détaillé"]
    },
    {
      title: "Maintenance Corrective",
      description: "Interventions rapides pour résoudre les problèmes et remettre en service",
      icon: Wrench,
      features: ["Diagnostic rapide", "Réparation sur site", "Pièces d'origine", "Test de performance"]
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Support technique disponible en permanence pour vos urgences"
    },
    {
      icon: ShieldCheck,
      title: "Garantie Qualité",
      description: "Interventions certifiées avec pièces d'origine LEIBINGER"
    },
    {
      icon: Users,
      title: "Équipe Experte",
      description: "Techniciens formés et certifiés par LEIBINGER Allemagne"
    }
  ];

  return (
    <section id="maintenance" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Maintenance & Support
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Assistance Technique Professionnelle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SSI assure la maintenance complète de vos imprimantes LEIBINGER avec une assistance 
            technique 24h/24 et 7j/7, sur site ou en retour atelier.
          </p>
        </div>

        {/* Maintenance Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {maintenanceTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {type.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
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

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <IconComponent className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-hero text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Besoin d'une Intervention ?
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Notre équipe technique certifiée est prête à intervenir rapidement pour 
            maintenir vos équipements en parfait état de fonctionnement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group shadow-elevated">
              Demande d'intervention urgente
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10">
              Planifier une maintenance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;