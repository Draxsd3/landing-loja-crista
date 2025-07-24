import { Star, Quote, Heart } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Juliana Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Amei a qualidade e a mensagem das camisetas! O tecido é super macio e as estampas são lindas. Já comprei várias vezes e sempre recomendo para minhas amigas da igreja. É mais que roupa, é uma forma de testemunhar minha fé todos os dias.",
      highlight: "Qualidade excepcional",
      photo: testimonial1,
      alt: "Juliana Silva, cliente satisfeita da Veste Fé"
    },
    {
      name: "Marcos Oliveira", 
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Finalmente encontrei roupas que realmente representam minha fé! Os designs são modernos e elegantes. Uso no trabalho e recebo muitos elogios. Empresa séria e confiável, com atendimento que demonstra amor cristão genuíno.",
      highlight: "Representa minha fé",
      photo: testimonial2,
      alt: "Marcos Oliveira, cliente fiel da Veste Fé"
    },
    {
      name: "Ana Carolina",
      location: "Belo Horizonte, MG", 
      rating: 5,
      text: "O atendimento é maravilhoso, muito atencioso e carinhoso. Os vestidos são perfeitos para ir à igreja e eventos especiais. Material de primeira qualidade que não desbota nem deforma. Sinto que cada peça foi feita com oração e carinho.",
      highlight: "Atendimento excepcional",
      photo: testimonial3,
      alt: "Ana Carolina, cliente encantada com a Veste Fé"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Histórias Reais</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O Que Dizem Nossos Clientes
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada depoimento representa uma vida tocada e uma fé fortalecida através 
            das nossas peças especiais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                  
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Highlight */}
                  <div className="inline-block bg-primary-glow text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonial.highlight}
                  </div>
                </div>

                {/* Customer Info */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.alt}
                        className="w-12 h-12 rounded-full object-cover shadow-soft"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <Heart className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;