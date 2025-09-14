import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Send, User, MapPin, Calendar, Package, Instagram, Star, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Step 1
  name: string;
  whatsapp: string;
  
  // Step 2
  cep: string;
  address: string;
  city: string;
  neighborhood: string;
  number: string;
  complement: string;
  
  // Step 3
  eventType: string;
  customEventType: string;
  thematic: string;
  themeDescription: string;
  guestCount: string;
  eventDate: string;
  
  // Step 4
  services: string[];
  additionalInfo: string;
}

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    whatsapp: "",
    cep: "",
    address: "",
    city: "",
    neighborhood: "",
    number: "",
    complement: "",
    eventType: "",
    customEventType: "",
    thematic: "",
    themeDescription: "",
    guestCount: "",
    eventDate: "",
    services: [],
    additionalInfo: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [pixCopied, setPixCopied] = useState(false);
  const { toast } = useToast();

  const pixKey = "11998041534";

  const copyPixKey = async () => {
    try {
      // Tenta usar a API moderna do clipboard
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(pixKey);
      } else {
        // Fallback para contextos não seguros
        const textArea = document.createElement('textarea');
        textArea.value = pixKey;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      
      setPixCopied(true);
      toast({
        title: "Chave PIX copiada!",
        description: "A chave PIX foi copiada para sua área de transferência.",
      });
      setTimeout(() => setPixCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar a chave PIX.",
        variant: "destructive",
      });
    }
  };

  const eventTypes = [
    { value: "aniversario", label: "🎂 Aniversário" },
    { value: "casamento", label: "💍 Casamento" },
    { value: "infantil", label: "🎈 Infantil" },
    { value: "corporativo", label: "🏢 Corporativo" },
    { value: "outro", label: "📋 Outro" },
  ];

  const serviceOptions = [
    "🎨 Decoração completa",
    "🎈 Painel de balões",
    "🧩 Locação de peças",
    "🎭 Mesa temática",
    "🎁 Personalizados",
    "🌸 Arranjos florais",
    "🧺 Toalhas e tecidos",
    "📋 Outro",
  ];

  const fetchAddressByCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      
      if (!data.erro) {
        setFormData(prev => ({
          ...prev,
          address: data.logradouro || "",
          city: data.localidade || "",
          neighborhood: data.bairro || "",
        }));
      } else {
        toast({
          title: "CEP não encontrado",
          description: "Verifique o CEP informado e tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao buscar CEP",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    }
  };

  const handleCepChange = (cep: string) => {
    const cleanCep = cep.replace(/\D/g, "");
    setFormData(prev => ({ ...prev, cep: cleanCep }));
    
    if (cleanCep.length === 8) {
      fetchAddressByCep(cleanCep);
    }
  };

  const formatWhatsAppMessage = () => {
    const eventTypeLabel = eventTypes.find(type => type.value === formData.eventType)?.label || formData.customEventType;
    
    return `🎉 *SOLICITAÇÃO DE ORÇAMENTO - CHARLY DECORAÇÕES*
    
👤 *DADOS PESSOAIS*
Nome: ${formData.name}
WhatsApp: ${formData.whatsapp}

📍 *ENDEREÇO DO EVENTO*
CEP: ${formData.cep}
Endereço: ${formData.address}, ${formData.number}
Bairro: ${formData.neighborhood}
Cidade: ${formData.city}
${formData.complement ? `Complemento: ${formData.complement}` : ''}

🎊 *DETALHES DO EVENTO*
Tipo: ${eventTypeLabel}
Temático: ${formData.thematic === 'yes' ? 'Sim ✅' : 'Não ❌'}
${formData.thematic === 'yes' && formData.themeDescription ? `Tema: ${formData.themeDescription}` : ''}
Quantidade de Convidados: ${formData.guestCount}
Data do Evento: ${new Date(formData.eventDate).toLocaleDateString('pt-BR')}

🎨 *SERVIÇOS SOLICITADOS*
${formData.services.map(service => `• ${service}`).join('\n')}

${formData.additionalInfo ? `📝 *INFORMAÇÕES ADICIONAIS*\n${formData.additionalInfo}` : ''}

✨ Aguardo retorno para finalizar os detalhes do orçamento!`;
  };

  const sendToWhatsApp = () => {
    const validationMessage = getValidationMessage();
    
    if (validationMessage) {
      toast({
        title: "Campo obrigatório",
        description: validationMessage,
        variant: "destructive",
      });
      return;
    }
    
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5511980411534?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowSuccess(true);
  };

  const getValidationMessage = () => {
    switch (currentStep) {
      case 1:
        if (!formData.name) return "Preencha o campo Nome para prosseguir";
        if (!formData.whatsapp) return "Preencha o campo WhatsApp para prosseguir";
        break;
      case 2:
        if (!formData.cep) return "Preencha o campo CEP para prosseguir";
        if (!formData.address) return "Preencha o campo Endereço para prosseguir";
        if (!formData.number) return "Preencha o campo Número para prosseguir";
        if (!formData.city) return "Preencha o campo Cidade para prosseguir";
        break;
      case 3:
        if (!formData.eventType) return "Selecione o Tipo de Evento para prosseguir";
        if (!formData.thematic) return "Selecione se o evento é temático para prosseguir";
        if (formData.thematic === 'yes' && !formData.themeDescription.trim()) return "Descreva o tema do evento para prosseguir";
        if (!formData.guestCount) return "Selecione a Quantidade de Convidados para prosseguir";
        if (!formData.eventDate) return "Selecione a Data do Evento para prosseguir";
        break;
      case 4:
        if (formData.services.length === 0) return "Selecione uma opção para prosseguir";
        break;
    }
    return null;
  };

  const nextStep = () => {
    const validationMessage = getValidationMessage();
    
    if (validationMessage) {
      toast({
        title: "Campo obrigatório",
        description: validationMessage,
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.whatsapp;
      case 2:
        return formData.cep && formData.address && formData.city && formData.number;
      case 3:
        const hasThemeDescription = formData.thematic === 'yes' ? formData.themeDescription.trim() !== '' : true;
        return formData.eventType && formData.thematic && formData.guestCount && formData.eventDate && hasThemeDescription;
      case 4:
        return formData.services.length > 0;
      default:
        return false;
    }
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  if (showSuccess) {
    return (
      <section id="booking" className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center card-elegant">
            <CardContent className="pt-8 sm:pt-12 pb-6 sm:pb-8">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🎉</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-4">
                Orçamento Enviado com Sucesso!
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg px-4">
                Seu orçamento foi enviado para nosso WhatsApp. Entraremos em contato em breve!
              </p>
              
              <div className="space-y-3 sm:space-y-4 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.open('https://www.instagram.com/charly_decoracoes/', '_blank')}
                  className="w-full sm:w-auto"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Siga no Instagram
                </Button>
                
                <Button
                  variant="mint"
                  size="lg"
                  onClick={() => window.open('https://share.google/XX80TWwxEP2vjB59W', '_blank')}
                  className="w-full sm:w-auto"
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Avaliar no Google
                </Button>
              </div>
              
              <Button
                variant="ghost"
                onClick={() => {
                  setShowSuccess(false);
                  setCurrentStep(1);
                  setFormData({
                    name: "",
                    whatsapp: "",
                    cep: "",
                    address: "",
                    city: "",
                    neighborhood: "",
                    number: "",
                    complement: "",
                    eventType: "",
                    customEventType: "",
                    thematic: "",
                    themeDescription: "",
                    guestCount: "",
                    eventDate: "",
                    services: [],
                    additionalInfo: "",
                  });
                }}
                className="mt-6"
              >
                Fazer Novo Orçamento
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
            Solicite seu Orçamento
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Preencha os dados abaixo e receba um orçamento personalizado para seu evento
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-3 sm:mb-4 px-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-smooth ${
                  currentStep >= step
                    ? "bg-charly-pink border-charly-pink text-white"
                    : "border-muted-foreground text-muted-foreground"
                }`}
              >
                {step === 1 && <User className="w-4 h-4 sm:w-5 sm:h-5" />}
                {step === 2 && <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />}
                {step === 3 && <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
                {step === 4 && <Package className="w-4 h-4 sm:w-5 sm:h-5" />}
              </div>
            ))}
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-gradient-primary h-2 rounded-full transition-smooth"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto card-elegant">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              {currentStep === 1 && "Dados Pessoais"}
              {currentStep === 2 && "Endereço do Evento"}
              {currentStep === 3 && "Detalhes do Evento"}
              {currentStep === 4 && "Serviços Desejados"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Personal Data */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Digite seu nome completo"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Address */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cep">CEP *</Label>
                  <Input
                    id="cep"
                    value={formData.cep}
                    onChange={(e) => handleCepChange(e.target.value)}
                    placeholder="00000-000"
                    maxLength={8}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Endereço *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="Rua, Avenida..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="number">Número *</Label>
                    <Input
                      id="number"
                      value={formData.number}
                      onChange={(e) => setFormData(prev => ({ ...prev, number: e.target.value }))}
                      placeholder="123"
                    />
                  </div>
                  <div>
                    <Label htmlFor="complement">Complemento</Label>
                    <Input
                      id="complement"
                      value={formData.complement}
                      onChange={(e) => setFormData(prev => ({ ...prev, complement: e.target.value }))}
                      placeholder="Apto, Casa..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input
                      id="neighborhood"
                      value={formData.neighborhood}
                      onChange={(e) => setFormData(prev => ({ ...prev, neighborhood: e.target.value }))}
                      placeholder="Nome do bairro"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      placeholder="Nome da cidade"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Event Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label>Tipo de Evento *</Label>
                  <RadioGroup
                    value={formData.eventType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, eventType: value }))}
                    className="mt-2"
                  >
                    {eventTypes.map((type) => (
                      <div key={type.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={type.value} id={type.value} />
                        <Label htmlFor={type.value}>{type.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  {formData.eventType === "outro" && (
                    <Input
                      className="mt-2"
                      value={formData.customEventType}
                      onChange={(e) => setFormData(prev => ({ ...prev, customEventType: e.target.value }))}
                      placeholder="Especifique o tipo de evento"
                    />
                  )}
                </div>

                <div>
                  <Label>Evento Temático? *</Label>
                  <RadioGroup
                    value={formData.thematic}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, thematic: value, themeDescription: value === 'no' ? '' : prev.themeDescription }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="thematic-yes" />
                      <Label htmlFor="thematic-yes">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="thematic-no" />
                      <Label htmlFor="thematic-no">Não</Label>
                    </div>
                  </RadioGroup>
                  
                  {formData.thematic === "yes" && (
                    <div className="mt-4">
                      <Label htmlFor="themeDescription">Nos fale qual o tema que deseja! *</Label>
                      <Textarea
                        id="themeDescription"
                        value={formData.themeDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, themeDescription: e.target.value }))}
                        placeholder="Descreva o tema do seu evento (ex: Princesas, Super-heróis, Tropical, etc.)"
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guestCount">Quantidade de Convidados *</Label>
                    <Select
                      value={formData.guestCount}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, guestCount: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-20">1 a 20 pessoas</SelectItem>
                        <SelectItem value="21-50">21 a 50 pessoas</SelectItem>
                        <SelectItem value="51-100">51 a 100 pessoas</SelectItem>
                        <SelectItem value="101-200">101 a 200 pessoas</SelectItem>
                        <SelectItem value="200+">Mais de 200 pessoas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="eventDate">Data do Evento *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Services */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <Label>Selecione os serviços desejados *</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {serviceOptions.map((service) => (
                      <div
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-smooth ${
                          formData.services.includes(service)
                            ? "border-charly-pink bg-charly-pink/10"
                            : "border-border hover:border-charly-pink hover:bg-charly-pink/5"
                        }`}
                      >
                        <span className="text-xs sm:text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="additionalInfo">Informações Adicionais</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    placeholder="Descreva detalhes específicos, cores preferidas, tema específico, etc..."
                    rows={4}
                  />
                </div>

                {/* Budget Summary */}
                <div className="bg-gradient-to-br from-charly-pink/10 to-charly-purple/10 p-6 rounded-xl border border-charly-pink/20">
                  <h3 className="text-lg font-bold text-charly-pink mb-4 flex items-center">
                    📋 Resumo do Orçamento
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                     <div className="space-y-2">
                       <div className="bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 p-3 rounded-lg border border-purple-700/50">
                         <p className="font-semibold text-fuchsia-200">Evento:</p>
                         <p className="text-white">{eventTypes.find(type => type.value === formData.eventType)?.label || formData.customEventType || 'Não informado'}</p>
                       </div>
                       <div className="bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 p-3 rounded-lg border border-purple-700/50">
                         <p className="font-semibold text-fuchsia-200">Convidados:</p>
                         <p className="text-white">{formData.guestCount || 'Não informado'}</p>
                       </div>
                       <div className="bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 p-3 rounded-lg border border-purple-700/50">
                         <p className="font-semibold text-fuchsia-200">Data:</p>
                         <p className="text-white">{formData.eventDate ? new Date(formData.eventDate).toLocaleDateString('pt-BR') : 'Não informada'}</p>
                       </div>
                     </div>
                     <div className="space-y-2">
                       <div className="bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 p-3 rounded-lg border border-purple-700/50">
                         <p className="font-semibold text-fuchsia-200">Serviços:</p>
                         <p className="text-white">{formData.services.length} selecionados</p>
                         {formData.services.length > 0 && (
                           <div className="mt-2 space-y-1">
                             {formData.services.slice(0, 3).map((service, index) => (
                               <p key={index} className="text-xs text-purple-200">• {service}</p>
                             ))}
                             {formData.services.length > 3 && (
                               <p className="text-xs text-purple-200">... e mais {formData.services.length - 3}</p>
                             )}
                           </div>
                         )}
                       </div>
                       <div className="bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 p-3 rounded-lg border border-purple-700/50">
                         <p className="font-semibold text-fuchsia-200">Endereço:</p>
                         <p className="text-white text-xs">
                           {formData.address ? `${formData.address}, ${formData.number}` : 'Não informado'}
                         </p>
                         <p className="text-white text-xs">
                           {formData.neighborhood && formData.city ? `${formData.neighborhood}, ${formData.city}` : ''}
                         </p>
                         <p className="text-white text-xs">
                           {formData.cep ? `CEP: ${formData.cep}` : ''}
                         </p>
                       </div>
                     </div>
                   </div>
                  
                  {/* Payment Info */}
                   <div className="mt-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg p-4">
                     <div className="flex items-start space-x-3">
                       <div className="text-amber-400 text-lg">💰</div>
                       <div className="space-y-1">
                         <p className="font-semibold text-amber-100 text-sm">Informações de Pagamento:</p>
                         <p className="text-amber-200/90 text-xs leading-relaxed">
                           Sinal de <span className="font-bold text-amber-100">R$ 200,00</span> para reserva de data e horário.
                         </p>
                         <p className="text-amber-200/90 text-xs">
                           Restante do pagamento: combinamos a melhor forma para você!
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   {/* PIX Card */}
                   <div className="mt-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4">
                     <div className="flex items-center space-x-4">
                       <img 
                         src="https://www.advocacianunes.com.br/wp-content/uploads/2022/04/logo-pix-icone-1024.png" 
                         alt="PIX" 
                         className="w-12 h-12 object-contain"
                       />
                       <div className="flex-1">
                         <p className="font-semibold text-green-100 text-sm mb-1">Chave PIX - Charly Decorações:</p>
                         <div className="flex items-center space-x-2">
                           <p className="text-green-200 text-sm font-mono bg-green-900/30 px-3 py-2 rounded border border-green-500/20 flex-1">
                             11998041534
                           </p>
                           <button
                             onClick={copyPixKey}
                             className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-xs transition-colors"
                           >
                             {pixCopied ? (
                               <>
                                 <Check className="w-3 h-3" />
                                 <span>Copiado!</span>
                               </>
                             ) : (
                               <>
                                 <Copy className="w-3 h-3" />
                                 <span>Copiar</span>
                               </>
                             )}
                           </button>
                         </div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-4 sm:pt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center justify-center w-full sm:w-auto order-2 sm:order-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>

              {currentStep < 4 ? (
                <Button
                  variant="hero"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="flex items-center justify-center w-full sm:w-auto order-1 sm:order-2"
                >
                  Próximo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  variant="gradient"
                  onClick={sendToWhatsApp}
                  disabled={!isStepValid()}
                  className="flex items-center justify-center w-full sm:w-auto order-1 sm:order-2"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Orçamento
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;