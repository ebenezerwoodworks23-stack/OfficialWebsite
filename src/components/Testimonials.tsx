import React from "react";
import { testimonialsData } from "../data";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-wood-cream/10 relative overflow-hidden">
      {/* Abstract luxury geometric wood shapes in backgrounds */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-wood-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-wood-walnut/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="testimonials-header">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-wood-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-wood-walnut">
              Testimonials
            </span>
            <span className="h-[1px] w-6 bg-wood-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-wood-dark font-medium mb-4">
            Words From Our Clients
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-600 tracking-wide leading-relaxed">
            Discover how we have transformed empty houses into highly functional, luxurious custom wood 
            sanctuaries for discerning families and businesses.
          </p>
        </div>

        {/* Testimonials Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {testimonialsData.map((review, index) => {
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-wood-gold/15 hover:border-wood-gold/40 p-8 rounded-none shadow-none transition-all duration-300 flex flex-col justify-between relative group"
                id={`testimonial-card-${review.id}`}
              >
                {/* Floating Quote Icon */}
                <div className="absolute top-6 right-6 text-wood-gold/10 group-hover:text-wood-gold/25 transition-colors duration-300 pointer-events-none">
                  <Quote className="w-12 h-12" />
                </div>

                <div className="space-y-5">
                  {/* Glowing Star Rating */}
                  <div className="flex gap-1" id={`rating-stars-${review.id}`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 fill-wood-gold text-wood-gold`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed tracking-wide italic">
                    "{review.comment}"
                  </p>
                </div>

                {/* Profile Meta Area */}
                <div className="border-t border-gray-100 pt-6 mt-8 flex items-center gap-4">
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="w-12 h-12 rounded-none object-cover border border-wood-gold/35 p-0.5 bg-white"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-wood-dark">
                      {review.name}
                    </h4>
                    <p className="font-sans text-[10px] text-gray-500 tracking-wide">
                      {review.location}
                    </p>
                    
                    {/* Done Work Badge */}
                    <span className="inline-block bg-wood-cream border border-wood-walnut/15 text-wood-walnut font-sans text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-sm mt-1">
                      {review.projectType}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Aggregate Trust Badge */}
        <div className="mt-16 text-center" id="testimonials-trust-aggregate">
          <p className="font-sans text-xs text-gray-500">
            Proudly rated <span className="font-bold text-wood-dark">4.9 / 5.0</span> stars based on over 
            <span className="font-bold text-wood-dark"> 240+ verified client projects</span> in Tamil Nadu and Karnataka.
          </p>
        </div>

      </div>
    </section>
  );
}
