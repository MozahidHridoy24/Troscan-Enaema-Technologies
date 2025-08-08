"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import Image from "next/image";

export default function AboutUs() {
  const sectionRef = useRef(null);

  // Scroll-based image zoom
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  // Detect if section is in view
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50"
    >
      <div className="container mx-auto px-4 py-20 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-16">
          {/* Left Content */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Breadcrumb */}
            <motion.div
              className="flex items-center space-x-2 text-amber-900"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-amber-900 rounded-full"></span>
              <span className="text-sm font-medium">About us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl  text-amber-900 opacity-85">
                Where Spaces
                <br />
                Inspire, and Design
                <br />
                Comes Alive
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-4 text-amber-800"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-md leading-relaxed">
                At Troscán, we believe that every space has a story to tell. As
                a premier furniture design and room decorating agency.
              </p>
              <p className="text-md leading-relaxed">
                Our expert team blends timeless craftsmanship with innovative
                designs, ensuring each piece and layout reflects your unique
                taste and lifestyle. Whether you're looking to reimagine your
                living room.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-md font-medium text-lg shadow-lg"
            >
              More About us
            </motion.button>
          </motion.div>

          {/* Right Image Section with Internal Scroll Zoom */}
          <motion.div
            className="relative w-full h-[400px] lg:h-[480px]"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <motion.div className="relative w-full h-full" style={{ scale }}>
                <Image
                  src="/assets/about.avif"
                  alt="Beautiful interior design showcase"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
