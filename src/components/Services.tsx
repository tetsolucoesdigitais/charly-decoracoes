import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Baby, 
  Cake, 
  Crown, 
  Building2, 
  Gift,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Aniversário",
      description: "Celebre mais um ano de vida com uma decoração única e personalizada que torna seu dia ainda mais especial.",
      icon: Cake,
      gradient: "from-charly-pink to-charly-purple"
    },
    {
      title: "Casamento",
      description: "O dia mais importante da sua vida merece uma decoração dos sonhos. Criamos ambientes românticos e inesquecíveis.",
      icon: Heart,
      gradient: "from-charly-purple to-charly-mint"
    },
    {
      title: "Infantil",
      description: "Transformamos a festa do seu pequeno em um mundo mágico cheio de cores, diversão e momentos especiais.",
      icon: Baby,
      gradient: "from-charly-mint to-charly-gold"
    },
    {
      title: "Festa de 15 Anos",
      description: "A transição para a vida adulta merece uma celebração única. Criamos decorações elegantes e sofisticadas.",
      icon: Crown,
      gradient: "from-charly-gold to-charly-pink"
    },
    {
      title: "Corporativo",
      description: "Eventos empresariais com decoração profissional que reflete a identidade da sua marca e impressiona clientes.",
      icon: Building2,
      gradient: "from-charly-pink to-charly-purple"
    },
    {
      title: "Chá de Bebê",
      description: "Celebre a chegada do seu bebê com uma decoração delicada e cheia de amor, criando memórias para toda vida.",
      icon: Gift,
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
                className="group stats-card hover:scale-105 transition-all duration-500 bg-card/50 backdrop-blur-lg border-border/30 overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-charly-pink transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Hover effect arrow */}
                  <div className="flex items-center text-charly-pink opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-medium mr-2">Saiba mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-charly-pink/10 to-charly-purple/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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