import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductLevels = () => {
  const levels = [
    {
      name: "BTL Basic",
      description: "NFC-taggar kopplade till er befintliga hemsida",
      features: [
        "NFC-taggar med anpassad design", 
        "Länkning till befintlig hemsida",
        "Snabb leverans",
        "Grundläggande support"
      ],
      highlight: "Enkelt & snabbt",
      popular: false
    },
    {
      name: "BTL Story", 
      description: "NFC-taggar + unik produkthemsida skapad av oss",
      features: [
        "Allt från BTL Basic",
        "Skräddarsydd produkthemsida", 
        "Storytelling & design",
        "Mobiloptimerad upplevelse",
        "Grundläggande analytics"
      ],
      highlight: "Storytelling i fokus",
      popular: true
    },
    {
      name: "BTL Enterprise",
      description: "Större lösningar för varumärken med flera produkter",
      features: [
        "Allt från BTL Story",
        "Flera produkter & kampanjer",
        "Avancerad statistik",
        "Dedikerad kundansvarig"
      ],
      highlight: "Skalbar lösning",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-btl-50 to-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Välj din nivå
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Från enkla NFC-taggar till kompletta digitala upplevelser
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <Card 
              key={level.name}
              className={`relative hover-scale transition-all duration-300 ${
                level.popular 
                  ? 'border-btl-600 shadow-xl ring-2 ring-btl-200' 
                  : 'border-border hover:border-btl-300'
              }`}
            >
              {level.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-btl-700 to-btl-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Populäraste valet
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-btl-800">
                  {level.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {level.description}
                </CardDescription>
                <div className="pt-2">
                  <span className="inline-block bg-btl-100 text-btl-800 text-sm font-medium px-3 py-1 rounded-full">
                    {level.highlight}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-btl-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    level.popular 
                      ? 'bg-btl-800 hover:bg-btl-700' 
                      : 'bg-btl-700 hover:bg-btl-600'
                  }`}
                >
                  Kom igång
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLevels;
