
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c4673fac-0aa8-4f1c-88bf-342d1df8ada7.png" 
              alt="BTL - Behind the Label" 
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
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
          
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:flex bg-btl-800 hover:bg-btl-700">
              Kom igång
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
