"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Building2, Code, Database, Terminal } from 'lucide-react';

const timelineData = [
  {
    num: '01',
    year: 'Sep 2019 – Feb 2020',
    title: 'Business Analyst',
    company: '63Ideas Infolabs Pvt Ltd',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    num: '02',
    year: 'Mar 2020 – Feb 2021',
    title: 'Software Engineer',
    company: '63Ideas Infolabs Pvt Ltd',
    icon: <Code className="w-5 h-5" />,
  },
  {
    num: '03',
    year: 'Mar 2021 – Sep 2022',
    title: 'Associate Software Engineer',
    company: 'GlobalLogic India',
    icon: <Code className="w-5 h-5" />,
  },
  {
    num: '04',
    year: 'Mar 2023 – Nov 2023',
    title: 'Programming Analyst',
    company: 'IndusInd Bank Limited',
    icon: <Terminal className="w-5 h-5" />,
  },
  {
    num: '05',
    year: 'Dec 2023 – Aug 2025',
    title: 'Senior Salesforce Developer',
    company: 'Pentagram Infotech Pvt Ltd',
    icon: <Database className="w-5 h-5" />,
  },
  {
    num: '06',
    year: 'Aug 2025 – Nov 2025',
    title: 'Senior Salesforce Developer',
    company: 'Utilitarian Labs Pvt Ltd',
    icon: <Database className="w-5 h-5" />,
  },
  {
    num: '07',
    year: 'Dec 2025 – Present',
    title: 'Senior Software Engineer',
    company: 'Abacus Staffing & Services (Client: IBM)',
    icon: <Code className="w-5 h-5" />,
    isPremium: true,
  },
  {
    num: '08',
    year: 'May 2025 – Present',
    title: 'CEO & Founder',
    company: 'IVA Work Solutions',
    icon: <Building2 className="w-6 h-6" />,
    isFinal: true,
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Vertical winding path traversing 8 nodes in a 800x1200 viewBox
  const pathD = "M 400 0 C 400 30, 700 30, 700 75 S 400 120, 400 150 S 100 180, 100 225 S 400 270, 400 300 S 700 330, 700 375 S 400 420, 400 450 S 100 480, 100 525 S 400 570, 400 600 S 700 630, 700 675 S 400 720, 400 750 S 100 780, 100 825 S 400 870, 400 900 S 700 930, 700 975 S 400 1020, 400 1050 S 100 1080, 100 1125 S 400 1170, 400 1200";

  return (
    <section id="experience" className="py-24 relative bg-background overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">Career Journey</h2>
          <p className="text-lg md:text-xl text-muted-foreground">The path that led me here.</p>
        </motion.div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto h-[1200px] mt-8 mb-24 hidden md:block">
        {/* SVG Road Desktop */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 1200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          
          {/* Base Road */}
          <path 
            d={pathD}
            fill="none" 
            stroke="rgba(255,255,255,0.05)" 
            vectorEffect="non-scaling-stroke"
            strokeWidth="24" 
            strokeLinecap="round"
          />
          {/* Dashed Centerline */}
          <path 
            d={pathD}
            fill="none" 
            stroke="rgba(255,255,255,0.15)" 
            vectorEffect="non-scaling-stroke"
            strokeWidth="4" 
            strokeDasharray="12 12"
            strokeLinecap="round"
          />
          {/* Animated Glow Road */}
          <motion.path 
            d={pathD}
            fill="none" 
            stroke="url(#roadGradient)" 
            vectorEffect="non-scaling-stroke"
            strokeWidth="24"
            strokeLinecap="round"
            style={{ pathLength }}
            className="drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
          />
        </svg>

        {/* Milestones Desktop */}
        <div className="absolute inset-0 z-10 w-full h-full">
          {timelineData.map((item, index) => {
            const isRightPeak = index % 2 === 0; // 0, 2, 4, 6 -> peak is on the right
            const yPos = 6.25 + index * 12.5;
            const threshold = yPos / 100;

            /* Link the card's visibility directly to the scroll drawing progress */
            const cardOpacity = useTransform(scrollYProgress, [Math.max(0, threshold - 0.1), threshold], [0, 1]);
            const cardX = useTransform(scrollYProgress, [Math.max(0, threshold - 0.1), threshold], [isRightPeak ? -40 : 40, 0]);
            const cardScale = useTransform(scrollYProgress, [Math.max(0, threshold - 0.1), threshold], [0.8, 1]);

            return (
              <motion.div
                key={index}
                style={{ opacity: cardOpacity, x: cardX, scale: cardScale, top: `${yPos}%`, y: "-50%" }}
                className={`absolute w-full flex items-center ${isRightPeak ? 'justify-start pr-[45%]' : 'justify-end pl-[45%]'} px-4`}
              >
                {/* Node Marker */}
                <div 
                  className="absolute w-8 h-8 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_rgba(139,92,246,0.8)] z-20"
                  style={{ [isRightPeak ? 'right' : 'left']: '12.5%', transform: isRightPeak ? 'translateX(50%)' : 'translateX(-50%)' }}
                />
                
                {/* Connector Line pointing to map */}
                <div 
                  className="absolute h-[2px] bg-white/20 z-10"
                  style={{ 
                    [isRightPeak ? 'right' : 'left']: '12.5%', 
                    width: '32%', 
                  }}
                />

                {/* Card */}
                <div className={`relative z-30 w-[300px] bg-card/90 backdrop-blur-md rounded-2xl p-4 border shadow-xl transition-colors hover:bg-card ${
                  item.isFinal ? 'border-[#EC4899] shadow-[0_0_30px_rgba(236,72,153,0.3)]' : 
                  item.isPremium ? 'border-[#06B6D4] shadow-[0_0_20px_rgba(6,182,212,0.2)]' : 
                  'border-white/10'
                }`}>
                  
                  <div className="mb-2">
                    <span className={`text-2xl font-black opacity-30 ${item.isFinal ? 'text-[#EC4899]' : item.isPremium ? 'text-[#06B6D4]' : 'text-primary'}`}>
                      {item.num}
                    </span>
                  </div>
                  
                  <h3 className="font-bold mb-1 text-lg text-white leading-tight">
                    {item.title}
                  </h3>
                  <h4 className={`text-sm font-semibold mb-3 ${item.isFinal ? 'text-pink-400' : item.isPremium ? 'text-cyan-400' : 'text-blue-400'}`}>
                    {item.company}
                  </h4>
                  
                  <div className="inline-block px-2 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] text-gray-300 font-medium tracking-wide">
                    {item.year}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Road */}
      <div className="md:hidden relative w-full px-4 mt-8 mb-16">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-white/10" />
        <motion.div 
          className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-cyan-500 to-pink-500 origin-top"
          style={{ scaleY: pathLength }}
        />
        
        {timelineData.map((item, index) => {
          const yPos = 6.25 + index * 12.5;
          const threshold = yPos / 100;

          const cardOpacity = useTransform(scrollYProgress, [Math.max(0, threshold - 0.1), threshold], [0, 1]);
          const cardX = useTransform(scrollYProgress, [Math.max(0, threshold - 0.1), threshold], [-20, 0]);

          return (
            <motion.div
              key={index}
              style={{ opacity: cardOpacity, x: cardX }}
              className="relative mb-12 w-full pl-16 pr-2"
            >
              {/* Node Marker */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(139,92,246,0.8)] -translate-x-1/2 z-10" />
              
              {/* Connector */}
              <div className="absolute left-6 top-8 h-[2px] w-10 bg-white/20 z-0" />

              {/* Card */}
              <div className={`relative z-10 w-full bg-card/90 backdrop-blur-md rounded-2xl p-4 border shadow-xl ${
                item.isFinal ? 'border-[#EC4899]' : 
                item.isPremium ? 'border-[#06B6D4]' : 
                'border-white/10'
              }`}>
                <div className="mb-2">
                  <span className={`text-2xl font-black opacity-30 ${item.isFinal ? 'text-[#EC4899]' : 'text-primary'}`}>
                    {item.num}
                  </span>
                </div>
                
                <h3 className="font-bold mb-1 text-md text-white leading-tight">
                  {item.title}
                </h3>
                <h4 className={`text-xs font-semibold mb-3 ${item.isFinal ? 'text-pink-400' : item.isPremium ? 'text-cyan-400' : 'text-blue-400'}`}>
                  {item.company}
                </h4>
                
                <div className="inline-block px-2 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] text-gray-300 font-medium">
                  {item.year}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
