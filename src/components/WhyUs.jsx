// components/WhyUs.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  CheckCircle, 
  Clock, 
  Wrench, 
  HeadphonesIcon, 
  TruckIcon, 
  FlaskConical,
  Sparkles,
  Shield,
  Award,
  ThumbsUp,
  Globe
} from "lucide-react";

const reasons = [
  { 
    icon: <CheckCircle size={24} />, 
    title: "IS & BIS Certified Products", 
    desc: "Every mast leaves our facility with full documentation and quality certificates."
  },
  { 
    icon: <Wrench size={24} />, 
    title: "In-House Fabrication", 
    desc: "Complete control from raw steel to finished product — no middlemen, better quality."
  },
  { 
    icon: <Clock size={24} />, 
    title: "On-Time Delivery", 
    desc: "Committed timelines backed by a strong supply chain and experienced project teams."
  },
  { 
    icon: <TruckIcon size={24} />, 
    title: "Pan India Installation", 
    desc: "We provide erection and commissioning services across all Indian states."
  },
  { 
    icon: <HeadphonesIcon size={24} />, 
    title: "After-Sales Support", 
    desc: "Dedicated support team for maintenance, spare parts, and replacement luminaire rings."
  },
  { 
    icon: <FlaskConical size={24} />, 
    title: "Custom Engineering", 
    desc: "Wind zone design, soil report-based foundation design, and bespoke mast configurations."
  },
];

export default function WhyUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.3
      }
    }
  };

  return (
    <section 
      id="whyus" 
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#f4f3f0]"
    >
      {/* Background Elements - Same as Projects & Products */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-[#003194]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-[#6D67E4]/5 via-transparent to-transparent" />
        
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
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Same as Projects & Products */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles size={16} className="text-[#003194]" />
            Why Choose Us
          </motion.div>
          <h2 className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            THE RD TECHNOLOGIES <span className="text-[#003194] relative inline-block">
              ADVANTAGE
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mx-auto mt-6">
            Decades of expertise, strict quality standards, and a client-first mindset make us the preferred choice for infrastructure projects.
          </p>
        </motion.div>

        {/* Reasons Grid - Same style as Products */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-[#003194]/5 overflow-hidden hover:shadow-2xl hover:shadow-[#003194]/10 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top Color Band - Same as Products */}
              <motion.div 
                className="h-1.5 bg-gradient-to-r from-[#003194] via-[#6D67E4] to-[#003194]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
              
              {/* Hover Gradient Overlay - Same as Products */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#003194]/5 via-transparent to-[#6D67E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Content */}
              <div className="relative p-6 sm:p-7">
                {/* Icon with animated background - Same as Products */}
                <div className="relative mb-4">
                  <motion.div 
                    className="absolute inset-0 bg-[#003194]/5 rounded-2xl blur-2xl"
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      opacity: hoveredIndex === index ? 0.8 : 0.3
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-[#003194]/10 to-[#6D67E4]/10 rounded-2xl flex items-center justify-center text-[#003194] group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#040316] text-xl sm:text-2xl mt-2 mb-2 group-hover:text-[#003194] transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-[#040316]/60 text-sm leading-relaxed group-hover:text-[#040316]/80 transition-colors duration-300">
                  {reason.desc}
                </p>

                {/* Decorative Corner Element - Same as Products */}
                <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-[#003194] rounded-tr-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats - Same as Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { icon: <Award size={20} />, label: "Projects Completed", value: "500+" },
            { icon: <Globe size={20} />, label: "States Served", value: "25+" },
            { icon: <ThumbsUp size={20} />, label: "Client Satisfaction", value: "98%" },
            { icon: <Shield size={20} />, label: "Quality Guarantee", value: "10 Years" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/60 shadow-md shadow-[#003194]/5 hover:shadow-lg hover:shadow-[#003194]/10 transition-all duration-300"
            >
              <div className="flex justify-center text-[#003194] mb-1">
                {stat.icon}
              </div>
              <p className="text-lg sm:text-xl font-bold text-[#040316]">{stat.value}</p>
              <p className="text-xs text-[#040316]/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element - Same as Products */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-[#040316]/40 text-sm">
            <span className="w-8 h-px bg-[#040316]/20" />
            <span>Quality. Trust. Innovation.</span>
            <span className="w-8 h-px bg-[#040316]/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}