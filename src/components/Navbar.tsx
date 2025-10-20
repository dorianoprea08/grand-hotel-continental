import { Menu, Star } from "lucide-react";
// Folosește importuri relative, nu aliasuri:
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between relative">
        {/* Stânga: burger pe mobil */}
        <button className="md:hidden inline-flex items-center p-2 -ml-2" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo text centrat */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center select-none">
          <div
            style={{ fontFamily: '"Cinzel", serif' }}
            className="tracking-wide text-xs sm:text-sm md:text-base"
          >
            GRAND HOTEL CONTINENTAL
          </div>
          <div className="flex justify-center gap-1 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-primary" />
            ))}
          </div>
        </div>

        {/* Dreapta: language + theme */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
