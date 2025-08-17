import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-lg">
                SSI
              </div>
              <div>
                <h3 className="font-bold text-lg">Solutions Industrielles</h3>
                <p className="text-primary-foreground/80 text-sm">Marquage & LEIBINGER</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Spécialisée dans le marquage industriel avec la technologie jet d'encre, 
              SSI représente LEIBINGER en Tunisie pour des solutions de haute qualité.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <div className="text-sm text-primary-foreground/80">
                  <p>127, Avenue 20 Mars</p>
                  <p>Immeuble La Pèrle</p>
                  <p>Le Bardo 2000, Tunisie</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm text-primary-foreground/80">+216 23 20 49 39</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <div className="text-sm text-primary-foreground/80">
                  <p>contact@ssijete.com.tn</p>
                  <p>service@ssijete.com.tn</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <div className="text-sm text-primary-foreground/80">
                  <p>Lundi - Samedi: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Nos Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• Machines de marquage LEIBINGER</li>
              <li>• Encres et solvants</li>
              <li>• Accessoires et pièces détachées</li>
              <li>• Maintenance préventive</li>
              <li>• Support technique 24/7</li>
              <li>• Formation et assistance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Solutions Industrielles (SSI). Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/60">
              <span>Partenaire officiel</span>
              <div className="w-px h-4 bg-primary-foreground/20"></div>
              <span className="font-semibold text-accent">LEIBINGER</span>
              <div className="w-px h-4 bg-primary-foreground/20"></div>
              <span>Made in Germany</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;