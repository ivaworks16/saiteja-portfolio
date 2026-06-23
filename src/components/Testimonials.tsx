"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'TechFlow',
    content: 'Sai Teja transformed our legacy CRM into a powerhouse. His architectural vision and deep Salesforce expertise saved us hundreds of hours in manual processes.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Nexus Solutions',
    content: 'Working with IVA Work Solutions and Sai Teja has been incredible. They delivered our complex cloud integration project ahead of schedule with zero downtime.',
  },
  {
    name: 'David Wright',
    role: 'Director of Operations',
    company: 'GlobalCorp',
    content: 'The level of professionalism and technical depth is unmatched. The B2B portal they built for us has completely redefined how we interact with our customers.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Manager',
    company: 'CloudSync',
    content: 'Sai Teja’s ability to bridge the gap between business requirements and technical execution is exceptional. A true leader and technical visionary.',
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-[#0a0f25] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[60%] rounded-full bg-secondary/20 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Client Testimonials</h2>
          <p className="text-muted-foreground text-lg">What leaders say about my work</p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div
          className="flex gap-6 w-fit pl-6 hover:[animation-play-state:paused]"
          animate={{ x: [0, -1696] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {/* Repeat testimonials twice to loop */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div key={idx} className="w-[400px] shrink-0 bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative hover:border-primary/50 transition-colors">
              <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5" />
              <p className="text-white/90 leading-relaxed mb-8 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-lg shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
