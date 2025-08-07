"use client";

import { motion } from "motion/react";

export default function HeroBanner() {
  return (
    <section
      className="relative h-screen w-full mx-auto overflow-x-hidden flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/banner.avif')" }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to top, rgba(96, 72, 51, 0.35), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative w-full z-10 text-center px-4 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-white text-4xl md:text-8xl font-medium leading-tight"
        >
          Timeless Comfort &
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-white text-4xl md:text-8xl font-medium leading-tight"
        >
          Endless Luxury
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className=" bg-white text-[#7a3f2e] font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
            Our Vision
          </button>
          <button className="border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white hover:text-[#7a3f2e] transition">
            Explore Expertise
          </button>
        </motion.div>
      </div>
    </section>
  );
}
