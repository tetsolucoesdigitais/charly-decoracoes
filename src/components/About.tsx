import { Heart, Star, Users, Award, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada decoração é criada com carinho e atenção aos mínimos detalhes para tornar seu evento inesquecível."
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Utilizamos apenas materiais de alta qualidade e as últimas tendências em decoração para eventos."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Nossa equipe experiente está sempre pronta para transformar suas ideias em realidade."
    },
    {
      icon: Award,
      title: "Excelência Reconhecida",
      description: "Mais de 500 eventos realizados com 100% de satisfação dos nossos clientes."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Seção principal com foto e texto da Charly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 items-center">
          {/* Foto da Charly */}
          <div className="order-2 lg:order-1">
            <div 
              className="relative group cursor-pointer transition-all duration-700 hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Outer glow container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-charly-pink via-charly-purple to-charly-mint rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:blur-xl animate-pulse"></div>
              
              {/* Inner card */}
              <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-charly-pink via-charly-purple to-charly-mint opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-sm"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <img 
                    src="https://i.imgur.com/IUTUqAW.jpeg" 
                    alt="Charly - Fundadora da Charly Decorações" 
                    className="w-full h-80 sm:h-96 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-charly-pink/20 via-transparent to-charly-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-charly-pink rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-charly-mint rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:animate-pulse"></div>
                  <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-charly-purple rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 group-hover:animate-bounce"></div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-charly-pink rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-charly-mint rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-charly-purple rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-charly-pink rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Texto sobre a Charly Decorações */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-primary mb-6">
                Sobre a Charly Decorações
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Transformando sonhos em realidade através de decorações únicas e personalizadas. Há mais de 2 anos criando momentos especiais e memórias inesquecíveis.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Fundadora e alma criativa por trás da Charly Decorações, ela transformou sua paixão por criar ambientes únicos em um negócio que já realizou centenas de sonhos.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Com olhar atento aos detalhes e dedicação incansável, Charly trabalha pessoalmente em cada projeto, garantindo que cada evento seja verdadeiramente especial e inesquecível.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="neon-card neon-glow text-center group relative overflow-hidden">
              <div className="pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 relative z-10">
                <div className="bg-gradient-primary rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-500 relative z-10">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-charly-pink group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                
                {/* Enhanced decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-charly-pink/20 to-charly-purple/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-tr from-charly-mint/15 to-charly-gold/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-primary mb-4 sm:mb-6">
            Nossa Missão
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Acreditamos que cada evento é único e especial. Nossa missão é transformar suas ideias em 
            decorações extraordinárias, criando ambientes mágicos que marquem para sempre a vida de 
            nossos clientes. Com criatividade, dedicação e paixão pelo que fazemos, tornamos cada 
            celebração uma experiência única e inesquecível.
          </p>
        </div>
      </div>

      {/* Modal para foto em tamanho real */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-charly-pink transition-colors duration-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src="https://i.imgur.com/IUTUqAW.jpeg" 
              alt="Charly - Fundadora da Charly Decorações" 
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;