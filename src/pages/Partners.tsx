import React, { useState } from 'react';
import { Lightbulb, Cookie, Gift, Camera, UtensilsCrossed, FileText, MessageCircle, ExternalLink, Home } from 'lucide-react';
import { cn } from '../lib/utils';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Partners = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: null },
    { id: 'lighting', name: 'Iluminação especial', icon: Lightbulb },
    { id: 'sweets', name: 'Docinhos temáticos', icon: Cookie },
    { id: 'souvenirs', name: 'Lembrancinhas', icon: Gift },
    { id: 'photography', name: 'Fotografia', icon: Camera },
    { id: 'buffet', name: 'Buffet', icon: UtensilsCrossed },
    { id: 'salon', name: 'Salão de Festas', icon: Home },
    { id: 'papelaria', name: 'Papelaria', icon: FileText },
  ];

  const partners = [
    {
      id: 1,
      name: "Ateliê Doce Arte - Papelaria Personalizada",
      category: "papelaria",
      description: "Especializada em papelaria personalizada para eventos especiais, criando convites únicos e materiais gráficos de alta qualidade.",
      logo: "https://i.imgur.com/EQeucJZ.png",
      photos: [
        "https://i.imgur.com/wLxckJX.jpeg",
        "https://i.imgur.com/mW1t0y4.jpeg",
        "https://i.imgur.com/5Yc7Y9c.jpeg"
      ],
      whatsapp: "5511963438061",
      website: null
    },
    {
      id: 2,
      name: "Salão New Festas",
      category: "salon",
      description: "Espaço completo para eventos e celebrações especiais, oferecendo ambiente aconchegante e estrutura completa para tornar seu evento inesquecível.",
      logo: "https://i.imgur.com/mSh1JIV.png",
      photos: [
        "https://lh3.googleusercontent.com/p/AF1QipOWR0Y_BqOgIIjEdPC080yah2J9zAbFwnoVYOau=s680-w680-h510-rw",
        "https://lh3.googleusercontent.com/p/AF1QipNHjnxJ1JJN_VYr3joGbJY5cMlxV6zXHojuzKUt=s680-w680-h510-rw",
        "https://lh3.googleusercontent.com/p/AF1QipNnez7T8kvhYpCmOi5bI9p4Xb5WktxxXqf2gzfx=s680-w680-h510-rw"
      ],
      whatsapp: "5511962789947",
      website: null
    },
    {
      id: 3,
      name: "J.E Eventos - Casa com Piscina",
      category: "salon",
      description: "Casa especial para eventos com piscina, proporcionando um ambiente único e diferenciado para suas celebrações mais especiais.",
      logo: "https://i.imgur.com/gWg6Kix.png",
      photos: [
        "https://i.imgur.com/ntl7bU6.png",
        "https://i.imgur.com/4CCVEpG.png",
        "https://i.imgur.com/kA7MPxm.png"
      ],
      whatsapp: "5511948534177",
      website: null
    },
    {
      id: 4,
      name: "Buffet Lesssgal",
      category: "buffet",
      description: "Buffet especializado em eventos e celebrações, oferecendo cardápios personalizados e serviços de alta qualidade para tornar seu evento perfeito.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWCyM5riTFgUkPLbxP-QS-c-G3ybeWEUbDQ&s",
      photos: [
        "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzLTKP5hSrECmKWu3UonfEdXKNp8cAPYV0GCCaispPd5NscLAf56iEQeHE9ygi3QF2Axcea6TVBwvJCayFGwePE8Q-bKXDepWl4gyulxz_9jPhoRaf9RP8VWAfUowD-7EEPZ1rYYw=s680-w680-h510-rw",
        "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzS0O_9lrhe-smYcAGyXIO_G8QENvZB1FvzA3lcY69pSqprVYEYZ52rPkPBT8mn9YlzgeR1UPWt9vx13tgKzXpBTtHi50hSgEzFLBM4Um-LCUXlvktt9rE57GROOyuDJ48ifjH9=s680-w680-h510-rw",
        "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxa9caJzNVpRtsNDjD5ETt8gmQL4j4EkhRgGRgKhk0S8eGJ789_z6HO_lJa1EhAcqQ9PeV4Yxo6WPQEjUFYDA9c4rhCeqYLSo7Cs6Yk9XS06cPI9dfo5mx6czQxLovVbC430nQp=s680-w680-h510-rw"
      ],
      whatsapp: "5511969698249",
      website: null
    },
    {
      id: 5,
      name: "Brubs Doces",
      category: "sweets",
      description: "Docinhos temáticos artesanais para eventos, com qualidade e sabor incomparáveis.",
      logo: "https://i.imgur.com/jvwy31l.png",
      photos: [
        "https://i.imgur.com/OKRUqmV.jpeg",
        "https://i.imgur.com/CDCh4lF.jpeg",
        "https://i.imgur.com/FKyWbPK.jpeg"
      ],
      whatsapp: "5511982818524",
      website: null
    }
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

        {/* Partners Grid */}
        {filteredPartners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => {
              const categoryName = categories.find(cat => cat.id === partner.category)?.name || partner.category;
              return (
                <Card key={partner.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-charly-pink/20 hover:border-charly-pink/60 transition-all duration-500 hover:shadow-2xl hover:shadow-charly-pink/20 group relative">
                  {/* Efeito Neon */}
                  <div className="absolute inset-0 bg-gradient-to-r from-charly-pink/0 via-charly-pink/5 to-charly-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-charly-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <CardContent className="p-0 relative z-10">
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-charly-pink/90 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg backdrop-blur-sm">
                        {categoryName}
                      </span>
                    </div>
                    
                    {/* Logo Section */}
                    <div className="relative h-56 bg-gradient-to-br from-charly-pink/10 to-charly-purple/10 flex items-center justify-center group-hover:from-charly-pink/15 group-hover:to-charly-purple/15 transition-all duration-500">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="cursor-pointer group/logo">
                            <img 
                              src={partner.logo} 
                              alt={`Logo ${partner.name}`}
                              className="w-32 h-32 object-cover rounded-2xl border-3 border-white/30 shadow-2xl group-hover/logo:scale-110 group-hover/logo:shadow-charly-pink/30 transition-all duration-500 hover:border-charly-pink/50"
                            />
                            <div className="absolute inset-0 bg-charly-pink/0 group-hover/logo:bg-charly-pink/10 rounded-2xl transition-all duration-300"></div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <img 
                            src={partner.logo} 
                            alt={`Logo ${partner.name}`}
                            className="w-full h-auto rounded-lg"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-charly-pink transition-colors duration-300">{partner.name}</h3>
                      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                        {partner.description}
                      </p>
                      
                      {/* Photos Grid */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {partner.photos.map((photo, index) => (
                          <Dialog key={index}>
                            <DialogTrigger asChild>
                              <div className="aspect-square rounded-xl overflow-hidden cursor-pointer group/photo relative">
                                <img 
                                  src={photo} 
                                  alt={`${partner.name} - Foto ${index + 1}`}
                                  className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 border-2 border-transparent group-hover/photo:border-charly-pink/50 rounded-xl transition-all duration-300"></div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <img 
                                src={photo} 
                                alt={`${partner.name} - Foto ${index + 1}`}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        ))}
                      </div>
                      
                      {/* WhatsApp Button */}
                      <button
                        onClick={() => window.open(`https://wa.me/${partner.whatsapp}?text=Olá! 👋 Venho através do site Charly Decorações e gostaria de saber mais sobre os seus serviços! 🎉✨`, '_blank')}
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-4 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-medium flex items-center justify-center gap-2 group/btn hover:scale-105 relative overflow-hidden"
                      >
                        {/* Efeito Neon */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 border-2 border-transparent group-hover/btn:border-purple-400/50 rounded-xl transition-all duration-300"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl blur opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300"></div>
                        
                        <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
                        <span className="relative z-10">Entre em Contato</span>
                      </button>
                      
                      {/* Website Link */}
                      {partner.website && (
                        <button
                          onClick={() => window.open(partner.website, '_blank')}
                          className="w-full mt-3 border-2 border-charly-pink/30 text-charly-pink py-3 px-4 rounded-xl hover:bg-charly-pink/10 hover:border-charly-pink/60 transition-all duration-300 font-medium flex items-center justify-center gap-2 group/btn2 hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn2:scale-110 transition-transform duration-300" />
                          Visitar Site
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
              onClick={() => window.open('https://wa.me/5511980411534?text=Olá gostaria de ter minha marca no seu site como parceiro!', '_blank')}
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