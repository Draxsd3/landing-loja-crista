import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Mail, 
  Cross, 
  Heart,
  Phone,
  MapPin,
  Users 
} from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Cross className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Veste Fé</h3>
                <p className="text-sm text-background/70">Moda com Propósito</p>
              </div>
            </div>
            
            <p className="text-background/80 leading-relaxed">
              Expressando valores cristãos através de roupas exclusivas, 
              criadas com amor e qualidade premium para fortalecer sua fé no dia a dia.
            </p>

            {/* Founder Info */}
            <div className="bg-background/10 rounded-xl p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <img 
                  src={founderPhoto} 
                  alt="Fundadora da Veste Fé" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">Priscila Santos</p>
                  <p className="text-xs text-background/70">Fundadora & Líder de Visão</p>
                </div>
              </div>
              <p className="text-xs text-background/80 italic">
                "Cada peça é criada com oração e propósito para edificar vidas."
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="font-semibold text-sm">Conecte-se conosco:</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-background/80 hover:text-background transition-colors">
                Home
              </a>
              <a href="#about" className="block text-background/80 hover:text-background transition-colors">
                Quem Somos
              </a>
              <a href="#products" className="block text-background/80 hover:text-background transition-colors">
                Produtos
              </a>
              <a href="#testimonials" className="block text-background/80 hover:text-background transition-colors">
                Depoimentos
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-background/60">WhatsApp</p>
                  <p className="text-background/90">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-background/60">E-mail</p>
                  <p className="text-background/90">contato@vestefe.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-background/60">Atendimento</p>
                  <p className="text-background/90">Segunda a Sexta<br />9h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community & Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Comunidade & Suporte</h4>
            
            {/* Newsletter */}
            <div className="bg-background/10 rounded-xl p-4 space-y-3">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <p className="font-semibold text-sm">Família Veste Fé</p>
              </div>
              <p className="text-xs text-background/80">
                Receba conteúdo edificante, novidades e inspirações cristãs.
              </p>
              <button className="w-full bg-primary text-white text-xs py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                Quero fazer parte
              </button>
            </div>

            <nav className="space-y-3">
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                FAQ - Dúvidas Frequentes
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Trocas e Devoluções
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Guia de Tamanhos
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-background/60">
              <Heart className="w-4 h-4 text-primary" />
              <p className="text-sm">
                © {currentYear} Veste Fé. Feito com amor para a comunidade cristã.
              </p>
            </div>
            
            <div className="text-sm text-background/60">
              <p>Todos os direitos reservados | CNPJ: 00.000.000/0001-00</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;