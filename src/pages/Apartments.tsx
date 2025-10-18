
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";
import deluxeSuite from "@/assets/deluxe-suite.webp";
import presidentialSuite from "@/assets/presidential-suite.webp";
import juniorSuite from "@/assets/junior-suite.webp";
import luxuryBedroom from "@/assets/luxury-bedroom.webp";

// All rooms and suites data
const allApartments: ApartmentProps[] = [
  {
    id: "1",
    name: "Deluxe Room",
    description: "Elegant 34-42 sqm room perfect for refined taste, featuring classic décor and modern comforts.",
    price: 180,
    capacity: 2,
    size: 42,
    image: deluxeSuite,
    location: "Calea Victoriei View",
    features: ["Wi-Fi", "Minibar", "Safe", "Air Conditioning", "Smart TV", "Premium Bath"]
  },
  {
    id: "2",
    name: "Senior Apartment",
    description: "Luxurious 61 sqm suite representing five-star elegance with city views and classic furnishings.",
    price: 280,
    capacity: 3,
    size: 61,
    image: presidentialSuite,
    location: "City View",
    features: ["Wi-Fi", "Living Area", "Minibar", "Safe", "Air Conditioning", "Smart TV"]
  },
  {
    id: "3",
    name: "Junior Apartment",
    description: "Sophisticated 46 sqm space with solid wood furniture, espresso machine, and lounge area.",
    price: 220,
    capacity: 2,
    size: 46,
    image: juniorSuite,
    location: "Courtyard View",
    features: ["Wi-Fi", "Espresso Machine", "Lounge", "Safe", "Air Conditioning", "Smart TV"]
  },
  {
    id: "4",
    name: "Standard Room",
    description: "Comfortable 19-26 sqm room perfect for any traveler, with complimentary WiFi and minibar.",
    price: 140,
    capacity: 2,
    size: 26,
    image: luxuryBedroom,
    location: "Courtyard View",
    features: ["Wi-Fi", "Minibar", "Safe", "Air Conditioning", "Smart TV"]
  },
  {
    id: "5",
    name: "Deluxe Twin Room",
    description: "Elegant room with two separate beds, perfect for friends or colleagues. Classic design and modern amenities.",
    price: 190,
    capacity: 2,
    size: 38,
    image: deluxeSuite,
    location: "Calea Victoriei View",
    features: ["Wi-Fi", "Minibar", "Safe", "Air Conditioning", "Smart TV", "Twin Beds"]
  },
  {
    id: "6",
    name: "Superior Room",
    description: "Premium finishes and attention to detail, ideal for a comfortable stay in central Bucharest.",
    price: 200,
    capacity: 2,
    size: 35,
    image: juniorSuite,
    location: "City View",
    features: ["Wi-Fi", "Minibar", "Safe", "Air Conditioning", "Smart TV", "Premium Bath"]
  },
];

export default function Apartments() {
  const { t } = useLanguage();
  const [filteredApartments, setFilteredApartments] = useState<ApartmentProps[]>(allApartments);
  const [capacityFilter, setCapacityFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([100, 350]);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Apply filters
  useEffect(() => {
    let result = allApartments;
    
    // Filter by capacity
    if (capacityFilter !== "all") {
      const capacity = parseInt(capacityFilter);
      result = result.filter(apt => apt.capacity >= capacity);
    }
    
    // Filter by location
    if (locationFilter !== "all") {
      result = result.filter(apt => apt.location === locationFilter);
    }
    
    // Filter by price range
    result = result.filter(apt => apt.price >= priceRange[0] && apt.price <= priceRange[1]);
    
    setFilteredApartments(result);
  }, [capacityFilter, locationFilter, priceRange]);
  
  // Get unique locations for filter
  const locations = ["all", ...new Set(allApartments.map(apt => apt.location))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-secondary to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.apartments.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.apartments.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute top-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {/* Capacity Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.apartments.filters.guests}
                </label>
                <Select value={capacityFilter} onValueChange={setCapacityFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.apartments.filters.guests} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.apartments.filters.anyGuests}</SelectItem>
                    <SelectItem value="1">{t.apartments.filters.onePlus}</SelectItem>
                    <SelectItem value="2">{t.apartments.filters.twoPlus}</SelectItem>
                    <SelectItem value="3">{t.apartments.filters.threePlus}</SelectItem>
                    <SelectItem value="4">{t.apartments.filters.fourPlus}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.apartments.filters.location}
                </label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.apartments.filters.location} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.apartments.filters.allLocations}</SelectItem>
                    {locations.filter(loc => loc !== "all").map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.apartments.filters.priceRange}: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  defaultValue={[100, 350]}
                  min={100}
                  max={350}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6 animate-fade-in [animation-delay:200ms]">
              <p className="text-muted-foreground">
                {t.apartments.filters.showing} {filteredApartments.length} {t.apartments.filters.of} {allApartments.length} {t.apartments.filters.accommodations}
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setCapacityFilter("all");
                  setLocationFilter("all");
                  setPriceRange([100, 350]);
                }}
              >
                {t.apartments.filters.resetFilters}
              </Button>
            </div>
          </div>
        </section>
        
        {/* Apartments Grid */}
        <section className="section">
          <div className="container">
            {filteredApartments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredApartments.map((apartment, index) => (
                  <div key={apartment.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    <ApartmentCard apartment={apartment} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2">{t.apartments.filters.noMatch}</h3>
                <p className="text-muted-foreground mb-6">{t.apartments.filters.adjustFilters}</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setCapacityFilter("all");
                    setLocationFilter("all");
                    setPriceRange([100, 350]);
                  }}
                >
                  {t.apartments.filters.resetFilters}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
