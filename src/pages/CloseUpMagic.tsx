
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Star, Sparkles } from "lucide-react";

const CloseUpMagic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1EB] via-[#F5F1EB] to-[#E8DDD4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/gallery/salonmagie.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 w-full h-full bg-black/60"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Users className="h-16 w-16 text-[#5E112C] mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Close-up Magie
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Intieme, verbijsterende magie uitgevoerd direct voor uw gasten. 
            Perfect voor mingelen en het creëren van persoonlijke momenten van verwondering.
          </p>
          <Button asChild size="lg" className="bg-[#5E112C] hover:bg-[#3D0B1C] text-[#FEFCF8] font-bold px-8 py-3 text-lg">
            <Link to="/booking">Boek Deze Ervaring</Link>
          </Button>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-[#FEFCF8] border-[#5E112C]/30 text-center shadow-lg">
              <CardHeader>
                <Clock className="h-12 w-12 text-[#5E112C] mx-auto mb-4" />
                <CardTitle className="text-[#5E112C]">Duur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5E112C]/80">1-3 uur mingel magie</p>
              </CardContent>
            </Card>

            <Card className="bg-[#FEFCF8] border-[#5E112C]/30 text-center shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#5E112C] mx-auto mb-4" />
                <CardTitle className="text-[#5E112C]">Groepsgrootte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5E112C]/80">Perfect voor elke groepsgrootte</p>
              </CardContent>
            </Card>

            <Card className="bg-[#FEFCF8] border-[#5E112C]/30 text-center shadow-lg">
              <CardHeader>
                <Star className="h-12 w-12 text-[#5E112C] mx-auto mb-4" />
                <CardTitle className="text-[#5E112C]">Ervaring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5E112C]/80">Interactief & persoonlijk</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#5E112C] mb-6">Wat Te Verwachten</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#5E112C] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#3D0B1C] font-semibold">Kaart Magie</h3>
                    <p className="text-[#5E112C]/80">Gedachten lezende kaarttrucks en onmogelijke transformaties</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#5E112C] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#3D0B1C] font-semibold">Munt Magie</h3>
                    <p className="text-[#5E112C]/80">Munten die verdwijnen, verschijnen en vermenigvuldigen op onmogelijke wijze</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#5E112C] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#3D0B1C] font-semibold">Mentalisme</h3>
                    <p className="text-[#5E112C]/80">Gedachten lezen en voorspellingen die onmogelijk lijken</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#5E112C] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl text-[#3D0B1C] font-semibold">Persoonlijke Touch</h3>
                    <p className="text-[#5E112C]/80">Elk effect is afgestemd op uw gasten en evenement</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#5E112C]/10 to-[#3D0B1C]/15 p-8 rounded-2xl border border-[#5E112C]/30 shadow-lg">
                <h3 className="text-2xl font-bold text-[#5E112C] mb-4">Perfect Voor:</h3>
                <ul className="space-y-3 text-[#5E112C]/80">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#5E112C] rounded-full"></span>
                    <span>Cocktailparty's & recepties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#5E112C] rounded-full"></span>
                    <span>Zakelijke netwerk evenementen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#5E112C] rounded-full"></span>
                    <span>Privé diner party's</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#5E112C] rounded-full"></span>
                    <span>Bruiloft recepties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#5E112C] rounded-full"></span>
                    <span>Feestdagen party's</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#5E112C]/10 to-[#3D0B1C]/15">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#5E112C] mb-6">
            Klaar Voor Close-up Wonder?
          </h2>
          <p className="text-xl text-[#5E112C]/80 mb-8">
            Laten we magische momenten creëren waar uw gasten jaren over zullen praten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#5E112C] hover:bg-[#3D0B1C] text-[#FEFCF8] font-bold px-8 py-3 text-lg">
              <Link to="/booking">Boek Nu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#5E112C] text-[#5E112C] hover:bg-[#5E112C] hover:text-[#FEFCF8] px-8 py-3 text-lg">
              <Link to="/parlour-magic">Bekijk Parlour Magie</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloseUpMagic;
