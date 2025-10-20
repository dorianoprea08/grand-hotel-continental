import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
// Note: The original Lazuli logo was unused.  The navigation bar now uses
// a text-based logo instead, so this import has been removed.
// Replace the image-based logo with a simple text logo.  We import the Star icon
// from lucide-react to render five decorative stars underneath the hotel name,
// reinforcing the five-star rating.  Using text allows the logo to
// automatically adapt to dark/light themes without image manipulation.
import { Star } from "lucide-react";
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

  // Generate the star icons used in the text-based logo.  This array is
  // rendered below beneath the hotel name.  Each star uses the primary
  // color and scales responsively via tailwind classes.
  const stars = Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary"
    />
  ));
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
      <nav className="container">
        <div className="flex justify-between items-center">
          {/* Hamburger Menu - Left */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="rounded-full h-11 w-11"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Logo - Center */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center no-underline">
            {/* Hotel name rendered as text in a custom royal font.  The text sizes
                scale responsively across breakpoints for better legibility. */}
            <span className="font-royale text-lg sm:text-xl md:text-2xl leading-none">
              Grand Hotel Continental
            </span>
            {/* Five-star rating icons below the hotel name */}
            <div className="flex space-x-0.5 mt-0.5">
              {stars}
            </div>
          </Link>

          {/* Right Side Spacer */}
          <div className="w-11"></div>
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