import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
              SSI
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Solutions Industrielles</h1>
              <p className="text-sm text-muted-foreground">Marquage & LEIBINGER</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
            Accueil
          </a>
          <a href="#produits" className="text-foreground hover:text-primary transition-colors">
            Produits
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#maintenance" className="text-foreground hover:text-primary transition-colors">
            Maintenance
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Contact Info & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+216 23 20 49 39</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contact@ssijete.com.tn</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container py-4 space-y-3">
            <a
              href="#accueil"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Accueil
            </a>
            <a
              href="#produits"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Produits
            </a>
            <a
              href="#services"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#maintenance"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Maintenance
            </a>
            <a
              href="#contact"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-border space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+216 23 20 49 39</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@ssijete.com.tn</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;