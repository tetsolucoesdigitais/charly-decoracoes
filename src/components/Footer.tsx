import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, X, Heart } from "lucide-react";

interface FooterProps {
  showServiceHoursPopup?: boolean;
}

const Footer = ({ showServiceHoursPopup = false }: FooterProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    if (!showServiceHoursPopup) return;
    
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer && !hasShownPopup) {
        const footerRect = footer.getBoundingClientRect();
        const isVisible = footerRect.top < window.innerHeight && footerRect.bottom >= 0;
        
        if (isVisible) {
          setShowPopup(true);
          setHasShownPopup(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownPopup, showServiceHoursPopup]);

  const closePopup = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowPopup(false);
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black border-t border-gray-700/30">
      {/* Modern dark background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                   src="https://i.imgur.com/9wU7G0V.png" 
                   alt="Charly" 
                   className="h-20 w-auto floating hover:scale-110 transition-transform cursor-pointer"
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                 />
              </div>
              <p className="text-muted-foreground">
                Transformando seus sonhos em realidade com decorações únicas e inesquecíveis para todos os tipos de eventos.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-charly-pink">Siga-nos no Instagram</h4>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://www.instagram.com/charly_decoracoes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-primary p-3 rounded-full hover:scale-110 transition-smooth glow-effect group"
                      title="Charly Decorações"
                    >
                      <Instagram className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                    </a>
                    <div>
                      <p className="text-pink-200 font-medium">@charly_decoracoes</p>
                      <p className="text-pink-300 text-sm">Decorações completas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://www.instagram.com/charly_peguemonte/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full hover:scale-110 transition-smooth glow-effect group"
                      title="Pegue & Monte Charly"
                    >
                      <Instagram className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                    </a>
                    <div>
                      <p className="text-pink-200 font-medium">@charly_peguemonte</p>
                      <p className="text-pink-300 text-sm">Temas infantis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-charly-pink">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-charly-mint group-hover:scale-110 transition-transform" />
                  <span className="text-pink-200">(11) 9 8041-1534</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-5 h-5 text-charly-purple group-hover:scale-110 transition-transform" />
                  <span className="text-pink-200">contato@charlydecor.com</span>
                </div>
                <a 
                  href="https://www.google.com/maps/place/R.+Petrolina,+106+-+Jardim+Brasil,+Guarulhos+-+SP,+07270-370/@-23.4671,-46.4299,17z/data=!4m6!3m5!1s0x94ce623aad438c95:0x3a44370766d1bc2d!8m2!3d-23.467081!4d-46.4298632!16s%2Fg%2F11c4k9mcsr?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group hover:bg-charly-pink/10 p-3 rounded-lg transition-all duration-300 border border-charly-gold/20 hover:border-charly-gold/50 backdrop-blur-sm"
                >
                  <MapPin className="w-5 h-5 text-charly-gold group-hover:scale-110 transition-transform" />
                  <div className="text-pink-200">
                    <p className="font-medium group-hover:text-charly-gold transition-colors">Nossa Localização</p>
                    <p className="text-sm text-pink-300">Guarulhos - SP</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-charly-purple">Serviços</h4>
              <ul className="space-y-2 text-pink-200">
                <li className="hover:text-charly-pink transition-smooth cursor-pointer">Decoração Completa</li>
                <li className="hover:text-charly-pink transition-smooth cursor-pointer">Painéis de Balões</li>
                <li className="hover:text-charly-pink transition-smooth cursor-pointer">Mesas Temáticas</li>
                <li className="hover:text-charly-pink transition-smooth cursor-pointer">Arranjos Florais</li>
                <li className="hover:text-charly-pink transition-smooth cursor-pointer">Locação de Peças</li>
                <li className="hover:text-charly-pink transition-smooth cursor-pointer">Eventos Corporativos</li>
              </ul>
            </div>

            {/* Working Hours */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-charly-mint">Horário de Funcionamento</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-charly-gold mt-0.5 floating" style={{ animationDelay: "1s" }} />
                  <div className="text-pink-200">
                    <p className="font-medium">Segunda a Sexta:</p>
                    <p>9:00 às 18:00</p>
                  </div>
                </div>
                <div className="bg-charly-pink/10 p-3 rounded-lg border border-charly-pink/20">
                  <p className="text-charly-pink font-medium text-sm">📅 Finais de semana:</p>
                  <p className="text-pink-200 text-sm">Atendimento apenas por agendamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/30 bg-black/90 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-8 pb-20 md:pb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
              <div className="text-gray-300 text-center lg:text-left space-y-3 flex-1">
                <p className="text-base">
                  © 2025 Charly. Todos os direitos reservados. Feito com{" "}
                  <Heart className="inline w-4 h-4 text-blue-400 mx-1" />{" "}
                  para tornar seus momentos especiais.
                </p>
                <p className="text-sm">
                  Email: <a href="mailto:contato@charlydecoracoes.com.br" className="text-blue-400 hover:text-cyan-400 transition-smooth font-medium">contato@charlydecoracoes.com.br</a>
                </p>
                <p className="text-xs text-gray-400">
                  Desenvolvido pela <a href="https://www.tetsolucoesdigitais.com.br" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-blue-400 transition-smooth font-medium">TET Soluções Digitais</a>
                </p>
              </div>
              
              {/* Links Section */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-300 lg:flex-shrink-0">
                <a 
                  href="/politica-privacidade" 
                  className="bg-gray-800/50 hover:bg-gray-700/60 px-4 py-2 rounded-full hover:text-blue-400 transition-all duration-300 border border-gray-600/30 hover:border-blue-400/50 font-medium"
                >
                  📋 Política de Privacidade
                </a>
                <a 
                  href="/termos-uso" 
                  className="bg-gray-800/50 hover:bg-gray-700/60 px-4 py-2 rounded-full hover:text-blue-400 transition-all duration-300 border border-gray-600/30 hover:border-blue-400/50 font-medium"
                >
                  📄 Termos de Uso
                </a>
              </div>
            </div>
            
            {/* Extra spacing for mobile floating buttons */}
            <div className="block md:hidden h-4"></div>
          </div>
        </div>
      </div>

      {/* Weekend Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-charly-pink/30 shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
            <div className="relative">
              <button
                onClick={(e) => closePopup(e)}
                className="absolute -top-2 -right-2 bg-charly-pink/30 hover:bg-charly-pink/60 rounded-full p-3 transition-all duration-300 group z-10 border border-white/20 hover:border-white/40"
                type="button"
                aria-label="Fechar popup"
              >
                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
              </button>
              
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4 animate-bounce">🕐</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Horário de Atendimento
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-charly-gold/20">
                  <p className="text-pink-200 text-sm leading-relaxed">
                    <span className="text-charly-gold font-semibold">📅 Devido à grande demanda aos finais de semana</span>, não conseguimos responder, mas retornaremos contato no próximo dia útil.
                  </p>
                  <p className="text-white font-medium mt-3">
                    Nos mande sua mensagem pelo formulário de orçamento que ficaremos felizes em atendê-lo(a)! 💖
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    onClick={closePopup}
                    className="bg-gradient-primary hover:scale-105 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-charly-pink/25"
                  >
                    Entendi! ✨
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;