"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-background border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 text-primary">
            <span className="text-xs font-semibold uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Let's Build Something<br/>Great Together</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Whether you need a custom enterprise solution, strategic technology consulting, or want to explore collaboration opportunities, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="mailto:saiteja.v@ivaworksolutions.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <Send className="w-5 h-5" />
            Send an Email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6 mt-16 pt-12 border-t border-white/10"
        >
          <a href="https://www.linkedin.com/in/saitejavodnala/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] transition-all hover:scale-110" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/ivaworks16" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-all hover:scale-110" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="mailto:saiteja.v@ivaworksolutions.com" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110" title="Official Email" aria-label="Official Email">
            <Send className="w-5 h-5" />
          </a>
          <a href="mailto:saiteja.vodnala97@gmail.com" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-secondary transition-all hover:scale-110" title="Personal Email" aria-label="Personal Email">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
        
        <p className="mt-8 text-sm text-white/40">
          © {new Date().getFullYear()} Sai Teja Vodnala. All rights reserved.
        </p>
      </div>
    </section>
  );
}
