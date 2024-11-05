"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HomePage() {
  const navItems = [
    { href: '/logo', label: 'Logo' },
    { href: '/colours', label: 'Colours' },
    { href: '/typography', label: 'Typography' },
    { href: '/graphics', label: 'Graphics' },
    { href: '/references', label: 'References' }
  ];

  const LogoSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="100" r="90" fill="#0E233B"/>
      <path d="M100 140 C100 140 60 110 60 80C60 60 75 50 90 50C95 50 100 52 100 52C100 52 105 50 110 50C125 50 140 60 140 80C140 110 100 140 100 140Z" 
            fill="#D6EAF8" stroke="#E6E1F3" strokeWidth="3"/>
      <circle cx="75" cy="75" r="5" fill="#D4EFDF"/>
      <circle cx="125" cy="75" r="5" fill="#D4EFDF"/>
    </svg>
  );

const GirlMascotSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" className="w-full h-full">
    <circle cx="100" cy="80" r="40" fill="#FFE0C2"/>
    <path d="M60 60 C70 40, 130 40, 140 60" fill="#4B3A28"/>
    <path d="M80 40 C85 20, 115 20, 120 40" fill="#4B3A28"/>
    <line x1="85" y1="75" x2="95" y2="75" stroke="black" strokeWidth="2"/>
    <line x1="105" y1="75" x2="115" y2="75" stroke="black" strokeWidth="2"/>
    <path d="M90 85 C95 95 105 95 110 85" fill="none" stroke="black" strokeWidth="2"/>
    <path d="M70 120 L130 120 L140 240 L60 240 Z" fill="#D6EAF8"/>
    <rect x="50" y="120" width="20" height="60" rx="10" fill="#FFE0C2"/>
    <rect x="130" y="120" width="20" height="60" rx="10" fill="#FFE0C2"/>
    <rect x="70" y="240" width="20" height="40" fill="#FFE0C2"/>
    <rect x="110" y="240" width="20" height="40" fill="#FFE0C2"/>
    <circle cx="100" cy="110" r="3" fill="#FF69B4"/>
  </svg>
);
 

  const BoyMascotSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" className="w-full h-full">
      <circle cx="100" cy="90" r="50" fill="#8B5E3C"/>
      <path d="M60 60 C60 40 80 30 100 30 C120 30 140 40 140 60 C140 40 120 20 100 20 C80 20 60 40 60 60" 
            fill="#000000"/>
      <path d="M60 50 C60 80 140 80 140 50 C140 90 60 90 60 50" fill="#000000"/>
      <circle cx="100" cy="95" r="40" fill="#8B5E3C"/>
      <circle cx="85" cy="85" r="8" fill="#FFFFFF"/>
      <circle cx="115" cy="85" r="8" fill="#FFFFFF"/>
      <circle cx="85" cy="85" r="4" fill="#000000"/>
      <circle cx="115" cy="85" r="4" fill="#000000"/>
      <circle cx="100" cy="110" r="10" fill="#000000"/>
      <rect x="70" y="140" width="60" height="60" fill="#FFFFFF"/>
      <rect x="70" y="200" width="60" height="40" fill="#000000"/>
      <rect x="50" y="145" width="20" height="40" rx="10" fill="#8B5E3C"/>
      <rect x="130" y="145" width="20" height="40" rx="10" fill="#8B5E3C"/>
      <rect x="75" y="240" width="20" height="20" fill="#000000"/>
      <rect x="105" y="240" width="20" height="20" fill="#000000"/>
    </svg>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const mascotVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-[#D6EAF8] to-[#E6E1F3] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
              <LogoSVG />
            </motion.div>
            <span className="font-bold text-xl text-[#D6EAF8]">Self Care</span>
          </Link>
          
          <div className="flex gap-8">
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
            <BoyMascotSVG />
          </motion.div>

          <motion.div 
            className="space-y-6 text-center md:text-left max-w-2xl"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-[#0E233B]">Welcome to the </span>
              <span className="text-[#0E233B]">SelfCare </span>
              <br />
              <span className="text-[#0E233B]">Style Guide</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-[#0E233B] leading-relaxed"
              variants={itemVariants}
            >
              Your comprehensive guide to the visual and stylistic elements that shape the Self Care experience. Discover our design language, principles, and resources.
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
                  href="/getting-started"
                  className="px-6 py-3 bg-[#0E233B] text-[#D6EAF8] rounded-lg hover:bg-[#0E233B]/90 transition-colors shadow-lg shadow-[#E6E1F3]"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/components"
                  className="px-6 py-3 bg-[#D6EAF8] text-[#0E233B] rounded-lg hover:bg-[#E6E1F3] transition-colors shadow-lg shadow-[#E6E1F3]"
                >
                  View Components
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
            <GirlMascotSVG />
          </motion.div>
        </motion.div>
      </main>

      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: '20', left: '20', size: '24', color: '#D6EAF8' },
          { top: '40', right: '40', size: '32', color: '#E6E1F3' },
          { bottom: '20', left: '1/4', size: '40', color: '#D4EFDF' },
          { top: '1/3', right: '1/3', size: '28', color: '#0E233B' }
        ].map((blob, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full blur-xl opacity-40"
            style={{ 
              top: blob.top,
              left: blob.left,
              right: blob.right,
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              backgroundColor: blob.color
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

