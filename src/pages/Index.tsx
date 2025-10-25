import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { PartyPopper } from "lucide-react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Balões de Festa Animados */}
      <div className="party-balloons">
        <div className="balloon balloon-1"></div>
        <div className="balloon balloon-2"></div>
        <div className="balloon balloon-3"></div>
        <div className="balloon balloon-4"></div>
        <div className="balloon balloon-5"></div>
        <div className="balloon balloon-6"></div>
        <div className="balloon balloon-7"></div>
        <div className="balloon balloon-8"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://imgur.com/eb225027-07da-4c98-b476-ac987d1ff894)'
        }}
      >
        <BookingForm />
        <Testimonials />
        <Footer showServiceHoursPopup={true} />
      </div>
      
      {/* Botão flutuante de scroll para o topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gray-900/90 backdrop-blur-sm text-charly-pink border border-charly-pink/30 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800/90 transition-all duration-300 z-50 flex items-center gap-2 text-xs sm:text-sm"
          aria-label="Voltar para o topo"
        >
          <PartyPopper className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium hidden sm:inline">Voltar para o topo</span>
          <span className="font-medium sm:hidden">Topo</span>
        </button>
      )}
    </div>
  );
};

export default Index;
