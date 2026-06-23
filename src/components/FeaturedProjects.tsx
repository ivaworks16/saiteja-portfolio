"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Case Studies</h2>
          <p className="text-muted-foreground text-lg">Highlighting impactful solutions</p>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
                <div className="relative aspect-video md:aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-white/10 bg-card">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col"
              >
                <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={`/case-studies/${project.id}`} className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors group w-fit">
                  View Full Case Study
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
