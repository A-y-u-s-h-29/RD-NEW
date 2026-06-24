// components/LoadingScreen.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -20,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f4f3f0]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-[#003194]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-[#6D67E4]/5 via-transparent to-transparent" />
        
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #003194 60px, #003194 61px),
                             repeating-linear-gradient(90deg, transparent, transparent 60px, #003194 60px, #003194 61px)`,
          }}
        />
        
        <motion.div
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-[#003194]/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#6D67E4]/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Logo Container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
      >
        {/* Logo GIF */}
        <div className="relative w-68 h-68 md:w-94 md:h-94">
          <Image
            src="/images/RD (2).gif"
            alt="RD Technologies Logo"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </div>

        {/* Loading Text with Animated Dots */}
        <motion.div
          className="mt-8 flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[#040316]/60 text-sm font-medium tracking-wider">
            Loading
          </span>
          <motion.span
            className="flex gap-1"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#003194]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#003194] delay-150" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#003194] delay-300" />
          </motion.span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mt-6 w-48 md:w-64 h-0.5 bg-[#003194]/10 rounded-full overflow-hidden"
          initial={{ width: 0, opacity: 0 }}
          animate={{ 
            width: "100%", 
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 }
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#003194] via-[#6D67E4] to-[#003194] rounded-full"
            initial={{ width: 0 }}
            animate={{ 
              width: "100%",
              transition: { duration: 2, ease: "easeInOut" }
            }}
          />
        </motion.div>

        <motion.p
          className="mt-4 text-[#040316]/30 text-xs tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          RD Technologies
        </motion.p>
      </motion.div>

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 opacity-10">
        <div className="w-16 h-16 border-l-2 border-t-2 border-[#003194] rounded-tl-2xl" />
      </div>
      <div className="absolute bottom-8 right-8 opacity-10">
        <div className="w-16 h-16 border-r-2 border-b-2 border-[#003194] rounded-br-2xl" />
      </div>
    </motion.div>
  );
}