import { ArrowLeft, FileText, CheckCircle, AlertTriangle, CreditCard, Calendar, Phone, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Termos de Uso
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Conheça os termos e condições para utilização dos nossos serviços de decoração.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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
              <div className="p-2 bg-blue-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">1. Aceitação dos Termos</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Ao utilizar os serviços da Charly Decorações, você concorda com estes termos e condições. 
                Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>
              <p>
                Estes termos podem ser atualizados periodicamente, e é sua responsabilidade revisá-los regularmente.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">2. Serviços Oferecidos</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                A Charly Decorações oferece serviços de decoração para eventos, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Decoração de festas infantis e adultas</li>
                <li>Decoração de casamentos e eventos corporativos</li>
                <li>Aluguel de itens decorativos</li>
                <li>Consultoria em decoração</li>
                <li>Serviços personalizados conforme solicitação</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <CreditCard className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">3. Pagamentos e Preços</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Condições de pagamento e preços:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Os preços são válidos por 30 dias após o orçamento</li>
                <li>É necessário um sinal de 50% para confirmar o pedido</li>
                <li>O restante deve ser pago até 48h antes do evento</li>
                <li>Aceitamos PIX, cartão de crédito e débito</li>
                <li>Preços podem variar conforme disponibilidade e sazonalidade</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">4. Cancelamentos e Alterações</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Política de cancelamentos e alterações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancelamentos com mais de 15 dias: reembolso de 80% do valor pago</li>
                <li>Cancelamentos entre 7-15 dias: reembolso de 50% do valor pago</li>
                <li>Cancelamentos com menos de 7 dias: sem reembolso</li>
                <li>Alterações podem ser feitas até 7 dias antes do evento</li>
                <li>Alterações de última hora podem gerar custos adicionais</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">5. Responsabilidades</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                <strong>Nossas responsabilidades:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Entregar os serviços conforme acordado</li>
                <li>Manter a qualidade e segurança dos itens</li>
                <li>Cumprir prazos estabelecidos</li>
                <li>Fornecer suporte durante o evento</li>
              </ul>
              <p className="mt-6">
                <strong>Responsabilidades do cliente:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações precisas sobre o evento</li>
                <li>Garantir acesso ao local na data acordada</li>
                <li>Cuidar dos itens alugados durante o evento</li>
                <li>Comunicar alterações com antecedência</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">6. Contato e Suporte</h2>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Para dúvidas, suporte ou questões relacionadas aos termos de uso:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> contato@charlydecoracoes.com.br</p>
                <p><strong>WhatsApp:</strong> (11) 99804-1534</p>
                <p><strong>Horário de atendimento:</strong> Segunda a Sexta, 9h às 18h</p>
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Voltar para o topo"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default TermsOfService;