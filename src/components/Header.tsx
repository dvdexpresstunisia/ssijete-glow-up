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

        {/* Desktop Navigation - Removed */}

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

      {/* Mobile Menu - Removed */}
    </header>
  );
};

export default Header;