// app/about/vision-mission/page.js
"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { 
  Eye, 
  Target, 
  Shield, 
  Heart, 
  Users, 
  Lightbulb, 
  Award, 
  Handshake,
  TrendingUp,
  Building2,
  Sparkles,
  CheckCircle
} from "lucide-react";

export default function VisionMissionPage() {
  const guidingPrinciples = [
    {
      icon: <Shield size={24} />,
      title: "Quality",
      description: "We believe quality is the foundation of every successful engineering project. Our focus remains on delivering products that meet customer expectations through careful workmanship, reliable materials, and attention to detail."
    },
    {
      icon: <Heart size={24} />,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and professionalism. Strong relationships are built through trust, and we strive to maintain that trust in every interaction."
    },
    {
      icon: <Users size={24} />,
      title: "Customer Commitment",
      description: "Every client has unique goals and project requirements. We listen carefully, communicate openly, and work to provide practical solutions that align with each customer's needs."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation",
      description: "We believe continuous improvement drives better engineering solutions. We remain committed to refining our processes, adopting efficient practices, and improving the value we deliver to our customers."
    },
    {
      icon: <Award size={24} />,
      title: "Reliability",
      description: "Infrastructure projects require dependable solutions. We focus on delivering products and services that clients can rely on throughout the lifecycle of their projects."
    },
    {
      icon: <Building2 size={24} />,
      title: "Responsibility",
      description: "We recognize the importance of engineering solutions that support communities, public infrastructure, and long-term development. Our work is guided by responsibility, professionalism, and respect."
    }
  ];

  const coreValues = [
    {
      icon: <Award size={24} />,
      title: "Excellence",
      description: "Striving for high standards in engineering, manufacturing, and customer service."
    },
    {
      icon: <Handshake size={24} />,
      title: "Trust",
      description: "Building lasting partnerships through transparency, honesty, and reliability."
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "Working closely with clients to understand their requirements and achieve successful project outcomes."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Continuous Improvement",
      description: "Seeking opportunities to enhance our knowledge, processes, and overall performance."
    },
    {
      icon: <Shield size={24} />,
      title: "Professionalism",
      description: "Maintaining a responsible and disciplined approach throughout every stage of a project."
    },
    {
      icon: <Heart size={24} />,
      title: "Customer Focus",
      description: "Putting customer needs at the center of every decision we make."
    }
  ];

  const drivingCommitments = [
    {
      icon: <CheckCircle size={24} />,
      title: "Deliver Quality",
      description: "Maintaining consistent standards across every stage of our work."
    },
    {
      icon: <Handshake size={24} />,
      title: "Build Trust",
      description: "Creating long-term relationships through transparency and dependable service."
    },
    {
      icon: <Building2 size={24} />,
      title: "Support Progress",
      description: "Providing engineering solutions that contribute to reliable infrastructure development."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Grow Responsibly",
      description: "Continuously improving our capabilities while maintaining a strong focus on professionalism and customer satisfaction."
    }
  ];

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
                { label: "Vision & Mission", href: "/about/vision-mission" }
              ]} 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Vision & Mission
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-5xl leading-[1.1] tracking-tight"
          >
            Vision &{' '}
            <span className="text-[#003194] relative inline-block">
              Mission
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full" />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mt-4"
          >
            Building infrastructure with purpose — our purpose, values, and commitment to shaping India's infrastructure future.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#003194]/5"
        >
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-[#003194]">RD Technologies & Projects Private Limited</span>, our vision and mission guide every decision we make—from understanding customer requirements to delivering dependable engineering solutions. We believe that lasting success is built through quality, integrity, innovation, and strong customer relationships.
          </p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#003194] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <Eye size={32} className="text-white" />
              </div>
              <div>
                <span className="text-white/70 text-sm font-medium uppercase tracking-widest">Our Vision</span>
                <h2 className="text-2xl md:text-3xl font-bold">Engineering Solutions for a Better Tomorrow</h2>
              </div>
            </div>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
              Our vision is to become a trusted and respected engineering company recognized for delivering reliable infrastructure solutions that contribute to the development of modern, safe, and sustainable environments.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              We aspire to strengthen our capabilities through continuous improvement, responsible business practices, and a commitment to quality, enabling us to support infrastructure projects with confidence and professionalism. As we grow, our focus remains on creating value for our customers by providing engineering solutions that emphasize durability, performance, and long-term reliability.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#003194]/5 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#003194]/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#003194]/10 rounded-2xl flex items-center justify-center">
                <Target size={32} className="text-[#003194]" />
              </div>
              <div>
                <span className="text-[#003194]/60 text-sm font-medium uppercase tracking-widest">Our Mission</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#040316]">Delivering Quality Through Engineering Excellence</h2>
              </div>
            </div>
            
            <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed mb-4">
              Our mission is to provide dependable engineering and infrastructure solutions that meet the evolving needs of our clients while maintaining the highest standards of quality, professionalism, and customer service.
            </p>
            <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed">
              We are committed to understanding every project's unique requirements and delivering products that combine precision, durability, and practical functionality. Through continuous learning, process improvement, and a customer-focused approach, we aim to build long-term relationships founded on trust, transparency, and consistent performance.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Guiding Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            Our Guiding Principles
          </h2>
          <p className="text-[#040316]/60 text-base max-w-2xl mx-auto">
            The values that define the way we work and the relationships we build
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidingPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 border border-[#003194]/5 hover:border-[#003194]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full">
                <div className="w-12 h-12 rounded-xl bg-[#003194]/10 text-[#003194] flex items-center justify-center mb-4 group-hover:bg-[#003194] group-hover:text-white transition-all duration-300">
                  {principle.icon}
                </div>
                <h3 className="font-bold text-[#040316] text-lg mb-2 group-hover:text-[#003194] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-[#040316]/60 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
              Our Core Values
            </h2>
            <p className="text-[#040316]/60 text-base max-w-2xl mx-auto">
              Our values define the way we work and the relationships we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="group"
              >
                <div className="bg-[#f4f3f0] rounded-2xl p-6 border border-[#003194]/5 hover:border-[#003194]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#003194]/10 text-[#003194] flex items-center justify-center mb-4 group-hover:bg-[#003194] group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-[#040316] text-lg mb-2 group-hover:text-[#003194] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[#040316]/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment to the Future */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="bg-[#003194] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <Sparkles size={32} className="text-white" />
              </div>
              <div>
                <span className="text-white/70 text-sm font-medium uppercase tracking-widest">Our Commitment</span>
                <h2 className="text-2xl md:text-3xl font-bold">Our Commitment to the Future</h2>
              </div>
            </div>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
              As infrastructure continues to evolve, <span className="text-white font-semibold">RD Technologies & Projects Private Limited</span> remains committed to supporting progress through dependable engineering solutions.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              We will continue to strengthen our capabilities, improve our processes, and focus on delivering products that meet the changing needs of modern infrastructure while maintaining our commitment to quality, integrity, and customer satisfaction. Our vision is not only to deliver products but also to contribute to projects that create lasting value for communities, institutions, industries, and public infrastructure.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What Drives Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            What Drives Us
          </h2>
          <p className="text-[#040316]/60 text-base max-w-2xl mx-auto">
            Every project we undertake is guided by four fundamental commitments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drivingCommitments.map((commitment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 border border-[#003194]/5 hover:border-[#003194]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-[#003194]/10 text-[#003194] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#003194] group-hover:text-white transition-all duration-300">
                  {commitment.icon}
                </div>
                <h3 className="font-bold text-[#040316] text-lg mb-2 group-hover:text-[#003194] transition-colors">
                  {commitment.title}
                </h3>
                <p className="text-[#040316]/60 text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}