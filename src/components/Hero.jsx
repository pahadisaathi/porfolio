"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { hero } from "@/lib/data";

function SplitText({ text, delay = 0 }) {
  const words = text.split(" ");

  return (
    <span className="inline">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--bg)]"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.22),transparent_32%),radial-gradient(circle_at_80%_22%,rgba(59,130,246,0.16),transparent_28%),linear-gradient(135deg,#0c0c16_0%,#080811_45%,#06060a_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-80 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute left-[-12%] top-24 -z-10 h-72 w-72 rounded-full bg-[var(--accent)]/18 blur-3xl" />
      <div className="absolute right-[-8%] top-1/3 -z-10 h-80 w-80 rounded-full bg-sky-500/12 blur-3xl" />

      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] items-center gap-10 px-6 pb-12 pt-18 lg:h-screen lg:max-h-screen lg:grid-cols-[minmax(0,1.05fr)_minmax(400px,0.9fr)] lg:gap-8 lg:px-16 lg:pb-8 lg:pt-16">
        <div className="relative z-10">
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--accent)]/20 bg-white/[0.04] px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[var(--accent-light)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse-glow" />
                Available for new projects
              </span>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              {hero.meta.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] px-5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--accent-light)] shadow-[0_0_20px_rgba(124,58,237,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[var(--accent)]/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <h1 className="mt-4 max-w-[11ch] font-display text-[clamp(2.2rem,4.6vw,3.9rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
              <SplitText text={hero.headline} delay={0.3} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-5 max-w-[600px] text-[clamp(0.98rem,1.5vw,1.08rem)] leading-[1.65] text-[#b8b7c9]"
            >
              {hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href={hero.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.82rem] font-semibold text-[#120f1e] shadow-[0_18px_50px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_65px_rgba(255,255,255,0.16)]"
              >
                {hero.cta.label}
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-[0.82rem] font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/[0.22] hover:bg-white/[0.08] hover:text-white"
              >
                {hero.ctaSecondary.label}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.35 }}
              className="mt-8 grid gap-4 sm:grid-cols-3"
            >
              {hero.highlights.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-[2rem] border border-[var(--accent)]/10 bg-white/[0.04] px-5 py-4.5 transition-all duration-500 hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/[0.03] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.05),transparent_60%)]" />
                  <span className="relative z-10 text-[0.62rem] uppercase tracking-[0.25em] font-bold text-[var(--accent-light)] opacity-70 group-hover:opacity-100">
                    {item.label}
                  </span>
                  <div className="relative z-10 mt-2 text-[1rem] font-semibold text-white tracking-tight">
                    {item.value}
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto w-full max-w-[540px] lg:-mt-6 lg:mr-0"
        >
          <div className="absolute inset-x-[14%] top-2 h-24 rounded-full bg-[var(--accent)]/18 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.04] p-3 shadow-[0_30px_100px_rgba(5,5,12,0.65)] backdrop-blur-sm">
            <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(155deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_35%,rgba(124,58,237,0.1)_100%)]" />
            <div className="relative overflow-hidden rounded-[24px]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(8,8,17,0)_0%,rgba(8,8,17,0.08)_55%,rgba(8,8,17,0.34)_100%)]" />
              <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#090913]/65 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to work
              </div>
              <Image
                src="https://res.cloudinary.com/dmyzudtut/image/upload/v1776915422/ChatGPT_Image_Apr_23_2026_09_05_16_AM_hkjila.png"
                alt="Mohit Rawat Portrait"
                width={1100}
                height={1400}
                className="h-[440px] w-full object-cover object-center sm:h-[540px] lg:h-[68vh] lg:max-h-[720px]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex items-center gap-4">
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[var(--text-dim)]">
            Scroll
          </span>
          <div className="h-[1px] w-12 bg-white/[0.1]">
            <motion.div
              className="h-full bg-[var(--accent)]"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
