import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Eye, Heart, Instagram, Image, Video, Play } from "lucide-react";

const PegueEMonte = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [mediaType, setMediaType] = useState("images"); // "images" ou "videos"

  // Imagens do Pegue & Monte
  const images = [
    {
      id: 1,
      url: "https://i.imgur.com/Y58yXvK.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil criativo e colorido"
    },
    {
      id: 2,
      url: "https://i.imgur.com/7Ho7lp4.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil com personagens"
    },
    {
      id: 3,
      url: "https://i.imgur.com/1Q9fyzr.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil divertido"
    },
    {
      id: 4,
      url: "https://i.imgur.com/dwemFmL.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil encantador"
    },
    {
      id: 5,
      url: "https://i.imgur.com/XXDgI1T.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil mágico"
    },
    {
      id: 6,
      url: "https://i.imgur.com/rn6VGe9.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil alegre"
    },
    {
      id: 7,
      url: "https://i.imgur.com/3mjNDbB.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil especial"
    },
    {
      id: 8,
      url: "https://i.imgur.com/3m2kWtB.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil único"
    },
    {
      id: 9,
      url: "https://i.imgur.com/57m9QL8.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil criativo"
    },
    {
      id: 10,
      url: "https://i.imgur.com/J4Dm2Fj.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil personalizado"
    },
    {
      id: 11,
      url: "https://i.imgur.com/ma6bJJe.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil inovador"
    },
    {
      id: 12,
      url: "https://i.imgur.com/QlZoLIv.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil fantástico"
    },
    {
      id: 13,
      url: "https://i.imgur.com/we2nwDM.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil surpreendente"
    },
    {
      id: 14,
      url: "https://i.imgur.com/KA81eyP.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil incrível"
    },
    {
      id: 15,
      url: "https://i.imgur.com/91Jxbrc.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil maravilhoso"
    },
    {
      id: 16,
      url: "https://i.imgur.com/11YVjFs.jpeg",
      title: "Decoração Temática",
      category: "Pegue & Monte",
      description: "Tema infantil espetacular"
    }
  ];

  // Vídeos do Pegue & Monte
  const videos = [
    {
      id: 1,
      url: "https://i.imgur.com/IbItrw4.mp4",
      title: "Pegue & Monte em Ação",
      category: "Pegue & Monte",
      description: "Veja como funciona nosso serviço Pegue & Monte",
      thumbnail: "https://i.imgur.com/Y58yXvK.jpeg"
    }
  ];

  const categories = ["Todos", "Pegue & Monte"];

  const currentMedia = mediaType === "images" ? images : videos;
  
  const filteredMedia = currentMedia.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Botão Flutuante do Instagram */}
      <a
        href="https://www.instagram.com/charly_peguemonte/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <Instagram className="w-6 h-6 text-white group-hover:animate-pulse" />
      </a>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gradient-primary mb-4 sm:mb-6">
              Pegue & Monte Charly
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 italic font-bold">
              Temas infantis incríveis - Praticidade, beleza e economia.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="pb-8 sm:pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Seletor de Mídia */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="bg-card/50 backdrop-blur-sm rounded-full p-1 border border-charly-pink/20">
                  <div className="flex">
                    <button
                      onClick={() => setMediaType("images")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm sm:text-base ${
                        mediaType === "images"
                          ? "bg-gradient-primary text-white shadow-lg"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Image className="w-4 h-4" />
                      Imagens
                    </button>
                    <button
                      onClick={() => setMediaType("videos")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm sm:text-base ${
                        mediaType === "videos"
                          ? "bg-gradient-primary text-white shadow-lg"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Video className="w-4 h-4" />
                      Vídeos
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="relative mb-6 sm:mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                <Input
                  placeholder={`Buscar ${mediaType === "images" ? "imagens" : "vídeos"}...`}
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

        {/* Media Grid */}
        <section className="pb-12 sm:pb-20">
          <div className="container mx-auto px-4">
            <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
              mediaType === "videos" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}>
              {filteredMedia.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden stats-card">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          {mediaType === "images" ? (
                            <img
                              src={item.url}
                              alt={item.title}
                              className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden">
                              <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4">
                                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
                              {mediaType === "images" ? (
                                <Eye className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                              ) : (
                                <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                              )}
                            </div>
                          </div>
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 hover:text-charly-pink transition-colors" />
                          </div>
                        </div>
                        <div className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                            {item.description}
                          </p>
                          <Badge variant="outline" className="border-charly-purple/30 text-charly-purple text-xs">
                            {item.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className={`bg-card/95 backdrop-blur-xl border-charly-pink/20 ${
                    mediaType === "videos" ? "max-w-md" : "max-w-4xl"
                  }`}>
                    <div className="space-y-4">
                      {mediaType === "images" ? (
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full max-h-[70vh] object-contain rounded-lg"
                        />
                      ) : (
                        <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
                          <video
                            src={item.url}
                            controls
                            className="w-full h-full object-cover"
                            poster={item.url}
                          >
                            Seu navegador não suporta o elemento de vídeo.
                          </video>
                        </div>
                      )}
                      <div className="text-center">
                        <h3 className="text-2xl font-semibold text-gradient-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
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

export default PegueEMonte;