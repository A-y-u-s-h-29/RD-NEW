// components/VisionMission.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Eye, 
  Target, 
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Shield,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const values = [
  { icon: <Shield size={20} />, title: "Integrity", description: "Honest and transparent business practices." },
  { icon: <Award size={20} />, title: "Excellence", description: "Commitment to the highest quality standards." },
  { icon: <Users size={20} />, title: "Customer First", description: "Client satisfaction is our top priority." },
  { icon: <TrendingUp size={20} />, title: "Innovation", description: "Continuous improvement and innovation." },
];

export default function VisionMission() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="vision-mission" 
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#f4f3f0]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #003194 60px, #003194 61px),
                           repeating-linear-gradient(90deg, transparent, transparent 60px, #003194 60px, #003194 61px)`,
        }}
      />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#003194]/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-[#6D67E4]/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-20 w-24 h-24 border-l-2 border-b-2 border-[#003194]/10 rounded-bl-3xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border-r-2 border-t-2 border-[#003194]/10 rounded-tr-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} className="text-[#003194]" />
              Vision & Mission
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-5xl leading-[1.1] tracking-tight mt-4"
          >
            Our{' '}
            <span className="text-[#003194] relative inline-block">
              Purpose
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full" />
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mx-auto mt-4"
          >
            Driven by a commitment to excellence and a vision for a brighter, better-lit India
          </motion.p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Vision */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-xl shadow-[#003194]/5 hover:shadow-2xl hover:shadow-[#003194]/10 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003194] to-[#6D67E4] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye size={32} />
            </div>
            <h3 className="font-bold text-[#040316] text-2xl mb-3">Our Vision</h3>
            <p className="text-[#040316]/70 text-base leading-relaxed mb-4">
              To be India's most trusted and innovative manufacturer of high mast and flag mast solutions, 
              illuminating the nation's infrastructure with quality, reliability, and excellence.
            </p>
            <div className="flex items-center gap-2 text-[#003194] text-sm font-medium">
              <span>Shaping the future of lighting</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-xl shadow-[#003194]/5 hover:shadow-2xl hover:shadow-[#003194]/10 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003194] to-[#6D67E4] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target size={32} />
            </div>
            <h3 className="font-bold text-[#040316] text-2xl mb-3">Our Mission</h3>
            <p className="text-[#040316]/70 text-base leading-relaxed mb-4">
              To deliver superior quality products that exceed customer expectations through continuous 
              innovation, sustainable practices, and unwavering commitment to engineering excellence.
            </p>
            <div className="flex items-center gap-2 text-[#003194] text-sm font-medium">
              <span>Excellence through innovation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="font-bold text-[#040316] text-2xl">Our Core Values</h3>
            <p className="text-[#040316]/50 text-sm mt-1">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-5 text-center border border-white/60 shadow-md shadow-[#003194]/5 hover:shadow-lg hover:shadow-[#003194]/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#003194]/10 text-[#003194] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#003194] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="font-bold text-[#040316] text-sm mb-1">{value.title}</h4>
                <p className="text-[#040316]/50 text-xs leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 text-[#040316]/30 text-xs uppercase tracking-widest">
              <span className="w-8 h-px bg-[#040316]/20" />
              <span>Join Us in Building India's Future</span>
              <span className="w-8 h-px bg-[#040316]/20" />
            </div>
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#003194] to-[#6D67E4] text-white font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-[#003194]/25 transition-all duration-300 group"
            >
              Partner With Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}