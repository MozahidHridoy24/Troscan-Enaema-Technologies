"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import bgImage from "../../public/assets/git.avif";

export default function GetInTouch() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"], // Start when image enters, end when white box is halfway
  });

  // Animate white box from off-screen bottom to center of image
  const boxY = useTransform(scrollYProgress, [0, 1], [300, 0]);
  //   const boxOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full">
      {/* Sticky full-height background image */}
      <div className="sticky top-0 h-screen w-full z-0">
        <Image
          src={bgImage}
          alt="Room"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* White content box overlays from below */}
      <motion.div
        style={{ y: boxY }}
        className="sticky top-1/3 z-10 flex justify-center"
      >
        <div className="bg-[#f4e9e4] px-32 py-16 rounded-xl shadow-lg w-7/12 mx-auto text-center -translate-y-1/2">
          <p className="text-[#783f2d] text-lg md:text-3xl font-medium  mb-6">
            Ready to reimagine your space? Connect with us at Troscán to bring
            your vision to life with our expertise in design and decoration.
          </p>
          <button className="bg-[#8d493a] text-white font-semibold text-md px-6 py-3 rounded-md">
            Get in Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
}
