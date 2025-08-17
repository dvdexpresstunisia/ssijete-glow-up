import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Wrench, Package, Zap } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Droplets,
      title: "Encres & Solvants",
      description: "Encres standard et spéciales, additifs et solvants de haute qualité pour tous types de marquage.",
      features: ["Encres standard", "Encres spéciales", "Additifs (solvants)", "Solutions de nettoyage"],
      color: "primary"
    },
    {
      icon: Wrench,
      title: "Accessoires & Pièces",
      description: "Pièces détachées et accessoires d'origine pour maintenir vos imprimantes en parfait état.",
      features: ["Filtres", "Raccords d'encre", "Pompes", "Électrovannes", "Cellules", "Accessoires de nettoyage"],
      color: "accent"
    },
    {
      icon: Package,
      title: "Consommables",
      description: "Gamme complète de consommables pour assurer la continuité de votre production.",
      features: ["Cartouches d'encre", "Kits de maintenance", "Supports de marquage", "Nettoyants spécialisés"],
      color: "primary"
    },
    {
      icon: Zap,
      title: "Machines LEIBINGER",
      description: "Imprimantes jet d'encre de précision allemande pour marquage industriel haute performance.",
      features: ["Technologie CIJ", "Haute résolution", "Interface intuitive", "Connectivité Industry 4.0"],
      color: "accent"
    }
  ];

  return (
    <section id="produits" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solutions Complètes de Marquage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de produits et solutions pour le marquage industriel, 
            des machines LEIBINGER aux consommables et accessoires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      product.color === 'primary' ? 'bg-gradient-primary' : 'bg-accent'
                    } shadow-card group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
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

        {/* LEIBINGER Partnership */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-hero">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Partenaire Officiel LEIBINGER en Tunisie
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Nous sommes fiers de représenter LEIBINGER, leader mondial des solutions de marquage jet d'encre. 
                Bénéficiez de la qualité allemande et de notre expertise locale pour vos projets industriels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;