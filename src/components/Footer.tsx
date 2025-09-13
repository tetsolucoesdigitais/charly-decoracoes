import { Heart, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-900 border-t border-charly-pink/20">
      {/* Futuristic background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-charly-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-charly-purple rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-charly-mint rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img 
                   src="https://i.imgur.com/9wU7G0V.png" 
                   alt="Charly Decorações" 
                   className="h-20 w-auto floating hover:scale-110 transition-transform cursor-pointer"
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                 />
                <div>
                  <h3 className="text-2xl font-bold text-gradient-primary">Charly</h3>
                  <p className="text-charly-gold font-light">Decorações</p>
                </div>
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
                <div className="flex items-center space-x-3 group">
                  <MapPin className="w-5 h-5 text-charly-gold group-hover:scale-110 transition-transform" />
                  <span className="text-pink-200">São Paulo, SP</span>
                </div>
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
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-charly-gold mt-0.5 floating" style={{ animationDelay: "2s" }} />
                  <div className="text-pink-200">
                    <p className="font-medium">Sábado:</p>
                    <p>9:00 às 13:15</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-charly-gold mt-0.5 floating" style={{ animationDelay: "3s" }} />
                  <div className="text-pink-200">
                    <p className="font-medium">Domingo:</p>
                    <p>9:00 às 15:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charly-pink/20 bg-purple-900/80 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-pink-200 text-center md:text-left">
                © 2024 Charly Decorações. Todos os direitos reservados. Feito com{" "}
                <Heart className="inline w-4 h-4 text-charly-pink mx-1" />{" "}
                para tornar seus momentos especiais.
              </p>
              <div className="flex items-center space-x-6 text-sm text-pink-200">
                <a href="#" className="hover:text-charly-pink transition-smooth">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-charly-pink transition-smooth">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;