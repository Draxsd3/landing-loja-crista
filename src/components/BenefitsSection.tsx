import { Heart, HandHeart, Gift, Sprout } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Card Principal */}
          <div className="bg-gradient-to-br from-yellow-50/80 to-amber-50/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card relative border border-white/50">
            
            {/* Pins decorativos nos cantos */}
            <div className="absolute -top-2 left-8 w-4 h-4 bg-rose-400 rounded-full shadow-md"></div>
            <div className="absolute -top-1 right-12 w-3 h-3 bg-yellow-400 rounded-full shadow-md"></div>
            <div className="absolute -bottom-2 left-12 w-3 h-3 bg-blue-400 rounded-full shadow-md"></div>
            <div className="absolute -bottom-1 right-8 w-4 h-4 bg-green-400 rounded-full shadow-md"></div>
            
            {/* Cabeçalho do Card */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-primary fill-current" />
                <h2 className="text-2xl md:text-3xl font-handwritten text-primary">
                  Nosso Compromisso com Seu Coração
                </h2>
              </div>
              <div className="w-20 h-0.5 bg-gradient-primary mx-auto"></div>
            </div>

            {/* Grid de Compromissos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              
              {/* Compromisso 1 */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-soft relative transform hover:scale-105 transition-transform duration-300 rotate-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <p className="text-foreground font-playful leading-relaxed">
                      Cada pedido é separado, embalado e enviado com{" "}
                      <span className="bg-rose-200/70 px-2 py-1 rounded-lg font-semibold text-rose-700">
                        oração e carinho
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Compromisso 2 */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-soft relative transform hover:scale-105 transition-transform duration-300 -rotate-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <HandHeart className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-foreground font-playful leading-relaxed">
                      Atendimento{" "}
                      <span className="bg-blue-200/70 px-2 py-1 rounded-lg font-semibold text-blue-700">
                        humano, acolhedor
                      </span>
                      , sempre com escuta e respeito
                    </p>
                  </div>
                </div>
              </div>

              {/* Compromisso 3 */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-soft relative transform hover:scale-105 transition-transform duration-300 rotate-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-foreground font-playful leading-relaxed">
                      Embalagens cheias de propósito: você recebe{" "}
                      <span className="bg-purple-200/70 px-2 py-1 rounded-lg font-semibold text-purple-700">
                        mais que um produto
                      </span>
                      , recebe uma mensagem
                    </p>
                  </div>
                </div>
              </div>

              {/* Compromisso 4 */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-soft relative transform hover:scale-105 transition-transform duration-300 -rotate-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-foreground font-playful leading-relaxed">
                      Parte da renda vai para{" "}
                      <span className="bg-green-200/70 px-2 py-1 rounded-lg font-semibold text-green-700">
                        projetos sociais cristãos
                      </span>
                      {" "}que amamos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Frase Final */}
            <div className="text-center">
              <p className="text-xl md:text-2xl text-primary font-handwritten italic">
                "Tudo por você, com amor e propósito verdadeiro."
              </p>
              <div className="flex items-center justify-center mt-4 gap-2">
                <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <div className="w-1 h-1 bg-green-300 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
            </div>

            {/* Coração decorativo flutuante */}
            <div className="absolute top-4 right-4 text-rose-300/30">
              <Heart className="w-8 h-8 fill-current animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;