import { Button } from "@/components/ui/button";
import { Menu, X, Cross, Heart, Home, User, ShoppingBag, MessageCircle, Sparkles, Edit3 } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(0);

  const microVerses = [
    "Gratidão", "Paz", "Força", "Coragem", "Esperança", "Amor", "Fé", "Propósito"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % microVerses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Cross },
    { id: 'about', label: 'Sobre', icon: Heart },
    { id: 'products', label: 'Loja', icon: ShoppingBag },
    { id: 'testimonials', label: 'Histórias', icon: User },
    { id: 'contact', label: 'Contato', icon: MessageCircle },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <header className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-soft border border-white/50 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                <Cross className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-modern text-primary font-semibold">Veste Fé</h1>
              </div>
            </div>


            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-foreground hover:text-primary transition-colors duration-200 hover:bg-primary/5"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="font-modern text-sm">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="rounded-lg px-6 py-3 font-modern text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Entre em contato
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md z-50 md:hidden animate-slide-in-right shadow-glow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Cross className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-modern text-lg text-primary font-semibold">Veste Fé</h2>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>


              {/* Navigation */}
              <nav className="space-y-2 mb-8">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center space-x-4 p-4 rounded-xl text-left hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary/10 rounded-full flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-white transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-modern text-lg text-foreground group-hover:text-primary">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* CTA Button */}
              <Button 
                variant="hero" 
                className="w-full rounded-lg p-4 text-lg font-modern"
                onClick={() => scrollToSection('contact')}
              >
                <MessageCircle className="w-5 h-5" />
                Entre em contato
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;