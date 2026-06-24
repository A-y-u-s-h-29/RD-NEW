// components/Industries.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { 
  Sparkles,
  Building2,
  Factory,
  Plane,
  Ship,
  Trophy,
  Cpu,
  Warehouse,
  Landmark,
  Shield,
  ArrowRight,
  MapPin,
  Users,
  Briefcase,
  Building,
  Globe,
  Award,
  TrendingUp,
  ChevronRight
} from "lucide-react";

const industries = [
  {
    id: 1,
    name: "Infrastructure & Highways",
    description: "Providing robust high mast lighting solutions for national highways, expressways, and urban infrastructure projects across India.",
    icon: <Building2 size={28} />,
    image: "/images/infrastructure.jpg",
    stats: "50+ Projects",
    size: "large" // large, medium, small
  },
  {
    id: 2,
    name: "Aviation & Airports",
    description: "Specialized lighting systems for airport perimeters, runways, and terminal areas with advanced wind-resistant technology.",
    icon: <Plane size={28} />,
    image: "/images/aviation.jpg",
    stats: "15+ Airports",
    size: "medium"
  },
  {
    id: 3,
    name: "Ports & Marine",
    description: "Corrosion-resistant high masts engineered for harsh coastal environments, ports, harbors, and offshore facilities.",
    icon: <Ship size={28} />,
    image: "/images/marine.jpg",
    stats: "12+ Ports",
    size: "small"
  },
  {
    id: 4,
    name: "Sports & Stadiums",
    description: "State-of-the-art stadium lighting systems providing optimal illumination for international sporting events and broadcasts.",
    icon: <Trophy size={28} />,
    image: "/images/stadium.jpg",
    stats: "20+ Stadiums",
    size: "medium"
  },
  {
    id: 5,
    name: "Smart Cities",
    description: "IoT-enabled smart lighting poles with integrated sensors, cameras, and communication modules for future-ready cities.",
    icon: <Cpu size={28} />,
    image: "/images/smart-city.jpg",
    stats: "8+ Cities",
    size: "large"
  },
  {
    id: 6,
    name: "Industrial & Manufacturing",
    description: "Heavy-duty lighting towers for factories, warehouses, and industrial facilities with demanding operational conditions.",
    icon: <Factory size={28} />,
    image: "/images/industrial.jpg",
    stats: "100+ Facilities",
    size: "small"
  },
  {
    id: 7,
    name: "Government & Defense",
    description: "Premium flag masts and lighting solutions for government buildings, defense establishments, and national monuments.",
    icon: <Shield size={28} />,
    image: "/images/government.jpg",
    stats: "25+ Institutions",
    size: "medium"
  },
  {
    id: 8,
    name: "Commercial & Corporate",
    description: "Elegant flag masts and architectural lighting solutions for corporate headquarters, business parks, and commercial complexes.",
    icon: <Building size={28} />,
    image: "/images/commercial.jpg",
    stats: "50+ Corporates",
    size: "small"
  }
];

export default function Industries() {
  const sectionRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large':
        return 'col-span-2 row-span-2 aspect-square';
      case 'medium':
        return 'col-span-1 row-span-1 aspect-square';
      case 'small':
        return 'col-span-1 row-span-1 aspect-square';
      default:
        return 'col-span-1 row-span-1 aspect-square';
    }
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
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#003194]/5 via-transparent to-transparent" />
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
        
        <div className="absolute top-20 left-20 w-24 h-24 border-r-2 border-t-2 border-[#003194]/10 rounded-tr-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-l-2 border-b-2 border-[#003194]/10 rounded-bl-3xl" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-[#003194]/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#6D67E4]/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
            PARTNERING <span className="text-[#003194] relative inline-block">
              DIVERSE INDUSTRIES
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
            Trusted by leading organizations across sectors for our quality, reliability, and engineering excellence
          </motion.p>
        </motion.div>

        {/* Collage Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              className={`relative group overflow-hidden rounded-2xl ${getSizeClasses(industry.size)}`}
              onMouseEnter={() => setHoveredId(industry.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative w-full h-full bg-[#003194]/5">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlay - Darker on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500"
                  animate={{
                    opacity: hoveredId === industry.id ? 0.6 : 0.3
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Industry Icon - Top */}
                <div className="absolute top-4 left-4 text-white/70 group-hover:text-white transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                </div>

                {/* Industry Name - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.h3 
                    className="font-bold text-white text-lg sm:text-xl mb-1"
                    animate={{
                      y: hoveredId === industry.id ? -50 : 0
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {industry.name}
                  </motion.h3>
                  
                  <motion.div
                    className="flex items-center gap-2 text-white/60 text-sm"
                    animate={{
                      y: hoveredId === industry.id ? -50 : 0,
                      opacity: hoveredId === industry.id ? 0 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-xs font-medium bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {industry.stats}
                    </span>
                  </motion.div>

                  {/* Description - Appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredId === industry.id ? 1 : 0,
                      y: hoveredId === industry.id ? 0 : 20
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-full left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"
                  >
                    <p className="text-white/90 text-sm leading-relaxed mb-3">
                      {industry.description}
                    </p>
                    <div className="flex items-center gap-1 text-white/70 text-xs font-medium">
                      <span>Learn More</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-lg" />
                </div>

                {/* Subtle Border Glow on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none"
                  animate={{
                    borderColor: hoveredId === industry.id ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0)'
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-[#003194]/5 p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Globe size={24} />, label: "Industries Served", value: "8+" },
                { icon: <Briefcase size={24} />, label: "Projects Completed", value: "500+" },
                { icon: <Users size={24} />, label: "Happy Clients", value: "200+" },
                { icon: <Award size={24} />, label: "Years of Excellence", value: "15+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center text-[#003194] mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-[#040316]">{stat.value}</p>
                  <p className="text-xs text-[#040316]/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-[#040316]/40 text-sm">
            <span className="w-8 h-px bg-[#040316]/20" />
            <span>Trusted across sectors for quality and reliability</span>
            <span className="w-8 h-px bg-[#040316]/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}