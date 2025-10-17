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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 px-2 animate-fade-in-up leading-tight">
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
      
      {/* Royal ornamental divider - elegant design */}
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 pointer-events-none flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <svg className="relative w-80 sm:w-96 md:w-[500px] h-24 sm:h-28 md:h-32 animate-float" viewBox="0 0 500 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left line with decorative dots */}
          <line x1="20" y1="64" x2="200" y2="64" stroke="currentColor" strokeWidth="1.5" className="text-primary opacity-40" />
          <circle cx="60" cy="64" r="2" fill="currentColor" className="text-primary opacity-50" />
          <circle cx="140" cy="64" r="2" fill="currentColor" className="text-primary opacity-50" />
          
          {/* Center diamond */}
          <rect x="235" y="49" width="30" height="30" transform="rotate(45 250 64)" fill="currentColor" stroke="currentColor" strokeWidth="1.5" className="text-primary opacity-70 drop-shadow-xl" />
          
          {/* Right line with decorative dots */}
          <line x1="300" y1="64" x2="480" y2="64" stroke="currentColor" strokeWidth="1.5" className="text-primary opacity-40" />
          <circle cx="360" cy="64" r="2" fill="currentColor" className="text-primary opacity-50" />
          <circle cx="440" cy="64" r="2" fill="currentColor" className="text-primary opacity-50" />
          
          {/* Additional elegant accents */}
          <circle cx="220" cy="64" r="3" fill="currentColor" className="text-primary opacity-60" />
          <circle cx="280" cy="64" r="3" fill="currentColor" className="text-primary opacity-60" />
        </svg>
      </div>
    </section>;
}