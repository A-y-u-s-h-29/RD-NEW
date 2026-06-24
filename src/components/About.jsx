"use client";

import { motion } from "framer-motion";
import { Building2, Cpu, Leaf, Shield, Award, TrendingUp, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#f4f3f0]">
      {/* Subtle background elements - matching hero */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#003194]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-[#6D67E4]/5 to-transparent" />
        {/* Faint grid lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #003194 60px, #003194 61px),
                             repeating-linear-gradient(90deg, transparent, transparent 60px, #003194 60px, #003194 61px)`,
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6D67E4]/5 blur-3xl" />
        {/* Blueprint-inspired lines */}
        <div className="absolute top-20 right-20 w-32 h-32 border-l-2 border-t-2 border-[#003194]/5 rounded-tl-3xl" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border-r-2 border-b-2 border-[#003194]/5 rounded-br-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Small heading */}
            <p className="text-[#5d709b] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
              About RD Technologies
            </p>

            {/* Main heading */}
            <h2 className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              BUILT ON STEEL,
              <br />
              <span className="text-[#003194]">TRUSTED BY INDIA</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-[#040316]/70 text-base sm:text-lg leading-relaxed max-w-[550px] font-light">
              <p>
                RD Technologies and Projects Private Limited is a leading
                manufacturer and supplier of <span className="text-[#003194] font-medium">High Mast Lighting Systems</span>,{" "}
                <span className="text-[#003194] font-medium">Flag Masts</span>, and allied steel structures. 
                Headquartered in India, we have successfully executed projects for national highways,
                airports, stadiums, ports, and government campuses.
              </p>
              <p>
                Our in-house engineering team handles everything from design and
                fabrication to galvanizing, surface treatment, and on-site
                installation — ensuring <span className="text-[#003194] font-medium">complete quality control</span> at every step.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-[#003194]/10"
            >
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "15+", label: "Years Experience" },
                { value: "20+", label: "States Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-bold text-[#003194] text-2xl sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-[#040316]/60 text-[10px] sm:text-xs uppercase tracking-wider font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <a
                href="#inquiry"
                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#003194] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg shadow-[#003194]/20 hover:shadow-[#003194]/40 hover:-translate-y-1 transition-all duration-300"
              >
                Talk to Our Engineers
                <TrendingUp size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid gap-4 sm:gap-5"
          >
            {/* Featured Card 1 */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 sm:p-7 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-lg shadow-[#003194]/5 hover:shadow-xl hover:shadow-[#003194]/10 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#003194]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#003194]/10 border border-[#003194]/20 flex items-center justify-center group-hover:bg-[#003194] group-hover:border-[#003194] transition-all duration-300">
                  <Building2 size={24} className="text-[#003194] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-[#040316] text-lg sm:text-xl mb-1">
                    Large-Scale Infrastructure
                  </h3>
                  <p className="text-[#040316]/60 text-sm leading-relaxed">
                    From single poles to turnkey lighting projects covering kilometers of highway — we scale with your ambition.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Featured Card 2 */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 sm:p-7 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-lg shadow-[#003194]/5 hover:shadow-xl hover:shadow-[#003194]/10 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6D67E4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#6D67E4]/10 border border-[#6D67E4]/20 flex items-center justify-center group-hover:bg-[#6D67E4] group-hover:border-[#6D67E4] transition-all duration-300">
                  <Cpu size={24} className="text-[#6D67E4] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-[#040316] text-lg sm:text-xl mb-1">
                    Engineering-First Approach
                  </h3>
                  <p className="text-[#040316]/60 text-sm leading-relaxed">
                    Every mast is designed using structural analysis software ensuring safety factors beyond IS:2062 requirements.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Featured Card 3 */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 sm:p-7 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-lg shadow-[#003194]/5 hover:shadow-xl hover:shadow-[#003194]/10 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#003194]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#003194]/10 border border-[#003194]/20 flex items-center justify-center group-hover:bg-[#003194] group-hover:border-[#003194] transition-all duration-300">
                  <Leaf size={24} className="text-[#003194] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-[#040316] text-lg sm:text-xl mb-1">
                    Durable. Long-Lasting. Sustainable.
                  </h3>
                  <p className="text-[#040316]/60 text-sm leading-relaxed">
                    Hot-dip galvanized finish with a minimum 25-year lifespan, reducing maintenance costs significantly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
            >
              {[
                { icon: Shield, label: "IS Certified" },
                { icon: Award, label: "Quality Assured" },
                { icon: CheckCircle, label: "Pan India Service" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon size={16} className="text-[#003194]" />
                  <span className="text-[10px] sm:text-xs font-medium text-[#040316]/70 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}