import { Star, Quote, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Natália",
      event: "Evento Especial",
      rating: 5,
      comment: "Experiência incrível com a Charly Decorações! Superou todas as expectativas.",
      image: "https://i.imgur.com/UlSGhfZ.jpeg"
    },
    {
      name: "Andreia",
      event: "Celebração",
      rating: 5,
      comment: "Profissionalismo e qualidade excepcionais. Recomendo para todos!",
      image: "https://i.imgur.com/QF5wEeY.jpeg"
    },
    {
      name: "Paola",
      event: "Festa Temática",
      rating: 5,
      comment: "Decoração perfeita e atendimento impecável. Muito obrigada!",
      image: "https://i.imgur.com/XUeaboX.jpeg"
    },
    {
      name: "Janaine Delmondes",
      event: "Testemunho",
      rating: 5,
      comment: "Confira o depoimento completo desta cliente satisfeita!",
      image: "https://i.imgur.com/MXNvuyA.png"
    },
    {
      name: "Lara Leite",
      event: "Testemunho",
      rating: 5,
      comment: "Veja o que nossa cliente tem a dizer sobre nossos serviços!",
      image: "https://i.imgur.com/3hIzwF1.png"
    },
    {
      name: "Denise Perella",
      event: "Testemunho",
      rating: 5,
      comment: "Depoimento especial de uma cliente muito querida!",
      image: "https://i.imgur.com/RTQBZEq.png"
    },
    {
      name: "Talita",
      event: "Testemunho",
      rating: 5,
      comment: "Mais um depoimento incrível dos nossos clientes!",
      image: "https://i.imgur.com/CIWFqj4.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const result = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], originalIndex: index });
    }
    
    return result;
  };

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-purple-950 to-purple-900 relative">
      {/* Neon background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Histórias reais de momentos especiais que ajudamos a criar
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-purple-900/80 hover:bg-purple-800/90 text-pink-300 hover:text-pink-200 rounded-full p-3 transition-all duration-300 hover:scale-110 border border-pink-500/30 hover:border-pink-400/60"
          style={{
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)'
          }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-purple-900/80 hover:bg-purple-800/90 text-pink-300 hover:text-pink-200 rounded-full p-3 transition-all duration-300 hover:scale-110 border border-pink-500/30 hover:border-pink-400/60"
          style={{
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)'
          }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-6 py-4 px-16">
          {getVisibleTestimonials().map((testimonial, index) => (
            <Dialog key={`${testimonial.originalIndex}-${index}`}>
              <DialogTrigger asChild>
                <Card className="flex-shrink-0 w-80 transition-smooth cursor-pointer group bg-purple-900/40 backdrop-blur-md border-2 border-pink-500/30 hover:border-purple-400/80 rounded-2xl" style={{
                  boxShadow: '0 0 20px rgba(236, 72, 153, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.1)'
                }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{
                    boxShadow: '0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(168, 85, 247, 0.4)'
                  }}></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500/50 group-hover:border-pink-400 transition-all duration-300" style={{
                        boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)'
                      }}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-pink-300 text-lg group-hover:text-pink-200 transition-colors duration-300 cursor-pointer drop-shadow-lg">
                            {testimonial.name}
                          </h4>
                          <Quote className="w-4 h-4 text-cyan-400 drop-shadow-lg" />
                        </div>
                        <p className="text-sm text-purple-300">{testimonial.event}</p>
                        <div className="flex gap-1 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed mb-3">
                      "{testimonial.comment}"
                    </p>
                    
                    {/* Alerta "Clique e veja" */}
                    <div className="flex items-center gap-2 text-xs text-charly-pink/80 group-hover:text-charly-pink transition-colors duration-300">
                      <Eye className="w-3 h-3" />
                      <span className="font-medium">Clique e veja</span>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="bg-card/95 backdrop-blur-xl border-charly-pink/20 max-w-sm max-h-[70vh] p-0 overflow-hidden">
                <div className="relative w-full h-full">
                  {/* Botão fechar */}
                  <DialogClose className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300 hover:scale-110">
                    <X className="w-5 h-5" />
                  </DialogClose>
                  
                  <img
                    src={testimonial.image}
                    alt={`Depoimento de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-white/90 text-sm drop-shadow-md leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex gap-1 mt-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;