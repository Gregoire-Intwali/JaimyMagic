import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Link } from "react-router-dom";
import { Camera, Play, Star, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState , useCallback} from "react";

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  }, []);
  const galleryItems = [
    { type: "image", src: "/gallery/gallery-1.jpeg" },
    { type: "image", src: "/gallery/gallery-2.jpeg" },{ type: "image", src: "/gallery/gallery-19.jpeg" },
    { type: "video", src: "/gallery/video-3.mp4" },
    { type: "image", src: "/gallery/gallery-18.jpeg" },
    { type: "image", src: "/gallery/gallery-4.jpeg" },
    { type: "image", src: "/gallery/gallery-6.jpeg" },
    { type: "image", src: "/gallery/gallery-7.jpeg" },
    { type: "image", src: "/gallery/gallery-8.jpeg" },
    { type: "video", src: "/gallery/video-2.mp4" },
    

    { type: "image", src: "/gallery/gallery-10.jpeg" },
    
    { type: "image", src: "/gallery/gallery-11.jpeg" },
    { type: "image", src: "/gallery/gallery-12.jpeg" },
    { type: "image", src: "/gallery/gallery-13.jpeg" },
    { type: "image", src: "/gallery/gallery-14.jpeg" },
    { type: "video", src: "/gallery/video-1.mp4" },
    { type: "image", src: "/gallery/gallery-3.jpeg" },
    { type: "image", src: "/gallery/gallery-9.jpeg" },
    { type: "image", src: "/gallery/gallery-16.jpeg" },
    { type: "image", src: "/gallery/gallery-17.jpeg" },  
    { type: "image", src: "/gallery/gallery-20.jpeg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3E5E6] via-[#E3E5E6] to-[#E2E3E5]">
      <Navigation />
      {/* Lightbox */}
            {lightboxOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)" }}
                onClick={closeLightbox}
              >
                {/* Close */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-1.5"
                >
                  <X className="h-6 w-6" />
                </button>
      
                {/* Counter */}
                <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
                  {activeIndex + 1} / {galleryItems.length}
                </span>
      
                {/* Prev */}
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  className="absolute left-3 z-10 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-1.5"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
      
                {/* Media */}
                <div
                  className="relative max-w-[85vw] max-h-[80vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {galleryItems[activeIndex].type === "image" ? (
                    <img
                      src={galleryItems[activeIndex].src}
                      className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    />
                  ) : (
                    <video
                      src={galleryItems[activeIndex].src}
                      controls
                      autoPlay
                      className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    />
                  )}
                </div>
      
                {/* Next */}
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-3 z-10 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-1.5"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
      
                {/* Dot indicators */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                  {galleryItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-4 h-2 bg-white"
                          : "w-2 h-2 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
      

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/gallery/gallerij.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 w-full h-full bg-black/60"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Camera className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Galerij</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Bekijk hoogtepunten van onze magische voorstellingen en ervaar de verwondering die we creëren
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <style>{`
            .masonry-grid {
              columns: 2;
              column-gap: 12px;
            }
            @media (min-width: 768px) {
              .masonry-grid { columns: 3; column-gap: 14px; }
            }
            @media (min-width: 1024px) {
              .masonry-grid { columns: 4; column-gap: 16px; }
            }
            .masonry-item {
              break-inside: avoid;
              margin-bottom: 12px;
              position: relative;
              border-radius: 12px;
              overflow: hidden;
              cursor: pointer;
              background: #1c1c1e;
            }
            @media (min-width: 768px) { .masonry-item { margin-bottom: 14px; } }
            @media (min-width: 1024px) { .masonry-item { margin-bottom: 16px; } }
            .masonry-item img,
            .masonry-item video {
              width: 100%;
              height: auto;
              display: block;
              transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            .masonry-item:hover img,
            .masonry-item:hover video {
              transform: scale(1.05);
            }
            .masonry-overlay {
              position: absolute;
              inset: 0;
              background: rgba(0,0,0,0);
              transition: background 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .masonry-item:hover .masonry-overlay {
              background: rgba(0,0,0,0.22);
            }
            .masonry-play {
              width: 52px;
              height: 52px;
              color: white;
              opacity: 0;
              transform: scale(0.8);
              transition: opacity 0.3s ease, transform 0.3s ease;
              filter: drop-shadow(0 2px 12px rgba(0,0,0,0.7));
            }
            .masonry-item:hover .masonry-play {
              opacity: 1;
              transform: scale(1);
            }
          `}</style>

          <div className="masonry-grid">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="masonry-item shadow-md"
                onClick={() => item.type === "video" ? setSelectedVideo(item.src) : openLightbox(index)}
              >
                {item.type === "image" ? (
                  <img src={item.src} loading="lazy" />
                ) : (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    loop
                    onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                    onMouseLeave={e => {
                      const v = e.currentTarget as HTMLVideoElement;
                      v.pause();
                      v.currentTime = 0;
                    }}
                  />
                )}
                <div className="masonry-overlay">
                  {item.type === "video" && <Play className="masonry-play" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-2xl bg-[#4E4F51] border-0">
          <div className="relative w-full aspect-video">
            {selectedVideo && (
              <video src={selectedVideo} controls autoPlay className="w-full h-full rounded-lg" />
            )}
          </div>
        </DialogContent>
      </Dialog>

  {/* Testimonials */}
<section className="py-8 px-4 bg-gradient-to-r from-[#4E4F51]/10 to-[#101013]/15">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#4E4F51] mb-12">
      Wat Mensen Zeggen
    </h2>

    <Carousel className="w-full">
      <CarouselContent>

        {[
          {
            text: `Magic Jaimy is meer dan een goochelaar; hij is een sfeermaker. Of het nu gaat om een intieme setting aan tafel (close-up magie) of een grote podiumact, hij weet de aandacht vast te houden van de eerste tot de laatste seconde.

Mijn advies? Twijfel niet. Als je wilt dat je gasten nog jaren napraten over je feest, dan is Jaimy de man die je moet hebben.`,
            name: "Michael Willemen",
          },
          {
            text: `Magic Jaimy heeft al meerdere keren opgetreden voor onze familie en weet ons telkens opnieuw te verrassen. Zijn shows blijven origineel, met telkens nieuwe en creatieve acts die zowel jong als oud boeien.

Daarnaast heeft hij een uitstekende klik met kinderen. Hij betrekt hen actief, stelt hen op hun gemak en laat hen echt genieten van de magie. Het is ongelofelijk om te zien hoe hij hen laat lachen, verwonderen en zelfs een beetje laat geloven in echte magie.

Een absolute aanrader voor elk evenement! Een bijzonder getalenteerde en professionele entertainer.`,
            name: "Dorine Baksteen",
          },
          {
            text: `Magic Jaimy was een absolute topper op ons verjaardagsfeestje! Iedereen hing aan zijn lippen en werd continu verrast door zijn trucs. Hij bracht veel humor en interactie, waardoor de sfeer meteen geweldig zat. Echt een aanrader als je je feest net dat beetje extra magie wilt geven!`,
            name: "Marieke Baksteen",
          },
          {
            text: `Zijn trucs zijn niet alleen indrukwekkend, maar ook origineel en verrassend.
Naast zijn talent als goochelaar is hij ook gewoon een ontzettend vriendelijk en professioneel persoon.`,
            name: "Eline Baksteen",
          },
          {
            text: `Iemand met duidelijk veel passie voor goochelen. Altijd leuk om te zien hoe hij met zijn vak bezig is. Zeker de moeite waard om eens te boeken!`,
            name: "Anke Baksteen",
          },
          {
            text: `Bij ons op een feestje geweest. Was super leuk. Heel gevarieerd en past zich aan aan het publiek. Een aanrader voor wie een fantastisch magisch avond wil!`,
            name: "Kristof De Bruyn",
          },
        ].map((review, index) => (
          <CarouselItem key={index} className="md:basis-1/1">
            <Card className="bg-white border-[#4E4F51]/30">
              <CardContent className="p-8 text-center">
                
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#4E4F51] fill-current" />
                  ))}
                </div>

                <p className="text-lg text-[#4E4F51]/80 mb-6 italic">
                  "{review.text}"
                </p>

                <div className="text-[#4E4F51] font-semibold">
                  {review.name}
                </div>

              </CardContent>
            </Card>
          </CarouselItem>
        ))}

      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 text-[#4E4F51] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-[#4E4F51] mb-6">Klaar Voor Uw Eigen Magische Ervaring?</h2>
          <p className="text-xl text-[#4E4F51]/80 mb-8">
            Boek vandaag nog en creëer onvergetelijke momenten voor u en uw gasten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#4E4F51] hover:bg-[#101013] text-white font-bold px-8 py-3 text-lg">
              <Link to="/booking">Boek Uw Show</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#4E4F51] text-[#4E4F51] hover:bg-[#4E4F51] hover:text-white px-8 py-3 text-lg">
              <Link to="/about">Meer Over Ons</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;