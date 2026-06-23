"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    name: 'Salesforce Platform',
    items: ['Salesforce', 'Apex', 'LWC', 'Flow', 'Visualforce', 'SOQL', 'SOSL', 'Einstein']
  },
  {
    name: 'Web Technologies',
    items: ['React', 'Next.js', 'Node.js', 'GraphQL', 'Redux', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL']
  },
  {
    name: 'CRM & Automation',
    items: ['Sales Cloud', 'Service Cloud', 'Experience Cloud', 'Process Automation', 'Validation Rules', 'Custom Objects']
  },
  {
    name: 'Integration & Cloud',
    items: ['REST APIs', 'Kafka', 'IBM Cloud', 'External Services', 'Data Migration', 'System Integration']
  },
  {
    name: 'Development Tools',
    items: ['Git', 'VS Code', 'IntelliJ', 'Jira', 'Workbench', 'DBeaver', 'MongoDB', 'Docker']
  }
];

function MarqueeRow({ items, direction = 1, speed = 40 }: { items: string[], direction?: number, speed?: number }) {
  return (
    <div className="flex w-full overflow-hidden relative mb-2 select-none" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <motion.div
        className="flex whitespace-nowrap gap-4 md:gap-6 w-fit pl-4 md:pl-6"
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {/* Repeating items for seamless loop */}
        {[...items, ...items, ...items, ...items, ...items].map((tech, idx) => (
          <div
            key={idx}
            className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/10 text-white/80 font-medium whitespace-nowrap hover:bg-primary/20 hover:border-primary/50 hover:text-white hover:scale-105 transition-all cursor-default shadow-lg backdrop-blur-sm"
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechWall() {
  return (
    <section id="expertise" className="py-24 relative bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technology Stack</h2>
          <p className="text-muted-foreground text-lg">Tools and platforms I use to build robust solutions</p>
        </motion.div>
      </div>

      <div className="relative flex flex-col max-w-[100vw] gap-10">
        {techCategories.map((category, idx) => (
          <div key={idx} className="w-full">
            <h3 className="text-lg md:text-xl font-semibold text-white/90 mb-4 pl-4 border-l-2 border-primary ml-4 md:ml-12 lg:ml-24">
              {category.name}
            </h3>
            <MarqueeRow items={category.items} direction={idx % 2 === 0 ? 1 : -1} speed={30 + (idx * 5)} />
          </div>
        ))}
      </div>
    </section>
  );
}
