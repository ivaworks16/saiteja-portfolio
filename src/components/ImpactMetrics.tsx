"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 tracking-tight">0{suffix}</span>;
}

const metrics = [
  { label: 'Years Experience', value: 6, suffix: '+' },
  { label: 'Projects Delivered', value: 7, suffix: '+' },
  { label: 'Clients Served', value: 6, suffix: '' },
  { label: 'Certifications', value: 4, suffix: '' },
];

export default function ImpactMetrics() {
  return (
    <section className="py-20 relative border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center justify-center text-center md:border-l md:border-white/10 ${idx === 0 ? 'md:border-l-0' : ''}`}
            >
              <div className="mb-2">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
