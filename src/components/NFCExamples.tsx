
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";

const NFCExamples = () => {
  const [isOpen, setIsOpen] = useState(true);

  const exampleSites = [
    {
      title: "Exempel 1 - Produktberättelse",
      description: "Se hur en NFC-tagg kan berätta historien bakom produkten",
      url: "#",
    },
    {
      title: "Exempel 2 - Produktinformation",
      description: "Detaljerad produktinformation och specifikationer",
      url: "#",
    },
    {
      title: "Exempel 3 - Varumärkesupplevelse",
      description: "Komplett varumärkesupplevelse med multimedia",
      url: "#",
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-btl-800">Så här fungerar NFC</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-btl-100 flex-shrink-0"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* GIF Section */}
          <div className="mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-btl-100 to-btl-200 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-center">
              <div className="w-full h-48 sm:h-56 lg:h-64 bg-btl-300 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="text-btl-700 text-center">
                  <div className="text-3xl sm:text-4xl mb-2">📱</div>
                  <p className="font-medium text-sm sm:text-base">NFC-demonstration</p>
                  <p className="text-xs sm:text-sm opacity-75">Lägg till din GIF här</p>
                </div>
              </div>
              <p className="text-btl-700 font-medium text-sm sm:text-base">
                Håll din telefon nära NFC-taggen för att uppleva den digitala berättelsen
              </p>
            </div>
          </div>

          {/* Example Sites */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-btl-800 mb-3 sm:mb-4">Utforska våra exempel</h3>
            {exampleSites.map((site, index) => (
              <div
                key={index}
                className="border border-btl-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-btl-800 mb-2 text-sm sm:text-base">{site.title}</h4>
                    <p className="text-btl-600 text-xs sm:text-sm mb-3 sm:mb-0">{site.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(site.url, '_blank')}
                    className="border-btl-300 text-btl-800 hover:bg-btl-50 w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Besök
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-btl-800 hover:bg-btl-700 text-white w-full sm:w-auto"
            >
              Stäng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NFCExamples };
