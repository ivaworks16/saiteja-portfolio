"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, Mail } from 'lucide-react';

const floatingBadges = [
  { name: 'Salesforce', top: '10%', left: '-10%', delay: 0 },
  { name: 'React', top: '25%', right: '-5%', delay: 0.2 },
  { name: 'Next.js', bottom: '30%', left: '-15%', delay: 0.4 },
  { name: 'Kafka', bottom: '15%', right: '10%', delay: 0.6 },
  { name: 'AWS', top: '50%', left: '-20%', delay: 0.8 },
  { name: 'Cloud', top: '70%', right: '-10%', delay: 1 },
];

const roles = [
  "CEO & Founder",
  "Senior Salesforce Developer",
  "Forex Trader",
  "Entrepreneur"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Aurora Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Available for new opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] min-h-[160px] md:min-h-[200px]">
            <span className="block text-white mb-2" style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Hi, I'm
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent pb-2" style={{ fontFamily: 'var(--font-pacifico), cursive', letterSpacing: '2px', fontSize: 'clamp(3.5rem, 6vw, 5rem)', display: 'inline-block', whiteSpace: 'nowrap' }}>
              Sai Teja Vodnala
            </span>
            <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl text-white/90 leading-tight h-[60px] md:h-[80px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#experience" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <Briefcase className="w-4 h-4" />
              View Experience
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:scale-105">
              <Code className="w-4 h-4" />
              Explore Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:scale-105">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side Image & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative lg:ml-auto w-full max-w-md mx-auto aspect-[4/5] mt-12 lg:mt-0"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl flex items-center justify-center">
             <img src="/assets/hero-profile.png" alt="Sai Teja Vodnala" className="w-full h-full object-cover object-top opacity-90 transition-all duration-700" />
          </div>

          {/* Floating Badges */}
          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: badge.delay, ease: 'easeInOut' }}
              className="absolute px-4 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 shadow-xl"
              style={{ top: badge.top, bottom: badge.bottom, left: badge.left, right: badge.right }}
            >
              <span className="text-sm font-semibold text-white">
                {badge.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
