import { Button } from "@/components/ui/button";
import { Heart, Star, MessageCircle, Sparkles, ArrowRight, Send, Zap } from "lucide-react";

const CTASection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de conhecer mais sobre a Veste Fé!', '_blank');
  };

  const inspirationalQuotes = [
    "Seja luz onde for!",
    "Seu estilo pode ser uma oração",
    "Comece hoje, seja exemplo",
    "Vista sua fé com orgulho",
    "Cada roupa conta sua história"
  ];

  const stickerElements = [
    { icon: "✝", position: "top-16 left-20", rotation: "rotate-12", color: "text-amber-300/60" },
    { icon: "❤️", position: "top-32 right-16", rotation: "-rotate-6", color: "text-red-300/60" },
    { icon: "⭐", position: "bottom-20 left-12", rotation: "rotate-45", color: "text-yellow-300/60" },
    { icon: "🙏", position: "bottom-16 right-24", rotation: "-rotate-12", color: "text-blue-300/60" },
    { icon: "✨", position: "top-48 left-1/4", rotation: "rotate-90", color: "text-purple-300/60" }
  ];

  return (
    <section className="py-24 relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 via-purple-25 to-green-50">
      {/* Inspiration Board Background */}
      <div className="absolute inset-0">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23f1f5f9' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>
        
        {/* Soft light rays */}
        <div className="absolute top-20 left-1/3 w-96 h-2 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent transform rotate-12 blur-sm"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-2 bg-gradient-to-r from-transparent via-rose-200/40 to-transparent transform -rotate-12 blur-sm"></div>
      </div>

      {/* Scattered Sticker Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stickerElements.map((sticker, index) => (
          <div 
            key={index}
            className={`absolute ${sticker.position} ${sticker.rotation} ${sticker.color} text-4xl md:text-5xl font-bold opacity-60 hover:opacity-80 transition-opacity duration-300`}
            style={{ 
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
              animation: `float ${3 + index * 0.5}s ease-in-out infinite alternate`
            }}
          >
            {sticker.icon}
          </div>
        ))}
        
        {/* Hand-drawn elements */}
        <div className="absolute top-28 right-32 w-20 h-20 border-2 border-dashed border-purple-300/50 rounded-full transform rotate-12"></div>
        <div className="absolute bottom-28 left-28 w-16 h-16 border-2 border-dashed border-blue-300/50 transform -rotate-45"></div>
        
        {/* Arrow doodles */}
        <div className="absolute top-1/3 right-20 text-purple-400/60 text-2xl transform rotate-45">→</div>
        <div className="absolute bottom-1/3 left-16 text-blue-400/60 text-2xl transform -rotate-12">↗</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Inspiration Board */}
        <div className="max-w-6xl mx-auto">
          
          {/* Desktop Layout - Scattered Mural */}
          <div className="hidden lg:block relative min-h-[600px]">
            
            {/* Central Main Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-1">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-amber-200/50 max-w-md text-center transform hover:scale-105 transition-transform duration-300"
                   style={{ boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1), 0 0 20px rgba(255,193,7,0.2)' }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="block text-primary">Transforme sua</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Fé em Atitude
                  </span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4 rounded-full"></div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Vista propósito todos os dias
                </p>
              </div>
            </div>

            {/* Scattered Quote Cards */}
            {inspirationalQuotes.map((quote, index) => {
              const positions = [
                "top-16 left-16 -rotate-6",
                "top-20 right-16 rotate-12", 
                "bottom-24 left-20 rotate-6",
                "bottom-16 right-20 -rotate-12",
                "top-1/3 left-8 rotate-3"
              ];
              
              const colors = [
                "bg-yellow-100 border-yellow-300",
                "bg-pink-100 border-pink-300",
                "bg-blue-100 border-blue-300", 
                "bg-green-100 border-green-300",
                "bg-purple-100 border-purple-300"
              ];

              return (
                <div key={index} className={`absolute ${positions[index]} max-w-48`}>
                  <div className={`${colors[index]} p-4 rounded-xl border-2 shadow-lg transform hover:scale-105 transition-transform duration-300`}
                       style={{ boxShadow: '0 8px 16px -4px rgba(0,0,0,0.1)' }}>
                    <p className="text-sm font-medium text-gray-700 italic">"{quote}"</p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <Heart className="w-3 h-3 mr-1 text-red-400" />
                      <span>Veste Fé</span>
                    </div>
                  </div>
                </div>
              );
            })}


            {/* Special CTA Button - Styled as a "Sticker" */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 rotate-2">
              <button 
                onClick={scrollToProducts}
                className="group relative bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 text-white font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-110 hover:rotate-0 transition-all duration-300 border-4 border-white"
                style={{ 
                  boxShadow: '0 15px 30px -5px rgba(0,0,0,0.2), 0 0 20px rgba(255,193,7,0.3)',
                  filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.1))'
                }}
              >
                <span className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                  <span>Quero começar agora!</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* Sticker effect borders */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full"></div>
              </button>
            </div>

          </div>

          {/* Mobile Layout - Stacked Mural */}
          <div className="lg:hidden space-y-8 text-center">
            
            {/* Main Card Mobile */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-amber-200/50 mx-4 transform rotate-1"
                 style={{ boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1), 0 0 20px rgba(255,193,7,0.2)' }}>
              <h2 className="text-3xl font-bold mb-4">
                <span className="block text-primary">Transforme sua</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Fé em Atitude
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-muted-foreground text-sm">Vista propósito todos os dias</p>
            </div>

            {/* Quote Cards Mobile */}
            <div className="space-y-4 px-4">
              {inspirationalQuotes.slice(0, 3).map((quote, index) => {
                const colors = [
                  "bg-yellow-100 border-yellow-300",
                  "bg-pink-100 border-pink-300", 
                  "bg-blue-100 border-blue-300"
                ];
                const rotations = ["-rotate-2", "rotate-2", "-rotate-1"];

                return (
                  <div key={index} className={`${colors[index]} ${rotations[index]} p-4 rounded-xl border-2 shadow-lg mx-auto max-w-sm transform hover:scale-105 transition-transform duration-300`}>
                    <p className="text-sm font-medium text-gray-700 italic">"{quote}"</p>
                    <div className="mt-2 flex items-center justify-center text-xs text-gray-500">
                      <Heart className="w-3 h-3 mr-1 text-red-400" />
                      <span>Veste Fé</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button Mobile */}
            <div className="px-4 pt-4">
              <button 
                onClick={scrollToProducts}
                className="group w-full bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 text-white font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-white"
                style={{ 
                  boxShadow: '0 15px 30px -5px rgba(0,0,0,0.2), 0 0 20px rgba(255,193,7,0.3)'
                }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                  <span>Quero começar agora!</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

          </div>

          {/* Bottom Community Banner */}
          <div className="mt-16 mx-4">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 shadow-xl text-white text-center transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white"
                 style={{ boxShadow: '0 15px 30px -5px rgba(0,0,0,0.2)' }}>
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Send className="w-5 h-5" />
                <span className="font-bold text-lg">Entre para nosso grupo e viva fé de verdade!</span>
                <Zap className="w-5 h-5" />
              </div>
              <button 
                onClick={openWhatsApp}
                className="bg-white text-green-600 font-semibold px-6 py-2 rounded-full hover:bg-green-50 transition-colors shadow-md flex items-center space-x-2 mx-auto"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.496"/>
                </svg>
                <span>WhatsApp da Comunidade</span>
              </button>
            </div>
          </div>

          {/* Final Inspirational Quote */}
          <div className="mt-12 text-center">
            <blockquote className="text-lg md:text-xl font-medium text-foreground italic max-w-md mx-auto">
              "Que a beleza do Senhor, nosso Deus, esteja sobre nós"
              <cite className="block text-sm text-muted-foreground mt-2 not-italic">
                — Salmos 90:17
              </cite>
            </blockquote>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CTASection;