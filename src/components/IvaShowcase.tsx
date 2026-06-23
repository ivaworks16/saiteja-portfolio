"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Code, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8 text-secondary" />,
    title: 'Consulting Services',
    description: 'Strategic advisory for enterprise digital transformation and cloud CRM adoption.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Staffing Solutions',
    description: 'Providing top-tier technology talent to scale your engineering and product teams.',
  },
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: 'Technology Services',
    description: 'Custom software development, system integration, and dedicated engineering pods.',
  }
];

export default function IvaShowcase() {
  return (
    <section id="iva" className="py-24 relative bg-[#0a0f25] border-y border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <img src="/assets/IVA logo.png" alt="IVA Work Solutions" className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 w-fit">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Founder & CEO
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Scaling Businesses with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                IVA Work Solutions
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At IVA Work Solutions, we bridge the gap between complex business challenges and scalable technological solutions. As the Founder and CEO, I lead a team of experts dedicated to delivering excellence in consulting, staffing, and custom technology services for modern enterprises.
            </p>

            <a href="https://www.ivaworksolutions.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              Visit IVA Work Solutions
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {services.map((service, idx) => (
              <div key={idx} className="bg-card/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex gap-6 items-start hover:bg-card/60 transition-colors shadow-lg">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
