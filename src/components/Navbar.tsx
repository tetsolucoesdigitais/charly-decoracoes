import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Se não estiver na página inicial, navegar primeiro para ela
    if (location.pathname !== '/') {
      navigate('/');
      // Aguardar um pouco para a página carregar antes de fazer o scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Se já estiver na página inicial, fazer scroll direto
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
    setPortfolioOpen(false);
    setPartnersOpen(false);
  };

  const goToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={goToHome}
          >
            <img 
              src="https://i.imgur.com/9wU7G0V.png" 
              alt="Charly Decorações" 
              className="h-16 w-auto mr-3 group-hover:scale-110 transition-transform"
            />
            <div className="text-2xl font-bold text-gradient-primary group-hover:scale-110 transition-smooth">
              Charly
            </div>
            <div className="ml-2 text-lg text-charly-gold font-light">
              Decorações
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-charly-pink transition-smooth font-medium"
            >
              Sobre
            </button>
            
            <button
              onClick={() => scrollToSection("booking")}
              className="text-foreground hover:text-charly-pink transition-smooth font-medium"
            >
              Contato
            </button>
            
            <a
              href="/pegue-monte"
              className="text-foreground hover:text-charly-pink transition-smooth font-medium"
            >
              Pegue Monte
            </a>
            
            {/* Partners Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPartnersOpen(!partnersOpen)}
                className="flex items-center text-foreground hover:text-charly-pink transition-smooth font-medium"
              >
                Parceiros
                <ChevronDown className={cn(
                  "ml-1 h-4 w-4 transition-transform",
                  partnersOpen && "rotate-180"
                )} />
              </button>
              
              {partnersOpen && (
                <div className="absolute top-full mt-2 left-0 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[180px]">
                  <a
                     href="/parceiros"
                     className="block w-full text-left px-4 py-2 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                   >
                    Iluminação especial
                  </a>
                  <a
                     href="/parceiros"
                     className="block w-full text-left px-4 py-2 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                   >
                     Docinhos temáticos
                   </a>
                   <a
                     href="/parceiros"
                     className="block w-full text-left px-4 py-2 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                   >
                     Lembrancinhas
                   </a>
                   <a
                     href="/parceiros"
                     className="block w-full text-left px-4 py-2 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                   >
                     Fotografia
                   </a>
                   <a
                     href="/parceiros"
                     className="block w-full text-left px-4 py-2 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                   >
                     Buffet
                   </a>
                </div>
              )}
            </div>
            
            {/* Portfolio Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPortfolioOpen(!portfolioOpen)}
                className="flex items-center text-foreground hover:text-charly-pink transition-smooth font-medium"
              >
                Portfólio
                <ChevronDown className={cn(
                  "ml-1 h-4 w-4 transition-transform",
                  portfolioOpen && "rotate-180"
                )} />
              </button>
              
              {portfolioOpen && (
                <div className="absolute top-full mt-2 left-0 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[150px]">
                  <a
                   href="/galeria"
                   className="block w-full text-left px-4 py-2 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                 >
                    Imagens
                  </a>
                  <a
                   href="/videos"
                   className="block w-full text-left px-4 py-2 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                 >
                    Vídeos
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/50 backdrop-blur-lg rounded-lg mt-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-charly-pink transition-smooth font-medium"
              >
                Sobre
              </button>
              
              <button
                onClick={() => scrollToSection("booking")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-charly-pink transition-smooth font-medium"
              >
                Contato
              </button>
              
              <a
                href="/pegue-monte"
                className="block w-full text-left px-3 py-2 text-foreground hover:text-charly-pink transition-smooth font-medium"
              >
                Pegue Monte
              </a>
              
              <div className="px-3 py-1">
                <div className="text-sm font-medium text-muted-foreground mb-2">Parceiros</div>
                <a
                   href="/parceiros"
                   className="block w-full text-left px-3 py-1 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                 >
                   Iluminação especial
                 </a>
                 <a
                   href="/parceiros"
                   className="block w-full text-left px-3 py-1 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                 >
                   Docinhos temáticos
                 </a>
                 <a
                   href="/parceiros"
                   className="block w-full text-left px-3 py-1 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                 >
                   Lembrancinhas
                 </a>
                 <a
                   href="/parceiros"
                   className="block w-full text-left px-3 py-1 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                 >
                   Fotografia
                 </a>
                 <a
                   href="/parceiros"
                   className="block w-full text-left px-3 py-1 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                 >
                   Buffet
                 </a>
              </div>
              
              <div className="px-3 py-1">
                <div className="text-sm font-medium text-muted-foreground mb-2">Portfólio</div>
                <a
                   href="/galeria"
                   className="block w-full text-left px-3 py-1 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                 >
                   Imagens
                 </a>
                 <a
                   href="/videos"
                   className="block w-full text-left px-3 py-1 text-foreground hover:bg-charly-pink/10 hover:text-charly-pink transition-smooth"
                 >
                   Vídeos
                 </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;