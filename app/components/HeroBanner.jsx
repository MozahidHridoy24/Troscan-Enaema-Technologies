"use client";

import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/banner.avif')" }}
    >
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 text-center px-6 md:px-12">
        {/* Heading Part 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-white text-4xl md:text-8xl font-archivo font-semibold leading-tight"
        >
          Timeless Comfort &
        </motion.h1>

        {/* Heading Part 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-white text-4xl md:text-8xl font-archivo font-semibold leading-tight"
        >
          Endless Luxury
        </motion.h1>

        {/* Buttons (appear after 0.5s delay after heading finishes) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-white text-[#7a3f2e] font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
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
