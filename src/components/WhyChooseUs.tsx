import React from "react";
import { whyChooseUsData } from "../data";
import { 
  ShieldCheck, 
  Award, 
  Sliders, 
  DollarSign, 
  Clock, 
  Wrench, 
  Heart, 
  Sparkles 
} from "lucide-react";
import { motion } from "motion/react";

const iconMap: { [key: string]: any } = {
  ShieldCheck,
  Award,
  Sliders,
  DollarSign,
  Clock,
  Wrench,
  Heart,
  Sparkles
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-wood-dark relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wood-walnut/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="why-choose-us-header">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-wood-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-wood-gold">
              Our Core Strengths
            </span>
            <span className="h-[1px] w-6 bg-wood-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-4">
            Why Choose Ebenezer Wood Works?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-wood-cream/70 tracking-wide leading-relaxed">
            Our commitment is to render peerless elegance and timeless durability to your home. 
            Here is what distinguishes us from off-the-shelf furniture providers.
          </p>
        </div>

        {/* Feature Cards Grid (8 Core features requested) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="why-choose-us-grid">
          {whyChooseUsData.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 hover:border-[#C9A227]/40 hover:bg-white/10 p-6 rounded-none transition-all duration-300 flex flex-col justify-between group"
                id={`feature-card-${feature.id}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    {/* Icon Box with Gold Ring */}
                    <div className="w-12 h-12 rounded-none bg-wood-gold/10 border border-wood-gold/30 flex items-center justify-center group-hover:bg-wood-gold group-hover:text-wood-dark transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-wood-gold group-hover:text-wood-dark" />
                    </div>
                    {/* Serif index */}
                    <span className="font-serif text-3xl font-medium text-wood-gold/20 group-hover:text-wood-gold transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white mb-3 group-hover:text-wood-gold transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="font-sans text-xs text-wood-cream/85 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="w-0 group-hover:w-full h-[2px] bg-wood-gold transition-all duration-300 mt-6" />
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white/50 font-sans text-[10px] uppercase tracking-widest font-bold">
          <div className="flex flex-col items-center gap-1">
            <span className="text-wood-gold text-lg">✔</span> BWP Marine Plywood
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-wood-gold text-lg">✔</span> 100% Termite Treated
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-wood-gold text-lg">✔</span> ISO Certified Machinery
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-wood-gold text-lg">✔</span> No Hidden Costs
          </div>
        </div>

      </div>
    </section>
  );
}
