import React, { useState } from "react";
import { galleryProjects } from "../data";
import { GalleryProject } from "../types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
            <span className="h-px w-6 bg-wood-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-wood-walnut">
              Our Gallery
            </span>
            <span className="h-px w-6 bg-wood-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-wood-dark font-medium mb-4">
            Selected Work
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-600 tracking-wide leading-relaxed">
            A closer look at our custom woodwork and interior projects, created around each client’s space and needs.
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

              <div className="relative w-full max-w-5xl flex items-center justify-center min-h-[50vh] z-40">
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
