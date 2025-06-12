
const WhyBTL = () => {
  const benefits = [
    {
      title: "Ingen kod, ingen app, bara ett tap",
      description: "Fungerar direkt på alla moderna smartphones. Kunden behöver inte ladda ner något.",
      icon: "📱"
    },
    {
      title: "Ger premiumkänsla direkt på hyllan", 
      description: "Dina produkter sticker ut och skapar nyfikenhet redan före köpet.",
      icon: "✨"
    },
    {
      title: "Höjer kundens engagemang & varumärkesvärde",
      description: "Skapa djupare relation med kunder genom berättelser och interaktion.",
      icon: "❤️"
    },
    {
      title: "Snabb leverans & enkel implementation",
      description: "Från beställning till fungerande lösning på bara några dagar.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Varför BTL?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi gör det enkelt att skapa magiska kundupplevelser
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover-scale border border-border"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-btl-800">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBTL;
