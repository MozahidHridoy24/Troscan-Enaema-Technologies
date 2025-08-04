"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white py-10 px-6 bg-[#8d493a]">
      <div className="container mx-auto max-w-6xl">
        {/* Logo Section */}
        <div className="text-center mb-10 py-10">
          <h2 className="text-lg font-bold text-white">Troscán</h2>
        </div>

        {/* Footer Links Grid */}
        <div className="md:flex justify-center items-center gap-20 mb-10">
          {/* Sitemap Column */}
          <div className="space-y-8 text-center mb-6">
            <h3 className="text-sm font-normal mb-6 text-gray-200 opacity-70">
              Sitemap
            </h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                Projects
              </Link>
              <Link
                href="/news"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Socials Column */}
          <div className="space-y-8 text-center mb-6">
            <h3 className="text-sm font-normal mb-6 text-gray-200 opacity-70">
              Socials
            </h3>
            <div className="space-y-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                Facebook
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                Twitter
              </Link>
            </div>
          </div>

          {/* More Column */}
          <div className="space-y-8 text-center mb-6">
            <h3 className="text-sm font-normal mb-6 text-gray-200 opacity-70">
              More
            </h3>
            <div className="space-y-2">
              <Link
                href="/license"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                License
              </Link>
              <Link
                href="/grainient"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                Grainient
              </Link>
              <Link
                href="/inspirux"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                Inspirux
              </Link>
              <Link
                href="/store"
                className="block text-white opacity-80 hover:opacity-60 text-3xl font-medium transition-opacity duration-300"
              >
                Store
              </Link>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-200 opacity-50 mb-4"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-light text-gray-200 opacity-70">
            © 2025, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
