// app/about/company/page.js
"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutCompanyPage() {
  return (
    <div className="min-h-screen bg-[#f4f3f0]">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-[#f4f3f0]">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #003194 60px, #003194 61px),
                             repeating-linear-gradient(90deg, transparent, transparent 60px, #003194 60px, #003194 61px)`,
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#003194]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-[#6D67E4]/5 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Breadcrumb 
              items={[
                { label: "About", href: "/about" },
                { label: "About Company", href: "/about/company" }
              ]} 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Company
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-5xl leading-[1.1] tracking-tight"
          >
            About{' '}
            <span className="text-[#003194] relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full" />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mt-4"
          >
            Engineering excellence since 1998 — delivering reliable infrastructure solutions through quality manufacturing, precision fabrication, and professional project execution.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-20">
        
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#003194]/5 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            Who We Are
          </h2>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed">
            <span className="font-semibold text-[#003194]">RD Technologies & Projects Private Limited</span> is an engineering-focused company dedicated to delivering dependable infrastructure solutions through quality manufacturing, precision fabrication, and professional project execution. We work with organizations across public and private sectors, supporting projects that require durable and reliable steel structures for outdoor infrastructure.
          </p>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed mt-4">
            Our approach combines practical engineering knowledge with a commitment to quality, ensuring that every product is designed to meet functional requirements while maintaining long-term performance. Whether it is a single installation or a large-scale project, we strive to provide solutions that are dependable, efficient, and built to last.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#003194]/5 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            Our Story
          </h2>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed">
            Every successful infrastructure project begins with a strong foundation. At <span className="font-semibold text-[#003194]">RD Technologies & Projects Private Limited</span>, we believe that quality engineering plays a vital role in building safer and more reliable public spaces.
          </p>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed mt-4">
            Our focus is on understanding the unique requirements of every project and delivering products that meet those needs with precision and consistency. By emphasizing quality workmanship, reliable materials, and customer satisfaction, we aim to build lasting relationships based on trust and performance.
          </p>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#003194]/5 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            What We Do
          </h2>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed">
            We provide engineering solutions for a wide range of outdoor infrastructure requirements. Our offerings are designed to support projects that demand strength, durability, and long service life.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              "High Mast Lighting Poles",
              "National Flag Masts",
              "Stadium Lighting Masts",
              "Street Lighting Poles",
              "Decorative Lighting Poles",
              "Octagonal Poles",
              "Tubular Poles",
              "Custom Steel Fabrication Solutions"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#f4f3f0] rounded-xl px-4 py-3">
                <div className="w-2 h-2 bg-[#003194] rounded-full"></div>
                <span className="text-[#040316]/80 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed mt-6">
            Every project is approached with attention to detail, ensuring that the final solution aligns with technical requirements and customer expectations.
          </p>
        </motion.div>

        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-[#003194]/5 rounded-3xl p-8 md:p-12 border border-[#003194]/10 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            Our Commitment
          </h2>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed mb-6">
            Quality, reliability, and customer satisfaction remain at the core of everything we do.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Delivering dependable engineering solutions",
              "Maintaining consistent product quality",
              "Following industry-standard manufacturing practices",
              "Providing timely project support",
              "Building long-term client relationships",
              "Transparency and professionalism"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                <svg className="w-5 h-5 text-[#003194] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#040316]/80 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engineering Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#003194]/5 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            Engineering Excellence
          </h2>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed">
            Our team believes that engineering is more than manufacturing products—it is about creating solutions that contribute to safer roads, well-lit public spaces, educational campuses, government institutions, industrial facilities, and community infrastructure.
          </p>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed mt-4">
            Every project is handled with careful planning, quality-focused execution, and continuous attention to detail to ensure reliable outcomes.
          </p>
        </motion.div>

        {/* Customer-Centric Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#003194]/5 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            Customer-Centric Approach
          </h2>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed">
            Every client has unique project requirements. Instead of offering a one-size-fits-all solution, we work to understand individual needs and provide appropriate engineering solutions that align with project objectives.
          </p>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed mt-4">
            From the initial consultation to project completion, we focus on clear communication, technical support, and professional service to ensure a smooth experience.
          </p>
        </motion.div>

        {/* Looking Ahead */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-[#003194] rounded-3xl p-8 md:p-12 text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Looking Ahead
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            As infrastructure continues to evolve, <span className="font-semibold text-white">RD Technologies & Projects Private Limited</span> remains committed to supporting future development with reliable engineering solutions.
          </p>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mt-4">
            We continuously aim to strengthen our capabilities, improve our processes, and deliver products that meet the growing demands of modern infrastructure while maintaining our commitment to quality, integrity, and customer satisfaction.
          </p>
        </motion.div>

        {/* Short Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#003194]/10 text-center"
        >
          <p className="text-[#040316]/60 text-sm md:text-base leading-relaxed">
            <span className="font-semibold text-[#003194]">RD Technologies & Projects Private Limited</span> is an engineering company specializing in high-quality infrastructure solutions, including high mast lighting poles, flag masts, stadium masts, street lighting poles, and customized steel fabrication. With a focus on quality, reliability, and customer satisfaction, we strive to deliver durable products and dependable engineering solutions for government, industrial, commercial, and institutional projects.
          </p>
        </motion.div>
      </section>
    </div>
  );
}