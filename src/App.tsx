import { Routes, Route, Navigate } from "react-router-dom";

// Importă paginile tale reale.
// Dacă unele fișiere nu există, comentează-le temporar.
import Home from "./pages/Index";
import Apartments from "./pages/Apartments";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

// (Opțional) Dacă ai Navbar/Footer, le poți păstra aici
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Adaugă/menține rutele care există efectiv în proiectul tău */}
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback: orice rută necunoscută → Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
