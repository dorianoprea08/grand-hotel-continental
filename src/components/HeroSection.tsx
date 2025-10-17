import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import hotelEntrance from "@/assets/hotel-entrance.jpg";
export default function HeroSection() {
  const {
    t
  } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax effect
  const backgroundY = scrollY * 0.5;
  const contentY = scrollY * 0.2;
  return <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${hotelEntrance})`,
      transform: `translateY(${backgroundY}px)`,
      backgroundPosition: `center ${50 + scrollY * 0.05}%`,
      willChange: 'transform'
    }} />
      
      {/* Enhanced gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-background" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6" style={{
      transform: `translateY(${contentY}px)`,
      willChange: 'transform'
    }}>
        <div className="max-w-3xl">
          <div className="flex justify-center mb-6 sm:mb-8">
            
          </div>
          <span className="inline-block text-white/90 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 tracking-widest border-b border-white/30 pb-2 animate-fade-in-up">
            {t.hero.subtitle}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 px-2 animate-fade-in-up [animation-delay:200ms] leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 animate-fade-in-up [animation-delay:400ms]">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0 animate-fade-in-up [animation-delay:600ms]">
            <Button asChild size="lg" variant="heroSolid" className="w-full sm:w-auto sm:min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/40 h-12 sm:h-11 text-base sm:text-lg">
              <Link to="/booking">{t.hero.bookStay}</Link>
            </Button>
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto sm:min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-white/20 h-12 sm:h-11 text-base sm:text-lg">
              <Link to="/apartments">{t.hero.exploreApartments}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#welcome" className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">{t.hero.scrollDown}</span>
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>
      
      {/* Royal ornamental divider with enhanced luxury styling */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-16 animate-float" viewBox="0 0 256 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M128 32L138 22L148 32L138 42L128 32Z" fill="currentColor" className="text-primary opacity-60 drop-shadow-lg" />
          <line x1="20" y1="32" x2="118" y2="32" stroke="currentColor" strokeWidth="1.5" className="text-primary opacity-40" />
          <line x1="138" y1="32" x2="236" y2="32" stroke="currentColor" strokeWidth="1.5" className="text-primary opacity-40" />
          <circle cx="128" cy="32" r="3" fill="currentColor" className="text-primary opacity-70 drop-shadow-md" />
          <circle cx="80" cy="32" r="1.5" fill="currentColor" className="text-primary opacity-50" />
          <circle cx="176" cy="32" r="1.5" fill="currentColor" className="text-primary opacity-50" />
        </svg>
      </div>
    </section>;
}