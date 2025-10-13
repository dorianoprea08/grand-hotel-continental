import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import lazuliLogo from "@/assets/lazuli-logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
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
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/80 dark:bg-card/80 backdrop-blur-lg py-3 shadow-md" : "bg-transparent py-4")}>
      <nav className="container flex items-center justify-between px-4 sm:px-6">
        {/* LEFT SECTION: Logo perfect centrat vertical */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img 
              src={lazuliLogo} 
              alt="Lazuli Marsa Alam" 
              className="h-12 md:h-14 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* CENTER SECTION: Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map(link => <li key={link.name} className="relative">
              <Link to={link.path} className="font-medium text-sm xl:text-base transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                {link.name}
              </Link>
            </li>)}
        </ul>

        {/* RIGHT SECTION: Actions */}
        <div className="flex items-center space-x-2">
          <div className="hidden sm:flex">
            <LanguageSelector />
          </div>
          <ThemeToggle />
          
          {/* Desktop Book Now Button */}
          <div className="hidden lg:flex">
            <Button asChild className="btn-primary text-sm xl:text-base">
              <Link to="/booking">{t.nav.bookNow}</Link>
            </Button>
          </div>
          
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <div className="sm:hidden mr-1">
              <LanguageSelector />
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="rounded-full h-11 w-11"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <SheetHeader className="border-b pb-4 mb-6">
            <div className="flex items-center justify-between">
              <SheetTitle className="flex items-center space-x-3">
                <img src={lazuliLogo} alt="Lazuli Marsa Alam" className="h-10 w-auto object-contain" />
                <span className="text-lg font-semibold">Menu</span>
              </SheetTitle>
            </div>
          </SheetHeader>
          
          <nav className="flex flex-col h-[calc(100vh-120px)] justify-between">
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="block py-3 px-4 text-base font-medium transition-colors hover:bg-muted rounded-lg hover:text-primary" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3 pt-4 border-t">
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