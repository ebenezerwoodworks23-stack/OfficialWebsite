import React from "react";
import Logo from "./Logo";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ArrowUp,
  Clock
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
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

  const servicesLinks = [
    { label: "Modular Kitchen", id: "services" },
    { label: "Wardrobes & Sliding Closets", id: "services" },
    { label: "Wooden Cupboards", id: "services" },
    { label: "TV Panel Units", id: "services" },
    { label: "Bedroom Interiors", id: "services" },
    { label: "Office & Study Desks", id: "services" },
    { label: "Pooja Units", id: "services" },
    { label: "Custom Furniture", id: "services" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-wood-dark text-white pt-20 pb-8 relative overflow-hidden border-t border-wood-walnut/30" id="footer-container">
      {/* Abstract structural joint layout element in background */}
      <div className="absolute right-0 bottom-0 w-80 h-80 border-r-2 border-b-2 border-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10" id="footer-top-grid">
          
          {/* Column 1: Logo & Mission Statement (5 spans) */}
          <div className="lg:col-span-5 space-y-6">
            <div onClick={scrollToTop} className="cursor-pointer inline-block" id="footer-logo">
              <Logo variant="light" size="lg" />
            </div>
            
            <p className="font-sans text-xs text-wood-cream/80 leading-relaxed max-w-sm font-light">
              Ebenezer Wood Works creates custom interiors and furniture for homes and offices with careful planning and clean finishing.
            </p>

            <div className="flex gap-3" id="footer-social-icons">
              <a
                href="https://wa.me/916382500986?text=Hi%20Ebenezer%20Wood%20Works,%20I'd%20like%20to%20get%20a%20free%20woodwork%20estimate."
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-none bg-white/5 hover:bg-wood-gold hover:text-wood-dark border border-white/10 flex items-center justify-center transition-all"
                aria-label="WhatsApp Link"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 spans) */}
          <div className="lg:col-span-2 space-y-5" id="footer-links-column">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-wood-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-sans text-xs text-wood-cream/80 hover:text-wood-gold cursor-pointer transition-colors text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services quick list (2 spans) */}
          <div className="lg:col-span-2 space-y-5" id="footer-services-column">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-wood-gold">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-sans text-xs text-wood-cream/80 hover:text-wood-gold cursor-pointer transition-colors text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Detailed Contact Address (3 spans) */}
          <div className="lg:col-span-3 space-y-5" id="footer-contact-column">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-wood-gold">
              Contact Information
            </h4>
            <ul className="space-y-4">
              
              {/* Telephone */}
              <li className="flex gap-3 items-start">
                <Phone className="w-4.5 h-4.5 text-wood-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-white/40 leading-none mb-1">
                    Direct Phone Line
                  </span>
                  <a href="tel:6382500986" className="font-sans text-xs text-wood-cream/95 hover:text-wood-gold transition-colors font-semibold">
                    +91 6382500986
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex gap-3 items-start">
                <Mail className="w-4.5 h-4.5 text-wood-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-white/40 leading-none mb-1">
                    Email Correspondence
                  </span>
                  <a href="mailto:ebenezerwoodworks23@gmail.com" className="font-sans text-xs text-wood-cream/95 hover:text-wood-gold transition-colors font-semibold break-all">
                    ebenezerwoodworks23@gmail.com
                  </a>
                </div>
              </li>

              {/* Timing */}
              <li className="flex gap-3 items-start">
                <Clock className="w-4.5 h-4.5 text-wood-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-white/40 leading-none mb-1">
                    Factory Operating Hours
                  </span>
                  <span className="font-sans text-xs text-wood-cream/80 font-semibold block">
                    Mon - Sat: 9:00 AM - 7:00 PM <br />
                    Sunday: Closed
                  </span>
                </div>
              </li>

              {/* Location */}
              <li className="flex gap-3 items-start">
                <MapPin className="w-4.5 h-4.5 text-wood-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-white/40 leading-none mb-1">
                    Design Studios
                  </span>
                  <span className="font-sans text-xs text-wood-cream/80 font-semibold block leading-relaxed">
                    Madurai, <br />Tamil Nadu, India
                  </span>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left" id="footer-bottom">
          
          {/* Exact Requested Copyright Text */}
          <p className="font-sans text-[10px] uppercase tracking-wider text-white/40">
            © 2026 Ebenezer Wood Works. All Rights Reserved.
          </p>

          {/* Quick back-to-top trigger */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-wider text-wood-gold hover:text-white transition-colors cursor-pointer focus:outline-none"
            id="footer-scroll-top-btn"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
