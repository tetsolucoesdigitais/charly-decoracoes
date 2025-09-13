import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search, Play, Eye, Heart } from "lucide-react";

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Vídeos originais do portfólio
  const videos = [
    {
      id: 1,
      title: "Decoração Charly - Vídeo 1",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/nQokL3f.mp4",
      thumbnail: "https://i.imgur.com/nQokL3f.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 2,
      title: "Decoração Charly - Vídeo 2",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/PEpOMeO.mp4",
      thumbnail: "https://i.imgur.com/PEpOMeO.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 3,
      title: "Decoração Charly - Vídeo 3",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/m5WG3PW.mp4",
      thumbnail: "https://i.imgur.com/m5WG3PW.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 4,
      title: "Decoração Charly - Vídeo 4",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/6TIOJS3.mp4",
      thumbnail: "https://i.imgur.com/6TIOJS3.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 5,
      title: "Decoração Charly - Vídeo 5",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/mV8FR70.mp4",
      thumbnail: "https://i.imgur.com/mV8FR70.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 6,
      title: "Decoração Charly - Vídeo 6",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/6KBGy25.mp4",
      thumbnail: "https://i.imgur.com/6KBGy25.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 7,
      title: "Decoração Charly - Vídeo 7",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/OyEkpqr.mp4",
      thumbnail: "https://i.imgur.com/OyEkpqr.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 8,
      title: "Decoração Charly - Vídeo 8",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/oMHpHvS.mp4",
      thumbnail: "https://i.imgur.com/oMHpHvS.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 9,
      title: "Decoração Charly - Vídeo 9",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/ZctHqQg.mp4",
      thumbnail: "https://i.imgur.com/ZctHqQg.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 10,
      title: "Decoração Charly - Vídeo 10",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/zdmvo1I.mp4",
      thumbnail: "https://i.imgur.com/zdmvo1I.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 11,
      title: "Decoração Charly - Vídeo 11",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/Q5f2wEZ.mp4",
      thumbnail: "https://i.imgur.com/Q5f2wEZ.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 12,
      title: "Decoração Charly - Vídeo 12",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/HyVbPfT.mp4",
      thumbnail: "https://i.imgur.com/HyVbPfT.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 13,
      title: "Decoração Charly - Vídeo 13",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/17cwbUM.mp4",
      thumbnail: "https://i.imgur.com/17cwbUM.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 14,
      title: "Decoração Charly - Vídeo 14",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/3UfCLYS.mp4",
      thumbnail: "https://i.imgur.com/3UfCLYS.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 15,
      title: "Decoração Charly - Vídeo 15",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/QH6z8bK.mp4",
      thumbnail: "https://i.imgur.com/QH6z8bK.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 16,
      title: "Decoração Charly - Vídeo 16",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/V4HhXj9.mp4",
      thumbnail: "https://i.imgur.com/V4HhXj9.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    },
    {
      id: 17,
      title: "Decoração Charly - Vídeo 17",
      category: "Vídeos",
      videoUrl: "https://i.imgur.com/EddIAGi.mp4",
      thumbnail: "https://i.imgur.com/EddIAGi.jpg",
      description: "Vídeo exclusivo das decorações Charly"
    }
  ];

  const categories = ["Todos", "Vídeos"];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || video.category === selectedCategory;
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
              Galeria de Vídeos
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
              Veja nossos projetos ganhando vida através de vídeos exclusivos
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
                  placeholder="Buscar vídeos..."
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



        {/* Video Grid */}
        <section className="pb-12 sm:pb-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredVideos.map((video) => (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden stats-card">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4">
                                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
                              <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 hover:text-charly-pink transition-colors" />
                          </div>
                        </div>
                        <div className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                            {video.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                            {video.description}
                          </p>
                          <Badge variant="outline" className="border-charly-purple/30 text-charly-purple text-xs">
                            {video.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="bg-card/95 backdrop-blur-xl border-charly-pink/20 max-w-md">
                    <div className="space-y-4">
                      <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
                        <video
                          src={video.videoUrl}
                          controls
                          className="w-full h-full object-cover"
                          poster={video.thumbnail}
                        >
                          Seu navegador não suporta o elemento de vídeo.
                        </video>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-semibold text-gradient-primary mb-2">
                          {video.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {video.description}
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

export default Videos;