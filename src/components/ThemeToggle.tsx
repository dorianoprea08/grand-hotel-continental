
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const isDarkMode = theme !== "light";
    
    setIsDark(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    
    if (isDark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 transition-all duration-300 hover:bg-muted"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-500 rotate-0" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-500 rotate-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
