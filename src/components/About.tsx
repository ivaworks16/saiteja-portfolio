"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">About Me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex justify-center items-end bg-card/40 border border-white/10 rounded-3xl pt-8 overflow-hidden"
          >
             <img src="/assets/about-profile.png" alt="Sai Teja" className="w-full max-w-[350px] object-contain" onError={(e) => { e.currentTarget.src = '/assets/profile.jpg'; }} />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 flex flex-col gap-8"
          >
            <div className="bg-card/40 backdrop-blur-sm border-l-4 border-y border-r border-white/5 p-8 rounded-r-2xl shadow-lg border-l-primary">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Senior Salesforce Developer with 6+ years of experience in Salesforce CRM development, enterprise cloud applications, REST API integrations, workflow automation, and scalable business solutions.
              </p>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Specialized in Apex, Lightning Web Components (LWC), Visualforce, Sales Cloud, Service Cloud, Salesforce Administration, and enterprise application architecture. Experienced in designing and delivering scalable Salesforce solutions across Banking, Education, Manufacturing, Real Estate, and Enterprise domains.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                In addition to my technical expertise, I'm the <strong>CEO & Founder of <a href="https://www.ivaworksolutions.com/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-400/50 underline-offset-4 transition-colors">IVA Work Solutions</a></strong>, a technology-driven company focused on delivering innovative digital solutions, business automation, cloud services, enterprise software development, and strategic technology consulting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/40 backdrop-blur-sm border-l-4 border-y border-r border-white/5 p-8 rounded-r-2xl shadow-lg" style={{ borderLeftColor: '#00a1e0' }}>
                <h3 className="text-xl font-bold text-[#e2e8f0] mb-4">Entrepreneurship</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Digital Transformation</li>
                  <li>Business Automation</li>
                  <li>Technology Consulting</li>
                </ul>
              </div>

              <div className="bg-card/40 backdrop-blur-sm border-l-4 border-y border-r border-white/5 p-8 rounded-r-2xl shadow-lg border-l-primary">
                <h3 className="text-xl font-bold text-[#e2e8f0] mb-4">My Vision</h3>
                <div className="flex flex-wrap gap-2">
                  {['Cloud', 'Salesforce', 'Automation', 'Enterprise'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-sm font-semibold text-primary bg-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
