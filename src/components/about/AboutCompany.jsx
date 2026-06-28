// components/AboutCompany.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { 
  Building2, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  ArrowRight,
  CheckCircle,
  Factory,
  Shield,
  TrendingUp,
  Globe
} from "lucide-react";

const stats = [
  { icon: <Calendar size={24} />, label: "Years of Excellence", value: "25+" },
  { icon: <Users size={24} />, label: "Team Members", value: "200+" },
  { icon: <Award size={24} />, label: "Projects Completed", value: "500+" },
  { icon: <Globe size={24} />, label: "Locations Served", value: "50+" },
];

export default function AboutCompany() {
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <section 
      id="about" 
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#003194]/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-[#6D67E4]/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-20 w-24 h-24 border-l-2 border-b-2 border-[#003194]/10 rounded-bl-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border-r-2 border-t-2 border-[#003194]/10 rounded-tr-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#003194]/10">
              <div className="aspect-[4/3] bg-[#003194]/10 relative">
                <Image
                  src="/images/about-company.jpg"
                  alt="About RD Technologies"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl shadow-[#003194]/10 p-4 border border-white/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#003194] to-[#6D67E4] rounded-xl flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#003194] font-bold text-sm">ISO Certified</p>
                    <p className="text-[#040316]/50 text-xs">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Element */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#003194]/5 rounded-full border border-[#003194]/10" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#6D67E4]/5 rounded-full" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium">
                <Building2 size={16} className="text-[#003194]" />
                About Company
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-5xl leading-[1.1] tracking-tight"
            >
              Engineering Excellence Since{' '}
              <span className="text-[#003194] relative inline-block">
                1998
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full" />
              </span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-[#040316]/60 text-base leading-relaxed"
            >
              RD Technologies and Projects Pvt. Ltd. is a premier manufacturer and supplier of high-quality 
              High Mast Lighting Systems and National Flag Masts. With over two decades of industry experience, 
              we have established ourselves as a trusted partner for government institutions, infrastructure 
              projects, and private enterprises across India.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-[#040316]/60 text-base leading-relaxed"
            >
              Our commitment to quality, innovation, and customer satisfaction has driven us to deliver 
              exceptional solutions that meet international standards while catering to the unique 
              requirements of the Indian market.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white/60 shadow-md shadow-[#003194]/5"
                >
                  <div className="flex justify-center text-[#003194] mb-1">
                    {stat.icon}
                  </div>
                  <p className="text-lg font-bold text-[#040316]">{stat.value}</p>
                  <p className="text-[10px] text-[#040316]/50">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#003194] to-[#6D67E4] text-white font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-[#003194]/25 transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}