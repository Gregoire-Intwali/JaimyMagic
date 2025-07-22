
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Camera, Play, Image, Users, Star, Calendar } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      type: "image",
      title: "Close-up Kaarttruc",
      description: "Een verbazingwekkende kaarttruc van dichtbij",
      category: "Close-up Magie"
    },
    {
      type: "video", 
      title: "Salon Magie Voorstelling",
      description: "Een complete salon magie show",
      category: "Salon Magie"
    },
    {
      type: "image",
      title: "Bedrijfsevenement",
      description: "Magie op een corporate event",
      category: "Evenementen",
      src: "/gallery/bedrijfsevent.jpeg"
    },
    {
      type: "video",
      title: "Mentale Magie",
      description: "Ongelooflijke mentale kunsten",
      category: "Close-up Magie"
    },
    {
      type: "image",
      title: "Privéfeest",
      description: "Magische momenten op een privéfeest",
      category: "Evenementen"
    },
    {
      type: "video",
      title: "Klassieke Illusies",
      description: "Tijdloze magische illusies",
      category: "Salon Magie"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1EB] via-[#F5F1EB] to-[#E8DDD4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Camera className="h-16 w-16 text-[#5E112C] mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-[#5E112C] mb-6">
            Galerij
          </h1>
          <p className="text-xl text-[#5E112C]/80 mb-8 max-w-2xl mx-auto">
            Bekijk hoogtepunten van onze magische voorstellingen en ervaar de verwondering die we creëren
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="bg-[#FEFCF8] border-[#5E112C]/30 hover:border-[#5E112C]/60 transition-all duration-300 group shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-[#5E112C]/10 to-[#3D0B1C]/20 flex items-center justify-center">
                  {item.type === "image" ? (
                    item.src ? (
                      <img src={item.src} alt={item.title} className="h-48 w-48 object-cover rounded-xl group-hover:scale-105 transition-transform" />
                    ) : (
                      <Image className="h-16 w-16 text-[#5E112C] group-hover:scale-110 transition-transform" />
                    )
                  ) : (
                    <Play className="h-16 w-16 text-[#5E112C] group-hover:scale-110 transition-transform" />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#5E112C] text-[#FEFCF8] px-2 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#5E112C] mb-2">{item.title}</h3>
                  <p className="text-[#5E112C]/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#5E112C]/10 to-[#3D0B1C]/15">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#5E112C] mb-12">
            Wat Mensen Zeggen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#FEFCF8] border-[#5E112C]/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#5E112C] fill-current" />
                  ))}
                </div>
                <p className="text-[#5E112C]/80 mb-4 italic">
                  "Ongelooflijk! Onze gasten waren volledig betoverd. De close-up magie was het perfecte gesprek van de avond."
                </p>
                <div className="text-[#5E112C] font-semibold">Sarah van den Berg - Bedrijfsevenement</div>
              </CardContent>
            </Card>

            <Card className="bg-[#FEFCF8] border-[#5E112C]/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#5E112C] fill-current" />
                  ))}
                </div>
                <p className="text-[#5E112C]/80 mb-4 italic">
                  "De salon magie show was fenomenaal! Zowel kinderen als volwassenen waren volledig geboeid. Professioneel en echt magisch!"
                </p>
                <div className="text-[#5E112C] font-semibold">Michael Janssen - Verjaardagsfeest</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 text-[#5E112C] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-[#5E112C] mb-6">
            Klaar Voor Uw Eigen Magische Ervaring?
          </h2>
          <p className="text-xl text-[#5E112C]/80 mb-8">
            Boek vandaag nog en creëer onvergetelijke momenten voor u en uw gasten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#5E112C] hover:bg-[#3D0B1C] text-[#FEFCF8] font-bold px-8 py-3 text-lg">
              <Link to="/booking">Boek Uw Show</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#5E112C] text-[#5E112C] hover:bg-[#5E112C] hover:text-[#FEFCF8] px-8 py-3 text-lg">
              <Link to="/about">Meer Over Ons</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
