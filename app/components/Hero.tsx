// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 bg-gradient-to-b from-gray-900 to-black"
      animate={{
        background: [
          "linear-gradient(to bottom, #1A1A1A, #3D1A5B)",
          "linear-gradient(to bottom, #3D1A5B, rgb(54, 0, 92))",
          "linear-gradient(to bottom, #1A1A1A, #3D1A5B)",
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
    >
      <Parallax translateY={["-50px", "50px"]}>
        <div className="z-10 max-w-4xl text-center">
          <motion.h1
            className="mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to My History
          </motion.h1>
          <motion.p
            className="mb-12 text-xl text-gray-300 md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            2025 HAL Event Weak 4-3
          </motion.p>
          <motion.div
            className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button
              onClick={() => document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-purple-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700"
            >
              View Profile
            </button>
            <button
              onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full border-2 border-purple-400 bg-transparent px-8 py-4 font-bold text-purple-400 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-400 hover:text-black"
            >
              View Works
            </button>
          </motion.div>
        </div>
      </Parallax>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <ArrowDown className="animate-bounce text-purple-400" size={32} />
      </motion.div>
    </motion.section>
  );
};

export default Hero;