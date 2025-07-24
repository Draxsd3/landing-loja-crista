import { Heart, Instagram, Star } from "lucide-react";
import customerChurch from "@/assets/customer-church.jpg";
import customerDaily from "@/assets/customer-daily.jpg";
import customerFamily from "@/assets/customer-family.jpg";
import customerSocial from "@/assets/customer-social.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const CustomerGallery = () => {
  const customerPhotos = [
    {
      image: customerChurch,
      caption: "Maria vestindo 'Deus é Amor' — BH",
      alt: "Maria usando camiseta cristã durante culto em Belo Horizonte",
      testimonial: "Me sinto abençoada toda vez que visto!",
      format: "polaroid",
      stickers: ["heart", "cross"],
      zIndex: "z-30"
    },
    {
      image: testimonial1,
      caption: "Juliana com 'Fé que Move' — SP",
      alt: "Juliana usando blusa com mensagem de fé em São Paulo",
      testimonial: "Moda com propósito de verdade!",
      format: "square",
      stickers: ["star"],
      zIndex: "z-20"
    },
    {
      image: customerDaily,
      caption: "Carol no trabalho com 'Blessed' — RJ",
      alt: "Carolina usando vestido elegante cristão no ambiente de trabalho",
      testimonial: "Conforto e fé no mesmo look.",
      format: "rectangular",
      stickers: ["gratidao"],
      zIndex: "z-40"
    },
    {
      image: testimonial2,
      caption: "Marcos com 'Jesus Loves' — RJ",
      alt: "Marcos usando camisa cristã no Rio de Janeiro",
      testimonial: "Estilo que fala da minha fé!",
      format: "polaroid-tilted",
      stickers: ["heart", "inspiracao"],
      zIndex: "z-10"
    },
    {
      image: customerFamily,
      caption: "Família Santos unidos em Cristo — MG",
      alt: "Família cristã vestindo roupas da loja em momento familiar",
      testimonial: "Unidos pela fé e pelo estilo!",
      format: "square",
      stickers: ["cross", "heart"],
      zIndex: "z-25"
    },
    {
      image: customerSocial,
      caption: "Grupo de voluntários 'Servir' — GO",
      alt: "Grupo de cristãos servindo a comunidade com roupas da loja",
      testimonial: "Servindo com amor e propósito.",
      format: "rectangular",
      stickers: ["star", "gratidao"],
      zIndex: "z-15"
    }
  ];

  const getStickerIcon = (sticker: string) => {
    switch (sticker) {
      case "heart":
        return <Heart className="w-4 h-4 text-pink-500" />;
      case "star":
        return <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />;
      case "cross":
        return <span className="text-primary font-bold text-lg">✝</span>;
      case "gratidao":
        return <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Gratidão</span>;
      case "inspiracao":
        return <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Inspiração</span>;
      default:
        return null;
    }
  };

  const getPhotoFrameClass = (format: string) => {
    switch (format) {
      case "polaroid":
        return "bg-white p-2 pb-6 shadow-xl transform rotate-2 border border-gray-100";
      case "polaroid-tilted":
        return "bg-white p-2 pb-6 shadow-xl transform -rotate-3 border border-gray-100";
      case "square":
        return "bg-white p-1 shadow-lg border border-gray-50 transform rotate-1";
      case "rectangular":
        return "bg-white p-1 shadow-lg border border-gray-50 transform -rotate-1";
      default:
        return "shadow-card";
    }
  };

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Nossa Comunidade</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Clientes Vestindo Fé
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada foto conta uma história de fé, propósito e estilo. Veja como nossa 
            comunidade cristã veste seus valores todos os dias.
          </p>
        </div>

        {/* Creative Gallery - Desktop */}
        <div className="hidden md:block relative h-[700px] mb-12">
          {customerPhotos.map((photo, index) => {
            const positions = [
              { left: '5%', top: '10%', width: '240px', height: '290px' },     // Maria - top left
              { left: '35%', top: '5%', width: '260px', height: '310px' },     // Juliana - center top (movida para cima)
              { left: '70%', top: '5%', width: '250px', height: '300px' },     // Carol - top right
              { left: '15%', top: '55%', width: '270px', height: '320px' },    // Marcos - bottom left
              { left: '50%', top: '55%', width: '260px', height: '310px' },    // Família - center bottom (movida para baixo e tamanho padronizado)
              { left: '75%', top: '60%', width: '255px', height: '305px' }     // Grupo - bottom right
            ];
            
            return (
              <div 
                key={index} 
                className={`absolute group cursor-pointer transition-all duration-500 hover:scale-105 ${photo.zIndex}`}
                style={positions[index]}
              >
                {/* Photo Frame */}
                <div className={`relative ${getPhotoFrameClass(photo.format)} hover:shadow-glow transition-all duration-300`}>
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img
                    src={photo.image} 
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Polaroid Caption */}
                {(photo.format.includes("polaroid")) && (
                  <div className="text-center pt-2">
                    <p className="text-xs text-gray-600 font-handwriting">
                      {photo.caption}
                    </p>
                  </div>
                )}

                {/* Stickers */}
                <div className="absolute -top-2 -right-2 flex flex-col space-y-1">
                  {photo.stickers.map((sticker, stickerIndex) => (
                    <div key={stickerIndex} className="transform rotate-12">
                      {getStickerIcon(sticker)}
                    </div>
                  ))}
                </div>

                {/* Testimonial on hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-sm flex items-center justify-center p-4 transform -translate-y-1">
                  <div className="text-center space-y-2">
                    <p className="text-white text-sm italic font-handwriting">
                      "{photo.testimonial}"
                    </p>
                    <p className="text-gray-300 text-xs">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Mobile Gallery */}
        <div className="md:hidden space-y-8 mb-12">
          {customerPhotos.map((photo, index) => (
            <div key={index} className="relative max-w-sm mx-auto">
              <div className={`${getPhotoFrameClass(photo.format)}`}>
                <div className="aspect-square overflow-hidden rounded-sm">
                  <img 
                    src={photo.image} 
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Polaroid Caption */}
                {(photo.format.includes("polaroid")) && (
                  <div className="text-center pt-2">
                    <p className="text-xs text-gray-600">
                      {photo.caption}
                    </p>
                  </div>
                )}

                {/* Stickers */}
                <div className="absolute -top-2 -right-2 flex flex-col space-y-1">
                  {photo.stickers.map((sticker, stickerIndex) => (
                    <div key={stickerIndex} className="transform rotate-12">
                      {getStickerIcon(sticker)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Testimonial */}
              <div className="mt-4 p-4 bg-white/80 rounded-lg shadow-sm">
                <p className="text-sm italic text-gray-700 mb-2">
                  "{photo.testimonial}"
                </p>
                <p className="text-xs text-gray-500">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Community CTA */}
        <div className="bg-background rounded-2xl p-8 md:p-12 text-center shadow-card relative">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-pink-300 opacity-50">
            <Heart className="w-6 h-6" />
          </div>
          <div className="absolute top-4 right-4 text-yellow-300 opacity-50">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <div className="absolute bottom-4 left-6 text-primary opacity-30">
            <span className="text-2xl">✝</span>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <Heart className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Faça Parte da Nossa Família de Fé
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Compartilhe suas fotos usando nossas peças com #VesteFé e 
              inspire outras pessoas a viverem sua fé com estilo e propósito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.open('https://instagram.com', '_blank')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
                <span>Siga @vestefe</span>
              </button>
              
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                Escolha Sua Peça
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 text-primary/10 pointer-events-none">
        <Heart className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/10 pointer-events-none">
        <Star className="w-20 h-20 fill-current" />
      </div>
    </section>
  );
};

export default CustomerGallery;