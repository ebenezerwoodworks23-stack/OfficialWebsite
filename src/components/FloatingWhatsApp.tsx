import React, { useState, useEffect } from "react";
import { MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Trigger a brief welcome tooltip after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Auto close after 8 seconds
    const closeTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2" id="floating-whatsapp-container">
      
      {/* Animated Greeting Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="bg-wood-dark border border-wood-gold text-white p-3.5 rounded-sm shadow-2xl max-w-[240px] text-right pointer-events-auto relative"
            id="whatsapp-floating-tooltip"
          >
            {/* Small decorative close button */}
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-1 left-2 text-[8px] uppercase tracking-widest text-wood-gold hover:text-white"
            >
              close
            </button>
            <div className="flex gap-2 items-start text-left mt-2">
              <div className="bg-wood-gold/10 p-1 rounded-full border border-wood-gold/20 flex-shrink-0 mt-0.5 animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-wood-gold" />
              </div>
              <div>
                <p className="font-sans font-bold text-[10px] uppercase tracking-wider text-wood-gold leading-none mb-1">
                  Online Estimation
                </p>
                <p className="font-sans text-[10px] text-wood-cream/90 leading-normal">
                  Hi! Tap here to get a free price estimate instantly over WhatsApp.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating breathing button wrapper */}
      <a
        href="https://wa.me/916382500986?text=Hi%20Ebenezer%20Wood%20Works,%20I'd%20like%20to%20get%20a%20free%20quote%20for%20my%20home%20woodwork."
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 focus:outline-none group active:scale-95"
        id="whatsapp-floating-button"
        onMouseEnter={() => setShowTooltip(true)}
      >
        {/* Soft backlighting pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping pointer-events-none scale-105" />

        <MessageSquare className="w-7 h-7 text-white fill-white stroke-[0.5]" />
        
        {/* Mobile notification dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-bounce" />
      </a>

    </div>
  );
}
