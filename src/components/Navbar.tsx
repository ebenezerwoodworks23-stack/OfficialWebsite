import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to change header style and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section highlights
      const sections = ["home", "about", "services", "gallery", "why-choose-us", "process", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "Our Process", id: "process" },
    { label: "Wood Options", id: "pricing" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-wood-dark/95 backdrop-blur-md shadow-lg border-b border-wood-walnut/30 py-3"
            : "bg-gradient-to-b from-black/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo in top-left */}
            <div
              className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => scrollToSection("home")}
              id="navbar-logo-container"
            >
              <Logo variant="light" size="md" />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6" id="navbar-desktop-nav">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-sans text-xs uppercase tracking-wider font-semibold transition-colors duration-300 cursor-pointer py-1 ${
                    activeSection === item.id
                      ? "text-wood-gold"
                      : "text-white/90 hover:text-wood-gold"
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-wood-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3" id="navbar-desktop-actions">
              <a
                href="https://wa.me/916382500986?text=Hi%20Ebenezer%20Wood%20Works,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-wood-gold hover:text-wood-gold bg-black/10 px-4 py-2.5 rounded-none transition-all duration-300 hover:bg-black/20"
                id="navbar-whatsapp-button"
              >
                <MessageSquare className="w-4 h-4 text-green-400" />
                WhatsApp
              </a>
              <button
                onClick={onQuoteClick}
                className="bg-wood-gold hover:bg-yellow-500 text-wood-dark font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-none transition-all duration-300 shadow-none cursor-pointer"
                id="navbar-quote-button"
              >
                Get Free Quote
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex lg:hidden items-center gap-2" id="navbar-mobile-toggle">
              <button
                onClick={onQuoteClick}
                className="bg-wood-gold hover:bg-yellow-500 text-wood-dark font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-none transition-all duration-300 shadow-none cursor-pointer"
                id="navbar-mobile-quote-btn"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-1 hover:text-wood-gold transition-colors focus:outline-none"
                id="navbar-mobile-hamburger"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 lg:hidden bg-wood-dark border-b border-wood-walnut/40 shadow-xl"
            id="navbar-mobile-drawer"
          >
            <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto no-scrollbar">
              <div className="flex flex-col gap-1.5">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-2 px-3 font-sans text-sm uppercase tracking-wider font-semibold rounded-sm transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? "bg-wood-walnut/40 text-wood-gold border-l-2 border-wood-gold"
                        : "text-white/80 hover:text-wood-gold hover:bg-wood-walnut/20"
                    }`}
                    id={`nav-mobile-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="pt-4 border-t border-wood-walnut/30 flex flex-col gap-3">
                <a
                  href="tel:6382500986"
                  className="flex items-center justify-center gap-2 w-full border border-white/20 text-white font-sans text-xs uppercase tracking-wider font-bold py-3 rounded-sm hover:bg-wood-walnut/20 transition-all"
                  id="navbar-mobile-call-link"
                >
                  <Phone className="w-4 h-4 text-wood-gold" />
                  Call: 6382500986
                </a>
                <a
                  href="https://wa.me/916382500986?text=Hi%20Ebenezer%20Wood%20Works,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20home%20woodwork."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-sans text-xs uppercase tracking-wider font-bold py-3 rounded-sm transition-all"
                  id="navbar-mobile-whatsapp-link"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
