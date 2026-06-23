"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Layout, Lightbulb, Server } from 'lucide-react';

const bentoItems = [
  {
    title: 'Salesforce Development',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base mt-2">
        <li>Expert in developing Lightning Web Components (LWC) for enterprise-grade Salesforce applications.</li>
        <li>Extensive experience building Apex Classes, Triggers, Batch Apex, and Scheduled Apex solutions.</li>
        <li>Worked on multiple Salesforce Sales Cloud and Service Cloud implementations across Banking, Healthcare, and Enterprise domains.</li>
        <li>Designed and developed custom objects, validation rules, record types, page layouts, and automation workflows.</li>
        <li>Delivered scalable CRM solutions supporting thousands of business users globally.</li>
        <li>Strong experience improving application performance, code quality, and deployment processes.</li>
      </ul>
    ),
    icon: <Database className="w-6 h-6 text-primary" />,
    className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-card/80 to-card/20',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless data flow across systems using AWS, MuleSoft, and REST APIs.',
    icon: <Cloud className="w-6 h-6 text-secondary" />,
    className: 'md:col-span-1 md:row-span-1 bg-card/40',
  },
  {
    title: 'React & Next.js',
    description: 'Building highly interactive, performant web applications with modern React.',
    icon: <Layout className="w-6 h-6 text-accent" />,
    className: 'md:col-span-1 md:row-span-1 bg-card/40',
  },
  {
    title: 'Business Leadership',
    description: 'Driving growth, strategy, and team scaling as a Founder & CEO.',
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    className: 'md:col-span-1 md:row-span-1 bg-card/40',
  },
  {
    title: 'System Architecture',
    description: 'Designing resilient, secure, and scalable cloud architectures.',
    icon: <Server className="w-6 h-6 text-green-400" />,
    className: 'md:col-span-2 md:row-span-1 bg-card/40',
  },
];

export default function ExpertiseBento() {
  return (
    <section id="expertise" className="py-24 relative bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Core Expertise</h2>
          <p className="text-muted-foreground text-lg">What I bring to the table</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 p-8 hover:border-primary/50 transition-colors ${item.className} backdrop-blur-sm`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <div className="text-muted-foreground leading-relaxed">
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
