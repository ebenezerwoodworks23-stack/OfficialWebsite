import React from "react";
import { motion } from "motion/react";

export default function Testimonials() {
  const points = [
    {
      title: "Thoughtful planning",
      description: "Clear discussion of layout, materials, and finish before work begins.",
    },
    {
      title: "Careful workmanship",
      description: "Each piece is built around the space and handled with attention to detail.",
    },
    {
      title: "Direct communication",
      description: "Updates and guidance are shared throughout the process so the work stays clear and simple.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-wood-cream/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-wood-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-wood-walnut/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16" id="testimonials-header">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-wood-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-wood-walnut">
              Client Feedback
            </span>
            <span className="h-[1px] w-6 bg-wood-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-wood-dark font-medium mb-4">
            What Clients Value
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-600 tracking-wide leading-relaxed">
            We focus on clear planning, careful execution, and practical choices that suit each space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-wood-gold/15 hover:border-wood-gold/40 p-8 rounded-none shadow-none transition-all duration-300"
            >
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-wood-dark mb-3">
                {point.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed tracking-wide">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
