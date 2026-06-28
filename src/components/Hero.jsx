"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Users, ChevronRight } from "lucide-react";

// Sample images for the slider - replace with actual product images
const sliderImages = [
  {
    id: 1,
    src: "/images/high-mast.jpg",
    alt: "High Mast Tower",
  },
  {
    id: 2,
    src: "/images/flag-mast.avif",
    alt: "Flag Mast",
  }
];

export default function Hero({ isReady = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Get current and next images for the overlap effect
  const currentImage = sliderImages[currentIndex];
  const nextIndex = (currentIndex + 1) % sliderImages.length;
  const nextImage = sliderImages[nextIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f4f3f0] py-8 sm:py-12"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#003194]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#6D67E4]/5 to-transparent" />
        {/* Faint grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #003194 60px, #003194 61px),
                             repeating-linear-gradient(90deg, transparent, transparent 60px, #003194 60px, #003194 61px)`,
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#6D67E4]/5 blur-3xl" />
        {/* Blueprint-inspired faint lines */}
        <div className="absolute bottom-10 right-10 w-40 h-40 border-l-2 border-b-2 border-[#003194]/5 rounded-bl-3xl" />
        <div className="absolute top-10 left-10 w-24 h-24 border-r-2 border-t-2 border-[#003194]/5 rounded-tr-3xl" />
      </div>
      

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-8 sm:py-12 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full mt-8 sm:mt-10 lg:mt-0">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={isReady ? { opacity: 1, x: 0 } : {}}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-4 sm:space-y-5 lg:space-y-6"
        >
          {/* Small heading */}
          <p className="text-[#5d709b] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
            India's Industrial Mast Experts
          </p>

          {/* Large bold headline */}
          <h1 className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
            ILLUMINATING
            <br />
            <span className="text-[#003194]">EVERY</span> HORIZON
          </h1>

          {/* Description */}
          <p className="text-[#040316]/70 text-base sm:text-lg leading-relaxed max-w-[500px] font-light">
            RD Technologies and Projects Pvt. Ltd. manufactures premium{" "}
            <span className="text-[#003194] font-medium">High Mast Towers</span> and{" "}
            <span className="text-[#003194] font-medium">Flag Masts</span> trusted by
            government bodies, highways, airports, and industries across India.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#003194] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg shadow-[#003194]/20 hover:shadow-[#003194]/40 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Products
              <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#inquiry"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#5d709b] text-[#040316] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-[#5d709b] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              Get Quote
              <ChevronRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          
        </motion.div>

        {/* RIGHT SIDE - Overlapping Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={isReady ? { opacity: 1, x: 0 } : {}}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]"
        >
          {/* Background image card (behind) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute right-0 top-0 w-[80%] sm:w-[85%] h-[80%] sm:h-[85%] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl shadow-[#003194]/10 border border-white/40 bg-white/30 backdrop-blur-sm"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1))",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 35vw"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003194]/5 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Front image card (overlapping) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`fg-${nextIndex}`}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
              className="absolute left-0 bottom-0 w-[70%] sm:w-[75%] h-[70%] sm:h-[75%] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl shadow-[#003194]/20 border-2 border-white/60 bg-white/40 backdrop-blur-sm"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={nextImage.src}
                  alt={nextImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 35vw, 30vw"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6D67E4]/5 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider indicator dots */}
          <div className="absolute bottom-[-20px] sm:bottom-[-25px] left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {sliderImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentIndex
                    ? "w-6 sm:w-8 bg-[#003194]"
                    : "w-1.5 bg-[#003194]/30 hover:bg-[#003194]/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Decorative glass orb */}
          <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#6D67E4]/5 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#003194]/5 blur-2xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}