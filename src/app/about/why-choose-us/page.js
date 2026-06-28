// app/about/page.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Building2, 
  Sparkles, 
  Zap, 
  Target, 
  ArrowRight,
  Shield,
  Award,
  Users,
  TrendingUp,
  Briefcase,
  RefreshCw
} from "lucide-react";

const aboutSections = [
  {
    id: "company",
    title: "About Company",
    description: "Learn about our journey, expertise, and commitment to engineering excellence since 1998.",
    icon: <Building2 size={32} />,
    href: "/about/company",
    color: "from-[#003194] to-[#6D67E4]"
  },
  {
    id: "why-choose-us",
    title: "Why Choose Us",
    description: "Discover what makes us the preferred partner for high mast and flag mast solutions.",
    icon: <Sparkles size={32} />,
    href: "/about/why-choose-us",
    color: "from-[#003194] to-[#6D67E4]"
  },
  {
    id: "how-we-work",
    title: "How We Work",
    description: "Our streamlined process from consultation to delivery and after-sales support.",
    icon: <Zap size={32} />,
    href: "/about/how-we-work",
    color: "from-[#003194] to-[#6D67E4]"
  },
  {
    id: "vision-mission",
    title: "Vision & Mission",
    description: "Our purpose, values, and commitment to shaping India's infrastructure future.",
    icon: <Target size={32} />,
    href: "/about/vision-mission",
    color: "from-[#003194] to-[#6D67E4]"
  }
];

// Why Choose Us Data
const whyChooseUsFeatures = [
  {
    icon: <Shield size={24} />,
    title: "Quality Manufacturing",
    description: "Precision-engineered products built with durability in mind, ensuring long-lasting performance in all conditions."
  },
  {
    icon: <Award size={24} />,
    title: "Reliable Solutions",
    description: "Infrastructure products designed for long-term performance, backed by years of engineering expertise."
  },
  {
    icon: <Users size={24} />,
    title: "Customer-Focused Service",
    description: "Dedicated support from consultation to project completion, ensuring your needs are met at every stage."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Engineering Expertise",
    description: "Practical solutions tailored to project requirements, delivered with precision and professionalism."
  },
  {
    icon: <Briefcase size={24} />,
    title: "Professional Execution",
    description: "A systematic approach to planning, manufacturing, and delivery that ensures consistent quality."
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Continuous Improvement",
    description: "Constantly refining our processes to deliver better outcomes and stay ahead of industry standards."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4f3f0]">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-[#f4f3f0]">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #003194 60px, #003194 61px),
                             repeating-linear-gradient(90deg, transparent, transparent 60px, #003194 60px, #003194 61px)`,
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#003194]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-[#6D67E4]/5 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
          >
            Who We{' '}
            <span className="text-[#003194] relative inline-block">
              Are
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full" />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mx-auto mt-4"
          >
            Building confidence through quality and commitment — your trusted engineering partner since 1998
          </motion.p>
        </div>
      </section>

      {/* About Sections Grid */}
      <section className="relative py-12 lg:py-16 bg-[#f4f3f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {aboutSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <Link
                  href={section.href}
                  className="block h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-lg shadow-[#003194]/5 hover:shadow-2xl hover:shadow-[#003194]/15 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#040316] text-xl mb-2 group-hover:text-[#003194] transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-[#040316]/60 text-sm leading-relaxed">
                        {section.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[#003194] text-sm font-medium group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-16 lg:py-20 bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #003194 60px, #003194 61px),
                             repeating-linear-gradient(90deg, transparent, transparent 60px, #003194 60px, #003194 61px)`,
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-bold text-[#040316] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
              Building Confidence Through{' '}
              <span className="text-[#003194]">Quality & Commitment</span>
            </h2>
            <p className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mx-auto mt-4">
              Choosing the right engineering partner is an important decision. We focus on delivering dependable solutions through quality workmanship and a customer-first approach.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-[#f4f3f0] rounded-2xl p-6 lg:p-8 border border-[#003194]/5 hover:border-[#003194]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#003194]/5 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#003194]/10 text-[#003194] flex items-center justify-center mb-5 group-hover:bg-[#003194] group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-[#040316] text-lg mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#040316]/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Our Promise Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#003194] rounded-3xl p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Our Promise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Professional communication",
                "Reliable engineering support",
                "Quality-focused manufacturing",
                "Timely project coordination",
                "Long-term customer satisfaction",
                "Dependable infrastructure solutions"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Closing Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-[#f4f3f0] rounded-3xl p-8 md:p-12 border border-[#003194]/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
              Your Trusted Engineering Partner
            </h3>
            <p className="text-[#040316]/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              At <span className="font-semibold text-[#003194]">RD Technologies & Projects Private Limited</span>, we believe that every successful project begins with trust, quality, and collaboration. Our focus remains on delivering dependable engineering solutions that support the development of reliable infrastructure while building lasting relationships with our clients through professionalism, transparency, and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}