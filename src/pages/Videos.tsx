import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Play, Clock, Eye } from "lucide-react";

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  // Mock data - in a real app, this would come from an API
  const videos = [
    {
      id: 1,
      title: "Casamento dos Sonhos - Maria & João",
      category: "Casamento",
      duration: "2:30",
      thumbnail: "https://images.unsplash.com/photo-1519167758481-83f29da73fb2?w=400",
      videoUrl: "https://sample-videos.com/zip/10/mp4/mp4-1920x1080/BigBuckBunny_320x180.mp4",
      description: "Uma celebração emocionante com decoração romântica",
      views: "1.2k"
    },
    {
      id: 2,
      title: "Festa Infantil Princesa Sofia",
      category: "Infantil",
      duration: "1:45",
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
      videoUrl: "https://sample-videos.com/zip/10/mp4/mp4-1920x1080/BigBuckBunny_320x180.mp4",
      description: "Um mundo mágico criado para a pequena princesa",
      views: "856"
    },
    {
      id: 3,
      title: "Aniversário 50 Anos - Elegância Total",
      category: "Aniversário",
      duration: "3:15",
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400",
      videoUrl: "https://sample-videos.com/zip/10/mp4/mp4-1920x1080/BigBuckBunny_320x180.mp4",
      description: "Sofisticação e elegância em cada detalhe",
      views: "2.1k"
    },
    {
      id: 4,
      title: "Evento Corporativo Tech Summit",
      category: "Corporativo",
      duration: "4:20",
      thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400",
      videoUrl: "https://sample-videos.com/zip/10/mp4/mp4-1920x1080/BigBuckBunny_320x180.mp4",
      description: "Design moderno para o maior evento tech da cidade",
      views: "3.5k"
    }
  ];

  const categories = ["Todos", "Casamento", "Infantil", "Aniversário", "Corporativo"];

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
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-gradient-primary mb-6">
              Galeria de Vídeos
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Veja nossos projetos ganhando vida através de vídeos exclusivos
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Buscar vídeos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 bg-card/50 backdrop-blur-sm border-charly-pink/20 focus:border-charly-pink"
                />
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
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

        {/* Featured Video Player */}
        {currentVideo && (
          <section className="pb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden stats-card">
                  <CardContent className="p-0">
                    <video
                      src={currentVideo}
                      controls
                      autoPlay
                      className="w-full aspect-video"
                      onEnded={() => setCurrentVideo(null)}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Videos Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <Card key={video.id} className="group cursor-pointer overflow-hidden stats-card">
                  <CardContent className="p-0">
                    <div 
                      className="relative overflow-hidden"
                      onClick={() => setCurrentVideo(video.videoUrl)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-charly-pink/80 transition-all duration-300">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-white" />
                        <span className="text-white text-xs">{video.duration}</span>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1 flex items-center gap-1">
                        <Eye className="w-3 h-3 text-white" />
                        <span className="text-white text-xs">{video.views}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-charly-pink transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {video.description}
                      </p>
                      <Badge variant="outline" className="border-charly-purple/30 text-charly-purple">
                        {video.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
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