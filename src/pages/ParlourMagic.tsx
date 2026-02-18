import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Clock, Users, Star, Sparkles, X, ChevronLeft, ChevronRight, Search } from "lucide-react";

const galleryImages = [
  { src: "/gallery/parlour-1.jpeg", alt: "Parlour magie moment 1" },
  { src: "/gallery/parlour-2.jpeg", alt: "Parlour magie moment 2" },
  { src: "/gallery/parlour-3.jpeg", alt: "Parlour magie moment 3" },
  { src: "/gallery/parlour-4.jpeg", alt: "Parlour magie moment 4" },
  { src: "/gallery/parlour-5.jpeg", alt: "Parlour magie moment 5" },
  { src: "/gallery/parlour-6.jpeg", alt: "Parlour magie moment 6" },
  { src: "/gallery/parlour-7.jpeg", alt: "Parlour magie moment 7" },
  { src: "/gallery/parlour-8.jpeg", alt: "Parlour magie moment 8" },
  { src: "/gallery/parlour-9.jpeg", alt: "Parlour magie moment 9" },
];

// Grid: 4 kolommen x 4 rijen — andere layout dan CloseUpMagic
// [colStart, colEnd, rowStart, rowEnd]
const gridSpans = [
  [1, 2, 1, 3], // 1 – hoog links
  [2, 4, 1, 2], // 2 – breed bovenaan
  [4, 5, 1, 2], // 3
  [2, 3, 2, 3], // 4
  [3, 5, 2, 3], // 5 – breed midden-rechts
  [1, 3, 3, 4], // 6 – breed onder-links
  [3, 4, 3, 4], // 7
  [4, 5, 3, 4], // 8
  [1, 5, 4, 5], // 9 – breed balk onderaan
];

const ParlourMagic = () => {
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
          <div className="w-full h-full bg-[url('/gallery/parlour-hero.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 w-full h-full bg-black/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Home className="h-16 w-16 text-[white] mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Parlour Magie
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Parlour magic is ideaal voor gezelschappen die iets groters willen, maar toch intiem. De acts zijn duidelijk zichtbaar voor een klein tot middelgroot publiek en combineren sterke visuele effecten met humor en interactie. Perfect voor een huiskamer, zaal of besloten evenement
          </p>
          <Button asChild size="lg" className="bg-[#4E4F51] hover:bg-[#101013] text-[white] font-bold px-8 py-3 text-lg">
            <Link to="/booking">Boek Deze Show</Link>
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
                <CardTitle className="text-[#4E4F51]">Show Duur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">45-60 minuten voorstelling</p>
              </CardContent>
            </Card>

            <Card className="bg-[white] border-[#4E4F51]/30 text-center shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#4E4F51] mx-auto mb-4" />
                <CardTitle className="text-[#4E4F51]">Publiek Grootte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">Ideaal voor 10-50 personen</p>
              </CardContent>
            </Card>

            <Card className="bg-[white] border-[#4E4F51]/30 text-center shadow-lg">
              <CardHeader>
                <Star className="h-12 w-12 text-[#4E4F51] mx-auto mb-4" />
                <CardTitle className="text-[#4E4F51]">Stijl</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">Klassiek met moderne flair</p>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#4E4F51] text-center mb-3">De Show In Beeld</h2>
            <p className="text-[#4E4F51]/60 text-center mb-8 max-w-xl mx-auto">Ontdek de sfeer en spektakel van de parlour show</p>
            <div
              className="grid gap-3 rounded-2xl overflow-hidden"
              style={{
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(4, 1fr)",
                height: "480px",
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
              <h2 className="text-3xl font-bold text-[#4E4F51] mb-6">De Voorstelling</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Grote Illusies</h3>
                    <p className="text-[#4E4F51]/80">Grootse effecten die het hele publiek boeien</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Publiek Participatie</h3>
                    <p className="text-[#4E4F51]/80">Interactieve momenten waarbij uw gasten betrokken worden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Komedie & Wonder</h3>
                    <p className="text-[#4E4F51]/80">De perfecte mix van humor en verbazing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Gedenkwaardige Finale</h3>
                    <p className="text-[#4E4F51]/80">Een spectaculair einde dat iedereen versteld doet staan</p>
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
                    <span>Privé huis feesten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4E4F51] rounded-full"></span>
                    <span>Zakelijk entertainment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4E4F51] rounded-full"></span>
                    <span>Verjaardag vieringen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4E4F51] rounded-full"></span>
                    <span>Feestdagen bijeenkomsten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#4E4F51] rounded-full"></span>
                    <span>Gemeenschap evenementen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[white] border-[#4E4F51]/30 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#4E4F51] text-center">Wat U Moet Voorzien</CardTitle>
              <CardDescription className="text-[#4E4F51]/80 text-center text-lg">
                Eenvoudige vereisten om de best mogelijke show te garanderen
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-[#101013] mb-3">Ruimte Vereisten</h4>
                <ul className="space-y-2 text-[#4E4F51]/80">
                  <li>• Speelruimte: minimaal 2,5m x 2m</li>
                  <li>• Zittend publiek opstelling</li>
                  <li>• Goede verlichting op speelruimte</li>
                  <li>• Toegang tot stopcontact</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#101013] mb-3">Publiek Opstelling</h4>
                <ul className="space-y-2 text-[#4E4F51]/80">
                  <li>• Stoelen in halve cirkel gerangschikt</li>
                  <li>• Eerste rij 2 meter van speelruimte</li>
                  <li>• Duidelijk zicht voor alle gasten</li>
                  <li>• Rustige omgeving tijdens show</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#4E4F51]/10 to-[#101013]/15">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#4E4F51] mb-6">
            Klaar Voor Een Magische Show?
          </h2>
          <p className="text-xl text-[#4E4F51]/80 mb-8">
            Transformeer uw bijeenkomst in een onvergetbare ervaring met klassieke parlour magie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#4E4F51] hover:bg-[#101013] text-[white] font-bold px-8 py-3 text-lg">
              <Link to="/booking">Boek Deze Show</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#4E4F51] text-[#4E4F51] hover:bg-[#4E4F51] hover:text-[white] px-8 py-3 text-lg">
              <Link to="/close-up-magic">Bekijk Close-up Magie</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParlourMagic;