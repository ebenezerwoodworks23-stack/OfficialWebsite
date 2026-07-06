import React from "react";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "../../assets/TVUnitWork(1).jpeg";

interface HeroProps {
  onQuoteClick: () => void;
  onAboutClick: () => void;
}

export default function Hero({ onQuoteClick, onAboutClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wood-dark"
    >
      {/* Immersive background image with parallax overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02] transition-transform duration-1000"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
        id="hero-bg-image"
      />

      {/* Dark elegant premium overlay for extreme typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40 z-10" />
      
      {/* Decorative vertical light columns resembling wooden dividers */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-5 flex justify-between px-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-24 pb-12 w-full text-left">
        <div className="max-w-3xl">
          {/* Subtle luxurious badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-wood-gold/15 border border-wood-gold/40 px-3.5 py-1.5 rounded-sm mb-6"
            id="hero-badge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-wood-gold animate-pulse" />
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-wood-cream">
              Premium Wood Joinery & Design
            </span>
          </motion.div>

          {/* Majestic Hero Headline in Editorial Playfair Font */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6.5xl text-white font-medium tracking-tight leading-[1.1] mb-6"
            id="hero-headline"
          >
            Crafting Beautiful Spaces with <br />
            <span className="text-wood-gold italic font-normal">Premium Wood Interiors</span>
          </motion.h1>

          {/* Clear, highly readable description of services offered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-wood-cream/85 leading-relaxed tracking-wide mb-10 max-w-2xl font-light"
            id="hero-subheading"
          >
            We design and build premium modular kitchens, wardrobes, cupboards, TV units,
            bedroom interiors, office interiors, and custom wooden furniture with exceptional
            craftsmanship.
          </motion.p>

          {/* Action Call to Buttons with micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            id="hero-actions"
          >
            <button
              onClick={onQuoteClick}
              className="group bg-wood-gold hover:bg-yellow-500 text-wood-dark font-sans text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 shadow-none cursor-pointer flex items-center justify-center gap-2.5"
              id="hero-quote-btn"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="https://wa.me/916382500986?text=Hi%20Ebenezer%20Wood%20Works,%20I'd%20like%20to%20get%20a%20free%20design%20consultation%20and%20quote%20for%20my%20home."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 border border-white/20 hover:border-wood-gold text-white hover:text-wood-gold bg-black/30 hover:bg-black/50 font-sans text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 shadow-none cursor-pointer"
              id="hero-whatsapp-btn"
            >
              <MessageSquare className="w-5 h-5 text-green-400" />
              WhatsApp Us
            </a>

            <button
              onClick={onAboutClick}
              className="text-white/80 hover:text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest px-4 py-4 rounded-none transition-all duration-300 hover:bg-white/5 cursor-pointer flex items-center justify-center gap-1"
              id="hero-about-btn"
            >
              About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
