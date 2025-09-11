import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-charly-pink/10 via-charly-purple/10 to-charly-mint/10"></div>
      
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

      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-gradient-primary leading-tight">
              Charly
            </h1>
            <h2 className="text-3xl lg:text-4xl font-light text-charly-gold">
              Decorações
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Transformando seus sonhos em realidade com decorações únicas e inesquecíveis
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToBooking}
              className="group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Fazer Orçamento
            </Button>
            <Button 
              variant="futuristic" 
              size="xl"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-charly-pink">500+</div>
              <div className="text-sm text-muted-foreground">Eventos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-charly-mint">100%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-charly-purple">5+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image with 3D Effect */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow Effect Background */}
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 scale-110"></div>
            
            {/* Main Image Container */}
            <div className="relative hero-3d-effect">
              <img
                src={heroImage}
                alt="Charly Decorações - Decoração de festa elegante"
                className="w-full max-w-lg rounded-3xl shadow-2xl border-4 border-white/20"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charly-pink/20 via-transparent to-charly-purple/20 rounded-3xl"></div>
            </div>

            {/* Floating decoration elements */}
            <div className="absolute -top-4 -right-4 bg-charly-mint rounded-full p-3 shadow-lg floating">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-charly-pink rounded-full p-3 shadow-lg floating" style={{ animationDelay: "1s" }}>
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-charly-pink rounded-full flex justify-center">
          <div className="w-1 h-3 bg-charly-pink rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;