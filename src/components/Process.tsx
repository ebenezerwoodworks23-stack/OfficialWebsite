import React from "react";
import { processSteps } from "../data";
import { MessagesSquare, Ruler, Layers, Hammer, ChevronRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const iconMap: { [key: number]: any } = {
  1: MessagesSquare,
  2: Ruler,
  3: Layers,
  4: Hammer
};

export default function Process() {
  return (
    <section id="process" className="py-24 bg-wood-warmgray relative overflow-hidden">
      {/* Background slashes mimicking wood patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="wood-slats" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30" stroke="#000" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wood-slats)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="process-header">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-wood-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-wood-walnut">
              Our Process
            </span>
            <span className="h-[1px] w-6 bg-wood-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-wood-dark font-medium mb-4">
            How We Bring Your Vision To Life
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-600 tracking-wide leading-relaxed">
            We follow a rigid, zero-tolerance quality workflow from first meeting to final key handover 
            so your timber projects are completed perfectly on time.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative" id="process-timeline-container">
          
          {/* Horizontal connecting line on large screens */}
          <div className="absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-wood-walnut/15 -translate-y-12 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {processSteps.map((step, index) => {
              const StepIcon = iconMap[step.stepNumber];
              return (
                <div key={step.stepNumber} className="relative group flex flex-col items-center text-center">
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-0 right-10 font-serif text-6xl font-black text-wood-walnut/5 select-none transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
                    0{step.stepNumber}
                  </div>

                  {/* Icon Node */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-16 h-16 rounded-none bg-white border border-wood-walnut/20 flex items-center justify-center mb-6 relative z-10 group-hover:border-wood-gold transition-all duration-300 shadow-none"
                    id={`process-step-node-${step.stepNumber}`}
                  >
                    <StepIcon className="w-7 h-7 text-wood-walnut group-hover:text-wood-gold transition-colors duration-300" />
                    
                    {/* Tiny Floating Counter */}
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-wood-gold text-wood-dark font-sans text-[10px] font-bold rounded-none flex items-center justify-center border border-white shadow-sm">
                      {step.stepNumber}
                    </div>
                  </motion.div>

                  {/* Step Information */}
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-wood-dark mb-2.5 group-hover:text-wood-gold transition-colors">
                    {step.title}
                  </h3>

                  {step.duration && (
                    <span className="inline-block bg-wood-gold/10 border border-wood-gold/20 text-wood-walnut font-sans text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm mb-3">
                      Est. Time: {step.duration}
                    </span>
                  )}

                  <p className="font-sans text-xs text-gray-700 leading-relaxed max-w-[240px] mb-4">
                    {step.description}
                  </p>

                  {/* Elegant nested detailed drop list on hover or click */}
                  <div className="bg-white border border-wood-walnut/10 p-4 rounded-sm text-left max-w-[260px] shadow-sm opacity-90 transition-all group-hover:opacity-100 group-hover:border-wood-gold/20">
                    <span className="block font-sans text-[9px] uppercase tracking-wider text-wood-gold font-bold mb-1">
                      Key deliverables:
                    </span>
                    <p className="font-sans text-[10px] text-gray-500 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Connecting Arrows for Mobile/Tablet in-between cards */}
                  {index < 3 && (
                    <div className="mt-6 text-wood-walnut/30 lg:hidden">
                      <ChevronDown className="w-5 h-5 animate-pulse" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
