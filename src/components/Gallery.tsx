import React, { useState } from "react";
import { galleryProjects } from "../data";
import { GalleryProject } from "../types";
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin, Calendar, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Kitchens",
    "Wardrobes",
    "Bedrooms",
    "TV Units",
    "Cupboards",
    "Office Interiors",
  ];

  // Filter projects based on selected category
  const filteredProjects = activeCategory === "All"
    ? galleryProjects
    : galleryProjects.filter(project => project.category === activeCategory);

  const openLightbox = (project: GalleryProject) => {
    // Find index in the filtered list
    const index = filteredProjects.findIndex(p => p.id === project.id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: "prev" | "next", e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;

    let newIndex = lightboxIndex;
    if (direction === "prev") {
      newIndex = lightboxIndex === 0 ? filteredProjects.length - 1 : lightboxIndex - 1;
    } else {
      newIndex = lightboxIndex === filteredProjects.length - 1 ? 0 : lightboxIndex + 1;
    }
    setLightboxIndex(newIndex);
  };

  const currentProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-wood-cream/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="gallery-header">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-wood-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-wood-walnut">
              Our Gallery
            </span>
            <span className="h-[1px] w-6 bg-wood-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-wood-dark font-medium mb-4">
            Completed Masterpieces
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-600 tracking-wide leading-relaxed">
            Take a visual tour of our bespoke wooden installations, tailored wardrobes, modular kitchens, 
            and modern corporate offices crafted to ultimate perfection.
          </p>
        </div>

        {/* Filter Category Tabs (Sticky/centered row) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`font-sans text-xs uppercase tracking-wider font-semibold px-4.5 py-2.5 transition-all duration-300 rounded-none cursor-pointer border ${
                activeCategory === cat
                  ? "bg-wood-dark border-wood-dark text-wood-gold shadow-none"
                  : "bg-white border-wood-walnut/15 text-wood-dark hover:border-wood-gold hover:text-wood-gold"
              }`}
              id={`filter-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Project Cards Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          id="gallery-masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group overflow-hidden bg-wood-dark rounded-none border border-wood-gold/20 shadow-none hover:border-wood-gold/50 cursor-pointer"
                onClick={() => openLightbox(project)}
                id={`project-card-${project.id}`}
              >
                {/* Image element with lazy loading */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Elegant overlay showing project titles & categories */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" id={`project-card-overlay-${project.id}`}>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-wood-gold font-bold mb-1">
                    {project.category}
                  </span>
                  
                  <h4 className="font-serif text-lg text-white font-medium mb-2 leading-snug">
                    {project.title}
                  </h4>

                  <div className="flex items-center justify-between text-white/70 font-sans text-[10px] uppercase tracking-wider border-t border-white/10 pt-2.5 mt-1.5">
                    {project.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-wood-gold" />
                        {project.location}
                      </span>
                    )}
                    <span className="bg-wood-gold/20 text-wood-gold border border-wood-gold/30 px-2 py-0.5 rounded-none flex items-center gap-1 font-bold">
                      <Maximize2 className="w-3 h-3" />
                      View Project
                    </span>
                  </div>
                </div>

                {/* Quick Static Info Badge for Non-Hover Devices (touchscreens) */}
                <div className="md:hidden bg-white p-4 border-t border-wood-walnut/10 flex flex-col">
                  <span className="font-sans text-[9px] uppercase tracking-wider text-wood-walnut font-bold">
                    {project.category}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-wood-dark mt-0.5">
                    {project.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Carousel Overlay */}
        <AnimatePresence>
          {currentProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 overflow-y-auto" id="gallery-lightbox-overlay">
              {/* Close Button absolute */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 text-white/70 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-colors focus:outline-none"
                aria-label="Close Lightbox"
                id="lightbox-close-btn"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-center justify-center min-h-[50vh] z-40">
                {/* Left Arrow Navigation */}
                <button
                  onClick={(e) => navigateLightbox("prev", e)}
                  className="absolute left-2 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-50 bg-black/50 border border-white/10 text-white hover:border-wood-gold hover:text-wood-gold p-3 rounded-full transition-colors cursor-pointer"
                  aria-label="Previous image"
                  id="lightbox-prev-btn"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Large Image Display */}
                <div className="w-full lg:w-2/3 flex items-center justify-center relative bg-black/40 overflow-hidden rounded-none border border-white/10 shadow-2xl max-h-[70vh]">
                  <img
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-none"
                  />
                </div>

                {/* Side Info Panel */}
                <div className="w-full lg:w-1/3 text-left text-white bg-wood-dark/80 backdrop-blur-md border border-wood-walnut/30 p-6 sm:p-8 rounded-none self-stretch flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 bg-wood-gold/10 border border-wood-gold/30 px-2.5 py-1 rounded-none text-[10px] uppercase tracking-wider font-bold text-wood-gold">
                      <Compass className="w-3.5 h-3.5" />
                      {currentProject.category} Project
                    </div>
                    
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white leading-tight">
                      {currentProject.title}
                    </h3>
                    
                    {currentProject.description && (
                      <p className="font-sans text-xs text-wood-cream/80 leading-relaxed tracking-wide font-light">
                        {currentProject.description}
                      </p>
                    )}
                  </div>

                  <div className="border-t border-wood-walnut/40 pt-5 mt-6 space-y-3">
                    <div className="flex items-center justify-between text-xs font-sans tracking-wide">
                      <span className="text-wood-cream/50">Location:</span>
                      <span className="text-white font-medium flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-wood-gold" />
                        {currentProject.location || "Tamil Nadu"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-sans tracking-wide">
                      <span className="text-wood-cream/50">Completed:</span>
                      <span className="text-white font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-wood-gold" />
                        {currentProject.year || "2026"}
                      </span>
                    </div>
                    
                    {/* Dynamic WhatsApp Inquiry Specific to Project */}
                    <div className="pt-4">
                      <a
                        href={`https://wa.me/916382500986?text=Hi%20Ebenezer%20Wood%20Works,%20I'm%20very%20interested%20in%20a%20design%20similar%20to%20your%20completed%20project:%20"${encodeURIComponent(currentProject.title)}"%20at%20${currentProject.location}.%20Can%20we%20discuss%20pricing?`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-sans text-xs uppercase tracking-wider font-bold py-3.5 rounded-none transition-all"
                      >
                        Inquire About This Design
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Arrow Navigation */}
                <button
                  onClick={(e) => navigateLightbox("next", e)}
                  className="absolute right-2 sm:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-50 bg-black/50 border border-white/10 text-white hover:border-wood-gold hover:text-wood-gold p-3 rounded-full transition-colors cursor-pointer"
                  aria-label="Next image"
                  id="lightbox-next-btn"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
