import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Contact = () => {
  return <section className="py-24 bg-gradient-to-br from-btl-800 via-btl-700 to-btl-600 text-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Redo att digitalisera din etikett?
          </h2>
          <p className="text-xl text-btl-100">
            Låt oss visa hur BTL kan förvandla dina produkter till digitala upplevelser
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-2xl">
              Starta din digitala resa idag
            </CardTitle>
            <CardDescription className="text-btl-100">
              Fyll i formuläret så kontaktar vi dig inom 24 timmar
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Namn</Label>
                <Input id="name" placeholder="Ditt namn" className="bg-white/10 border-white/30 text-white placeholder:text-btl-200" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white">Företag</Label>
                <Input id="company" placeholder="Företagsnamn" className="bg-white/10 border-white/30 text-white placeholder:text-btl-200" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="products" className="text-white">Antal produkter</Label>
                <Input id="products" placeholder="t.ex. 5-10 produkter" className="bg-white/10 border-white/30 text-white placeholder:text-btl-200" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-white">Kontakt</Label>
                <Input id="contact" type="email" placeholder="din@email.se" className="bg-white/10 border-white/30 text-white placeholder:text-btl-200" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-white text-btl-800 hover:bg-btl-50 hover-scale flex-1">
                Boka demo
              </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white/10 hover-scale flex-1 text-slate-50">
                Skicka förfrågan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Contact;