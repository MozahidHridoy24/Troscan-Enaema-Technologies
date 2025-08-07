"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Projects", "News"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed md:w-7/12 mx-auto left-0 right-0 z-50 px-2 py-2 mt-2 w-full flex flex-col items-center">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl bg-gradient-to-br from-orange-50 to-amber-50 rounded-md shadow-2xl px-2 py-1"
      >
        {/* Top bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#7a3f2e] tracking-wide">
            Troscán
          </div>

          {/* Desktop nav links */}
          <ul className="hidden md:flex space-x-8 text-[#7a3f2e] font-bold text-sm">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-[#5a2e22] transition duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Contact + Toggle */}
          <div className="flex items-center space-x-4">
            {/* Contact button (desktop) */}
            <button className="bg-[#7a3f2e] text-white font-medium px-5 py-2.5 rounded-lg border-2 border-white shadow hover:bg-amber-800 transition hidden md:block">
              Contact us
            </button>

            {/* Menu toggle (mobile) */}
            <div className="md:hidden flex items-center justify-center">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-amber-900 text-white p-2 rounded-sm focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden flex flex-col items-center mt-4 space-y-4 overflow-hidden"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-[#7a3f2e] font-semibold text-lg"
                >
                  {item}
                </motion.div>
              ))}

              {/* Contact us button inside dropdown */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <button className="bg-[#7a3f2e] text-white font-medium px-5 py-2.5 rounded-lg border-2 border-white shadow hover:bg-amber-800 transition">
                  Contact us
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
