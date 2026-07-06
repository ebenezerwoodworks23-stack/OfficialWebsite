import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

export default function App() {
  const [preSelectedService, setPreSelectedService] = useState<string>("");
  const [preFilledMessage, setPreFilledMessage] = useState<string>("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleQuoteClick = () => {
    scrollToSection("contact");
  };

  const handleAboutClick = () => {
    scrollToSection("about");
  };

  const handleSelectServiceForQuote = (serviceTitle: string, customMessage?: string) => {
    setPreSelectedService(serviceTitle);
    setPreFilledMessage(customMessage || "");
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen bg-wood-cream/20 flex flex-col font-sans selection:bg-wood-gold selection:text-wood-dark" id="app-root-container">
      {/* Sticky header */}
      <Navbar onQuoteClick={handleQuoteClick} />

      {/* Main page body */}
      <main className="flex-grow">
        {/* Full-screen Hero Section */}
        <Hero onQuoteClick={handleQuoteClick} onAboutClick={handleAboutClick} />

        {/* Company introduction */}
        <About />

        {/* Interactive Service cards with 'Learn More' modals */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Masonry image showcase with lightbox */}
        <Gallery />

        {/* Feature grid with 8 core values */}
        <WhyChooseUs />

        {/* 4-step workflow timeline */}
        <Process />

        {/* Choose Your Interior Material & Estimator */}
        <Pricing onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Client reviews with star ratings */}
        <Testimonials />

        {/* Interactive booking forms and contact cards */}
        <Contact 
          preSelectedService={preSelectedService}
          clearPreSelectedService={() => setPreSelectedService("")}
          preFilledMessage={preFilledMessage}
          clearPreFilledMessage={() => setPreFilledMessage("")}
        />
      </main>

      {/* Persistent floating WhatsApp conversion hub */}
      <FloatingWhatsApp />

      {/* Structured Dark Footer with brand logo and links */}
      <Footer />
    </div>
  );
}

