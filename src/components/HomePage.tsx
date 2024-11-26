"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function HomePage() {
  const navItems = [
    { href: "/logo", label: "Logo" },
    { href: "/colours", label: "Colours" },
    { href: "/typography", label: "Typography" },
    { href: "/graphics", label: "Graphics" },
    { href: "/references", label: "References" },
  ];

  const LogoSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="w-full h-full"
    >
      <circle cx="100" cy="100" r="90" fill="#0E233B" />
      <path
        d="M100 140 C100 140 60 110 60 80C60 60 75 50 90 50C95 50 100 52 100 52C100 52 105 50 110 50C125 50 140 60 140 80C140 110 100 140 100 140Z"
        fill="#D6EAF8"
        stroke="#E6E1F3"
        strokeWidth="3"
      />
      <circle cx="75" cy="75" r="5" fill="#D4EFDF" />
      <circle cx="125" cy="75" r="5" fill="#D4EFDF" />
    </svg>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const mascotVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#D6EAF8] to-[#E6E1F3] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation Bar */}
      <motion.nav
        className="px-6 py-4 bg-[#0E233B] backdrop-blur-sm fixed w-full z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative w-10 h-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/glowLogo.svg"
                alt="GlowVie Logo"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            <span className="font-bold text-xl text-[#D6EAF8]">GlowVie</span>
          </Link>

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#D6EAF8] p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="flex-wrap gap-8 hidden md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative py-2 text-[#D6EAF8] hover:text-[#D4EFDF] transition-colors group"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4EFDF]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-[#0E233B] p-4 md:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-[#D6EAF8] hover:text-[#D4EFDF] transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Close menu when clicking
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.nav>

      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hidden md:block relative w-60 h-80"
            variants={mascotVariants}
            animate="animate"
          >
            <div className="absolute inset-0 bg-[#E6E1F3] rounded-full blur-2xl opacity-20"></div>
            <Image
              src="/boy-svgrepo-com.svg"
              alt="Boy mascot"
              width={240}
              height={320}
              priority
              className="mt-10"
            />
          </motion.div>

          <motion.div
            className="space-y-6 text-center md:text-left max-w-2xl"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-[#0E233B]">Welcome to the </span>
              <span className="text-[#0E233B]">GlowVie </span>
              <span className="text-[#0E233B] block md:inline">
                Style Guide
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-[#0E233B] leading-relaxed"
              variants={itemVariants}
            >
              Discover our design language, principles, and resources that shape
              GlowVie.
            </motion.p>
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/logo"
                  className="px-6 py-3 bg-[#0E233B] text-[#D6EAF8] rounded-lg hover:bg-[#0E233B]/90 transition-colors shadow-lg shadow-[#E6E1F3]"
                >
                  View StyleGuide
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:block relative w-60 h-80"
            variants={mascotVariants}
            animate="animate"
          >
            <div className="absolute inset-0 bg-[#E6E1F3] rounded-full blur-2xl opacity-20"></div>
            <Image
              src="/girl-svgrepo-com.svg"
              alt="Girl mascot"
              width={240}
              height={320}
              priority
              className="mt-10"
            />
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
