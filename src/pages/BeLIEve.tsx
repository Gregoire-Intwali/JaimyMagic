import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Clock, Users, Eye, Sparkles, X, ChevronLeft, ChevronRight, Search } from "lucide-react";

const galleryImages = [
  { src: "/gallery/believe-1.jpeg", alt: "BeLIEve moment 1" },
  { src: "/gallery/believe-2.jpeg", alt: "BeLIEve moment 2" },
  { src: "/gallery/believe-3.jpeg", alt: "BeLIEve moment 3" },
  { src: "/gallery/believe-4.jpeg", alt: "BeLIEve moment 4" },
  { src: "/gallery/believe-5.jpeg", alt: "BeLIEve moment 5" },
  { src: "/gallery/believe-6.jpeg", alt: "BeLIEve moment 6" },
  { src: "/gallery/believe-7.jpeg", alt: "BeLIEve moment 7" },
  { src: "/gallery/believe-8.jpeg", alt: "BeLIEve moment 8" },
  { src: "/gallery/believe-9.jpeg", alt: "BeLIEve moment 9" },
];

const BeLIEve = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
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

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, goToPrev, goToNext]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3E5E6] via-[#E3E5E6] to-[#E2E3E5]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/gallery/believe-hero.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 w-full h-full bg-black/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Brain className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            BeLIEve
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Een meeslepende goochelshow over beïnvloeding, afleiding en vertrouwen.
            Ontdek hoe keuzes gestuurd worden, aandacht misleidt en waarom we soms graag geloven wat niet waar kan zijn.
          </p>
          <Button asChild size="lg" className="bg-[#4E4F51] hover:bg-[#101013] text-white font-bold px-8 py-3 text-lg">
            <Link to="/booking">Boek BeLIEve</Link>
          </Button>
        </div>
      </section>
      <section className="py-24 px-4 bg-[#101013] text-white">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* Image */}
    <div className="relative">
      <img
        src="/gallery/believe.jpg"
        alt="BeLIEve show - beïnvloeding, afleiding en vertrouwen"
        className="w-full rounded-2xl shadow-2xl object-cover"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
    </div>

    {/* Article */}
    <article className="space-y-8 text-lg leading-relaxed text-white/90">

      <h2 className="text-4xl font-bold text-white">
        BeLIEve – Meer dan een goochelshow
      </h2>

      <p>
        Wat als je keuzes niet zo vrij zijn als je denkt?
        Wat als je aandacht gestuurd wordt zonder dat je het merkt?
        En wat zegt dat over vertrouwen?
      </p>

      <p>
        <strong>BeLIEve</strong> is geen show over trucs.
        Het is een ervaring over beïnvloeding, afleiding en geloof.
        Over hoe eenvoudig perceptie kan worden gemanipuleerd —
        en waarom we daar vaak vrijwillig in meegaan.
      </p>

      <p>
        Tijdens de voorstelling maakt het publiek keuzes.
        Vrije keuzes.
        Of toch niet?
      </p>

      <blockquote className="border-l-4 border-red-500 pl-6 italic text-xl text-white">
        Geloof je wat je ziet…<br />
        of zie je wat je gelooft?
      </blockquote>

      <p>
        Wat je ziet is onmogelijk.
        Wat je voelt is echt.
      </p>

      <p>
        BeLIEve laat je niet achter met uitleg —
        maar met verwondering.
        En misschien een klein beetje twijfel
        over hoe de werkelijkheid écht werkt.
      </p>

    </article>

  </div>
</section>

      {/* Details Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-[#4E4F51]/30 text-center shadow-lg">
              <CardHeader>
                <Clock className="h-12 w-12 text-[#4E4F51] mx-auto mb-4" />
                <CardTitle className="text-[#4E4F51]">Show Duur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">60 minuten interactieve voorstelling</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#4E4F51]/30 text-center shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#4E4F51] mx-auto mb-4" />
                <CardTitle className="text-[#4E4F51]">Publiek Grootte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">Ideaal voor 20-100 personen</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#4E4F51]/30 text-center shadow-lg">
              <CardHeader>
                <Eye className="h-12 w-12 text-[#4E4F51] mx-auto mb-4" />
                <CardTitle className="text-[#4E4F51]">Thema</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">Psychologie & perceptie</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#4E4F51] mb-6">De Beleving</h2>
              <div className="space-y-4">

                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Gestuurde Keuzes</h3>
                    <p className="text-[#4E4F51]/80">
                      Het publiek maakt vrije keuzes… of lijkt dat alleen zo?
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Misleiding van Aandacht</h3>
                    <p className="text-[#4E4F51]/80">
                      Wat je ziet is onmogelijk. Wat je mist is essentieel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Emotionele Impact</h3>
                    <p className="text-[#4E4F51]/80">
                      Geen uitleg van trucs, maar inzicht in waarom je erin meegaat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#4E4F51] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#101013] font-semibold">Sterke Finale</h3>
                    <p className="text-[#4E4F51]/80">
                      Een afsluiting die je realiteit even doet wankelen.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4E4F51]/10 to-[#101013]/15 p-8 rounded-2xl border border-[#4E4F51]/30 shadow-lg">
              <h3 className="text-2xl font-bold text-[#4E4F51] mb-4">Perfect Voor:</h3>
              <ul className="space-y-3 text-[#4E4F51]/80">
                <li>• Theateravonden</li>
                <li>• Culturele evenementen</li>
                <li>• Bedrijfsevents met inhoud</li>
                <li>• Scholen & educatieve settings</li>
                <li>• Publiek dat meer wil dan “trucs”</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#4E4F51] mb-6">
              Geloof je wat je ziet… of zie je wat je gelooft?
            </h2>
            <p className="text-xl text-[#4E4F51]/80">
              BeLIEve is geen traditionele goochelshow.
              Het is een ervaring waarin vertrouwen getest wordt,
              perceptie wordt uitgedaagd en realiteit even vloeibaar lijkt.
              <br /><br />
              Wat je ziet is onmogelijk.  
              Wat je voelt is echt.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#4E4F51]/10 to-[#101013]/15">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#4E4F51] mb-6">
            Durf Jij Het Te Geloven?
          </h2>
          <p className="text-xl text-[#4E4F51]/80 mb-8">
            Boek BeLIEve en laat uw publiek twijfelen aan hun eigen waarneming.
          </p>
          <Button asChild size="lg" className="bg-[#4E4F51] hover:bg-[#101013] text-white font-bold px-8 py-3 text-lg">
            <Link to="/booking">Boek BeLIEve</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BeLIEve;