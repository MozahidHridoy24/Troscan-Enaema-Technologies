"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function Products() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Trigger animation once section hits top
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  // Spread animation starts AFTER scrollYProgress passes 0 (section reaches top)
  const spread = useTransform(smoothProgress, [0.05, 0.4], [0, 1]);
  const textOpacity = useTransform(smoothProgress, [0.5, 0.7], [0, 1]);
  const textScale = useTransform(smoothProgress, [0.5, 0.7], [0.9, 1]);
  const imageScale = useTransform(spread, [0, 1], [1, 0.6]);

  const getImageTransform = (index) => {
    const positions = [
      { x: -200, y: -150 },
      { x: 0, y: -180 },
      { x: 200, y: -150 },
      { x: -200, y: 150 },
      { x: 0, y: 180 },
      { x: 200, y: 150 },
    ];

    return {
      x: useTransform(spread, [0, 1], [0, positions[index].x]),
      y: useTransform(spread, [0, 1], [0, positions[index].y]),
    };
  };

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-[100vh] bg-[#fff8f6] relative overflow-hidden w-full"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center w-full px-6 md:px-12 lg:px-16">
        <div className="relative w-full max-w-6xl mx-auto z-10">
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              const transform = getImageTransform(index);
              return (
                <motion.div
                  key={item}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    x: transform.x,
                    y: transform.y,
                    scale: imageScale,
                  }}
                >
                  <Image
                    src={`/assets/p${item}.avif`}
                    alt={`Design ${item}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Center Text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          style={{ opacity: textOpacity }}
        >
          <motion.div
            className="text-center px-6 max-w-4xl"
            style={{ scale: textScale }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-[#8d493a]">
              Transforming spaces with style, through Troscán's exquisite design
              expertise.
            </h2>

            <motion.button
              className="px-8 py-4 rounded-full text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
              style={{ backgroundColor: "#8d493a" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
