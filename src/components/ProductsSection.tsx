import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import shirtsImage from "@/assets/products-shirts.jpg";
import dressesImage from "@/assets/products-dresses.jpg";
import accessoriesImage from "@/assets/products-accessories.jpg";
import mirrorMoment from "@/assets/mirror-moment.jpg";

const ProductsSection = () => {
  const products = [
    {
      title: "Camisetas Gospel",
      description: "Designs únicos com versículos bíblicos e mensagens inspiradoras em tecido premium 100% algodão.",
      image: shirtsImage,
      features: ["Estampas exclusivas", "Tecido premium", "Conforto garantido"],
      alt: "Coleção de camisetas cristãs com estampas inspiradoras"
    },
    {
      title: "Vestidos Elegantes",
      description: "Vestidos femininos com cortes modernos e detalhes delicados para momentos especiais.",
      image: dressesImage,
      features: ["Modelos exclusivos", "Elegância cristã", "Caimento perfeito"],
      alt: "Vestidos cristãos elegantes e modernos"
    },
    {
      title: "Acessórios de Fé",
      description: "Joias e acessórios que expressam sua fé com style e sofisticação no dia a dia.",
      image: accessoriesImage,
      features: ["Joias de qualidade", "Designs únicos", "Mensagens de fé"],
      alt: "Acessórios cristãos e joias com símbolos de fé"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Nossas Coleções</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Expresse sua Fé com Estilo
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção cuidadosa de roupas e acessórios cristãos, 
            criados para fortalecer sua identidade de fé com elegância e qualidade.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Ver Coleção
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovative CTA Section */}
        <div className="relative overflow-hidden rounded-3xl shadow-glow">
          {/* Background with texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-accent-warm/10 to-secondary/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
            <Heart className="w-full h-full text-primary animate-pulse" />
          </div>
          <div className="absolute bottom-6 left-6 w-8 h-8 opacity-20">
            <div className="w-full h-full bg-gradient-primary rounded-full animate-pulse"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 p-6 md:p-8 lg:p-12">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              
              {/* Main Content */}
              <div className="lg:col-span-3 text-center lg:text-left space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Que Tal Vestir sua{" "}
                    <span className="text-primary">
                      Melhor Versão?
                    </span>
                  </h3>
                  
                  <p className="text-lg sm:text-xl md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Descubra peças feitas para expressar quem você é e inspirar o mundo ao seu redor.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center lg:justify-start pt-2">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="px-8 py-4 text-lg rounded-lg font-modern"
                  >
                    <Heart className="w-5 h-5" />
                    Ver Minha Nova Jornada
                  </Button>
                </div>

                {/* Signature touch */}
                <p className="text-base sm:text-lg text-muted-foreground/80 italic font-light mt-6">
                  "Porque vestir-se também é testemunhar."
                </p>
              </div>

              {/* Side Image */}
              <div className="lg:col-span-2 flex justify-center order-first lg:order-last">
                <div className="relative group">
                  <div className="w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-soft">
                    <img 
                      src={mirrorMoment} 
                      alt="Mulher sorrindo se olhando no espelho experimentando roupas"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full shadow-soft"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;