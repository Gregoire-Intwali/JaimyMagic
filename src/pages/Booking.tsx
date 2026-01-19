
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Mail, Phone, MapPin, Users, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    magicType: "",
    guestCount: "",
    venue: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    try {
    const response = await fetch("https://formspree.io/f/xykkjvdw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.eventDate,
        eventTime: formData.eventTime,
        eventType: formData.eventType,
        magicType: formData.magicType,
        guestCount: formData.guestCount,
        venue: formData.venue,
        message: formData.message,
      }),
    });
     if (!response.ok) {
      throw new Error("Form submission failed");
    }
    toast({
      title: "Boeking Aanvraag Verstuurd!",
      description: "Bedankt voor uw interesse! Ik neem binnen 24 uur contact met u op om uw magische evenement te bespreken.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventTime: "",
      eventType: "",
      magicType: "",
      guestCount: "",
      venue: "",
      message: ""
    }); 
  } catch (error) {
    console.error(error);
    toast({
      title: "Er ging iets mis",
      description: "Probeer het later opnieuw of neem rechtstreeks contact op.",
      variant: "destructive",
    });
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1EB] via-[#F5F1EB] to-[#E8DDD4]">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 text-[#2E2F38] mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-[#2E2F38] mb-6">
            Boek Uw Magie Show
          </h1>
          <p className="text-xl text-[#2E2F38]/80 mb-8 max-w-2xl mx-auto">
            Klaar om een onvergetelijke ervaring te creëren? Vul het formulier hieronder in en laten we magie naar uw evenement brengen!
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#FEFCF8] border-[#2E2F38]/30">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2E2F38]">Evenement Details</CardTitle>
              <CardDescription className="text-[#2E2F38]/80">
                Vertel me over uw evenement zodat ik de perfecte magische ervaring kan creëren
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#2E2F38]">Volledige Naam *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#2E2F38]">E-mailadres *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#2E2F38]">Telefoonnummer</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="venue" className="text-[#2E2F38]">Evenement Locatie *</Label>
                    <Input
                      id="venue"
                      name="venue"
                      value={formData.venue}
                      onChange={handleInputChange}
                      required
                      placeholder="Stad, Provincie of Locatie Naam"
                      className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38]"
                    />
                  </div>
                </div>

                {/* Event Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-[#2E2F38]">Evenement Datum *</Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                      className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventTime" className="text-[#2E2F38]">Gewenste Tijd</Label>
                    <Input
                      id="eventTime"
                      name="eventTime"
                      type="time"
                      value={formData.eventTime}
                      onChange={handleInputChange}
                      className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="magicType" className="text-[#2E2F38]">Type Magie *</Label>
                    <Select onValueChange={(value) => handleSelectChange("magicType", value)}>
                      <SelectTrigger className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38]">
                        <SelectValue placeholder="Selecteer magie type" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#FEFCF8] border-[#2E2F38]/30">
                        <SelectItem value="close-up">Close-up Magie</SelectItem>
                        <SelectItem value="parlour">Parlour Magie</SelectItem>
                        <SelectItem value="both">Beide (indien tijd toelaat)</SelectItem>
                        <SelectItem value="unsure">Niet zeker - laten we bespreken</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guestCount" className="text-[#2E2F38]">Aantal Gasten *</Label>
                    <Input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      required
                      placeholder="Geschat aantal"
                      className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-[#2E2F38]">Evenement Type</Label>
                  <Select onValueChange={(value) => handleSelectChange("eventType", value)}>
                    <SelectTrigger className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38]">
                      <SelectValue placeholder="Selecteer evenement type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#FEFCF8] border-[#2E2F38]/30">
                      <SelectItem value="corporate">Bedrijfsevenement</SelectItem>
                      <SelectItem value="birthday">Verjaardagsfeest</SelectItem>
                      <SelectItem value="wedding">Bruiloft/Receptie</SelectItem>
                      <SelectItem value="holiday">Feestdagviering</SelectItem>
                      <SelectItem value="private">Privéfeest</SelectItem>
                      <SelectItem value="other">Anders</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#2E2F38]">Aanvullende Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Vertel me meer over uw evenement, speciale wensen, of eventuele vragen die u heeft..."
                    className="bg-[#F5F1EB] border-[#2E2F38]/30 text-[#2E2F38] focus:border-[#2E2F38] min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#2E2F38] hover:bg-[#101013] text-[#FEFCF8] font-bold py-3 text-lg"
                >
                  Boekingsaanvraag Versturen
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#2E2F38]/10 to-[#101013]/10 border-[#2E2F38]/30">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2E2F38] text-center">Vragen? Laten we Praten!</CardTitle>
              <CardDescription className="text-[#2E2F38]/80 text-center">
                Bespreekt u uw evenement liever direct? Ik ben er om te helpen!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center space-y-3">
                  <Mail className="h-12 w-12 text-[#2E2F38]" />
                  <div>
                    <h3 className="text-[#2E2F38] font-semibold">E-mail</h3>
                    <p className="text-[#2E2F38]/80">jaimypynenborg@gmail.com</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Phone className="h-12 w-12 text-[#2E2F38]" />
                  <div>
                    <h3 className="text-[#2E2F38] font-semibold">Telefoon</h3>
                    <p className="text-[#2E2F38]/80">0470432768</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Clock className="h-12 w-12 text-[#2E2F38]" />
                  <div>
                    <h3 className="text-[#2E2F38] font-semibold">Responstijd</h3>
                    <p className="text-[#2E2F38]/80">Binnen 24 uur</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Booking;
