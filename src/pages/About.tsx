
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Award, Heart, Users, Calendar, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
    const getCardSpacing = (text) => {
  const length = text.length;

  if (length > 400) return "py-6 sm:py-10"; // long review
  if (length > 200) return "py-6 sm:py-8";  // medium
  return "py-6 sm:py-6";                   // short
};
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
      
      {/* Hero Section */}
      <section className="py-24 px-4 w-full h-full bg-[url('/gallery/overons-herp.jpeg')]  bg-cover bg-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="w-30 h-20 mx-auto  flex items-center justify-center mb-6">
              <img src="/gallery/logo.png" alt="Magic Jaimy Logo" className="h-25 w-30" />
            </div>
            {/* bg-gradient-to-br from-[#4E4F51] to-[#101013] rounded-full */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4E4F51]/20 to-[#101013]/20 rounded-full blur-xl scale-100"></div>
          </div>
          
          
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#101013] mb-6">Mijn Reis in de Magie</h2>
              <div className="space-y-4 text-[#101013]/80">
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
              <div className="bg-gradient-to-br from-[#4E4F51]/20 to-[#101013]/20 p-8 rounded-2xl border border-[#4E4F51]/30">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#4E4F51] mb-2">250+</div>
                    <div className="text-[#4E4F51]/80">Tevreden Klanten</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#4E4F51] mb-2">10</div>
                    <div className="text-[#4E4F51]/80">Jaar Ervaring</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#4E4F51] mb-2">100%</div>
                    <div className="text-[#4E4F51]/80">Verbaasde Publiek</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#4E4F51] mb-2">∞</div>
                    <div className="text-[#4E4F51]/80">Magische Momenten</div>
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
          <h2 className="text-4xl font-bold text-center text-[#4E4F51] mb-12">
            Wat Mijn Magie Speciaal Maakt
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[white] border-[#4E4F51]/30 hover:border-[#4E4F51]/60 transition-all duration-300 group">
              <CardHeader>
                <Heart className="h-12 w-12 text-[#4E4F51] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-[#4E4F51]">Persoonlijke Verbinding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">
                  Elke voorstelling is op maat gemaakt voor uw publiek en evenement. Ik neem de tijd om uw gasten 
                  te begrijpen en momenten te creëren die persoonlijk resoneren.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[white] border-[#4E4F51]/30 hover:border-[#4E4F51]/60 transition-all duration-300 group">
              <CardHeader>
                <Award className="h-12 w-12 text-[#4E4F51] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-[#4E4F51]">Professionele Excellentie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">
                  Jarenlange ervaring en voortdurende studie van de magische kunsten zorgen ervoor dat elk effect 
                  wordt uitgevoerd met precisie, timing en maximale impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[white] border-[#4E4F51]/30 hover:border-[#4E4F51]/60 transition-all duration-300 group">
              <CardHeader>
                <Users className="h-12 w-12 text-[#4E4F51] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-[#4E4F51]">Interactieve Ervaring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4E4F51]/80">
                  Uw gasten kijken niet alleen naar magie - ze zijn er onderdeel van. Interactieve elementen 
                  zorgen ervoor dat iedereen zich betrokken voelt bij de magische ervaring.
                </p>
              </CardContent>
            </Card>
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

      {/* CTA Section */}
      <section className="py-16 px-4 ">
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

export default About;
