import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl tracking-wider hover:text-gray-600 transition-colors"
          >
            ALEXANDRA
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block text-sm tracking-wide hover:text-gray-600 transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block text-sm tracking-wide hover:text-gray-600 transition-colors"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-sm tracking-wide hover:text-gray-600 transition-colors"
            >
              CONTACT
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
