"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  "/assets/p1.avif", // Top Left
  "/assets/p2.avif", // Top Middle
  "/assets/p3.avif", // Top Right
  "/assets/p4.avif", // Bottom Left
  "/assets/p5.avif", // Bottom Middle
  "/assets/p6.avif", // Bottom Right
];

//  spread
const finalX = [-400, 0, 400, -400, 0, 400];
const finalY = [-150, -200, -150, 150, 250, 150];

// Clustered center start
const initialX = [-80, -20, 10, -130, 60, 0];
const initialY = [-40, -100, 100, -10, 0, 0];

export default function Products() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Spread images quickly in first 20% of scroll
  const spreadRange = [0, 0.2];

  const spreadX = initialX.map((startX, i) =>
    useTransform(scrollYProgress, spreadRange, [startX, finalX[i]])
  );

  const spreadY = initialY.map((startY, i) =>
    useTransform(scrollYProgress, spreadRange, [startY, finalY[i]])
  );

  return (
    <section
      ref={ref}
      className="relative h-[200vh] bg-gradient-to-br from-orange-50 to-amber-50 "
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-visible ">
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((img, i) => (
            <motion.div
              key={i}
              style={{ x: spreadX[i], y: spreadY[i] }}
              className="absolute rounded-md"
            >
              <Image
                src={img}
                alt={`Image ${i + 1}`}
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Text section */}
      <motion.div className="absolute bottom-0 w-full h-screen flex items-center justify-center mb-20">
        <div className="max-w-xl text-center px-6">
          <p className="text-amber-900 text-3xl font-semibold">
            Transforming spaces with style, through Troscán's exquisite design
            expertise.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
