import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Sparkles, Users, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Client logos array - replace src with your actual logo paths
const clientLogos = [
  { id: 1, name: "Klant 1", src: "/gallery/destudio.png" },
  { id: 2, name: "Klant 2", src: "/gallery/dinsdagclub.png" },
  { id: 3, name: "Klant 3", src: "/gallery/rubenshuis.jpeg" },
  { id: 4, name: "Klant 4", src: "/gallery/stad-antwerpen.svg" },
  { id: 5, name: "Klant 5", src: "/gallery/studiopalermo.png" },
  { id: 6, name: "Klant 6", src: "/gallery/Uitinvlaanderen.png" },
];

const ClientCarousel = () => {
  // Duplicate logos for seamless infinite loop
  const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-20 px-4 overflow-hidden relative">
      {/* Magical background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4E4F51]/5 via-transparent to-[#4E4F51]/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto mb-12 text-center">
        {/* Decorative stars */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-[#4E4F51]/40 text-xl animate-pulse">✦</span>
          <span className="text-[#4E4F51]/60 text-sm animate-pulse" style={{ animationDelay: "0.3s" }}>✦</span>
          <span className="text-[#4E4F51]/40 text-xl animate-pulse" style={{ animationDelay: "0.6s" }}>✦</span>
        </div>
        <h3 className="text-4xl font-bold text-[#4E4F51] mb-3">
          Zij Geloofden In Magie
        </h3>
        <p className="text-[#4E4F51]/60 text-lg">
          Vertrouwd door toonaangevende bedrijven en organisaties
        </p>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#E3E5E6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#E3E5E6] to-transparent z-10 pointer-events-none" />

        {/* Carousel track */}
        <div className="flex gap-12 carousel-track">
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="logo-card w-40 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 border border-[#4E4F51]/10 hover:border-[#4E4F51]/40 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12" />
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback placeholder if logo not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".logo-fallback")) {
                      const fallback = document.createElement("div");
                      fallback.className = "logo-fallback text-[#4E4F51]/40 font-semibold text-sm text-center";
                      fallback.textContent = logo.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom stars */}
      <div className="flex items-center justify-center gap-3 mt-12">
        <span className="text-[#4E4F51]/40 text-xl animate-pulse" style={{ animationDelay: "0.9s" }}>✦</span>
        <span className="text-[#4E4F51]/60 text-sm animate-pulse" style={{ animationDelay: "1.2s" }}>✦</span>
        <span className="text-[#4E4F51]/40 text-xl animate-pulse" style={{ animationDelay: "1.5s" }}>✦</span>
      </div>

      <style>{`
        @keyframes magicSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333%));
          }
        }

        .carousel-track {
          animation: magicSlide 18s linear infinite;
          width: max-content;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3E5E6] via-[#E3E5E6] to-[#E2E3E5]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0">
          <div
            className="
                w-full h-full
                bg-[url('/gallery/index-hero.jpeg')]
                md:bg-[url('/gallery/index-hero3.png')]
                bg-cover bg-center
              "
          ></div>
          <div className="absolute inset-0 w-full h-full bg-black/60"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 text-[white] mx-auto mb-4 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ervaar Echte
              <span className="text-white"> Magie</span>
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Professionele close-up en parlour goochel voorstellingen die uw
              gasten betoveren
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#4E4F51] hover:bg-[#101013] text-[white] font-bold px-8 py-3 text-lg"
            >
              <Link to="/booking">Boek Uw Show</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#4E4F51] text-[#4E4F51] hover:bg-[#4E4F51] hover:text-[white] px-8 py-3 text-lg"
            >
              <Link to="/about">Meer Informatie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#4E4F51] mb-12">
            Magie Voor Elke Gelegenheid
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[white] border-[#4E4F51]/30 hover:border-[#4E4F51]/60 transition-all duration-300 group shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#4E4F51] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl text-[#4E4F51]">
                  Close-up Magie
                </CardTitle>
                <CardDescription className="text-[#4E4F51]/70 text-lg">
                  Intieme magie uitgevoerd direct voor uw gasten
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80 mb-6">
                  Perfect voor cocktailparty's, bedrijfsevenementen en intieme
                  bijeenkomsten. Kijk vol verbazing toe terwijl onmogelijke
                  dingen gebeuren in uw eigen handen.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#4E4F51] text-[#4E4F51] hover:bg-[#4E4F51] hover:text-[white]"
                >
                  <Link to="/close-up-magic">Meer Informatie</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[white] border-[#4E4F51]/30 hover:border-[#4E4F51]/60 transition-all duration-300 group shadow-lg">
              <CardHeader>
                <Home className="h-12 w-12 text-[#4E4F51] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl text-[#4E4F51]">
                  Parlour Magie
                </CardTitle>
                <CardDescription className="text-[#4E4F51]/70 text-lg">
                  Podium magie voor zittend publiek tot 50 personen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80 mb-6">
                  Ideaal voor privéfeesten, familiebijeenkomsten en
                  kleinschalige shows. Klassieke magie met een moderne twist die
                  publiek van alle leeftijden boeit.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#4E4F51] text-[#4E4F51] hover:bg-[#4E4F51] hover:text-[white]"
                >
                  <Link to="/parlour-magic">Meer Informatie</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4E4F51]/10 to-[#101013]/15">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 text-[#4E4F51] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-[#4E4F51] mb-6">
            Klaar Om Onvergetelijke Herinneringen Te Creëren?
          </h2>
          <p className="text-xl text-[#4E4F51]/80 mb-8">
            Boek vandaag nog uw magische ervaring en geef uw gasten een show die
            ze nooit zullen vergeten
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#4E4F51] hover:bg-[#101013] text-[white] font-bold px-8 py-4 text-lg"
          >
            <Link to="/booking">Boek Nu</Link>
          </Button>
        </div>
      </section>
      {/* ✨ Client Logo Carousel Section */}
          <ClientCarousel />
      {/* Footer */}
      <footer className="bg-[#4E4F51] border-t border-[white]/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-[white]" />
            <span className="text-xl font-bold text-[white]">Magic Jaimy</span>
          </div>
          <p className="text-[#E3E5E6]/80">
            © 2024 Magic Jaimy. Alle rechten voorbehouden. Wonder creëren, één
            show per keer.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
