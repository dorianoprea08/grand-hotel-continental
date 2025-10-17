import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import lazuliLogo from "@/assets/lazuli-logo.webp";
import hotelLogo from "@/assets/hotel-logo.webp";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
export default function Navbar() {
  const {
    t
  } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navLinks = [{
    name: t.nav.home,
    path: "/"
  }, {
    name: t.nav.apartments,
    path: "/apartments"
  }, {
    name: t.nav.amenities,
    path: "/amenities"
  }, {
    name: t.nav.gallery,
    path: "/gallery"
  }, {
    name: t.nav.contact,
    path: "/contact"
  }];
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains("light");
      setIsDark(!isLight);
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, []);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-lg shadow-sm border-b", scrolled ? "py-3 shadow-md" : "py-5")}>
      <nav className="container flex justify-between items-center">

        <Link to="/" className="flex-1 flex justify-center min-w-0">
          <img 
            src={hotelLogo} 
            alt="Grand Hotel Continental"
            width="258"
            height="48"
            className={cn(
              "h-8 sm:h-10 md:h-12 w-auto object-contain max-w-[200px] sm:max-w-[280px] md:max-w-full transition-all duration-300",
              !isDark && "invert"
            )}
          />
        </Link>

        <div className="flex items-center px-1 sm:px-2">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full h-11 w-11">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Navigation Drawer */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <SheetHeader className="border-b pb-4 mb-6">
            <SheetTitle>
              <span className="text-lg font-semibold">Menu</span>
            </SheetTitle>
          </SheetHeader>
          
          <nav className="flex flex-col h-[calc(100vh-140px)] justify-between">
            <ul className="space-y-2">
              {navLinks.map(link => <li key={link.name}>
                  <Link to={link.path} className="block py-3 px-4 text-base font-medium transition-colors hover:bg-muted rounded-lg hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                </li>)}
            </ul>
            
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium">Language</span>
                <LanguageSelector />
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>
              <Button asChild className="w-full btn-primary h-12 text-base">
                <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.bookNow}
                </Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>;
}