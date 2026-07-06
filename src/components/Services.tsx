import React, { useState } from "react";
import { servicesData } from "../data";
import { Service } from "../types";
import { 
  ChefHat, 
  FolderOpen, 
  Layers, 
  Tv, 
  Bed, 
  Briefcase, 
  Columns, 
  Wrench, 
  Compass, 
  Home, 
  X, 
  Check, 
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Helper map to convert strings to components
const iconMap: { [key: string]: any } = {
  ChefHat,
  FolderOpen,
  Layers,
  Tv,
  Bed,
  Briefcase,
  Columns,
  Wrench,
  Compass,
  Home
};

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForQuote }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
  };

  const handleQuickQuote = (serviceTitle: string) => {
    setSelectedService(null);
    onSelectServiceForQuote(serviceTitle);
  };

  return (
    <section id="services" className="py-24 bg-wood-warmgray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="services-header">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-wood-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-wood-walnut">
              Our Expertise
            </span>
            <span className="h-px w-6 bg-wood-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-wood-dark font-medium mb-4">
            Bespoke Woodworking & Interiors
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-600 tracking-wide leading-relaxed">
            From modern modular kitchens with fluid hardware to custom heritage carvings and statement interiors, 
            Ebenezer Wood Works elevates spaces with absolute durability and elite aesthetics.
          </p>
        </div>

        {/* Services Grid (featured custom services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Home;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                className="group bg-white border border-wood-gold/20 hover:border-wood-gold/50 rounded-none overflow-hidden shadow-none transition-all duration-300 flex flex-col h-full"
                id={`service-card-${service.id}`}
              >
                {/* Card Image Area with visual zoom and category hover effect */}
                <div className="relative h-56 overflow-hidden bg-wood-dark">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  
                  {/* Absolute Badge Float holding the icon */}
                  <div className="absolute bottom-4 left-4 bg-wood-dark/90 backdrop-blur-sm border border-wood-gold/30 p-2.5 rounded-none shadow-sm flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-wood-gold" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-serif text-lg font-semibold text-wood-dark mb-2.5 group-hover:text-wood-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-gray-600 leading-relaxed tracking-wide mb-6 grow">
                    {service.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => handleLearnMore(service)}
                      className="text-wood-walnut hover:text-wood-gold font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 group/btn cursor-pointer"
                      id={`service-learn-more-${service.id}`}
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                    
                    <button
                      onClick={() => handleQuickQuote(service.title)}
                      className="text-gray-400 hover:text-wood-dark font-sans text-[10px] uppercase tracking-wider font-semibold border border-transparent hover:border-wood-dark/10 px-2.5 py-1 rounded-none transition-all"
                    >
                      Get Price
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* High-End Detail Slide-over / Modal (AnimatePresence) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-y-auto" id="service-modal-overlay">
            {/* Backdrop shadow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80"
            />

            {/* Modal Body */}
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white max-w-3xl w-full rounded-none overflow-hidden shadow-2xl border border-wood-gold/30 flex flex-col md:flex-row"
                id="service-modal-body"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-wood-gold text-white p-1.5 rounded-full transition-colors focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left side: Premium Image Panel */}
                <div className="w-full md:w-1/2 relative bg-wood-dark min-h-[250px] md:min-h-full">
                  <img
                    src={selectedService.imageUrl}
                    alt={selectedService.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-wood-dark/95 via-wood-dark/40 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-wood-gold text-wood-dark text-[10px] uppercase tracking-widest font-bold px-2 py-1 mb-2 rounded-none">
                      Premium Selection
                    </span>
                    <h4 className="font-serif text-2xl text-white font-medium">
                      {selectedService.title}
                    </h4>
                  </div>
                </div>

                {/* Right side: Detailed Specs */}
                <div className="w-full md:w-1/2 p-8 max-h-[80vh] overflow-y-auto no-scrollbar">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-wood-gold font-bold block mb-1">
                    Bespoke Craftsmanship Specs
                  </span>
                  <h3 className="font-serif text-xl font-bold text-wood-dark mb-4">
                    Product Breakdown
                  </h3>
                  
                  <p className="font-sans text-xs text-gray-700 leading-relaxed mb-6">
                    {selectedService.longDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6">
                    <h5 className="font-sans text-xs uppercase tracking-wider font-bold text-wood-dark mb-2.5">
                      Core Features Include:
                    </h5>
                    <ul className="space-y-2">
                      {selectedService.features.map((feat, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-xs text-gray-600 leading-relaxed">
                          <Check className="w-4 h-4 text-wood-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials selection tags */}
                  {selectedService.materials && (
                    <div className="mb-8">
                      <h5 className="font-sans text-xs uppercase tracking-wider font-bold text-wood-dark mb-2.5">
                        Standard Woods & Materials:
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedService.materials.map((mat, i) => (
                          <span
                            key={i}
                            className="bg-wood-cream text-wood-walnut border border-wood-walnut/15 px-2 py-1 rounded-none text-[10px] font-semibold"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pre-fill query button */}
                  <div className="space-y-2">
                    <button
                      onClick={() => handleQuickQuote(selectedService.title)}
                      className="w-full bg-wood-gold hover:bg-yellow-500 text-wood-dark text-center font-sans text-xs font-bold uppercase tracking-wider py-3.5 rounded-none transition-all shadow-none hover:scale-[1.01] cursor-pointer"
                    >
                      Pre-Fill Consultation Quote
                    </button>
                    
                    <a
                      href={`https://wa.me/916382500986?text=Hi%20Ebenezer%20Wood%20Works,%20I%20would%20like%20to%20get%20pricing%20details%20and%20design%20catalog%20for%20${encodeURIComponent(selectedService.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 w-full border border-green-500 hover:bg-green-50 text-green-700 text-center font-sans text-xs font-bold uppercase tracking-wider py-3 rounded-none transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-green-500" />
                      Inquire on WhatsApp
                    </a>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
