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
} from "@/components/ui/carousel";

import { Link } from "react-router-dom";
import { Camera, Play, Star, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useCallback } from "react";

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const getCardSpacing = (text) => {
  const length = text.length;

  if (length > 400) return "py-6 sm:py-10"; // long review
  if (length > 200) return "py-6 sm:py-8";  // medium
  return "py-6 sm:py-6";                   // short
};

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  }, []);

  const galleryItems = [
    { type: "image", src: "/gallery/gallery-1.jpeg" },
    { type: "image", src: "/gallery/gallery-2.jpeg" },
    { type: "image", src: "/gallery/gallery-19.jpeg" },
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

  const reviews = [
    {
      text: `Magic Jaimy is meer dan een goochelaar; hij is een sfeermaker. Of het nu gaat om een intieme setting aan tafel (close-up magie) of een grote podiumact, hij weet de aandacht vast te houden van de eerste tot de laatste seconde.

Mijn advies? Twijfel niet. Als je wilt dat je gasten nog jaren napraten over je feest, dan is Jaimy de man die je moet hebben.`,
      name: "Michael W.",
    },
    {
      text: `Magic Jaimy heeft al meerdere keren opgetreden voor onze familie en weet ons telkens opnieuw te verrassen. Zijn shows blijven origineel, met telkens nieuwe en creatieve acts die zowel jong als oud boeien.

Daarnaast heeft hij een uitstekende klik met kinderen. Hij betrekt hen actief, stelt hen op hun gemak en laat hen echt genieten van de magie. Het is ongelofelijk om te zien hoe hij hen laat lachen, verwonderen en zelfs een beetje laat geloven in echte magie.

Een absolute aanrader voor elk evenement!`,
      name: "Dorine B.",
    },
    {
      text: `Magic Jaimy was een absolute topper op ons verjaardagsfeestje! Iedereen hing aan zijn lippen en werd continu verrast.`,
      name: "Marieke B.",
    },
    {
      text: `Zijn trucs zijn niet alleen indrukwekkend, maar ook origineel en verrassend.
Daarnaast is hij ook een zeer vriendelijk en professioneel persoon.`,
      name: "Eline B.",
    },
    {
      text: `Iemand met duidelijk veel passie voor goochelen. Zeker de moeite waard!`,
      name: "Anke B.",
    },
    {
      text: `Heel gevarieerd en past zich perfect aan aan het publiek. Een aanrader!`,
      name: "Kristof D.B.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3E5E6] via-[#E3E5E6] to-[#E2E3E5]">
      <Navigation />

      {/* HERO */}
      <section className="relative py-14 sm:py-20 px-4 text-center">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/gallery/gallerij.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Camera className="h-12 w-12 sm:h-16 sm:w-16 text-white mx-auto mb-4 sm:mb-6" />
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Galerij
          </h1>
          <p className="text-base sm:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Bekijk hoogtepunten van onze magische voorstellingen
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer aspect-square"
                onClick={() =>
                  item.type === "video"
                    ? setSelectedVideo(item.src)
                    : openLightbox(index)
                }
              >
                {item.type === "image" ? (
                  <img src={item.src} className="w-full h-full object-cover" />
                ) : (
                  <video src={item.src} muted autoPlay loop className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (FIXED) */}
      <section className="py-10 sm:py-16 px-4 bg-gradient-to-r from-[#4E4F51]/10 to-[#101013]/15">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#4E4F51] mb-8 sm:mb-12">
            Wat Mensen Zeggen
          </h2>

          <div className="relative px-10 sm:px-14">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 basis-full">
                    <Card className="bg-white border-[#4E4F51]/30 min-h-[260px] sm:min-h-[320px] flex items-center">
                      <CardContent
                        className={`w-full px-5 sm:px-8 text-center ${getCardSpacing(review.text)}`}
                      >
                        <div className="flex justify-center mb-3 sm:mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-[#4E4F51] fill-current" />
                          ))}
                        </div>

                        <p className="text-sm sm:text-lg leading-relaxed italic text-[#4E4F51]/80 mb-4 sm:mb-6 whitespace-pre-line">
                          {review.text}
                        </p>

                        <div className="text-sm sm:text-base font-semibold text-[#4E4F51]">
                          {review.name}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA */}
       <section className="py-16 ">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 text-[#4E4F51] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-[#4E4F51] mb-6">
            Klaar om de Magie te Ervaren?
          </h2>
          <p className="text-xl text-[#4E4F51]/80 mb-8">
            Laten we een onvergetelijke ervaring creëren voor u en uw gasten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#4E4F51] hover:bg-[#101013] text-[white] font-bold px-8 py-3 text-lg">
              <Link to="/booking">Boek Uw Show</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#4E4F51] text-[#4E4F51] hover:bg-[#4E4F51] hover:text-[white] px-8 py-3 text-lg">
              <Link to="/">Ontdek Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;