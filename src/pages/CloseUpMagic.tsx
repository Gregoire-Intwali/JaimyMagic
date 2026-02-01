import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Star, Sparkles, X, ChevronLeft, ChevronRight, Search } from "lucide-react";

const galleryImages = [
  { src: "/gallery/closeup-1.jpeg", alt: "Close-up magie moment 1" },
  { src: "/gallery/closeup-2.jpeg", alt: "Close-up magie moment 2" },
  { src: "/gallery/closeup-3.jpeg", alt: "Close-up magie moment 3" },
  { src: "/gallery/closeup-4.jpeg", alt: "Close-up magie moment 4" },
  { src: "/gallery/closeup-5.jpeg", alt: "Close-up magie moment 5" },
  { src: "/gallery/closeup-6.jpeg", alt: "Close-up magie moment 6" },
  { src: "/gallery/closeup-7.jpeg", alt: "Close-up magie moment 7" },
  { src: "/gallery/closeup-8.jpeg", alt: "Close-up magie moment 8" },
];

// Grid positions: [colStart, colEnd, rowStart, rowEnd]
const gridSpans = [
  [1, 3, 1, 3], // 1 – groot links
  [3, 4, 1, 2], // 2
  [4, 5, 1, 2], // 3
  [3, 4, 2, 3], // 4
  [4, 5, 2, 3], // 5
  [1, 2, 3, 4], // 6
  [2, 3, 3, 4], // 7
  [3, 5, 3, 4], // 8 – groot rechts
];

const CloseUpMagic = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, goToPrev, goToNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

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
            {activeIndex + 1} / {galleryImages.length}
          </span>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-3 z-10 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-1.5"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Image */}
          <div className="relative max-w-[85vw] max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
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
            {galleryImages.map((_, i) => (
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
          <div className="w-full h-full bg-[url('/gallery/closeup.jpeg')] bg-cover bg-center md:bg-top"></div>
          <div className="absolute inset-0 w-full h-full bg-black/60"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Users className="h-16 w-16 text-[white] mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Close-up Magie
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Bij close-up magic gebeurt de magie letterlijk in de handen van het publiek. Met kaarten, munten en alledaagse voorwerpen ontstaat er verwondering van heel dichtbij. Geen afstand, geen podium — alleen pure magie, persoonlijk en interactief.
          </p>
          <Button asChild size="lg" className="bg-[#4E4F51] hover:bg-[#101013] text-[white] font-bold px-8 py-3 text-lg">
            <Link to="/booking">Boek Deze Ervaring</Link>
          </Button>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-[white] border-[#4E4F51]/30 text-center shadow-lg">
              <CardHeader>
                <Clock className="h-12 w-12 text-[#4E4F51] mx-auto mb-4" />
                <CardTitle className="text-[#4E4F51]">Duur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">1-3 uur mingel magie</p>
              </CardContent>
            </Card>

            <Card className="bg-[white] border-[#4E4F51]/30 text-center shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#4E4F51] mx-auto mb-4" />
                <CardTitle className="text-[#4E4F51]">Groepsgrootte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">Perfect voor elke groepsgrootte</p>
              </CardContent>
            </Card>

            <Card className="bg-[white] border-[#4E4F51]/30 text-center shadow-lg">
              <CardHeader>
                <Star className="h-12 w-12 text-[#4E4F51] mx-auto mb-4" />
                <CardTitle className="text-[#4E4F51]">Ervaring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">Interactief & persoonlijk</p>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#4E4F51] text-center mb-3">Momenten Van Verwondering</h2>
            <p className="text-[#4E4F51]/60 text-center mb-8 max-w-xl mx-auto">Een glimp van de magie die wacht op uw evenement</p>
            <div
              className="grid gap-3 rounded-2xl overflow-hidden"
              style={{
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                height: "420px",
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden group cursor-pointer"
                  style={{
                    gridColumn: `${gridSpans[index][0]} / ${gridSpans[index][1]}`,
                    gridRow: `${gridSpans[index][2]} / ${gridSpans[index][3]}`,
                  }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  {/* Zoom icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 rounded-full p-2">
                      <Search className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#4E4F51] mb-6">Wat Te Verwachten</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Kaart Magie</h3>
                    <p className="text-[#4E4F51]/80">Gedachten lezende kaarttrucks en onmogelijke transformaties</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Munt Magie</h3>
                    <p className="text-[#4E4F51]/80">Munten die verdwijnen, verschijnen en vermenigvuldigen op onmogelijke wijze</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Mentalisme</h3>
                    <p className="text-[#4E4F51]/80">Gedachten lezen en voorspellingen die onmogelijk lijken</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Persoonlijke Touch</h3>
                    <p className="text-[#4E4F51]/80">Elk effect is afgestemd op uw gasten en evenement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#4E4F51]/10 to-[#101013]/15 p-8 rounded-2xl border border-[#4E4F51]/30 shadow-lg">
                <h3 className="text-2xl font-bold text-[#4E4F51] mb-4">Perfect Voor:</h3>
                <ul className="space-y-3 text-[#4E4F51]/80">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4E4F51] rounded-full"></span>
                    <span>Cocktailparty's & recepties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4E4F51] rounded-full"></span>
                    <span>Zakelijke netwerk evenementen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4E4F51] rounded-full"></span>
                    <span>Privé diner party's</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4E4F51] rounded-full"></span>
                    <span>Bruiloft recepties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4E4F51] rounded-full"></span>
                    <span>Feestdagen party's</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#4E4F51]/10 to-[#101013]/15">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#4E4F51] mb-6">
            Klaar Voor Close-up Wonder?
          </h2>
          <p className="text-xl text-[#4E4F51]/80 mb-8">
            Laten we magische momenten creëren waar uw gasten jaren over zullen praten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#4E4F51] hover:bg-[#101013] text-[white] font-bold px-8 py-3 text-lg">
              <Link to="/booking">Boek Nu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#4E4F51] text-[#4E4F51] hover:bg-[#4E4F51] hover:text-[white] px-8 py-3 text-lg">
              <Link to="/parlour-magic">Bekijk Parlour Magie</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloseUpMagic;