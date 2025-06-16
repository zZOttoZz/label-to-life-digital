
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NFCExamples } from "./NFCExamples";

const Hero = () => {
  const [showExamples, setShowExamples] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-btl-50 to-btl-100 px-4 pt-16">
        <div className="container max-w-6xl mx-auto text-center animate-fade-in">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Få din produkt att{" "}
              <span className="gradient-text">tala för sig själv</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              BTL kombinerar NFC-teknik med snygga produkthemsidor som skapar digitala upplevelser direkt på dina fysiska produkter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover-scale bg-btl-800 hover:bg-btl-700">
                Beställ demo-kit
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover-scale border-btl-300 text-btl-800 hover:bg-btl-50"
                onClick={() => setShowExamples(true)}
              >
                Se exempel
              </Button>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20 relative px-4">
            <div className="bg-gradient-to-r from-btl-100 to-btl-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-btl-800 rounded-full flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-bold">
                  NFC
                </div>
                <div className="text-btl-600 text-xl sm:text-2xl">+</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-btl-600 to-btl-700 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium">
                  WEB
                </div>
                <div className="text-btl-600 text-xl sm:text-2xl">=</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-btl-700 to-btl-800 rounded-full flex items-center justify-center text-white text-base sm:text-lg">
                  ✨
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-btl-700 font-medium text-sm sm:text-base">
                Fysisk produkt + Digital upplevelse = Magisk kundresa
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {showExamples && <NFCExamples />}
    </>
  );
};

export default Hero;
