import { Heart, Users, Star, Shield, Share2, MousePointer2, Gift, HandHeart, Sprout } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";
import handDrawnCross from "@/assets/hand-drawn-cross.jpg";
import handsBible from "@/assets/hands-bible.jpg";
import fabricDetail from "@/assets/fabric-detail.jpg";
import { useState } from "react";

const AboutSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const manifestoItems = [
    // Primeira linha
    {
      text: "Minha fé me veste.",
      highlight: "fé",
      gridArea: "area-1",
      rotation: "-rotate-2",
      bg: "bg-white",
      textColor: "text-foreground",
      image: handsBible,
      size: "text-lg md:text-3xl",
      priority: "main"
    },
    {
      text: "Meu estilo inspira.",
      highlight: "estilo",
      gridArea: "area-2",
      rotation: "rotate-2",
      bg: "bg-accent-warm/30",
      textColor: "text-foreground",
      image: fabricDetail,
      size: "text-lg md:text-3xl",
      priority: "main"
    },
    
    // Segunda linha
    {
      text: "Não sigo tendências, sigo minha missão.",
      highlight: "missão",
      gridArea: "area-3",
      rotation: "rotate-1",
      bg: "bg-secondary/80",
      textColor: "text-foreground",
      size: "text-base md:text-2xl",
      priority: "main"
    },
    {
      text: "A roupa fala o que a alma sente.",
      highlight: "alma",
      gridArea: "area-4",
      rotation: "-rotate-1",
      bg: "bg-gradient-primary",
      textColor: "text-white",
      size: "text-base md:text-2xl",
      priority: "main"
    },
    
    // Terceira linha
    {
      text: "Vista esperança, inspire fé.",
      highlight: "esperança",
      gridArea: "area-5",
      rotation: "-rotate-2",
      bg: "bg-primary/20",
      textColor: "text-foreground",
      size: "text-sm md:text-lg",
      priority: "main"
    },
    {
      text: "Estilo cristão é viver a Palavra.",
      highlight: "Palavra",
      gridArea: "area-6",
      rotation: "rotate-3",
      bg: "bg-white",
      textColor: "text-foreground",
      image: handDrawnCross,
      size: "text-sm md:text-xl",
      priority: "main"
    },
    
    // Cards de apoio - centro
    {
      text: "Blessed",
      highlight: "Blessed",
      gridArea: "area-7",
      rotation: "-rotate-6",
      bg: "bg-primary/10",
      textColor: "text-primary",
      size: "text-lg md:text-xl font-bold",
      priority: "support"
    },
    {
      text: "✨ Graça",
      highlight: "Graça",
      gridArea: "area-8",
      rotation: "-rotate-8",
      bg: "bg-pink-100/50",
      textColor: "text-primary",
      size: "text-base md:text-lg",
      priority: "support"
    },
    {
      text: "Propósito",
      highlight: "Propósito",
      gridArea: "area-9",
      rotation: "rotate-12",
      bg: "bg-yellow-100/60",
      textColor: "text-amber-700",
      size: "text-sm md:text-base",
      priority: "support"
    }
  ];

  const generateRandomManifesto = () => {
    const phrases = [
      "Sua fé merece ser vista",
      "Estilo com propósito divino",
      "Vista sua história de fé",
      "Cada peça, uma oração",
      "Seu testemunho em tecido"
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    alert(`💜 Seu manifesto: "${randomPhrase}" - Compartilhe nas suas redes!`);
  };

  return (
    <section id="about" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Nosso Manifesto</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-handwritten">
              Mural de Inspirações
            </h2>
          </div>

          {/* Interactive Manifesto Board */}
          <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-background/50 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-card backdrop-blur-sm border border-primary/10">
            
            {/* Decorative pins and elements */}
            <div className="absolute top-4 left-4 w-4 h-4 md:w-5 md:h-5 bg-red-400 rounded-full shadow-md"></div>
            <div className="absolute top-6 right-8 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full shadow-md"></div>
            <div className="absolute bottom-8 left-12 w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full shadow-md"></div>

            {/* Grid Layout for Cards */}
            <div className="h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 content-center"
                 style={{
                   gridTemplateAreas: `
                     "area-1 area-2 area-7"
                     "area-3 area-8 area-4"
                     "area-5 area-9 area-6"
                   `,
                   gridTemplateColumns: "1fr 1fr 1fr"
                 }}>
              
              {/* Main Cards - sempre visíveis */}
              {manifestoItems.filter(item => item.priority === 'main').map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:scale-110 hover:z-20 ${item.rotation} flex justify-center items-center`}
                  style={{ gridArea: item.gridArea }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Post-it style note */}
                  <div className={`${item.bg} rounded-xl p-4 md:p-6 shadow-soft relative group max-w-[280px] w-full`}>
                    {/* Pin */}
                    <div className="absolute -top-2 left-4 w-3 h-3 bg-gray-400 rounded-full shadow-md"></div>
                    
                    {/* Text */}
                    <p className={`${item.textColor} ${item.size} font-playful leading-tight`}>
                      {item.text.split(item.highlight).map((part, i) => (
                        <span key={i}>
                          {part}
                          {i < item.text.split(item.highlight).length - 1 && (
                            <span className="font-bold text-primary bg-yellow-200/50 px-1 rounded">
                              {item.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>

                    {/* Optional small image */}
                    {item.image && (
                      <div className="absolute -bottom-3 -right-3 w-8 h-8 md:w-12 md:h-12 rounded-lg overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}

                    {/* Hover effect */}
                    {hoveredItem === index && (
                      <div className="absolute inset-0 left-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl animate-pulse -z-10"></div>
                    )}
                  </div>
                </div>
              ))}

              {/* Support Cards - apenas desktop */}
              {manifestoItems.filter(item => item.priority === 'support').map((item, index) => (
                <div
                  key={`support-${index}`}
                  className={`hidden lg:flex cursor-pointer transition-all duration-300 hover:scale-110 hover:z-20 ${item.rotation} justify-center items-center`}
                  style={{ gridArea: item.gridArea }}
                  onMouseEnter={() => setHoveredItem(index + 6)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Post-it style note */}
                  <div className={`${item.bg} rounded-xl p-3 md:p-4 shadow-soft relative group max-w-[200px] w-full`}>
                    {/* Pin */}
                    <div className="absolute -top-2 left-4 w-3 h-3 bg-gray-400 rounded-full shadow-md"></div>
                    
                    {/* Text */}
                    <p className={`${item.textColor} ${item.size} font-playful leading-tight text-center`}>
                      {item.text.split(item.highlight).map((part, i) => (
                        <span key={i}>
                          {part}
                          {i < item.text.split(item.highlight).length - 1 && (
                            <span className="font-bold text-primary bg-yellow-200/50 px-1 rounded">
                              {item.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>

                    {/* Hover effect */}
                    {hoveredItem === index + 6 && (
                      <div className="absolute inset-0 left-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl animate-pulse -z-10"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Founder photo - integrated in the board */}
            <div className="absolute bottom-12 right-12 group cursor-pointer">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-soft rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <img 
                    src={founderPhoto} 
                    alt="Fundadora da Veste Fé" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full shadow-md"></div>
                <p className="absolute -bottom-8 left-0 text-xs text-muted-foreground font-handwritten rotate-3">
                  Com amor, nossa fundadora 💜
                </p>
              </div>
            </div>

            {/* Interactive button */}
            <div className="absolute bottom-4 left-4">
              <button
                onClick={generateRandomManifesto}
                className="bg-gradient-primary text-white px-6 py-3 rounded-full shadow-glow hover:shadow-soft transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
              >
                <Share2 className="w-4 h-4 group-hover:animate-bounce" />
                <span className="font-playful">Monte seu manifesto</span>
              </button>
            </div>

            {/* Cursor indicator */}
            <div className="absolute top-4 right-4 text-muted-foreground/50 flex items-center gap-2 animate-pulse">
              <MousePointer2 className="w-4 h-4" />
              <span className="text-sm font-playful">Explore o mural!</span>
            </div>
          </div>

          {/* Signature */}
          <div className="text-center mt-12">
            <p className="text-2xl md:text-3xl text-primary font-handwritten">
              "Aqui, sua fé vira expressão. Sua expressão, vira história."
            </p>
            <div className="w-24 h-0.5 bg-gradient-primary mx-auto mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;