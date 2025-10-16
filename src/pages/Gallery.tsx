import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Eye, Heart } from "lucide-react";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Imagens reais do portfólio
  const images = [
    {
      id: 1,
      url: "https://i.imgur.com/pMfOlY1.jpeg",
      title: "Decoração Especial",
      category: "Infantil",
      description: "Decoração encantadora e temática"
    },
    {
      id: 2,
      url: "https://i.imgur.com/LgrkyAC.jpeg",
      title: "Festa Temática",
      category: "Infantil",
      description: "Ambiente alegre e colorido"
    },
    {
      id: 3,
      url: "https://i.imgur.com/ENDkd3V.jpeg",
      title: "Decoração Infantil",
      category: "Infantil",
      description: "Decoração lúdica e criativa"
    },
    {
      id: 4,
      url: "https://i.imgur.com/s4H40c1.jpeg",
      title: "Festa Criativa",
      category: "Infantil",
      description: "Ambiente mágico para crianças"
    },
    {
      id: 5,
      url: "https://i.imgur.com/YuZ5vTg.jpeg",
      title: "Decoração Temática",
      category: "Infantil",
      description: "Decoração com muito carinho"
    },
    {
      id: 6,
      url: "https://i.imgur.com/rrijQfg.jpeg",
      title: "Festa Especial",
      category: "Infantil",
      description: "Decoração dos sonhos"
    },
    {
      id: 7,
      url: "https://i.imgur.com/tnBSl9B.jpeg",
      title: "Decoração Personalizada",
      category: "Infantil",
      description: "Ambiente único e especial"
    },
    {
      id: 8,
      url: "https://i.imgur.com/Ugoq8Hx.jpeg",
      title: "Festa Mágica",
      category: "Infantil",
      description: "Decoração encantadora"
    },
    {
      id: 9,
      url: "https://i.imgur.com/nObtbTv.jpeg",
      title: "Decoração Colorida",
      category: "Infantil",
      description: "Ambiente alegre e divertido"
    },
    {
      id: 10,
      url: "https://i.imgur.com/Fdxqi5V.jpeg",
      title: "Festa Infantil",
      category: "Infantil",
      description: "Decoração criativa e única"
    },
    {
      id: 11,
      url: "https://i.imgur.com/o3p18z7.jpeg",
      title: "Decoração Temática",
      category: "Infantil",
      description: "Ambiente mágico e colorido"
    },
    {
      id: 12,
      url: "https://i.imgur.com/raJRRNP.jpeg",
      title: "Festa Especial",
      category: "Infantil",
      description: "Decoração encantadora"
    },
    {
      id: 13,
      url: "https://i.imgur.com/TybBHJs.jpeg",
      title: "Decoração Infantil",
      category: "Infantil",
      description: "Ambiente alegre para crianças"
    },
    {
      id: 14,
      url: "https://i.imgur.com/dLoUtx9.jpeg",
      title: "Festa Criativa",
      category: "Infantil",
      description: "Decoração lúdica e divertida"
    },
    {
      id: 15,
      url: "https://i.imgur.com/CRFNwgq.jpeg",
      title: "Decoração Personalizada",
      category: "Infantil",
      description: "Ambiente único e especial"
    },
    {
      id: 16,
      url: "https://i.imgur.com/8C4PUx9.jpeg",
      title: "Festa Mágica",
      category: "Infantil",
      description: "Decoração dos sonhos"
    },
    {
      id: 17,
      url: "https://i.imgur.com/09WQLaD.jpeg",
      title: "Decoração Temática",
      category: "Infantil",
      description: "Ambiente encantador"
    },
    {
      id: 18,
      url: "https://i.imgur.com/jnv6oh8.jpeg",
      title: "Festa Especial",
      category: "Infantil",
      description: "Decoração colorida e alegre"
    },
    {
      id: 19,
      url: "https://i.imgur.com/tIdXjCF.jpeg",
      title: "Decoração Infantil",
      category: "Infantil",
      description: "Ambiente mágico para crianças"
    },
    {
      id: 20,
      url: "https://i.imgur.com/ujY8h2R.jpeg",
      title: "Festa Criativa",
      category: "Infantil",
      description: "Decoração lúdica e especial"
    },
    {
      id: 21,
      url: "https://i.imgur.com/XYDz7T4.jpeg",
      title: "Decoração Personalizada",
      category: "Infantil",
      description: "Ambiente único e encantador"
    },
    {
      id: 22,
      url: "https://i.imgur.com/zEZhZNz.jpeg",
      title: "Festa Mágica",
      category: "Infantil",
      description: "Decoração dos sonhos"
    },
    {
      id: 23,
      url: "https://i.imgur.com/pV7SiQ9.jpeg",
      title: "Decoração Temática",
      category: "Infantil",
      description: "Ambiente alegre e colorido"
    },
    {
      id: 24,
      url: "https://i.imgur.com/Dbmxfzw.jpeg",
      title: "Festa Especial",
      category: "Infantil",
      description: "Decoração encantadora"
    },
    {
      id: 25,
      url: "https://i.imgur.com/ISm5J70.jpeg",
      title: "Decoração Infantil",
      category: "Infantil",
      description: "Ambiente mágico e único"
    },
    {
      id: 26,
      url: "https://i.imgur.com/abTagP2.jpeg",
      title: "Festa Criativa",
      category: "Infantil",
      description: "Decoração lúdica para crianças"
    }
  ];

  const categories = ["Todos", "Infantil"];

  const filteredImages = images.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gradient-primary mb-4 sm:mb-6">
              Galeria de Decorações da CHARLY
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 italic font-bold">
              Realizamos a decoração que sempre sonhou para o seu evento
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="pb-8 sm:pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6 sm:mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                <Input
                  placeholder="Buscar por evento ou decoração..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 sm:pl-12 bg-card/50 backdrop-blur-sm border-charly-pink/20 focus:border-charly-pink text-sm sm:text-base"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer transition-all text-xs sm:text-sm ${
                      selectedCategory === category 
                        ? "bg-gradient-primary text-white" 
                        : "border-charly-pink/30 hover:border-charly-pink hover:bg-charly-pink/10"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-12 sm:pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden stats-card">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
                              <Eye className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 hover:text-charly-pink transition-colors" />
                          </div>
                        </div>
                        <div className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                            {image.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                            {image.description}
                          </p>
                          <Badge variant="outline" className="border-charly-purple/30 text-charly-purple text-xs">
                            {image.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-charly-pink/20">
                    <div className="space-y-4">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full max-h-[70vh] object-contain rounded-lg"
                      />
                      <div className="text-center">
                        <h3 className="text-2xl font-semibold text-gradient-primary mb-2">
                          {image.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;