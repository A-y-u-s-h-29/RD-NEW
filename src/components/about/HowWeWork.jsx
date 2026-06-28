// components/HowWeWork.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  ClipboardList, 
  PenTool, 
  Package, 
  Truck, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";

const steps = [
  {
    icon: <ClipboardList size={28} />,
    number: "01",
    title: "Requirement Analysis",
    description: "We understand your project requirements, site conditions, and specific needs through detailed consultation."
  },
  {
    icon: <PenTool size={28} />,
    number: "02",
    title: "Design & Engineering",
    description: "Our engineering team creates detailed designs and specifications tailored to your project."
  },
  {
    icon: <Package size={28} />,
    number: "03",
    title: "Manufacturing",
    description: "High-quality manufacturing using premium materials with rigorous quality control at every stage."
  },
  {
    icon: <Truck size={28} />,
    number: "04",
    title: "Delivery & Installation",
    description: "Safe and timely delivery to your site with professional installation and testing services."
  },
  {
    icon: <CheckCircle size={28} />,
    number: "05",
    title: "After-Sales Support",
    description: "Comprehensive warranty and maintenance support to ensure long-term performance."
  }
];

export default function HowWeWork() {
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
        staggerChildren: 0.15,
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

  const stepVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="how-we-work" 
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
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#003194] rotate-12 opacity-10" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-[#6D67E4] rounded-full opacity-10" />

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
              How We Work
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-5xl leading-[1.1] tracking-tight mt-4"
          >
            Our{' '}
            <span className="text-[#003194] relative inline-block">
              Process
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full" />
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mx-auto mt-4"
          >
            A streamlined approach from concept to completion, ensuring quality and reliability at every step
          </motion.p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-[#003194]/10 hidden md:block" />
          <div className="absolute left-4 sm:left-8 top-0 w-3 h-3 rounded-full bg-[#003194] hidden md:block" />
          <div className="absolute left-4 sm:left-8 bottom-0 w-3 h-3 rounded-full bg-[#003194] hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row'
              }`}
            >
              {/* Step Number & Icon */}
              <div className="flex items-start gap-4 md:w-1/3">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#003194] to-[#6D67E4] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#003194]/20 z-10">
                  {step.icon}
                </div>
                <div className="md:hidden">
                  <span className="text-xs font-bold text-[#003194]">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 md:pl-0">
                <div className="hidden md:block text-xs font-bold text-[#003194] tracking-wider mb-1">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#040316] text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-[#040316]/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative Line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-[#003194]/10" />
              )}
            </motion.div>
          ))}
        </div>

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
              <span>Ready to Start Your Project?</span>
              <span className="w-8 h-px bg-[#040316]/20" />
            </div>
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#003194] to-[#6D67E4] text-white font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-[#003194]/25 transition-all duration-300 group"
            >
              Contact Us Today
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}