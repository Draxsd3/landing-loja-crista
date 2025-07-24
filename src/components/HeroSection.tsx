import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-people.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background com overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.4)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/60"></div>
      
      {/* Conteúdo centralizado */}
      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Headline principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-modern font-bold text-foreground leading-tight">
            Vista sua fé.{" "}
            <span className="text-primary">Viva seu propósito.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-modern">
            Moda cristã feita para inspirar, acolher e conectar.
          </p>

          {/* Botão principal */}
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToProducts}
              className="text-lg px-8 py-4 h-auto rounded-xl font-modern font-medium shadow-soft hover:shadow-card transition-all duration-200"
            >
              <Heart className="w-5 h-5 mr-2" />
              Conheça a coleção
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;