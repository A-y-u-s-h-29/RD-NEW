// app/page.js
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Projects from "@/components/Projects";
import Industries from "@/components/Industries";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Products />
          <Industries />
          <WhyUs />
          <InquiryForm />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}