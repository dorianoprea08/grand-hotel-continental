import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import Apartments from "./pages/Apartments";
import BookingPage from "./pages/BookingPage";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Amenities from "./pages/Amenities";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

// Creează un client pentru react-query
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/amenities" element={<Amenities />} />
          {/* rută pentru “learn more” din pagina Home – folosește aceeași pagină “Amenities” */}
          <Route path="/about" element={<Amenities />} />
          {/* orice altă rută → NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
