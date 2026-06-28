// app/page.js
"use client";

import { AnimatePresence } from "framer-motion";
import { useLoader } from "@/context/LoaderContext";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import InquiryForm from "@/components/InquiryForm";
import Projects from "@/components/Projects";
import Industries from "@/components/Industries";
import LoadingScreen from "@/components/LoadingScreen";
import About from "@/components/About";

export default function Home() {
  const { isLoading, isReady } = useLoader();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div 
        className={`transition-opacity duration-700 ease-in-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <Hero isReady={isReady} />
          <About isReady={isReady} />
          <Projects isReady={isReady} />
          <Products isReady={isReady} />
          <Industries isReady={isReady} />
          <InquiryForm isReady={isReady} />
        </div>
      </div>
    </>
  );
}