// components/Industries.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Users,
  Briefcase,
  Globe,
  Award,
} from "lucide-react";

const industries = [
  {
    id: 1,
    name: "Railways",
    description:
      "High-performance lighting systems for railway stations, platforms, freight yards, and rail infrastructure.",
    image: "/images/img(1).webp",
    tag: "Transportation",
    stats: "100+ Projects",
  },
  {
    id: 2,
    name: "Parks & Gardens",
    description:
      "Elegant outdoor lighting solutions that improve safety and enhance the beauty of public parks and green spaces.",
    image: "/images/img(2).jpg",
    tag: "Landscape",
    stats: "75+ Projects",
  },
  {
    id: 3,
    name: "Highways & Expressways",
    description:
      "Robust high mast lighting designed to provide maximum visibility for highways, flyovers, and major road networks.",
    image: "/images/img(3).png",
    tag: "Infrastructure",
    stats: "150+ Projects",
  },
  {
    id: 4,
    name: "Government Projects",
    description:
      "Custom-engineered lighting poles and mast solutions for public infrastructure and government developments.",
    image: "/images/img(4).jpg",
    tag: "Public Infrastructure",
    stats: "80+ Projects",
  },
  {
    id: 5,
    name: "Educational Campuses",
    description:
      "Reliable outdoor lighting systems for universities, colleges, schools, and institutional campuses.",
    image: "/images/img(5).webp",
    tag: "Education",
    stats: "60+ Campuses",
  },
];

export default function Industries({ isReady = false }) {
  const sectionRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "-100px",
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  const statsConfig = [
    { icon: <Globe size={22} />, label: "Industries Served", value: 8, suffix: "+" },
    { icon: <Briefcase size={22} />, label: "Projects Completed", value: 60, suffix: "+" },
    { icon: <Users size={22} />, label: "Happy Clients", value: 50, suffix: "+" },
    { icon: <Award size={22} />, label: "Years of Excellence", value: 10, suffix: "+" },
  ];

  // State hook managing smooth counter arrays
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTimestamp = null;
      const duration = 2000; // 2 seconds animation time

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        setCounts(
          statsConfig.map(stat => Math.floor(progress * stat.value))
        );

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#f4f3f0]"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView && isReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#003194]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-[#6D67E4]/5 via-transparent to-transparent" />
        <div className="absolute top-10 left-10 opacity-10">
          <div className="w-20 h-20 border-2 border-[#003194] rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <div className="w-32 h-32 border-2 border-[#6D67E4] rounded-full" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #003194 60px, #003194 61px),
                             repeating-linear-gradient(90deg, transparent, transparent 60px, #003194 60px, #003194 61px)`,
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView && isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Sparkles size={16} className="text-[#003194]" />
            Industries We Serve
          </motion.div>

          <motion.h2
            className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            VERTICAL{" "}
            <span className="text-[#003194] relative inline-block">
              INDUSTRY SHOWCASE
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mx-auto mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Hover over any industry to explore detailed information
          </motion.p>
        </motion.div>

        {/* Premium Expandable Gallery */}
        <motion.div
          className="flex flex-col md:flex-row gap-0.5 max-w-7xl mx-auto h-[550px] items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry) => {
            const isExpanded = hoveredId === industry.id;

            return (
              <motion.div
                key={industry.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(industry.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-lg shadow-[#040316]/5 border border border-white/60"
                style={{
                  flex: isExpanded ? "3 1 0%" : "1 1 0%",
                  transition: "flex 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease, transform 0.4s ease",
                  opacity: hoveredId && !isExpanded ? 0.4 : 1,
                  transform: hoveredId && !isExpanded ? "scale(0.98)" : "scale(1)",
                }}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out"
                    style={{
                      transform: isExpanded ? "scale(1.05)" : "scale(1)",
                    }}
                    priority={industry.id <= 2}
                  />
                  {/* Base Gradient Mask Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Default State Content Layer */}
                <div
                  className="absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-300"
                  style={{ opacity: isExpanded ? 0 : 1 }}
                >
                  <span className="self-start px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-wide uppercase border border-white/20 mb-3">
                    {industry.tag}
                  </span>
                  <h3 className="text-white text-xl font-bold tracking-tight line-clamp-2">
                    {industry.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-1 font-medium">
                    {industry.stats}
                  </p>
                </div>

                {/* Expanded State Content Layer */}
                <div
                  className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/95 via-black/80 to-transparent p-6 sm:p-10 flex flex-col justify-end md:justify-center max-w-xl transition-all duration-500"
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    pointerEvents: isExpanded ? "auto" : "none",
                    transform: isExpanded ? "translateX(0px)" : "translateX(-20px)",
                  }}
                >
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#003194] to-[#6D67E4] rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-[#003194]/25">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      {industry.tag}
                    </span>

                    <h3 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                      {industry.name}
                    </h3>

                    <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Overall Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-[#003194]/5 p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsConfig.map((stat, index) => (
              <div
                key={index}
                className="text-center md:border-r last:border-0 border-[#040316]/10 px-2"
              >
                <div className="flex justify-center text-[#003194] mb-3">{stat.icon}</div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#040316] tracking-tight">
                  {counts[index]}{stat.suffix}
                </p>
                <p className="text-xs text-[#040316]/40 font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Call-To-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 text-[#040316]/30 text-xs uppercase tracking-widest">
              <span className="w-8 h-px bg-[#040316]/20" />
              <span className="font-medium">Full Portfolio Access</span>
              <span className="w-8 h-px bg-[#040316]/20" />
            </div>
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#003194] to-[#6D67E4] text-white font-semibold rounded-2xl shadow-xl shadow-[#003194]/25 hover:shadow-2xl hover:shadow-[#003194]/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Request Custom Engineering</span>
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}