import React, { useState } from 'react';
import { Lightbulb, Cookie, Gift, Camera, UtensilsCrossed } from 'lucide-react';
import { cn } from '../lib/utils';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Partners = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: null },
    { id: 'lighting', name: 'Iluminação especial', icon: Lightbulb },
    { id: 'sweets', name: 'Docinhos temáticos', icon: Cookie },
    { id: 'souvenirs', name: 'Lembrancinhas', icon: Gift },
    { id: 'photography', name: 'Fotografia', icon: Camera },
    { id: 'buffet', name: 'Buffet', icon: UtensilsCrossed },
  ];

  const partners = [
    // Example structure - users can add their partners here
    // {
    //   name: "Nome do Parceiro",
    //   phone: "(11) 9 9999-9999",
    //   description: "Descrição dos serviços oferecidos pelo parceiro",
    //   category: "lighting",
    //   images: ["url1", "url2", "url3"]
    // }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Header with Video */}
      <div className="relative py-20 md:py-24 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://i.imgur.com/EYfCGRC.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Parceiros da CHARLY DECORAÇÕES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
              Conheça nossos parceiros especializados que tornam seus eventos ainda mais especiais
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
              ✨ UI e UX incríveis para uma experiência única do usuário ✨
            </p>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                  selectedCategory === category.id
                    ? "bg-charly-pink text-white shadow-lg scale-105"
                    : "bg-card text-foreground hover:bg-charly-pink/10 hover:text-charly-pink border border-border"
                )}
              >
                {IconComponent && <IconComponent className="w-4 h-4" />}
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Partners Grid or Empty State */}
        {filteredPartners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden border-2 border-charly-pink/20 hover:border-charly-purple/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Partner Images Grid */}
                <div className="grid grid-cols-3 gap-1 p-2">
                  {partner.images?.slice(0, 3).map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="aspect-square rounded-lg overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`${partner.name} - Imagem ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Partner Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {partner.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {partner.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="font-medium">📞</span>
                    <span>{partner.phone}</span>
                  </div>

                  {/* WhatsApp Button */}
                  <button
                    onClick={() => {
                      const message = encodeURIComponent(
                        "Olá, venho do site da Charly Decorações e gostaria de saber mais informações sobre os seus serviços."
                      );
                      const phoneNumber = partner.phone.replace(/\D/g, '');
                      window.open(`https://wa.me/55${phoneNumber}?text=${message}`, '_blank');
                    }}
                    className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-medium hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
                  >
                    <span>💬</span>
                    Entrar em Contato
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Em breve!
            </h3>
            <p className="text-muted-foreground">
              Estamos trabalhando para trazer os melhores parceiros para você!
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-charly-pink/10 to-charly-purple/10 rounded-2xl p-8 border border-charly-pink/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Quer ser nosso parceiro?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se à nossa rede de parceiros e faça parte dos eventos mais especiais da região!
            </p>
            <button 
              onClick={() => window.open('https://wa.me/551198041534?text=Olá! Gostaria de saber mais sobre como me tornar um parceiro da Charly Decorações.', '_blank')}
              className="bg-charly-pink text-white px-8 py-3 rounded-lg hover:bg-charly-pink/90 transition-colors font-medium hover:scale-105 transform duration-200"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partners;