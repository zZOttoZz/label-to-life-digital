
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { href: "#hur-det-funkar", label: "Så funkar det" },
    { href: "#produkter", label: "Produkter" },
    { href: "#priser", label: "Priser" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Öppna meny</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between pb-4 border-b">
            <h2 className="text-lg font-semibold">Meny</h2>
          </div>
          
          <nav className="flex flex-col space-y-4 mt-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-lg font-medium text-foreground hover:text-btl-800 transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto pb-6">
            <Button 
              className="w-full bg-btl-800 hover:bg-btl-700"
              onClick={closeMenu}
            >
              Kom igång
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
