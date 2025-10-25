import { Card, CardContent } from "@/components/ui/card";
import { 
  Cake, 
  Heart, 
  Baby, 
  Crown, 
  Building2, 
  Gift,
  Sparkles as SparklesIcon
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
              <Card 
                key={index} 
                className="group relative transition-all duration-500 bg-purple-900/40 backdrop-blur-md border-2 border-pink-500/30 hover:border-purple-400/80 overflow-hidden rounded-3xl"
                style={{
                  boxShadow: '0 0 20px rgba(236, 72, 153, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)'
                }}
              >
                {/* Neon glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  boxShadow: '0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(236, 72, 153, 0.2)'
                }}></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Modern icon with neon gradient */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} p-5 group-hover:scale-110 transition-all duration-500`} style={{
                      boxShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)'
                    }}>
                      <IconComponent className="w-full h-full text-white drop-shadow-lg" strokeWidth={2} />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} blur-2xl group-hover:opacity-80 transition-opacity duration-500`} style={{ opacity: 0.4 }}></div>
                    <SparklesIcon className="absolute -top-2 -right-2 w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-purple-200 leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>
                  
                  {/* Modern hover indicator */}
                  <div className="flex items-center text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-pink-500 to-cyan-500 mr-3"></div>
                    <span className="text-sm">Saiba Mais</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>




      </div>
    </section>
  );
};



export default Services;