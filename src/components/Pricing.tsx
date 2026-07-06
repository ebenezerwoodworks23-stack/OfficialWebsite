import React, { useState, useEffect } from "react";
import { 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Calculator, 
  Phone, 
  MessageSquare, 
  Mail, 
  ArrowRight,
  CheckCircle,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PricingProps {
  onSelectServiceForQuote: (serviceTitle: string, customMessage?: string) => void;
}

export default function Pricing({ onSelectServiceForQuote }: PricingProps) {
  // Calculator State
  const [length, setLength] = useState<string>("10");
  const [width, setWidth] = useState<string>("10");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("mica");
  const [customArea, setCustomArea] = useState<string>("");
  const [useDirectArea, setUseDirectArea] = useState<boolean>(false);
  const [isCalculated, setIsCalculated] = useState<boolean>(true);

  // Material Pricing Data
  const materials = [
    {
      id: "mica",
      name: "Premium Mica Finish",
      price: 900,
      icon: Layers,
      subtitle: "Top-Tier Decorative Surface",
      bestFor: "Modular Kitchens, Wardrobes, TV Units, and Premium Interiors",
      features: [
        "Premium decorative finish",
        "Water-resistant surface",
        "Scratch-resistant",
        "Elegant modern appearance",
        "Wide range of colors and textures",
      ],
      color: "border-[#C9A227]",
      tag: "Best Seller"
    },
    {
      id: "mdf",
      name: "MDF (Medium Density Fiberboard)",
      price: 400,
      icon: Sparkles,
      subtitle: "Smooth, Versatile & Refined",
      bestFor: "Wardrobes, Cupboards, and Shelves",
      features: [
        "Smooth, seamless finish",
        "Budget-friendly selection",
        "Ideal for interior furniture",
        "Easy to paint and customize",
        "Excellent edge profiles",
      ],
      color: "border-wood-walnut/30",
      tag: "Budget Friendly"
    },
    {
      id: "novopan",
      name: "Novopan Board",
      price: 350,
      icon: ShieldCheck,
      subtitle: "Robust & Cost-Effective",
      bestFor: "Cupboards, Cabinets, and Storage Units",
      features: [
        "Cost-effective utility",
        "Durable and strong core",
        "Suitable for home and office furniture",
        "Good load-bearing capacity",
        "Moisture resistant options available",
      ],
      color: "border-wood-walnut/15",
      tag: "High Durability"
    }
  ];

  // Calculate area and total cost
  const getCalculatedArea = () => {
    if (useDirectArea) {
      return parseFloat(customArea) || 0;
    }
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    return l * w;
  };

  const getPricePerSqFt = () => {
    const mat = materials.find((m) => m.id === selectedMaterial);
    return mat ? mat.price : 0;
  };

  const area = getCalculatedArea();
  const pricePerSqFt = getPricePerSqFt();
  const totalCost = area * pricePerSqFt;

  const handleApplyQuote = () => {
    const materialName = materials.find((m) => m.id === selectedMaterial)?.name || "";
    const dimensionString = useDirectArea 
      ? `${area} sq.ft.` 
      : `${length} ft × ${width} ft (${area} sq.ft.)`;
    
    const message = `I used the Interior Cost Estimator on your website. 
Material Chosen: ${materialName} (₹${pricePerSqFt}/sq.ft.)
Dimensions: ${dimensionString}
Estimated Cost: ₹${totalCost.toLocaleString("en-IN")}
Please contact me for a free consultation and detailed quotation.`;

    onSelectServiceForQuote("Custom Furniture", message);
  };

  const handleCardQuoteClick = (materialName: string, price: number) => {
    const message = `I am interested in getting a custom quote for woodwork with the "${materialName}" option (priced at ₹${price}/sq.ft.). Please get in touch for a free consultation.`;
    onSelectServiceForQuote("Custom Furniture", message);
  };

  return (
    <section id="pricing" className="py-24 bg-[#FFF8E7] border-b border-wood-gold/20 relative overflow-hidden">
      {/* Editorial Watermark Lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-[#C9A227]/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-[#C9A227]/10 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="pricing-title-block">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C9A227] font-bold block mb-3">
            Est. 2026 — Materials & Transparent Rates
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4E342E] leading-tight font-medium">
            Choose Your <span className="italic">Interior Material</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C9A227] mx-auto mt-6 mb-4" />
          <p className="font-sans text-xs text-[#6D4C41] uppercase tracking-wider max-w-xl mx-auto leading-relaxed">
            We offer premium wood boards and decorative surfaces tailored to your design taste, budget, and durability requirements.
          </p>
        </div>

        {/* 3 Material Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" id="pricing-cards-grid">
          {materials.map((mat, idx) => {
            const IconComponent = mat.icon;
            return (
              <div 
                key={mat.id}
                className={`bg-white border ${mat.color} p-8 flex flex-col justify-between relative rounded-none hover:border-wood-gold/50 transition-all duration-300 shadow-none`}
                id={`material-card-${mat.id}`}
              >
                {/* Feature Tag */}
                <span className="absolute top-0 right-0 bg-[#4E342E] text-white font-sans text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 border-b border-l border-[#C9A227]/20">
                  {mat.tag}
                </span>

                <div className="space-y-6">
                  {/* Top Header details */}
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-wood-cream/40 border border-wood-gold/15 flex items-center justify-center rounded-none text-wood-gold mb-4">
                      <IconComponent className="w-6 h-6 text-[#C9A227]" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-[#4E342E]">
                      {mat.name}
                    </h3>
                    <p className="font-sans text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                      {mat.subtitle}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-4 border-y border-gray-100 flex items-baseline gap-2">
                    <span className="font-serif text-4xl font-bold text-[#4E342E]">
                      ₹{mat.price}
                    </span>
                    <span className="font-sans text-xs text-[#6D4C41] font-semibold uppercase tracking-wider">
                      / sq.ft.
                    </span>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-3 pt-2">
                    <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#C9A227] block">
                      Core Performance Features:
                    </span>
                    <ul className="space-y-2">
                      {mat.features.map((feat, i) => (
                        <li key={i} className="flex gap-2 items-start text-xs text-[#6D4C41]">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Material Application Scope */}
                  <div className="bg-[#FFF8E7] p-4 border-l-2 border-[#C9A227]/40">
                    <span className="font-sans text-[9px] uppercase tracking-wider font-bold text-[#4E342E] block mb-1">
                      Recommended Application:
                    </span>
                    <p className="text-[11px] text-[#6D4C41] leading-relaxed">
                      {mat.bestFor}
                    </p>
                  </div>
                </div>

                {/* Card CTA Trigger */}
                <button
                  onClick={() => handleCardQuoteClick(mat.name, mat.price)}
                  className="w-full mt-8 py-3.5 bg-[#4E342E] hover:bg-[#C9A227] text-white hover:text-[#4E342E] font-sans text-xs font-bold uppercase tracking-wider rounded-none transition-all duration-300 cursor-pointer"
                >
                  Get Quote
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Disclaimer */}
        <div className="max-w-3xl mx-auto bg-white/60 border border-[#C9A227]/25 p-6 mb-20 text-center rounded-none" id="pricing-disclaimer">
          <div className="flex gap-3 justify-center items-center mb-2">
            <Info className="w-4 h-4 text-wood-gold flex-shrink-0" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#4E342E]">
              Pricing & Configuration Disclaimer
            </span>
          </div>
          <p className="font-serif italic text-xs text-[#6D4C41] leading-relaxed">
            Note: Prices are approximate and may vary based on design complexity, material selection, hardware, site conditions, and project location. Contact us for a free site visit and customized quotation.
          </p>
        </div>

        {/* Interactive Interior Cost Estimator Component */}
        <div className="bg-white border border-[#C9A227]/20 p-8 sm:p-12 mb-20 rounded-none shadow-none relative overflow-hidden" id="cost-estimator">
          {/* Subtle joint background pattern element */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-wood-gold/5 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-wood-gold" />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#C9A227]">
                  Instant Cost Calculator
                </span>
              </div>
              <h3 className="font-serif text-3xl font-medium text-[#4E342E] leading-snug">
                Interactive <br /><span className="italic">Interior Cost Estimator</span>
              </h3>
              <p className="text-xs text-[#6D4C41] leading-relaxed">
                Estimate the core wood material and fabrication budget for your cabinets, kitchens, or wardrobes instantly. Adjust dimensions below to see the price updates dynamically.
              </p>
              <div className="bg-[#FFF8E7] p-4 border border-wood-gold/15">
                <p className="text-[10px] uppercase tracking-wider font-bold text-wood-gold mb-1">
                  How it works:
                </p>
                <p className="text-[11px] text-[#6D4C41] leading-relaxed">
                  Enter length and width of the woodwork elevation or simply specify target square footage directly, select the wood material, and click to pre-fill our design request form.
                </p>
              </div>
            </div>

            {/* Right side interactive calculator inputs */}
            <div className="lg:col-span-7 bg-[#FFF8E7]/40 border border-wood-gold/10 p-6 sm:p-8 rounded-none">
              <div className="space-y-6">
                
                {/* Select Material */}
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4E342E] font-bold mb-2">
                    1. Select Wood Material Option
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {materials.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedMaterial(m.id)}
                        className={`py-3 px-2 text-center border font-sans text-[11px] uppercase tracking-wider font-bold transition-all rounded-none cursor-pointer ${
                          selectedMaterial === m.id
                            ? "bg-[#4E342E] border-[#4E342E] text-white"
                            : "bg-white border-gray-200 text-[#4E342E] hover:border-[#C9A227]"
                        }`}
                      >
                        <span className="block truncate">{m.name.split(" ")[0]}</span>
                        <span className="block text-[9px] font-light opacity-80 mt-0.5">₹{m.price}/sq.ft.</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculation Type Toggle */}
                <div className="flex gap-4 border-b border-gray-100 pb-2">
                  <button
                    onClick={() => setUseDirectArea(false)}
                    className={`font-sans text-[10px] uppercase tracking-wider font-bold cursor-pointer ${
                      !useDirectArea ? "text-[#C9A227] border-b-2 border-[#C9A227] pb-1" : "text-gray-400"
                    }`}
                  >
                    Enter Length & Width
                  </button>
                  <button
                    onClick={() => setUseDirectArea(true)}
                    className={`font-sans text-[10px] uppercase tracking-wider font-bold cursor-pointer ${
                      useDirectArea ? "text-[#C9A227] border-b-2 border-[#C9A227] pb-1" : "text-gray-400"
                    }`}
                  >
                    Enter Total Area (sq.ft) Directly
                  </button>
                </div>

                {/* Dimension Inputs */}
                {!useDirectArea ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-[9px] uppercase tracking-wider text-[#6D4C41] font-semibold mb-1">
                        Elevation Length (ft)
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="e.g. 10"
                        className="w-full bg-white border border-gray-200 px-3 py-2.5 font-sans text-xs rounded-none focus:outline-none focus:border-[#C9A227]"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[9px] uppercase tracking-wider text-[#6D4C41] font-semibold mb-1">
                        Elevation Width / Height (ft)
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="e.g. 8"
                        className="w-full bg-white border border-gray-200 px-3 py-2.5 font-sans text-xs rounded-none focus:outline-none focus:border-[#C9A227]"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-wider text-[#6D4C41] font-semibold mb-1">
                      Total Area (sq.ft)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={customArea}
                      onChange={(e) => setCustomArea(e.target.value)}
                      placeholder="e.g. 120"
                      className="w-full bg-white border border-gray-200 px-3 py-2.5 font-sans text-xs rounded-none focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                )}

                {/* Dynamic Calculation Result Area */}
                <div className="bg-white border border-[#C9A227]/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-none">
                  <div>
                    <span className="block font-sans text-[9px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                      Total Calculated Area
                    </span>
                    <span className="font-serif text-lg font-bold text-[#4E342E]">
                      {area} <span className="font-sans text-[11px] font-normal uppercase text-[#6D4C41]">sq.ft.</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block font-sans text-[9px] uppercase tracking-widest text-[#C9A227] font-bold mb-0.5">
                      Estimated Cost (Material + Basic Fab)*
                    </span>
                    <span className="font-serif text-3xl font-bold text-wood-gold">
                      ₹{totalCost.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleApplyQuote}
                  className="w-full py-4 bg-[#C9A227] hover:bg-yellow-500 text-white hover:text-wood-dark font-sans text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  Apply Estimate to Consultation Request
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center italic text-[#6D4C41] opacity-75">
                  *This estimate is approximate and the final cost depends on design, hardware, and installation requirements.
                </p>

              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Free Consultation Banner Section */}
        <div className="bg-[#4E342E] text-white border border-[#C9A227]/30 p-8 sm:p-12 relative overflow-hidden rounded-none shadow-xl" id="free-consultation-banner">
          {/* Absolute background decoration */}
          <div className="absolute right-0 bottom-0 w-64 h-64 border-r border-b border-white/5 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C9A227] font-bold block">
                Exclusive Homeowner Program
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl leading-tight font-medium">
                Get a Free <span className="italic">Consultation</span>
              </h3>
              <p className="text-xs text-white/70 max-w-xl leading-relaxed">
                Contact Ebenezer Wood Works today to discuss your ideas, explore design templates, and receive a comprehensive catalog estimate with absolutely no obligations.
              </p>
              
              {/* Hot Contact channels */}
              <div className="flex flex-col sm:flex-row gap-6 pt-2 justify-center lg:justify-start">
                <div className="flex items-center gap-3 justify-center">
                  <Phone className="w-4.5 h-4.5 text-[#C9A227] flex-shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-white/40">Direct Helpline</span>
                    <a href="tel:6382500986" className="text-xs font-bold hover:text-wood-gold transition-colors">
                      +91 6382500986
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Mail className="w-4.5 h-4.5 text-[#C9A227] flex-shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-white/40">Email Studio</span>
                    <a href="mailto:ebenezerwoodworks23@gmail.com" className="text-xs font-bold hover:text-wood-gold transition-colors">
                      ebenezerwoodworks23@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Hub */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
              <a
                href="tel:6382500986"
                className="px-6 py-4 bg-[#C9A227] hover:bg-yellow-500 text-white hover:text-wood-dark font-sans text-[10px] font-bold uppercase tracking-widest text-center transition-all duration-300 rounded-none cursor-pointer"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/916382500986?text=Hi%20Ebenezer%20Wood%20Works,%20I'd%20like%20to%20schedule%20a%20free%20design%20consultation%20and%20measurement%20quote."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 border border-[#C9A227] hover:bg-white/5 text-[#C9A227] hover:text-white font-sans text-[10px] font-bold uppercase tracking-widest text-center transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-green-400" />
                WhatsApp Now
              </a>
              <button
                onClick={() => onSelectServiceForQuote("Complete Home Interiors", "I am requesting a free consultation and design discussion.")}
                className="px-6 py-4 bg-white hover:bg-gray-100 text-[#4E342E] font-sans text-[10px] font-bold uppercase tracking-widest text-center transition-all duration-300 rounded-none cursor-pointer"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
