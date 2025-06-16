
import { Nfc, QrCode, Check, X } from "lucide-react";

const NFCvsQR = () => {
  const nfcBenefits = [
    "Fungerar utan att öppna kamera",
    "Bara ett enkelt tap",
    "Diskret och elegant design", 
    "Fungerar med handskar/i mörker",
    "Snabbare aktivering",
    "Premium-känsla"
  ];

  const qrLimitations = [
    "Kräver kameraåtkomst",
    "Måste sikta och fokusera",
    "Svår att läsa vid dålig belysning",
    "Tar mer plats på produkten",
    "Mindre smidig upplevelse",
    "Känns mindre premium"
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-btl-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            NFC vs QR-kod
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Varför NFC är framtidens teknik för produktinteraktion
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* NFC Column */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-btl-300 shadow-lg relative overflow-hidden">
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
              <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                Rekommenderat
              </span>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-btl-700 to-btl-800 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <Nfc className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-btl-800">NFC-teknik</h3>
                <p className="text-sm sm:text-base text-btl-600">Framtidens lösning</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {nfcBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-btl-100 rounded-lg">
              <p className="text-xs sm:text-sm text-btl-800 font-medium text-center">
                ✨ Ett enkelt tap - magisk upplevelse
              </p>
            </div>
          </div>

          {/* QR Code Column */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border shadow-lg relative">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <QrCode className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700">QR-kod</h3>
                <p className="text-sm sm:text-base text-gray-500">Traditionell metod</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {qrLimitations.map((limitation, index) => (
                <li key={index} className="flex items-center">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{limitation}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-100 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600 text-center">
                📱 Kräver flera steg och fokus
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center bg-gradient-to-r from-btl-700 to-btl-800 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold">
            <Nfc className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" />
            NFC = Smidigare kundupplevelse
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFCvsQR;
