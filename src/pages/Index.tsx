
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NFCvsQR from "@/components/NFCvsQR";
import ProductLevels from "@/components/ProductLevels";
import WhyBTL from "@/components/WhyBTL";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <NFCvsQR />
        <ProductLevels />
        <WhyBTL />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
