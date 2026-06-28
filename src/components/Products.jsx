// components/Products.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { 
  Sparkles,
  Award,
  Truck,
  ThumbsUp,
  Shield,
  ArrowRight
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Flag Mast",
    category: "Flag Mast",
    description: "Elegant and durable national flag masts for government buildings, monuments, and prestigious institutions meeting all flag code requirements.",
    image: "/images/flag-mast.avif",
    specs: ["Height: 10-50 meters", "Stainless Steel/Galvanized", "IS & BIS Certified", "Flag Code Compliant"],
    features: ["Aesthetic design", "Durable coating", "Easy installation", "Weather resistant"]
  },
  {
    id: 2,
    name: "High Mast Lighting Poles",
    category: "High Mast",
    description: "Heavy-duty galvanized steel poles designed for highways, airports, and large industrial complexes with superior illumination coverage.",
    image: "/images/high-mast.jpg",
    specs: ["Height: 20-45 meters", "Hot-dip galvanized", "Wind resistance: 200 km/h", "IS 2713 & IS 2062"],
    features: ["Corrosion resistant", "Earthquake resistant", "20+ year lifespan", "Low maintenance"]
  }
];

export default function Products({ isReady = false }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.1,
    margin: "-100px"
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // STAGE 1: Premium Background slide up and reveal
  const backgroundVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      }
    }
  };

  // STAGE 2: Section Header Reveal (Faster)
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.1 }
    }
  };

  const headerBadgeVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.610, 0.355, 1],
        delay: 0.5
      }
    }
  };

  const headerTitleVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.610, 0.355, 1],
        delay: 0.6
      }
    }
  };

  const headerSubtitleVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.610, 0.355, 1],
        delay: 0.7
      }
    }
  };

  // STAGE 2 CONTINUED: Product Card Structural Wrappers & Text Content Staggers
  const cardLeftVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1],
        delay: 0.8
      }
    }
  };

  const cardRightVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1],
        delay: 0.9
      }
    }
  };

  // Staggered contents inside product description frames
  const cardBadgeVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: (customDelay) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: customDelay + 0.05 }
    })
  };

  const cardTitleVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: (customDelay) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: customDelay + 0.1 }
    })
  };

  const cardDescVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: (customDelay) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: customDelay + 0.15 }
    })
  };

  const cardFeaturesVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (customDelay) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: customDelay + 0.2 }
    })
  };

  const cardSpecsVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (customDelay) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: customDelay + 0.25 }
    })
  };

  const cardCtaVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: (customDelay) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut", delay: customDelay + 0.3 }
    })
  };

  // STAGE 3: Final Product Image Reveal (Slides up with subtle premium scaling effect)
  const cardImageVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: (customDelay) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
        delay: customDelay + 0.4
      }
    })
  };

  // Supplemental Stats Segment
  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.5
      }
    }
  };

  const statItemVariants = {
    hidden: { y: 25, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const bottomDecorVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 1.8 }
    }
  };

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#f4f3f0]"
    >
      {/* Background Layer - Step 1 Reveal */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={backgroundVariants}
        initial="hidden"
        animate={isInView && isReady ? "visible" : "hidden"}
      >
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-[#003194]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-[#6D67E4]/5 via-transparent to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <div className="w-20 h-20 border-2 border-[#003194] rotate-12" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10">
          <div className="w-32 h-32 border-2 border-[#6D67E4] rounded-full" />
        </div>
        
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #003194 60px, #003194 61px),
                              repeating-linear-gradient(90deg, transparent, transparent 60px, #003194 60px, #003194 61px)`,
          }}
        />
        
        <div className="absolute top-20 right-20 w-24 h-24 border-l-2 border-b-2 border-[#003194]/10 rounded-bl-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 border-r-2 border-t-2 border-[#003194]/10 rounded-tr-3xl" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#003194]/20 rounded-full"
          animate={{
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#6D67E4]/20 rounded-full"
          animate={{
            x: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header Text Content - Step 2 Reveal */}
        <motion.div 
          className="text-center mb-16"
          variants={headerContainerVariants}
          initial="hidden"
          animate={isInView && isReady ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium mb-4"
            variants={headerBadgeVariants}
          >
            <Sparkles size={16} className="text-[#003194]" />
            Our Product Range
          </motion.div>
          
          <motion.h2 
            className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
            variants={headerTitleVariants}
          >
            HIGH MAST & <span className="text-[#003194] relative inline-block">
              FLAG MAST
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 1, 0.5, 1] }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mx-auto mt-6"
            variants={headerSubtitleVariants}
          >
            Premium quality high mast lighting systems and national flag masts engineered to international standards
          </motion.p>
        </motion.div>

        {/* Products Grid Area */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Left Card Frame */}
          <motion.div
            variants={cardLeftVariants}
            initial="hidden"
            animate={isInView && isReady ? "visible" : "hidden"}
            className="group relative h-full"
          >
            <div className="relative bg-gradient-to-br from-[#003194] via-[#003194] to-[#6D67E4] rounded-[2.5rem] rounded-tr-[6rem] rounded-tl-[6rem] overflow-hidden shadow-2xl shadow-[#003194]/20 hover:shadow-3xl hover:shadow-[#003194]/30 transition-all duration-500 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute inset-0 rounded-[2.5rem] rounded-tr-[6rem] rounded-tl-[6rem] border border-white/10 pointer-events-none" />
              
              {/* Product Content Elements - Step 2 Stagger */}
              <div className="relative p-8 sm:p-10 lg:p-12 pt-12 sm:pt-14 lg:pt-16 flex-1 flex flex-col">
                <motion.div variants={cardBadgeVariants} custom={0.8} className="inline-block mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                    {products[0].category}
                  </span>
                </motion.div>

                <motion.h3 variants={cardTitleVariants} custom={0.8} className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-4">
                  {products[0].name}
                </motion.h3>

                <motion.p variants={cardDescVariants} custom={0.8} className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md mb-6">
                  {products[0].description}
                </motion.p>

                <motion.div variants={cardFeaturesVariants} custom={0.8} className="flex flex-wrap gap-2 mb-6">
                  {products[0].features.map((feature) => (
                    <span key={feature} className="text-xs font-medium text-white/90 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
                      {feature}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={cardSpecsVariants} custom={0.8} className="space-y-1.5 mb-8 flex-1">
                  {products[0].specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={cardCtaVariants} custom={0.8}>
                  <a
                    href="#inquiry"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-[#003194] font-semibold text-sm rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/20"
                  >
                    Enquire Now
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </motion.div>

                <div className="absolute top-6 right-6 opacity-10">
                  <div className="w-16 h-16 border-t-2 border-r-2 border-white rounded-tr-2xl" />
                </div>
                <div className="absolute bottom-6 left-6 opacity-5">
                  <div className="w-24 h-24 border-b-2 border-l-2 border-white rounded-bl-2xl" />
                </div>
              </div>

              {/* Product Image Component - Step 3 Final Reveal */}
              <motion.div
                variants={cardImageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.8}
                className="relative px-6 sm:px-8 pb-6 sm:pb-8 flex-shrink-0"
              >
                <div className="relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="aspect-[16/9] w-full bg-[#003194]/30 relative">
                    <Image
                      src={products[0].image}
                      alt={products[0].name}
                      fill
                      className="object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Card Frame */}
          <motion.div
            variants={cardRightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group relative h-full"
          >
            <div className="relative bg-gradient-to-br from-[#003194] via-[#003194] to-[#6D67E4] rounded-[2.5rem] rounded-tr-[6rem] rounded-tl-[6rem] overflow-hidden shadow-2xl shadow-[#003194]/20 hover:shadow-3xl hover:shadow-[#003194]/30 transition-all duration-500 h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute inset-0 rounded-[2.5rem] rounded-tr-[6rem] rounded-tl-[6rem] border border-white/10 pointer-events-none" />
              
              {/* Product Content Elements - Step 2 Stagger */}
              <div className="relative p-8 sm:p-10 lg:p-12 pt-12 sm:pt-14 lg:pt-16 flex-1 flex flex-col">
                <motion.div variants={cardBadgeVariants} custom={0.9} className="inline-block mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                    {products[1].category}
                  </span>
                </motion.div>

                <motion.h3 variants={cardTitleVariants} custom={0.9} className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-4">
                  {products[1].name}
                </motion.h3>

                <motion.p variants={cardDescVariants} custom={0.9} className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md mb-6">
                  {products[1].description}
                </motion.p>

                <motion.div variants={cardFeaturesVariants} custom={0.9} className="flex flex-wrap gap-2 mb-6">
                  {products[1].features.map((feature) => (
                    <span key={feature} className="text-xs font-medium text-white/90 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
                      {feature}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={cardSpecsVariants} custom={0.9} className="space-y-1.5 mb-8 flex-1">
                  {products[1].specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={cardCtaVariants} custom={0.9}>
                  <a
                    href="#inquiry"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-[#003194] font-semibold text-sm rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/20"
                  >
                    Enquire Now
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </motion.div>

                <div className="absolute top-6 right-6 opacity-10">
                  <div className="w-16 h-16 border-t-2 border-r-2 border-white rounded-tr-2xl" />
                </div>
                <div className="absolute bottom-6 left-6 opacity-5">
                  <div className="w-24 h-24 border-b-2 border-l-2 border-white rounded-bl-2xl" />
                </div>
              </div>

              {/* Product Image Component - Step 3 Final Reveal */}
              <motion.div
                variants={cardImageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.9}
                className="relative px-6 sm:px-8 pb-6 sm:pb-8 flex-shrink-0"
              >
                <div className="relative rounded-2xl overflow-hidden ">
                  <div className="aspect-[16/9] w-full bg-[#003194]/30 relative">
                    <Image
                      src={products[1].image}
                      alt={products[1].name}
                      fill
                      className="object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Supplemental Bottom Stats Panel */}
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: <Award size={20} />, label: "IS Certified", value: "100%" },
            { icon: <Truck size={20} />, label: "Pan-India Delivery", value: "25+ States" },
            { icon: <ThumbsUp size={20} />, label: "Client Satisfaction", value: "98%" },
            { icon: <Shield size={20} />, label: "Quality Guarantee", value: "10 Years" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statItemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/60 shadow-md shadow-[#003194]/5 hover:shadow-lg hover:shadow-[#003194]/10 transition-all duration-300"
            >
              <div className="flex justify-center text-[#003194] mb-1">
                {stat.icon}
              </div>
              <p className="text-lg font-bold text-[#040316]">{stat.value}</p>
              <p className="text-xs text-[#040316]/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Label */}
        <motion.div
          variants={bottomDecorVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-[#040316]/40 text-sm">
            <span className="w-8 h-px bg-[#040316]/20" />
            <span>Quality engineered for Indian conditions</span>
            <span className="w-8 h-px bg-[#040316]/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}