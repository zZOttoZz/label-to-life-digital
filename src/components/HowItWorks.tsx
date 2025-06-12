
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
    <section className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Så funkar det
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tre enkla steg från fysisk produkt till digital upplevelse
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-btl-700 to-btl-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-btl-300 to-btl-400 -translate-x-10"></div>
                )}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-btl-800">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
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
