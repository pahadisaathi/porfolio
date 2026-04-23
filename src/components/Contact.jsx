"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { contact } from "@/lib/data";

const viewport = { once: true, amount: 0.2 };

export default function Contact() {

  return (
    <section id="contact" className="relative py-48 px-6 lg:px-10 overflow-hidden">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.05),transparent_70%)] blur-3xl opacity-60" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Availability Badge */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={viewport}
           className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/[0.05] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-emerald-400/90">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Massive Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
          className="text-center mb-24"
        >
          <h2 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[1.05] tracking-[-0.05em] text-white">
            Let's create something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] via-blue-400 to-emerald-400">
              extraordinary.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Primary CTA Cards */}
          {contact.items.slice(0, 2).map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={viewport}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 lg:p-12 transition-all duration-700 hover:border-[var(--accent)]/40 hover:bg-white/[0.04] shadow-2xl"
              >
                <div className="absolute inset-x-0 top-0 h-[100px] bg-[linear-gradient(to_bottom,var(--accent)/[0.03],transparent)]" />
                
                <header className="flex justify-between items-start mb-12">
                   <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent-light)] transition-all duration-500 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:scale-110">
                      <Icon size={28} />
                   </div>
                   <ArrowUpRight className="text-white/20 transition-all duration-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1" />
                </header>

                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--accent-light)] mb-4 font-bold">
                  {item.label}
                </p>
                <h3 className="text-2xl font-semibold text-white tracking-tight break-all">
                  {item.value}
                </h3>
              </motion.a>
            );
          })}

          {/* Context & More Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={viewport}
            className="flex flex-col rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-10 lg:p-12 transition-all duration-700 hover:border-white/[0.2] hover:bg-white/[0.04]"
          >
             <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 group">
                   <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-[var(--accent)] group-hover:text-[var(--accent-light)]">
                      <MapPin size={18} />
                   </div>
                   <div>
                      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-dim)]">Location</p>
                      <p className="text-sm font-medium text-white">Zirakpur, India (GMT+5:30)</p>
                   </div>
                </div>
             </div>

             <div className="mt-12">
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-6">Socials</p>
                <div className="flex gap-4">
                   <a 
                     href="https://linkedin.com/in/mohit-rawat-323133229" 
                     className="h-12 w-12 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:border-[var(--accent)] hover:text-[var(--accent-light)] transition-all duration-300"
                   >
                     <Linkedin size={20} />
                   </a>
                   <a 
                     href="https://github.com" 
                     className="h-12 w-12 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:border-white hover:text-white transition-all duration-300"
                   >
                     <Github size={20} />
                   </a>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
