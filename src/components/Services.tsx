import { Card, CardContent } from "@/components/ui/card";
import { 
  PartyPopper, 
  Sparkles, 
  Flower2, 
  Award, 
  Briefcase, 
  HeartHandshake,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Aniversário",
      description: "Celebre mais um ano de vida com uma decoração única e personalizada que torna seu dia ainda mais especial.",
      icon: PartyPopper,
      gradient: "from-charly-pink to-charly-purple"
    },
    {
      title: "Casamento",
      description: "O dia mais importante da sua vida merece uma decoração dos sonhos. Criamos ambientes românticos e inesquecíveis.",
      icon: Sparkles,
      gradient: "from-charly-purple to-charly-mint"
    },
    {
      title: "Infantil",
      description: "Transformamos a festa do seu pequeno em um mundo mágico cheio de cores, diversão e momentos especiais.",
      icon: Flower2,
      gradient: "from-charly-mint to-charly-gold"
    },
    {
      title: "Festa de 15 Anos",
      description: "A transição para a vida adulta merece uma celebração única. Criamos decorações elegantes e sofisticadas.",
      icon: Award,
      gradient: "from-charly-gold to-charly-pink"
    },
    {
      title: "Corporativo",
      description: "Eventos empresariais com decoração profissional que reflete a identidade da sua marca e impressiona clientes.",
      icon: Briefcase,
      gradient: "from-charly-pink to-charly-purple"
    },
    {
      title: "Chá de Bebê",
      description: "Celebre a chegada do seu bebê com uma decoração delicada e cheia de amor, criando memórias para toda vida.",
      icon: HeartHandshake,
      gradient: "from-charly-purple to-charly-mint"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-futuristic opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-charly-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-charly-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className="group relative hover:shadow-2xl transition-all duration-500 bg-white border-2 border-charly-pink/20 hover:border-charly-purple/50 overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-charly-pink/5 via-transparent to-charly-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Modern icon with gradient */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} p-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="w-full h-full text-white" strokeWidth={1.5} />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-charly-pink transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>
                  
                  {/* Modern hover effect */}
                  <div className="flex items-center text-charly-purple font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm mr-2">Descubra mais</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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