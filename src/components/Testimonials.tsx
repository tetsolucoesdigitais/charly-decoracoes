import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      event: "Casamento",
      rating: 5,
      comment: "A Charly superou todas as nossas expectativas! A decoração do nosso casamento ficou simplesmente perfeita. Cada detalhe foi pensado com muito carinho.",
      image: "👰"
    },
    {
      name: "João Santos",
      event: "Aniversário 50 anos",
      rating: 5,
      comment: "Profissionalismo exemplar! A festa de 50 anos da minha esposa ficou incrível. Todos os convidados elogiaram a decoração elegante e sofisticada.",
      image: "🎂"
    },
    {
      name: "Ana Oliveira",
      event: "Festa Infantil",
      rating: 5,
      comment: "Minha filha ficou encantada! A decoração temática foi perfeita, com todos os detalhes que ela sonhava. A Charly tem um talento especial.",
      image: "👶"
    },
    {
      name: "Carlos Ferreira",
      event: "Evento Corporativo",
      rating: 5,
      comment: "Evento corporativo impecável! A decoração estava alinhada com nossa marca e causou uma excelente impressão em todos os participantes.",
      image: "👨‍💼"
    },
    {
      name: "Lucia Costa",
      event: "15 Anos",
      rating: 5,
      comment: "O sonho da minha filha se tornou realidade! A festa de 15 anos ficou mágica, como se fosse um conto de fadas. Gratidão eterna à equipe Charly.",
      image: "👸"
    },
    {
      name: "Roberto Lima",
      event: "Bodas de Ouro",
      rating: 5,
      comment: "50 anos de casados celebrados com uma decoração emocionante. A Charly conseguiu capturar toda a nossa história de amor nos detalhes.",
      image: "💒"
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de momentos especiais que ajudamos a criar
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex testimonials-scroll gap-6 py-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card key={index} className="flex-shrink-0 w-80 card-shadow hover:card-elegant transition-smooth bg-fuchsia-600/20 border-fuchsia-500/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-charly-pink">{testimonial.name}</h4>
                      <Quote className="w-4 h-4 text-charly-gold" />
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-charly-gold text-charly-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Testimonials;