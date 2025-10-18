
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Maximize, MapPin, Bath, Coffee, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export interface ApartmentProps {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  image: string;
  location: string;
  features: string[];
}

export default function ApartmentCard({ apartment }: { apartment: ApartmentProps }) {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  
  // Use translated name and description if available
  const translatedName = language !== 'en' && t.apartmentDescriptions[apartment.id]?.name 
    ? t.apartmentDescriptions[apartment.id].name 
    : apartment.name;
    
  const translatedDescription = language !== 'en' && t.apartmentDescriptions[apartment.id]?.description 
    ? t.apartmentDescriptions[apartment.id].description 
    : apartment.description;
  
  return (
    <div 
      className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={apartment.image} 
          alt={translatedName}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 flex items-end p-4 sm:p-6 transition-opacity duration-300">
          <div className="w-full">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1">{translatedName}</h3>
            <div className="flex items-center text-white/80 text-xs sm:text-sm mb-2">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
              <span>{apartment.location}</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-white text-xs sm:text-sm">
              <div className="flex items-center">
                <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                <span>{apartment.capacity} {apartment.capacity === 1 ? 
                  t.apartments.filters.guests : t.apartments.filters.guests}</span>
              </div>
              <div className="flex items-center">
                <Maximize className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                <span>{apartment.size} m²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">{translatedDescription}</p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {apartment.features.slice(0, 3).map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center text-xs sm:text-sm text-muted-foreground bg-muted px-2 sm:px-3 py-1 rounded-full"
            >
              {feature === "Bathroom" && <Bath className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />}
              {feature === "Kitchen" && <Coffee className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />}
              {feature === "Wi-Fi" && <Wifi className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />}
              <span>{feature}</span>
            </div>
          ))}
          {apartment.features.length > 3 && (
            <div className="text-xs sm:text-sm text-muted-foreground bg-muted px-2 sm:px-3 py-1 rounded-full">
              +{apartment.features.length - 3} {t.apartments.filters.more}
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-0 pt-2">
          <div>
            <span className="text-xl sm:text-2xl font-bold">${apartment.price}</span>
            <span className="text-muted-foreground text-xs sm:text-sm"> / {t.booking.summary.night}</span>
          </div>
          <Button asChild className="btn-primary w-full sm:w-auto h-10 text-sm sm:text-base">
            <Link to={`/apartments/${apartment.id}`}>{t.apartments.filters.viewDetails}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
