
const Pricing = () => {
  const priceItems = [
    {
      item: "NFC-tagg",
      price: "från 1 kr/st",
      description: "Priserna sjunker vid större volymer"
    },
    {
      item: "Produkthemsida", 
      price: "fr. 200 kr",
      description: "Engångsavgift per produktsida"
    },
    {
      item: "Hosting",
      price: "100 kr/månad", 
      description: "För hela produktsortimentet"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-btl-50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prisindikation
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparenta priser utan dolda kostnader
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
          {priceItems.map((item, index) => (
            <div 
              key={item.item}
              className={`flex flex-col md:flex-row md:items-center justify-between p-8 ${
                index < priceItems.length - 1 ? 'border-b border-border' : ''
              } hover:bg-btl-50 transition-colors duration-200`}
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-btl-800 mb-1">
                  {item.item}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
              <div className="text-2xl font-bold text-btl-700">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Kontakta oss för exakt offert baserat på era behov
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
