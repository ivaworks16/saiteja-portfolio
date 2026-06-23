"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Salesforce Certified Service Cloud Consultant',
    issuer: 'Salesforce',
    date: '2024',
    link: '#',
  },
  {
    title: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    date: '2024',
    link: '#',
  },
  {
    title: 'Salesforce Trailhead Ranger',
    issuer: 'Salesforce',
    date: '2023',
    link: '#',
  },
  {
    title: 'Salesforce Certified Platform Developer I',
    issuer: 'Salesforce',
    date: '2022',
    link: '#',
  }
];

export default function Certifications() {
  return (
    <section className="py-24 relative bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Certifications</h2>
          <p className="text-muted-foreground text-lg">Continuous learning and validation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-card/60 hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg overflow-hidden flex items-start gap-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 p-2 bg-white/90">
                <img src="/assets/salesforce.svg" alt="Salesforce" className="w-full h-full object-contain" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-sm font-medium text-white/50 px-3 py-1 rounded-full bg-white/5">
                    Issued {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
