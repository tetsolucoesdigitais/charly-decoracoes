import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

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
      animateCounter(3, (value) => setStats(prev => ({ ...prev, experience: value })));
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
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-charly-pink/10 to-charly-purple/20 backdrop-blur-[2px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-charly-pink/30 floating">
        <Heart className="w-8 h-8" />
      </div>
      <div className="absolute top-40 right-20 text-charly-mint/30 floating" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 left-20 text-charly-purple/30 floating" style={{ animationDelay: "4s" }}>
        <Star className="w-7 h-7" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Content */}
        <div className="text-center space-y-12">
          {/* Title */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-gradient-primary neon-text leading-tight drop-shadow-2xl">
                Charly
              </h1>
              <h2 className="text-4xl lg:text-6xl font-light text-charly-gold neon-text drop-shadow-lg">
                Decorações
              </h2>
              <p className="text-xl lg:text-2xl text-foreground font-medium max-w-3xl mx-auto drop-shadow-lg">
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
              className="group bg-gradient-primary hover:scale-110 shadow-2xl border-2 border-charly-pink/30 hover:border-charly-pink hover:shadow-[0_0_30px_hsl(var(--charly-pink))] transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Fazer Orçamento
            </Button>
            <Button 
              variant="futuristic" 
              size="xl"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-card/60 backdrop-blur-sm border-2 border-charly-purple/30 text-foreground hover:bg-charly-purple/20 hover:border-charly-purple hover:text-charly-purple hover:shadow-[0_0_20px_hsl(var(--charly-purple))] transition-all duration-300"
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="stats-card rounded-3xl p-8 text-center counter-animate">
              <div className="text-4xl lg:text-5xl font-bold text-charly-pink neon-text mb-2">
                {stats.events}+
              </div>
              <div className="text-lg text-muted-foreground font-medium">Eventos Realizados</div>
            </div>
            <div className="stats-card rounded-3xl p-8 text-center counter-animate" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl lg:text-5xl font-bold text-charly-mint neon-text mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-lg text-muted-foreground font-medium">Satisfação</div>
            </div>
            <div className="stats-card rounded-3xl p-8 text-center counter-animate" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl lg:text-5xl font-bold text-charly-purple neon-text mb-2">
                {stats.experience}+
              </div>
              <div className="text-lg text-muted-foreground font-medium">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-charly-pink/60 rounded-full flex justify-center backdrop-blur-sm bg-card/20">
          <div className="w-1 h-3 bg-charly-pink rounded-full mt-2 animate-pulse shadow-[0_0_10px_hsl(var(--charly-pink))]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;