import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-gradient-primary hover:scale-110 p-4 rounded-full shadow-elegant transition-all duration-300 glow-effect group"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
