import React from "react";
import { Check, ShieldCheck, Ruler, ThumbsUp, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    {
      title: "Exceptional Quality",
      description: "Only boiling-water-proof (BWP) marine plywood, genuine teak, and premium veneers.",
      icon: ShieldCheck,
    },
    {
      title: "Absolute Precision",
      description: "Precise digital site measurements and automated factory cutting for millimetre fitment.",
      icon: Ruler,
    },
    {
      title: "Durable & Warranted",
      description: "Termite-treated, warp-resistant structures supported by multi-year warranties.",
      icon: ThumbsUp,
    },
    {
      title: "Customer First",
      description: "100% customer satisfaction with post-purchase maintenance support.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#FFF8E7] border-b border-wood-gold/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wood-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-walnut/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Image Composition (Left on Desktop) */}
          <div className="lg:col-span-5 relative" id="about-image-composition">
            {/* Main Premium Wood Crafting Image */}
            <div className="relative rounded-none overflow-hidden shadow-xl border border-[#C9A227]/20 aspect-square sm:aspect-[4/5] lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800"
                alt="Woodcraft Craftsmanship"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/40 to-transparent" />
            </div>

            {/* Overlapping secondary floating badge of experience */}
            <div className="absolute -bottom-6 -right-6 md:right-4 bg-[#4E342E] p-6 text-center border border-wood-gold/30 shadow-2xl max-w-[200px] rounded-none hidden sm:block">
              <span className="block font-serif text-4xl font-bold text-[#C9A227] mb-1">
                15+
              </span>
              <span className="block font-sans text-[10px] uppercase tracking-wider font-bold text-white/90">
                Years of Wooden Masterpiece Crafting
              </span>
            </div>
          </div>

          {/* Column 2: Elegant Typography Introduction (Right on Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-text-content">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 mb-4 self-start">
              <span className="h-[1px] w-8 bg-wood-gold" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-wood-walnut">
                Ebenezer Wood Works
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-4.5xl text-wood-dark font-medium leading-tight mb-6">
              Specialized Wood Manufacturing <br />
              <span className="italic font-normal text-wood-walnut"> & Interior Solutions</span>
            </h2>

            {/* Exact Requested Company Introduction Block */}
            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed tracking-wide mb-8">
              Ebenezer Wood Works specializes in high-quality wood manufacturing and custom interior
              solutions. We transform homes and commercial spaces with beautifully crafted wardrobes,
              modular kitchens, cupboards, TV units, bedroom interiors, office furniture, and customized
              wooden works. Our focus is quality, durability, precision, and customer satisfaction.
            </p>

            {/* Custom high-end grids highlighting values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-3 items-start" id={`about-highlight-${index}`}>
                  <div className="bg-wood-gold/10 p-2 rounded-none border border-wood-gold/20 flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-wood-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-wood-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary CTA indicators */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-wood-walnut/15 pt-8">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-semibold text-wood-dark">1,500+</span>
                <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-gray-500 mt-1">
                  Spaces Perfected
                </span>
              </div>
              <div className="w-[1px] h-8 bg-wood-walnut/20 hidden sm:block" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-semibold text-wood-dark">100%</span>
                <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-gray-500 mt-1">
                  Marine Ply Materials
                </span>
              </div>
              <div className="w-[1px] h-8 bg-wood-walnut/20 hidden sm:block" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-semibold text-wood-dark">5-Year</span>
                <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-gray-500 mt-1">
                  Absolute Warranty
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
