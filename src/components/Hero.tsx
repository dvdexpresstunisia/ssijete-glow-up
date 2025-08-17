import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-machine.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm"></div>
      
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-white/20 text-primary-foreground">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Partenaire officiel LEIBINGER Tunisie</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Solutions de
                <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                  Marquage Industriel
                </span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                SSI est spécialisée dans le marquage industriel de haute précision avec la technologie 
                jet d'encre LEIBINGER. Nous garantissons fiabilité, qualité et service excellence 
                pour toutes vos tâches quotidiennes d'usine.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="group shadow-elevated">
                Découvrir nos produits
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10">
                Nous contacter
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">24/7</div>
                <div className="text-sm text-primary-foreground/80">Support technique</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-3 mx-auto">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">100%</div>
                <div className="text-sm text-primary-foreground/80">Made in Germany</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-3 mx-auto">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">+500</div>
                <div className="text-sm text-primary-foreground/80">Clients satisfaits</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img
                src={heroImage}
                alt="Machine de marquage industriel LEIBINGER"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-elevated max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Technologie LEIBINGER</div>
                  <div className="text-sm text-muted-foreground">Précision allemande</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;