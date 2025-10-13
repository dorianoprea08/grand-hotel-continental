import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import lazuliLogo from "@/assets/lazuli-logo.png";
export default function Navbar() {
  const {
    t
  } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 py-6 shadow-lg" : "bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 py-8")}>
      <nav className="container">
        {/* Menu button in top-right */}
        <div className="flex justify-end mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="rounded-full h-11 w-11 text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center text-center text-white space-y-4">
          <div className="flex items-center gap-3 w-full max-w-2xl">
            <div className="flex-1 h-px bg-white/30"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wider">
              GRAND HOTEL CONTINENTAL
            </h1>
            <div className="flex-1 h-px bg-white/30"></div>
          </div>
          
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <a href="tel:+1234567890" className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Phone className="h-6 w-6 text-white" />
          </a>
        </div>
      </nav>

      {/* Navigation Drawer */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <SheetHeader className="border-b pb-4 mb-6">
            <SheetTitle className="flex items-center space-x-3">
              <img src={lazuliLogo} alt="Lazuli Marsa Alam" className="h-10 w-auto object-contain" />
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
                <span className="text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium">Language</span>
                <LanguageSelector />
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