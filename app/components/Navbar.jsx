"use client";

import { motion } from "framer-motion";

const navItems = ["About", "Projects", "News"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }} // 👈 a little below from top
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="hidden md:flex justify-between items-center w-7/12 mx-auto px-2 py-1 mt-2
                 bg-[#fdf5f1] rounded-xl shadow-lg fixed left-0 right-0 z-50"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-[#7a3f2e] tracking-wide pl-4">
        Troscán
      </div>

      {/* Links */}
      <ul className="flex space-x-8 text-[#7a3f2e] font-bold text-sm">
        {navItems.map((item) => (
          <li
            key={item}
            className="hover:text-[#5a2e22] transition duration-200 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Contact Us Button */}
      <button className="bg-[#7a3f2e] text-white font-medium px-5 py-2.5 rounded-lg border-2 border-white shadow hover:bg-amber-800 transition">
        Contact us
      </button>
    </motion.nav>
  );
}
