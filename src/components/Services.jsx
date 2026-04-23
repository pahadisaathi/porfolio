"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Code2, Database, Layout, Server, Cpu, Globe, Rocket, Shield } from "lucide-react";

const icons = {
  "01": Layout,
  "02": Server,
  "03": Database,
  "04": Globe,
};

const viewport = { once: true, amount: 0.2 };

export default function Services() {
  return (
    <section id="skills" className="relative py-40 px-6 lg:px-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewport}
            className="max-w-[700px]"
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-[var(--accent-light)]">
              Tech Ecosystem
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
              The tools behind the <span className="text-[var(--accent-light)]">solutions.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={viewport}
            className="max-w-[400px] text-[1.05rem] leading-[1.8] text-[var(--text-muted)] lg:mb-4"
          >
            My stack is focused on modern, performant, and scalable technologies that enable rapid delivery without compromising on quality.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.number] || Code2;
            
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={viewport}
                className="group relative flex flex-col p-8 lg:p-12 rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] transition-all duration-700 hover:border-[var(--accent)]/30 hover:bg-white/[0.04] shadow-2xl"
              >
                {/* Floating Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1),transparent_60%)]" />

                <div className="relative flex-1">
                  <header className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent-light)] transition-all duration-500 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                        <Icon size={28} />
                      </div>
                      <h3 className="font-display text-[1.6rem] font-bold tracking-tight text-white lg:text-[1.8rem]">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-[0.8rem] font-mono font-bold text-white/[0.08] group-hover:text-[var(--accent-light)] transition-colors duration-500 tracking-widest">
                      // {service.number}
                    </span>
                  </header>

                  <p className="text-[1.05rem] leading-[1.8] text-[var(--text-muted)] group-hover:text-white/80 transition-colors duration-500">
                    {service.description}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-2.5">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-[0.72rem] font-medium text-white/60 transition-all duration-500 group-hover:border-[var(--accent)]/20 group-hover:bg-[var(--accent)]/[0.05] group-hover:text-[var(--accent-light)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={viewport}
          className="mt-32 flex flex-col items-center text-center"
        >
          <div className="h-20 w-px bg-gradient-to-down from-transparent via-[var(--accent)]/30 to-transparent mb-12" />
          <h4 className="text-[var(--text-dim)] text-[0.95rem] tracking-widest uppercase font-medium">
            Always learning. Always evolving.
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
