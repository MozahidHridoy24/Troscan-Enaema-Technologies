"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const services = [
  { id: 1, title: "Custom Furniture Design", image: "/assets/expertise1.avif" },
  {
    id: 2,
    title: "Room Decoration & Styling",
    image: "/assets/expertise2.avif",
  },
  {
    id: 3,
    title: "Space Planning & Interior Layout",
    image: "/assets/expertise3.avif",
  },
  {
    id: 4,
    title: "Home Renovations & Remodeling",
    image: "/assets/expertise4.avif",
  },
  { id: 5, title: "Lighting Design", image: "/assets/expertise5.avif" },
  {
    id: 6,
    title: "Virtual Interior Design Consultations",
    image: "/assets/expertise6.avif",
  },
];

export default function OurExpertise() {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="w-11/12 mx-auto px-4 md:px-8 py-16">
        {/* Header */}
        <motion.div
          className="flex justify-start md:justify-center md:pl-90 items-center space-x-2 text-amber-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="w-2 h-2 bg-amber-900 rounded-full"></span>
          <span className="text-sm font-medium">Our Expertise</span>
        </motion.div>

        <div className="md:flex md:justify-end">
          <h1 className="text-4xl md:text-5xl text-start font-normal text-amber-900 mb-12 md:mb-16 leading-tight">
            Selecting the ideal
            <br />
            elements to elevate <br />
            your space
          </h1>
        </div>

        {/* Content wrapper */}
        <div className="flex flex-col md:flex-row-reverse md:gap-16">
          {/* Titles section */}
          <div className="w-full md:max-w-md mt-4 md:mt-10">
            {services.map((item) => (
              <motion.div
                key={item.id}
                className="relative border-b border-[#8d493a]/20 py-4 md:py-5 px-4 md:px-6 cursor-pointer group overflow-hidden"
                onHoverStart={() => setActiveItem(item.id)}
                initial={false}
              >
                {/* Background animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-full bg-[#8d493a] origin-bottom"
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: activeItem === item.id ? 1 : 0,
                    transformOrigin: activeItem === item.id ? "bottom" : "top",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                <div className="relative flex items-center z-10">
                  <span
                    className={`text-base md:text-lg font-medium mr-3 md:mr-4 ${
                      activeItem === item.id ? "text-white" : "text-[#8d493a]"
                    }`}
                  >
                    {item.id.toString().padStart(2, "0")}
                  </span>
                  <motion.p
                    className={`text-lg md:text-xl font-medium ${
                      activeItem === item.id ? "text-white" : "text-[#8d493a]"
                    }`}
                    animate={{
                      x: activeItem === item.id ? 8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.p>
                </div>
                {activeItem === item.id && (
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1 bg-[#8d493a] z-10"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Image section — only visible on md and above */}
          <div className="hidden md:flex flex-1 relative h-[500px] overflow-hidden rounded-lg shadow-xl">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeItem}
                className="absolute inset-0"
                initial={{ y: "100%", opacity: 0.8 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-30%", opacity: 0 }}
                transition={{
                  y: {
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    duration: 0.5,
                  },
                  opacity: { duration: 0.4 },
                }}
                style={{ originY: 1 }}
              >
                <img
                  src={services.find((item) => item.id === activeItem).image}
                  alt={services.find((item) => item.id === activeItem).title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
