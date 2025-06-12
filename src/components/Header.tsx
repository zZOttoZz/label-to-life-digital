
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-2xl gradient-text">
            BTL
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hur-det-funkar" className="text-muted-foreground hover:text-foreground transition-colors">
              Så funkar det
            </a>
            <a href="#produkter" className="text-muted-foreground hover:text-foreground transition-colors">
              Produkter
            </a>
            <a href="#priser" className="text-muted-foreground hover:text-foreground transition-colors">
              Priser
            </a>
          </nav>
          
          <Button className="bg-btl-800 hover:bg-btl-700">
            Kom igång
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
