"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const images = [
  "/assets/p1.avif",
  "/assets/p2.avif",
  "/assets/p3.avif",
  "/assets/p4.avif",
  "/assets/p5.avif",
  "/assets/p6.avif",
];

// Desktop positions
const finalXDesktop = [-400, 0, 400, -400, 0, 400];
const finalYDesktop = [-150, -200, -150, 150, 250, 150];
const initialXDesktop = [-80, -20, 10, -130, 60, 0];
const initialYDesktop = [-40, -100, 100, -10, 0, 0];

// Mobile positions
const finalXMobile = [-100, 0, 100, -100, 0, 100];
const finalYMobile = [-50, -60, -50, 60, 70, 60];
const initialXMobile = [-20, -10, 5, -30, 15, 0];
const initialYMobile = [-10, -20, 20, -5, 0, 0];

export default function Products() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Map transforms for desktop
  const spreadXDesktop = initialXDesktop.map((startX, i) =>
    useTransform(scrollYProgress, [0, 0.2], [startX, finalXDesktop[i]])
  );
  const spreadYDesktop = initialYDesktop.map((startY, i) =>
    useTransform(scrollYProgress, [0, 0.2], [startY, finalYDesktop[i]])
  );

  // Map transforms for mobile
  const spreadXMobile = initialXMobile.map((startX, i) =>
    useTransform(scrollYProgress, [0, 0.2], [startX, finalXMobile[i]])
  );
  const spreadYMobile = initialYMobile.map((startY, i) =>
    useTransform(scrollYProgress, [0, 0.2], [startY, finalYMobile[i]])
  );

  return (
    <section
      ref={ref}
      className="relative h-[200vh] bg-gradient-to-br from-orange-50 to-amber-50"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-visible">
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((img, i) => (
            <motion.div key={i} className="absolute rounded-md">
              {/* Desktop image */}
              <motion.div
                className="hidden md:block"
                style={{ x: spreadXDesktop[i], y: spreadYDesktop[i] }}
              >
                <Image
                  src={img}
                  alt={`Image ${i + 1}`}
                  width={250}
                  height={250}
                  className="object-cover rounded-md shadow-lg"
                />
              </motion.div>

              {/* Mobile image */}
              <motion.div
                className="block md:hidden"
                style={{ x: spreadXMobile[i], y: spreadYMobile[i] }}
              >
                <Image
                  src={img}
                  alt={`Image ${i + 1}`}
                  width={150}
                  height={150}
                  className="object-cover rounded-md shadow-lg"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Text section */}
      <motion.div className="absolute bottom-0 w-full h-screen flex items-center justify-center mb-20">
        <div className="max-w-xl text-center px-6 mt-28">
          <p className="text-amber-900 text-2xl md:text-3xl font-semibold">
            Transforming spaces with style, through Troscán's exquisite design
            expertise.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
