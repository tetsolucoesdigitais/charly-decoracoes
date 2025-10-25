import { Card, CardContent } from "@/components/ui/card";
import { 
  Cake, 
  Heart, 
  Baby, 
  Crown, 
  Building2, 
  Gift,
  Sparkles as SparklesIcon,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Aniversário",
      description: "Celebre mais um ano de vida com uma decoração única e personalizada que torna seu dia ainda mais especial.",
      icon: Cake,
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Casamento",
      description: "O dia mais importante da sua vida merece uma decoração dos sonhos. Criamos ambientes românticos e inesquecíveis.",
      icon: Heart,
      gradient: "from-purple-600 to-cyan-500"
    },
    {
      title: "Infantil",
      description: "Transformamos a festa do seu pequeno em um mundo mágico cheio de cores, diversão e momentos especiais.",
      icon: Baby,
      gradient: "from-cyan-500 to-pink-400"
    },
    {
      title: "Festa de 15 Anos",
      description: "A transição para a vida adulta merece uma celebração única. Criamos decorações elegantes e sofisticadas.",
      icon: Crown,
      gradient: "from-pink-400 to-purple-500"
    },
    {
      title: "Corporativo",
      description: "Eventos empresariais com decoração profissional que reflete a identidade da sua marca e impressiona clientes.",
      icon: Building2,
      gradient: "from-purple-500 to-cyan-600"
    },
    {
      title: "Chá de Bebê",
      description: "Celebre a chegada do seu bebê com uma decoração delicada e cheia de amor, criando memórias para toda vida.",
      icon: Gift,
      gradient: "from-cyan-600 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-fuchsia-950">
      {/* Background Effects - Neon Glow */}
      <div className="absolute inset-0 bg-gradient-futuristic opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
            Nossos Serviços
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Especializados em criar experiências únicas para cada tipo de evento, 
            transformando seus sonhos em realidade com decorações futuristas e elegantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group neon-card neon-glow hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <CardContent className="p-8 relative h-full">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-charly-pink/5 via-charly-purple/5 to-charly-mint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Icon with enhanced gradient background */}
                  <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} p-5 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white drop-shadow-lg" />
                    <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gradient-primary transition-all duration-300 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 group-hover:text-foreground/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Enhanced hover effect arrow */}
                  <div className="flex items-center text-charly-pink opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-3 relative z-10">
                    <span className="text-sm font-semibold mr-3 tracking-wide">Saiba mais</span>
                    <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-charly-pink/20 to-charly-purple/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-charly-mint/15 to-charly-gold/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </CardContent>
              </div>
            );
          })}
        </div>




      </div>
    </section>
  );
};



export default Services;