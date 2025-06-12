
const Footer = () => {
  return (
    <footer className="bg-btl-900 text-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-2xl gradient-text mb-4">BTL</h3>
            <p className="text-btl-300 leading-relaxed">
              Behind the Label - Vi kopplar samman fysiska produkter med digitala upplevelser.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produkter</h4>
            <ul className="space-y-2 text-btl-300">
              <li><a href="#" className="hover:text-white transition-colors">BTL Basic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BTL Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BTL Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-btl-300">
              <li><a href="#" className="hover:text-white transition-colors">Dokumentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Företag</h4>
            <ul className="space-y-2 text-btl-300">
              <li><a href="#" className="hover:text-white transition-colors">Om oss</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriär</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-btl-800 mt-12 pt-8 text-center text-btl-400">
          <p>&copy; 2024 BTL - Behind the Label. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
