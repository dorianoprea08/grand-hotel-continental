import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import luxuryLobby from "@/assets/luxury-lobby.webp";
import luxuryBedroom from "@/assets/luxury-bedroom.webp";
import luxuryRestaurant from "@/assets/luxury-restaurant.webp";
import deluxeSuite from "@/assets/deluxe-suite.webp";
import presidentialSuite from "@/assets/presidential-suite.webp";
import juniorSuite from "@/assets/junior-suite.webp";

// Featured rooms data
const featuredApartments: ApartmentProps[] = [
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
    description: "Elegant room with two separate beds, perfect for friends or colleagues traveling together.",
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
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Feature items
  const features = [
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.beachfront.title,
      description: t.home.amenities.features.beachfront.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.pools.title,
      description: t.home.amenities.features.pools.description
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.restaurant.title,
      description: t.home.amenities.features.restaurant.description
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.wifi.title,
      description: t.home.amenities.features.wifi.description
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.bar.title,
      description: t.home.amenities.features.bar.description
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.location.title,
      description: t.home.amenities.features.location.description
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  {t.home.welcome.description1}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  {t.home.welcome.description2}
                </p>
                <Button asChild className="btn-primary w-full sm:w-auto h-11 sm:h-10">
                  <Link to="/about">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms] mt-8 lg:mt-0">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                  <img 
                    src={luxuryLobby}
                    alt="Grand Hotel Continental Luxury Lobby"
                    loading="eager"
                    decoding="async"
                    width="700"
                    height="525"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-2/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={luxuryBedroom}
                    alt="Luxury Suite Interior with Premium Furnishings"
                    loading="eager"
                    decoding="async"
                    width="450"
                    height="350"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-1/2 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={luxuryRestaurant}
                    alt="Fine Dining Restaurant at Grand Hotel Continental"
                    loading="eager"
                    decoding="async"
                    width="350"
                    height="250"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-secondary to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.booking.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">
                  {t.home.booking.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  {t.home.booking.description}
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {t.home.booking.benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 flex-shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <BookingForm />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Featured Apartments */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in px-4">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.featuredApartments.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                {t.home.featuredApartments.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {t.home.featuredApartments.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredApartments.map((apartment, index) => (
                <div key={apartment.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <ApartmentCard apartment={apartment} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 sm:mt-12 px-4">
              <Button asChild className="btn-primary w-full sm:w-auto h-11 sm:h-10">
                <Link to="/apartments">
                  {t.home.featuredApartments.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Features Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in px-4">
              <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.amenities.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">
                {t.home.amenities.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {t.home.amenities.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-5 sm:p-6 rounded-xl animate-fade-in-up flex flex-col items-center text-center luxury-hover"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                {t.home.cta.description}
              </p>
              <Button asChild size="lg" className="btn-primary w-full sm:w-auto h-12 sm:h-11">
                <Link to="/booking">{t.home.cta.bookNow}</Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-24 fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
