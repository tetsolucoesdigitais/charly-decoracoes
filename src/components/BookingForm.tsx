import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Send, User, MapPin, Calendar, Package, Instagram, Star } from "lucide-react";
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
  const { toast } = useToast();

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
    "💡 Iluminação especial",
    "🍰 Docinhos temáticos",
    "🎀 Lembrancinhas",
    "📸 Fotografia",
    "🍽️ Buffet",
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
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5511980411534?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowSuccess(true);
  };

  const nextStep = () => {
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
                            : "border-border hover:border-charly-pink/50"
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
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Resumo do Orçamento:</h3>
                  <div className="text-sm space-y-1">
                    <p><strong>Evento:</strong> {eventTypes.find(type => type.value === formData.eventType)?.label || formData.customEventType}</p>
                    <p><strong>Convidados:</strong> {formData.guestCount}</p>
                    <p><strong>Data:</strong> {formData.eventDate ? new Date(formData.eventDate).toLocaleDateString('pt-BR') : 'Não informada'}</p>
                    <p><strong>Serviços:</strong> {formData.services.length} selecionados</p>
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