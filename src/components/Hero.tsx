import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stats, setStats] = useState({ events: 0, satisfaction: 0, experience: 0 });

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Counter animation effect
  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 30);
    };

    const timer = setTimeout(() => {
      animateCounter(200, (value) => setStats(prev => ({ ...prev, events: value })));
      animateCounter(100, (value) => setStats(prev => ({ ...prev, satisfaction: value })));
      animateCounter(2, (value) => setStats(prev => ({ ...prev, experience: value })));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
      >
        <source src="https://i.imgur.com/EkeoInV.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/50 backdrop-blur-[1px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-4 lg:left-10 text-charly-pink/30 floating">
        <Heart className="w-6 h-6 lg:w-8 lg:h-8" />
      </div>
      <div className="absolute top-40 right-4 lg:right-20 text-charly-mint/30 floating" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-4 h-4 lg:w-6 lg:h-6" />
      </div>
      <div className="absolute bottom-40 left-4 lg:left-20 text-charly-purple/30 floating" style={{ animationDelay: "4s" }}>
        <Star className="w-5 h-5 lg:w-7 lg:h-7" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Content */}
        <div className="text-center space-y-12">
          {/* Logo and Title */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/9wU7G0V.png" 
                alt="Charly Decorações" 
                className="h-24 sm:h-28 lg:h-32 w-auto floating hover:scale-110 transition-transform cursor-pointer relative z-50"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-white leading-tight drop-shadow-2xl">
                Charly
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-charly-gold drop-shadow-lg">
                Decorações
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg px-4">
                Transformando seus sonhos em realidade com decorações únicas e inesquecíveis
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToBooking}
              className="group bg-gradient-primary hover:scale-105 shadow-2xl"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Fazer Orçamento
            </Button>
            <Button 
              variant="futuristic" 
              size="xl"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
            <div className="stats-card rounded-2xl p-4 sm:p-8 text-center counter-animate">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charly-pink mb-2">
                {stats.events}+
              </div>
              <div className="text-sm sm:text-lg text-white/80">Eventos Realizados</div>
            </div>
            <div className="stats-card rounded-2xl p-4 sm:p-8 text-center counter-animate" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charly-mint mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-sm sm:text-lg text-white/80">Satisfação</div>
            </div>
            <div className="stats-card rounded-2xl p-4 sm:p-8 text-center counter-animate" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charly-purple mb-2">
                {stats.experience}+
              </div>
              <div className="text-sm sm:text-lg text-white/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;