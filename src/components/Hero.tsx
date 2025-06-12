
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-btl-50 to-btl-100 px-4">
      <div className="container max-w-6xl mx-auto text-center animate-fade-in">
        <div className="space-y-8">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/c4673fac-0aa8-4f1c-88bf-342d1df8ada7.png" 
              alt="BTL - Behind the Label" 
              className="h-32 md:h-40 w-auto"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Få din produkt att{" "}
            <span className="gradient-text">tala för sig själv</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            BTL kombinerar NFC-teknik med snygga produkthemsidor – och skapar 
            digitala upplevelser direkt på dina fysiska produkter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover-scale bg-btl-800 hover:bg-btl-700"
            >
              Beställ demo-kit
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover-scale border-btl-300 text-btl-800 hover:bg-btl-50"
            >
              Se exempel
            </Button>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-btl-100 to-btl-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl">
            <div className="flex items-center justify-center space-x-8">
              <div className="w-16 h-16 bg-btl-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                NFC
              </div>
              <div className="text-btl-600 text-2xl">+</div>
              <div className="w-16 h-16 bg-gradient-to-r from-btl-600 to-btl-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
                WEB
              </div>
              <div className="text-btl-600 text-2xl">=</div>
              <div className="w-16 h-16 bg-gradient-to-r from-btl-700 to-btl-800 rounded-full flex items-center justify-center text-white text-lg">
                ✨
              </div>
            </div>
            <p className="mt-4 text-btl-700 font-medium">
              Fysisk produkt + Digital upplevelse = Magisk kundresa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
