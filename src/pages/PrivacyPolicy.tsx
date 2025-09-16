import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <Shield className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sua privacidade é nossa prioridade. Conheça como protegemos e utilizamos suas informações.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Section 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">1. Informações que Coletamos</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                A Charly Decorações coleta informações que você nos fornece diretamente, como:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome completo e informações de contato</li>
                <li>Detalhes do evento (data, local, tipo de decoração)</li>
                <li>Preferências e especificações do serviço</li>
                <li>Informações de pagamento (processadas de forma segura)</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-100 rounded-lg">
                <Lock className="h-6 w-6 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">2. Como Protegemos suas Informações</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Implementamos medidas de segurança rigorosas para proteger suas informações pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criptografia SSL em todas as transmissões de dados</li>
                <li>Armazenamento seguro em servidores protegidos</li>
                <li>Acesso restrito apenas a funcionários autorizados</li>
                <li>Monitoramento contínuo de segurança</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">3. Como Utilizamos suas Informações</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Utilizamos suas informações exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processar e executar seus pedidos de decoração</li>
                <li>Comunicar sobre o andamento do seu evento</li>
                <li>Melhorar nossos serviços e experiência do cliente</li>
                <li>Enviar atualizações importantes sobre seu pedido</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">4. Seus Direitos</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Solicitar correção de dados incorretos</li>
                <li>Solicitar exclusão de suas informações</li>
                <li>Retirar seu consentimento a qualquer momento</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">5. Contato</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Para questões sobre esta política de privacidade ou seus dados pessoais, entre em contato:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> contato@charlydecoracoes.com.br</p>
                <p><strong>WhatsApp:</strong> (11) 99804-1534</p>
                <p><strong>Endereço:</strong> São Paulo, SP</p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="border-t pt-8">
            <p className="text-sm text-gray-500 text-center">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Botão flutuante de scroll para o topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Voltar para o topo"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicy;