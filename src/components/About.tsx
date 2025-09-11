import { Heart, Star, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
            Sobre a Charly Decorações
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformando sonhos em realidade através de decorações únicas e personalizadas. 
            Há mais de 5 anos criando momentos especiais e memórias inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center card-shadow hover:card-elegant transition-smooth group">
              <CardContent className="pt-8 pb-6">
                <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-charly-pink">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-6">
            Nossa Missão
          </h3>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Acreditamos que cada evento é único e especial. Nossa missão é transformar suas ideias em 
            decorações extraordinárias, criando ambientes mágicos que marquem para sempre a vida de 
            nossos clientes. Com criatividade, dedicação e paixão pelo que fazemos, tornamos cada 
            celebração uma experiência única e inesquecível.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;