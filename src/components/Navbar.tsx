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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
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
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/80 dark:bg-card/80 backdrop-blur-lg py-2 sm:py-3 shadow-md" : "bg-transparent py-3 sm:py-5")}>
      <nav className="container flex justify-between items-center px-4 sm:px-6">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link to="/" className="flex items-center">
            <img 
              src={lazuliLogo} 
              alt="Lazuli Marsa Alam" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain" 
            />
          </Link>
          <div className="hidden sm:flex">
            <LanguageSelector />
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8">
          {navLinks.map(link => <li key={link.name} className="relative">
              <Link to={link.path} className="font-medium text-sm xl:text-base transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                {link.name}
              </Link>
            </li>)}
        </ul>

        <div className="hidden lg:flex items-center space-x-2">
          <ThemeToggle />
          <Button asChild className="btn-primary text-sm xl:text-base">
            <Link to="/booking">{t.nav.bookNow}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-1 sm:space-x-2">
          <div className="sm:hidden">
            <LanguageSelector />
          </div>
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="rounded-full h-9 w-9 sm:h-10 sm:w-10"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DrawerContent className="h-[85vh]">
          <DrawerHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <DrawerTitle className="flex items-center space-x-3">
                <img src={lazuliLogo} alt="Lazuli Marsa Alam" className="h-10 w-auto object-contain" />
                <span className="text-lg font-semibold">Menu</span>
              </DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                  <X className="h-5 w-5" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>
          
          <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
            <ul className="space-y-1">
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
          </div>
        </DrawerContent>
      </Drawer>
    </header>;
}