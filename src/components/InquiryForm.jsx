// components/InquiryForm.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const products = [
  "High Mast Tower",
  "Flag Mast – Tubular",
  "Flag Mast – Conical Pole",
  "Intermediate High Mast",
  "Decorative Flag Pole",
  "Sports Ground High Mast",
  "Other / Custom Requirement",
];

export default function InquiryForm() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "-100px",
  });

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    height: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const formVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.97 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      },
    },
  };

  return (
    <section
      id="inquiry"
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
        
        <div className="absolute top-20 right-20 w-24 h-24 border-l-2 border-b-2 border-[#003194]/10 rounded-bl-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 border-r-2 border-t-2 border-[#003194]/10 rounded-tr-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-[#003194]/10 text-[#003194] px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Mail size={16} className="text-[#003194]" />
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-4"
            >
              REQUEST A{" "}
              <span className="text-[#003194] relative inline-block">
                QUOTE
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#003194]/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1.2, delay: 1.0 }}
                />
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#040316]/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Share your project requirements and our team will get back to you within 24 hours with a detailed proposal, specifications sheet, and pricing.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { icon: <MapPin size={18} />, label: "Office Address", value: "RD Technologies and Projects Pvt. Ltd., India" },
                { icon: <Phone size={18} />, label: "Phone", value: "+91 XXXXX XXXXX" },
                { icon: <Mail size={18} />, label: "Email", value: "info@rdtechnologies.in" },
                { icon: <Clock size={18} />, label: "Business Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-md shadow-[#003194]/5 hover:shadow-lg hover:shadow-[#003194]/10 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#003194]/10 text-[#003194] flex items-center justify-center group-hover:bg-[#003194] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#040316]/40 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-[#040316] font-medium text-sm mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              {[
                { label: "10+ Years Experience", color: "text-[#003194]" },
                { label: "100% Quality Guarantee", color: "text-[#6D67E4]" },
                { label: "Pan-India Service", color: "text-[#003194]" },
              ].map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#040316]/60 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003194]" />
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl shadow-xl shadow-[#003194]/5 p-6 sm:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="font-bold text-[#040316] text-2xl sm:text-3xl">
                  Inquiry Received!
                </h3>
                <p className="text-[#040316]/60 max-w-sm text-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours with a detailed response.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      product: "",
                      height: "",
                      quantity: "",
                      message: "",
                    });
                  }}
                  className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#003194] text-white text-sm font-semibold rounded-xl hover:bg-[#00247a] transition-all duration-300 shadow-lg shadow-[#003194]/25"
                >
                  Submit Another Inquiry
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#040316]/50 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 border border-[#040316]/10 rounded-xl text-sm text-[#040316] bg-white/90 placeholder:text-[#040316]/30 focus:outline-none focus:ring-2 focus:ring-[#003194]/20 focus:border-[#003194] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#040316]/50 uppercase tracking-wider mb-1.5">
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full px-4 py-2.5 border border-[#040316]/10 rounded-xl text-sm text-[#040316] bg-white/90 placeholder:text-[#040316]/30 focus:outline-none focus:ring-2 focus:ring-[#003194]/20 focus:border-[#003194] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#040316]/50 uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 border border-[#040316]/10 rounded-xl text-sm text-[#040316] bg-white/90 placeholder:text-[#040316]/30 focus:outline-none focus:ring-2 focus:ring-[#003194]/20 focus:border-[#003194] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#040316]/50 uppercase tracking-wider mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2.5 border border-[#040316]/10 rounded-xl text-sm text-[#040316] bg-white/90 placeholder:text-[#040316]/30 focus:outline-none focus:ring-2 focus:ring-[#003194]/20 focus:border-[#003194] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#040316]/50 uppercase tracking-wider mb-1.5">
                    Product of Interest *
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-[#040316]/10 rounded-xl text-sm text-[#040316] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#003194]/20 focus:border-[#003194] transition-all duration-300 appearance-none"
                  >
                    <option value="">Select a product</option>
                    {products.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#040316]/50 uppercase tracking-wider mb-1.5">
                      Required Height (m)
                    </label>
                    <input
                      name="height"
                      value={form.height}
                      onChange={handleChange}
                      placeholder="e.g. 20m"
                      className="w-full px-4 py-2.5 border border-[#040316]/10 rounded-xl text-sm text-[#040316] bg-white/90 placeholder:text-[#040316]/30 focus:outline-none focus:ring-2 focus:ring-[#003194]/20 focus:border-[#003194] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#040316]/50 uppercase tracking-wider mb-1.5">
                      Quantity Required
                    </label>
                    <input
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 10 nos."
                      className="w-full px-4 py-2.5 border border-[#040316]/10 rounded-xl text-sm text-[#040316] bg-white/90 placeholder:text-[#040316]/30 focus:outline-none focus:ring-2 focus:ring-[#003194]/20 focus:border-[#003194] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#040316]/50 uppercase tracking-wider mb-1.5">
                    Project Details / Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project, site location, and any special requirements..."
                    className="w-full px-4 py-2.5 border border-[#040316]/10 rounded-xl text-sm text-[#040316] bg-white/90 placeholder:text-[#040316]/30 focus:outline-none focus:ring-2 focus:ring-[#003194]/20 focus:border-[#003194] transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#003194] to-[#6D67E4] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#003194]/25 hover:shadow-2xl hover:shadow-[#003194]/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Submit Inquiry
                    </>
                  )}
                </button>

                <p className="text-[10px] text-[#040316]/30 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}