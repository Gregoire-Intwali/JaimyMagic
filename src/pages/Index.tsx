
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Sparkles, Users, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1EB] via-[#F5F1EB] to-[#E8DDD4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/gallery/sfeerfoto.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 w-full h-full bg-black/60"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 text-[white] mx-auto mb-4 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ervaar Echte
              <span className="text-white"> Magie</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Professionele close-up en parlour goochel voorstellingen die uw gasten betoveren
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-[#2E2F38] hover:bg-[#101013] text-[#FEFCF8] font-bold px-8 py-3 text-lg">
              <Link to="/booking">Boek Uw Show</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#2E2F38] text-[#2E2F38] hover:bg-[#2E2F38] hover:text-[#FEFCF8] px-8 py-3 text-lg">
              <Link to="/about">Meer Informatie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2E2F38] mb-12">
            Magie Voor Elke Gelegenheid
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#FEFCF8] border-[#2E2F38]/30 hover:border-[#2E2F38]/60 transition-all duration-300 group shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#2E2F38] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl text-[#2E2F38]">Close-up Magie</CardTitle>
                <CardDescription className="text-[#2E2F38]/70 text-lg">
                  Intieme magie uitgevoerd direct voor uw gasten
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#2E2F38]/80 mb-6">
                  Perfect voor cocktailparty's, bedrijfsevenementen en intieme bijeenkomsten. 
                  Kijk vol verbazing toe terwijl onmogelijke dingen gebeuren in uw eigen handen.
                </p>
                <Button asChild variant="outline" className="border-[#2E2F38] text-[#2E2F38] hover:bg-[#2E2F38] hover:text-[#FEFCF8]">
                  <Link to="/close-up-magic">Meer Informatie</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#FEFCF8] border-[#2E2F38]/30 hover:border-[#2E2F38]/60 transition-all duration-300 group shadow-lg">
              <CardHeader>
                <Home className="h-12 w-12 text-[#2E2F38] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl text-[#2E2F38]">Parlour Magie</CardTitle>
                <CardDescription className="text-[#2E2F38]/70 text-lg">
                  Podium magie voor zittend publiek tot 50 personen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#2E2F38]/80 mb-6">
                  Ideaal voor privéfeesten, familiebijeenkomsten en kleinschalige shows. 
                  Klassieke magie met een moderne twist die publiek van alle leeftijden boeit.
                </p>
                <Button asChild variant="outline" className="border-[#2E2F38] text-[#2E2F38] hover:bg-[#2E2F38] hover:text-[#FEFCF8]">
                  <Link to="/parlour-magic">Meer Informatie</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#2E2F38]/10 to-[#101013]/15">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 text-[#2E2F38] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-[#2E2F38] mb-6">
            Klaar Om Onvergetelijke Herinneringen Te Creëren?
          </h2>
          <p className="text-xl text-[#2E2F38]/80 mb-8">
            Boek vandaag nog uw magische ervaring en geef uw gasten een show die ze nooit zullen vergeten
          </p>
          <Button asChild size="lg" className="bg-[#2E2F38] hover:bg-[#101013] text-[#FEFCF8] font-bold px-8 py-4 text-lg">
            <Link to="/booking">Boek Nu</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E2F38] border-t border-[#FEFCF8]/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-[#FEFCF8]" />
            <span className="text-xl font-bold text-[#FEFCF8]">Magic Jaimy</span>
          </div>
          <p className="text-[#F5F1EB]/80">
            © 2024 Magic Jaimy. Alle rechten voorbehouden. Wonder creëren, één show per keer.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
