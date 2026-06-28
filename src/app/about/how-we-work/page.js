// app/about/how-we-work/page.js
"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { 
  MessageSquare, 
  ClipboardList, 
  Factory, 
  CheckCircle, 
  Truck, 
  Headphones,
  ArrowRight,
  Shield,
  Users,
  MessageCircle,
  Award,
  TrendingUp
} from "lucide-react";

export default function HowWeWorkPage() {
  const processSteps = [
    {
      number: "01",
      title: "Understanding Your Requirements",
      description: "Every project begins with understanding the client's objectives. We take the time to discuss project requirements, intended application, technical expectations, and project goals before recommending the most suitable solution.",
      icon: <MessageSquare size={28} />
    },
    {
      number: "02",
      title: "Planning & Consultation",
      description: "Once the project requirements are understood, we move into the planning phase. We review project specifications, discuss practical solutions, and prepare an execution approach that supports efficient project delivery while maintaining quality standards.",
      icon: <ClipboardList size={28} />
    },
    {
      number: "03",
      title: "Engineering & Manufacturing",
      description: "After the planning stage, the project moves into manufacturing with a focus on precision fabrication, quality workmanship, durable construction, consistent manufacturing practices, and attention to every detail.",
      icon: <Factory size={28} />
    },
    {
      number: "04",
      title: "Quality Review",
      description: "Before delivery, every product undergoes a thorough review to ensure it meets the required specifications. We carefully inspect workmanship, dimensions, finishing, and overall quality to provide dependable products.",
      icon: <CheckCircle size={28} />
    },
    {
      number: "05",
      title: "Delivery & Project Support",
      description: "Once the products are ready, we coordinate timely delivery and continue providing professional support whenever required. Our commitment extends beyond manufacturing with clear communication and assistance.",
      icon: <Truck size={28} />
    }
  ];

  const workflowSteps = [
    "Consultation",
    "Planning",
    "Manufacturing",
    "Quality Review",
    "Delivery",
    "Customer Support"
  ];

  const workingPrinciples = [
    {
      icon: <Users size={24} />,
      title: "Customer First",
      description: "We begin by understanding our clients' needs before recommending solutions."
    },
    {
      icon: <Award size={24} />,
      title: "Quality in Every Step",
      description: "Quality remains an essential part of planning, manufacturing, and delivery."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Clear Communication",
      description: "We believe transparent communication creates stronger partnerships and better project outcomes."
    },
    {
      icon: <Shield size={24} />,
      title: "Reliable Execution",
      description: "Our goal is to deliver dependable engineering solutions that support long-term infrastructure development."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Continuous Improvement",
      description: "We constantly look for opportunities to improve our processes, strengthen our capabilities, and enhance the overall customer experience."
    }
  ];

  const processCards = [
    {
      icon: <MessageSquare size={22} />,
      title: "Requirement Analysis",
      description: "Understanding your project goals and technical needs."
    },
    {
      icon: <ClipboardList size={22} />,
      title: "Planning & Consultation",
      description: "Developing the most suitable engineering approach."
    },
    {
      icon: <Factory size={22} />,
      title: "Manufacturing",
      description: "Precision fabrication with a focus on quality and durability."
    },
    {
      icon: <CheckCircle size={22} />,
      title: "Quality Inspection",
      description: "Reviewing products to ensure they meet required specifications."
    },
    {
      icon: <Truck size={22} />,
      title: "Delivery",
      description: "Coordinating safe and timely delivery of completed products."
    },
    {
      icon: <Headphones size={22} />,
      title: "Ongoing Support",
      description: "Providing responsive assistance throughout the project lifecycle."
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
                { label: "How We Work", href: "/about/how-we-work" }
              ]} 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium mb-4">
              How We Work
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-5xl leading-[1.1] tracking-tight"
          >
            How We{' '}
            <span className="text-[#003194] relative inline-block">
              Work
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full" />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#040316]/60 text-base sm:text-lg max-w-2xl mt-4"
          >
            A structured approach to every project — from consultation to delivery and beyond.
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
            At <span className="font-semibold text-[#003194]">RD Technologies & Projects Private Limited</span>, we believe that every successful project is built on careful planning, effective communication, and consistent execution. Our working process is designed to understand each client's requirements and deliver reliable engineering solutions with quality at every stage.
          </p>
          <p className="text-[#040316]/70 text-base md:text-lg leading-relaxed mt-4">
            From the initial consultation to the final delivery, we focus on professionalism, transparency, and attention to detail, ensuring that every project is handled with care and precision.
          </p>
        </motion.div>
      </section>

      {/* Process Steps - Zigzag Timeline */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
      Our Working Process
    </h2>
    <p className="text-[#040316]/60 text-base max-w-2xl mx-auto">
      A structured approach to every project — from consultation to delivery and beyond
    </p>
  </motion.div>

  <div className="relative">
    {/* Central Line */}
    <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#003194]/20 via-[#003194]/40 to-[#003194]/20 transform -translate-x-1/2"></div>

    {processSteps.map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
        className={`group relative flex items-start mb-12 ${
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Timeline Dot */}
        <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0 relative">
          <div className="w-6 h-6 bg-white border-4 border-[#003194] rounded-full z-10 group-hover:bg-[#003194] transition-colors duration-300"></div>
        </div>

        <div className="w-full md:w-[calc(50%-2rem)]">
          <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#003194]/5 hover:shadow-xl hover:border-[#003194]/20 transition-all duration-500 hover:-translate-y-1 ${
            index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-[#003194]/10 text-[#003194] flex items-center justify-center flex-shrink-0 group-hover:bg-[#003194] group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <div>
                <span className="text-sm font-bold text-[#003194]/60">{step.number}</span>
                <h3 className="text-xl font-bold text-[#040316] group-hover:text-[#003194] transition-colors">
                  {step.title}
                </h3>
              </div>
            </div>
            <p className="text-[#040316]/60 text-sm md:text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Workflow Section */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
              Our Workflow
            </h2>
            <p className="text-[#040316]/60 text-base max-w-2xl mx-auto">
              A visual representation of our systematic approach
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.05 }}
                className="relative"
              >
                <div className="bg-[#f4f3f0] rounded-2xl p-6 text-center border border-[#003194]/5 hover:border-[#003194]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl font-bold text-[#003194]/30 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-semibold text-[#040316]">
                    {step}
                  </div>
                  {/* Arrow between steps */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden xl:block absolute -right-2 top-1/2 transform -translate-y-1/2">
                      <ArrowRight size={18} className="text-[#003194]/20" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            Our Working Principles
          </h2>
          <p className="text-[#040316]/60 text-base max-w-2xl mx-auto">
            Everything we do is guided by a few important principles that help us maintain consistency and professionalism
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workingPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 border border-[#003194]/5 hover:border-[#003194]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full">
                <div className="w-12 h-12 rounded-xl bg-[#003194]/10 text-[#003194] flex items-center justify-center mb-4 group-hover:bg-[#003194] group-hover:text-white transition-all duration-300">
                  {principle.icon}
                </div>
                <h3 className="font-bold text-[#040316] text-lg mb-2">
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

      {/* Why Our Process Matters */}
      <section className="relative py-16 bg-[#003194]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Our Process Matters
            </h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto">
              A structured workflow helps ensure that every project receives the attention it deserves
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Understand project requirements clearly",
              "Maintain consistent product quality",
              "Improve coordination throughout the project",
              "Deliver dependable engineering solutions",
              "Build long-term relationships based on trust",
              "Ensure professionalism at every stage"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Together Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#003194]/5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
            Working Together
          </h2>
          <p className="text-[#040316]/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-[#003194]">RD Technologies & Projects Private Limited</span>, we see every project as a partnership. We work closely with our clients, listen carefully to their requirements, and strive to provide practical engineering solutions that meet their expectations.
          </p>
          <p className="text-[#040316]/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Our commitment is to deliver quality products, maintain professional communication, and support every project with reliability and integrity from start to finish.
          </p>
        </motion.div>
      </section>

      {/* Process Cards Section */}
      <section className="relative py-16 bg-[#f4f3f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#040316] mb-4">
              Our Process at a Glance
            </h2>
            <p className="text-[#040316]/60 text-base max-w-2xl mx-auto">
              Six key stages that define our approach to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-[#003194]/5 hover:border-[#003194]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#003194]/10 text-[#003194] flex items-center justify-center mb-4 group-hover:bg-[#003194] group-hover:text-white transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-[#040316] text-base mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#040316]/60 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}