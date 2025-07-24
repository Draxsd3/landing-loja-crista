import { Church, Home, Users, Heart } from "lucide-react";
import customerChurch from "@/assets/customer-church.jpg";
import customerDaily from "@/assets/customer-daily.jpg";
import customerFamily from "@/assets/customer-family.jpg";
import customerSocial from "@/assets/customer-social.jpg";
import faithCommunityBg from "@/assets/faith-community-bg.jpg";

const HowToUseSection = () => {
  const usageContexts = [
    {
      icon: Church,
      title: "Na Igreja",
      description: "Peças elegantes e inspiradoras para cultos, eventos e momentos de adoração.",
      image: customerChurch,
      alt: "Jovem cristã vestindo camiseta com mensagem bíblica durante culto"
    },
    {
      icon: Home,
      title: "No Dia a Dia",
      description: "Comfort e estilo para trabalho, estudos e atividades cotidianas.",
      image: customerDaily,
      alt: "Profissional cristã usando vestido elegante no ambiente de trabalho"
    },
    {
      icon: Users,
      title: "Em Família",
      description: "Momentos especiais em casa, passeios e encontros familiares.",
      image: customerFamily,
      alt: "Família cristã reunida usando roupas com propósito e fé"
    },
    {
      icon: Heart,
      title: "Em Ações Sociais",
      description: "Testemunhando amor através do serviço e trabalho voluntário.",
      image: customerSocial,
      alt: "Grupo de cristãos servindo a comunidade vestindo roupas da loja"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Vivendo a Fé</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Como Usar Nossas Peças
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada momento da sua vida pode ser uma oportunidade de testemunhar sua fé 
            com estilo, propósito e autenticidade.
          </p>
        </div>

        {/* Usage Contexts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usageContexts.map((context, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={context.image} 
                    alt={context.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <context.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {context.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {context.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div 
            className="relative rounded-2xl overflow-hidden shadow-card"
            style={{
              backgroundImage: `url(${faithCommunityBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay para garantir legibilidade */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]"></div>
            
            {/* Conteúdo */}
            <div className="relative z-10 p-8 md:p-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 drop-shadow-sm">
                Sua Fé Merece Ser Vivida em Grande Estilo
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                Vista roupas que refletem seu propósito todos os dias. Descubra como nossas peças 
                podem transformar cada momento em uma oportunidade de testemunhar amor, esperança e propósito.
              </p>
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-white px-10 py-4 rounded-lg font-semibold shadow-glow hover:shadow-soft transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Explore Nossa Coleção
              </button>
              
              {/* Legenda discreta */}
              <p className="text-sm text-muted-foreground/70 mt-6 italic">
                Jovens conectados pela fé e propósito
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;