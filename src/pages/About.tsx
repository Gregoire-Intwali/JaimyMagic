
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Award, Heart, Users, Calendar, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1EB] via-[#F5F1EB] to-[#E8DDD4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#5E112C] to-[#3D0B1C] rounded-full flex items-center justify-center mb-6">
              <Sparkles className="h-16 w-16 text-[#FEFCF8]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#5E112C]/20 to-[#3D0B1C]/20 rounded-full blur-xl scale-150"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#5E112C] mb-6">
            Over de Magie
          </h1>
          <p className="text-xl text-[#5E112C]/80 mb-8 max-w-2xl mx-auto">
            Welkom in een wereld waar het onmogelijke mogelijk wordt, en verwondering in elk moment leeft.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#5E112C] mb-6">Mijn Reis in de Magie</h2>
              <div className="space-y-4 text-[#5E112C]/80">
                <p>
               Het Magische Begin van Jaimy
               </p>
               <p>
Toen Jaimy negen jaar oud was, kreeg hij zijn eerste goocheldoos. Het was
een klein, onschuldig doosje, maar voor Jaimy was het de sleutel naar een
magische wereld. Met elke truc die hij leerde, groeide zijn fascinatie voor
magie. Wat begon als een hobby, werd al snel een passie. Jaimy oefende
elke dag, zijn ogen glinsterend van opwinding bij het ontdekken van nieuwe
geheimen. Nu, jaren later, deelt hij zijn magie met anderen, betoverend
publiek en hen meenemend op een avontuur vol verwondering en verbazing.
Magic Jaimy tovert niet alleen kaarten en muntjes, maar ook glimlachen en
verwonderde blikken.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#5E112C]/20 to-[#3D0B1C]/20 p-8 rounded-2xl border border-[#5E112C]/30">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#5E112C] mb-2">500+</div>
                    <div className="text-[#5E112C]/80">Shows Uitgevoerd</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#5E112C] mb-2">15</div>
                    <div className="text-[#5E112C]/80">Jaar Ervaring</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#5E112C] mb-2">100%</div>
                    <div className="text-[#5E112C]/80">Verbaasde Publiek</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#5E112C] mb-2">∞</div>
                    <div className="text-[#5E112C]/80">Magische Momenten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#5E112C] mb-12">
            Wat Mijn Magie Speciaal Maakt
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#FEFCF8] border-[#5E112C]/30 hover:border-[#5E112C]/60 transition-all duration-300 group">
              <CardHeader>
                <Heart className="h-12 w-12 text-[#5E112C] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-[#5E112C]">Persoonlijke Verbinding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5E112C]/80">
                  Elke voorstelling is op maat gemaakt voor uw publiek en evenement. Ik neem de tijd om uw gasten 
                  te begrijpen en momenten te creëren die persoonlijk resoneren.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#FEFCF8] border-[#5E112C]/30 hover:border-[#5E112C]/60 transition-all duration-300 group">
              <CardHeader>
                <Award className="h-12 w-12 text-[#5E112C] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-[#5E112C]">Professionele Excellentie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5E112C]/80">
                  Jarenlange ervaring en voortdurende studie van de magische kunsten zorgen ervoor dat elk effect 
                  wordt uitgevoerd met precisie, timing en maximale impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#FEFCF8] border-[#5E112C]/30 hover:border-[#5E112C]/60 transition-all duration-300 group">
              <CardHeader>
                <Users className="h-12 w-12 text-[#5E112C] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-[#5E112C]">Interactieve Ervaring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5E112C]/80">
                  Uw gasten kijken niet alleen naar magie - ze zijn er onderdeel van. Interactieve elementen 
                  zorgen ervoor dat iedereen zich betrokken voelt bij de magische ervaring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#5E112C] mb-12">
            Wat Mensen Zeggen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#5E112C]/10 to-[#3D0B1C]/10 border-[#5E112C]/30">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#5E112C] fill-current" />
                  ))}
                </div>
                <CardTitle className="text-[#5E112C]">Sarah M. - Bedrijfsevenement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5E112C]/80 italic">
                  "Absoluut ongelooflijk! Ons team was volledig betoverd. De close-up magie tijdens ons 
                  netwerkevenement was de perfecte ijsbreker. Iedereen praat er weken later nog steeds over!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#5E112C]/10 to-[#3D0B1C]/10 border-[#5E112C]/30">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#5E112C] fill-current" />
                  ))}
                </div>
                <CardTitle className="text-[#5E112C]">Michael R. - Verjaardagsfeest</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5E112C]/80 italic">
                  "De salon magie show was fenomenaal! Zowel kinderen als volwassenen waren volledig geboeid. 
                  Professioneel, entertainend en echt magisch. Zeer aan te bevelen!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#5E112C]/10 to-[#3D0B1C]/15">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 text-[#5E112C] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-[#5E112C] mb-6">
            Klaar om de Magie te Ervaren?
          </h2>
          <p className="text-xl text-[#5E112C]/80 mb-8">
            Laten we een onvergetelijke ervaring creëren voor u en uw gasten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#5E112C] hover:bg-[#3D0B1C] text-[#FEFCF8] font-bold px-8 py-3 text-lg">
              <Link to="/booking">Boek Uw Show</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#5E112C] text-[#5E112C] hover:bg-[#5E112C] hover:text-[#FEFCF8] px-8 py-3 text-lg">
              <Link to="/">Ontdek Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
