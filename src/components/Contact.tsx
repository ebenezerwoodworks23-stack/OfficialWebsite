import React, { useState, useEffect } from "react";
import { ContactForm } from "../types";
import { saveConsultation } from "../lib/consultationStore";
import { Phone, Mail, MessageSquare, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  preSelectedService: string;
  clearPreSelectedService: () => void;
  preFilledMessage?: string;
  clearPreFilledMessage?: () => void;
}

export default function Contact({ 
  preSelectedService, 
  clearPreSelectedService,
  preFilledMessage = "",
  clearPreFilledMessage = () => {}
}: ContactProps) {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    serviceRequired: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preSelectedService and preFilledMessage from other parts of the website
  useEffect(() => {
    if (preSelectedService) {
      setForm((prev) => ({ 
        ...prev, 
        serviceRequired: preSelectedService,
        message: preFilledMessage || prev.message
      }));
      
      // Smooth scroll to contact form container
      const element = document.getElementById("contact");
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [preSelectedService, preFilledMessage]);

  const servicesDropdown = [
    "Modular Kitchen",
    "Wardrobes",
    "Wooden Cupboards",
    "TV Units",
    "Bedroom Interiors",
    "Office Interiors",
    "Wooden Partitions",
    "Custom Furniture",
    "Pooja Units",
    "Complete Home Interiors",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = "Your name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(form.phone.trim().replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.serviceRequired) {
      newErrors.serviceRequired = "Please select a required woodwork service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const submission = saveConsultation(form);
    const whatsappMessage = `Hi Ebenezer Wood Works, I would like to schedule a free design consultation.%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Email:* ${encodeURIComponent(form.email || "N/A")}%0A*Service Required:* ${encodeURIComponent(form.serviceRequired)}%0A*Message:* ${encodeURIComponent(form.message || "Looking for premium design options.")} %0A%0A*Stored ID:* ${encodeURIComponent(submission.id)}`;
    const whatsappUrl = `https://wa.me/916382500986?text=${whatsappMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      clearPreSelectedService();
      clearPreFilledMessage();
    }, 1200);
  };

  const handleSendToWhatsApp = () => {
    // Generate pre-filled WhatsApp message based on form inputs
    const baseMsg = `Hi Ebenezer Wood Works, I would like to schedule a free design consultation.
*Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email || "N/A"}
*Service Required:* ${form.serviceRequired}
*Message:* ${form.message || "Looking for premium design options."}`;

    const encodedMsg = encodeURIComponent(baseMsg);
    const whatsappUrl = `https://wa.me/916382500986?text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleResetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      serviceRequired: "",
      message: "",
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-wood-warmgray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Ready Callout & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info-panel">
            <div className="space-y-6">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-wood-gold" />
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-wood-walnut">
                  Contact Us
                </span>
              </div>

              {/* Exact Requested Premium CTA Headlines */}
              <h2 className="font-serif text-3.5xl sm:text-4.5xl text-wood-dark font-medium leading-tight">
                Ready to Transform Your Home? <br />
                <span className="italic text-wood-walnut font-normal">Get a FREE Consultation Today.</span>
              </h2>

              <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed tracking-wide">
                Get in touch with us to schedule an obligation-free design consultation.
                Our team will guide you through the options and share exquisite catalogs.
              </p>

              {/* Quick Contact Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4" id="contact-action-buttons">
                <a
                  href="tel:6382500986"
                  className="flex items-center justify-center gap-2.5 bg-wood-dark hover:bg-black text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-none transition-all shadow-none"
                  id="contact-call-btn"
                >
                  <Phone className="w-4 h-4 text-wood-gold" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/916382500986?text=Hi%20Ebenezer%20Wood%20Works,%20I%27d%20like%20to%20get%20a%20free%20woodwork%20consultation%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-none transition-all shadow-none"
                  id="contact-whatsapp-btn"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Structured Contact Cards */}
            <div className="space-y-4 mt-12 lg:mt-0" id="contact-info-cards">
              <span className="font-sans text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-2">
                Our Office Touchpoints
              </span>

              {/* Phone Card */}
              <a
                href="tel:6382500986"
                className="flex items-center gap-4 bg-white border border-wood-gold/15 p-5 rounded-none hover:border-wood-gold/50 transition-all group shadow-none"
                id="contact-card-phone"
              >
                <div className="w-11 h-11 bg-wood-cream border border-wood-walnut/10 rounded-none flex items-center justify-center group-hover:bg-wood-gold group-hover:text-wood-dark transition-all duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-wood-walnut group-hover:text-wood-dark" />
                </div>
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-wider font-semibold text-gray-500">
                    Call Direct Hotline
                  </span>
                  <span className="block font-sans text-sm font-bold text-wood-dark group-hover:text-wood-gold transition-colors">
                    +91 6382500986
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:ebenezerwoodworks23@gmail.com"
                className="flex items-center gap-4 bg-white border border-wood-gold/15 p-5 rounded-none hover:border-wood-gold/50 transition-all group shadow-none"
                id="contact-card-email"
              >
                <div className="w-11 h-11 bg-wood-cream border border-wood-walnut/10 rounded-none flex items-center justify-center group-hover:bg-wood-gold group-hover:text-wood-dark transition-all duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 text-wood-walnut group-hover:text-wood-dark" />
                </div>
                <div>
                  <span className="block font-sans text-[10px] uppercase tracking-wider font-semibold text-gray-500">
                    Send Professional Email
                  </span>
                  <span className="block font-sans text-sm font-bold text-wood-dark group-hover:text-wood-gold transition-colors break-all">
                    ebenezerwoodworks23@gmail.com
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="bg-white border border-wood-gold/15 shadow-none rounded-none p-8 sm:p-10 relative overflow-hidden h-full">
              
              {/* Form header */}
              <div className="border-b border-gray-100 pb-5 mb-8">
                <h3 className="font-serif text-xl font-bold text-wood-dark">
                  Schedule Free Estimation
                </h3>
                <p className="font-sans text-xs text-gray-500 mt-1">
                  Fill in your details and select the service required. We reply within 2 working hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
                
                {/* Name field */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block font-sans text-[10px] uppercase tracking-wider font-bold text-gray-600">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full bg-wood-cream/25 border font-sans text-xs px-4 py-3.5 rounded-none focus:outline-none transition-colors ${
                      errors.name ? "border-red-400 focus:border-red-500 bg-red-50/10" : "border-wood-walnut/20 focus:border-wood-gold focus:bg-white"
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[10px] text-red-500 font-semibold font-sans mt-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block font-sans text-[10px] uppercase tracking-wider font-bold text-gray-600">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 6382500986"
                      className={`w-full bg-wood-cream/25 border font-sans text-xs px-4 py-3.5 rounded-none focus:outline-none transition-colors ${
                        errors.phone ? "border-red-400 focus:border-red-500 bg-red-50/10" : "border-wood-walnut/20 focus:border-wood-gold focus:bg-white"
                      }`}
                    />
                    {errors.phone && (
                      <span className="flex items-center gap-1 text-[10px] text-red-500 font-semibold font-sans mt-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Email field (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block font-sans text-[10px] uppercase tracking-wider font-bold text-gray-600">
                      Email Address <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@example.com"
                      className={`w-full bg-wood-cream/25 border font-sans text-xs px-4 py-3.5 rounded-none focus:outline-none transition-colors ${
                        errors.email ? "border-red-400 focus:border-red-500 bg-red-50/10" : "border-wood-walnut/20 focus:border-wood-gold focus:bg-white"
                      }`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-[10px] text-red-500 font-semibold font-sans mt-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service required dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="serviceRequired" className="block font-sans text-[10px] uppercase tracking-wider font-bold text-gray-600">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={form.serviceRequired}
                    onChange={handleInputChange}
                    className={`w-full bg-wood-cream/25 border font-sans text-xs px-4 py-3.5 rounded-none focus:outline-none transition-colors cursor-pointer ${
                      errors.serviceRequired ? "border-red-400 focus:border-red-500 bg-red-50/10" : "border-wood-walnut/20 focus:border-wood-gold focus:bg-white"
                    }`}
                  >
                    <option value="">-- Choose Woodwork Service --</option>
                    {servicesDropdown.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.serviceRequired && (
                    <span className="flex items-center gap-1 text-[10px] text-red-500 font-semibold font-sans mt-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      {errors.serviceRequired}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block font-sans text-[10px] uppercase tracking-wider font-bold text-gray-600">
                    Describe Your Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Enter dimensions, preferred wood, style preferences, or any other query..."
                    className="w-full bg-wood-cream/25 border border-wood-walnut/20 focus:border-wood-gold focus:bg-white font-sans text-xs px-4 py-3.5 rounded-none focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-wood-dark hover:bg-black text-white font-sans text-xs font-bold uppercase tracking-wider py-4 rounded-none transition-all shadow-none hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                  id="consultation-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-wood-gold border-t-transparent rounded-full animate-spin" />
                      Saving Consultation...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-wood-gold" />
                      Book Free Consultation
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Luxury Form Submission Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" id="success-modal-overlay">
            {/* Backdrop click reset */}
            <div className="fixed inset-0" onClick={handleResetForm} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border-2 border-wood-gold p-8 sm:p-10 rounded-sm max-w-md w-full shadow-2xl relative z-10 text-center space-y-6"
              id="success-modal-body"
            >
              <div className="w-16 h-16 bg-wood-gold/10 border border-wood-gold/30 text-wood-gold rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="font-sans text-[10px] uppercase tracking-widest text-wood-gold font-bold block">
                  Submission Successful
                </span>
                <h3 className="font-serif text-2xl font-bold text-wood-dark">
                  Thank You, {form.name}!
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Your custom design request for <span className="font-bold text-wood-dark">{form.serviceRequired}</span> has been securely logged. 
                  A senior design engineer will call you at <span className="font-bold text-wood-dark">{form.phone}</span> within 2 working hours.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                {/* Instant Conversion button to WhatsApp */}
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-sans text-xs font-bold uppercase tracking-wider py-3.5 rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  id="success-whatsapp-forward-btn"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  Send Instantly to WhatsApp
                </button>

                <button
                  onClick={handleResetForm}
                  className="w-full bg-wood-cream hover:bg-wood-cream/85 text-wood-walnut border border-wood-walnut/15 font-sans text-xs font-bold uppercase tracking-wider py-3 rounded-sm transition-all cursor-pointer"
                  id="success-close-btn"
                >
                  Back to Website
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
