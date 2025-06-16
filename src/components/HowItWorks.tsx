
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Vi skickar NFC-taggar",
      description: "Enkla, diskreta taggar som fäster på dina produkter. Ingen installation eller teknik-krångel."
    },
    {
      number: "2", 
      title: "Kunden tappar mobilen",
      description: "Ett enkelt tap mot produkten – fungerar på alla moderna mobiler. Ingen app behövs."
    },
    {
      number: "3",
      title: "Minisida öppnas direkt",
      description: "Din produkts egen digitala berättelse visas omedelbart i mobilens webbläsare."
    }
  ];

  return (
    <section id="hur-det-funkar" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Så funkar det
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Tre enkla steg från fysisk produkt till digital upplevelse
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-btl-700 to-btl-800 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 sm:top-10 left-full w-full h-0.5 bg-gradient-to-r from-btl-300 to-btl-400 -translate-x-10"></div>
                )}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-btl-800 px-4">
                {step.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
