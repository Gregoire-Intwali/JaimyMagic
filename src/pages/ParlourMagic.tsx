
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Clock, Users, Star, Sparkles } from "lucide-react";

const ParlourMagic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3E5E6] via-[#E3E5E6] to-[#E2E3E5]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/gallery/parlourmagie.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 w-full h-full bg-black/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Home className="h-16 w-16 text-[white] mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Parlour Magie
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Klassieke podium magie uitgevoerd voor zittend publiek. 
            Perfect voor intieme locaties en privé bijeenkomsten tot 50 personen.
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
            Transformeer uw bijeenkomst in een onvergetelijke ervaring met klassieke parlour magie
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
