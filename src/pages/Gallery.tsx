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

  // Mock data - in a real app, this would come from an API
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519167758481-83f29da73fb2?w=400",
      title: "Casamento Elegante",
      category: "Casamento",
      description: "Decoração romântica com tons pastéis"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
      title: "Festa Infantil Princesa",
      category: "Infantil",
      description: "Tema princesa com muito rosa e dourado"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400",
      title: "Aniversário 50 Anos",
      category: "Aniversário",
      description: "Decoração sofisticada e elegante"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400",
      title: "Evento Corporativo",
      category: "Corporativo",
      description: "Design moderno e profissional"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1519167758481-83f29da73fb2?w=400",
      title: "Festa de 15 Anos",
      category: "15 Anos",
      description: "Decoração temática com muito brilho"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400",
      title: "Bodas de Ouro",
      category: "Casamento",
      description: "Celebração de 50 anos de amor"
    }
  ];

  const categories = ["Todos", "Casamento", "Infantil", "Aniversário", "Corporativo", "15 Anos"];

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
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-gradient-primary mb-6">
              Galeria de Projetos
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore nossa coleção de decorações únicas e inesquecíveis
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
                  placeholder="Buscar por evento ou decoração..."
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

        {/* Gallery Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden stats-card">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                              <Eye className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Heart className="w-6 h-6 text-white/80 hover:text-charly-pink transition-colors" />
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {image.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            {image.description}
                          </p>
                          <Badge variant="outline" className="border-charly-purple/30 text-charly-purple">
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