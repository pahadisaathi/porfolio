"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { about } from "@/lib/data";

const viewport = { once: true, amount: 0.2 };

function AnimatedCounter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;

    const target = parseInt(numericPart, 10);
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setDisplay(String(current));

      if (step >= steps) {
        clearInterval(timer);
        setDisplay(String(target));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-semibold tracking-[-0.04em] text-white">
        {display}
        <span className="text-[var(--accent-light)]">{suffix}</span>
      </p>
      <p className="mt-2 text-[0.8rem] uppercase tracking-[0.2em] text-[var(--text-dim)]">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-10">
      {/* Decorative divider gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      <div className="mx-auto max-w-[1400px]">
        {/* Profile Image Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
          className="relative mb-20 aspect-[16/8] w-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] shadow-2xl"
        >
          <Image
            src="https://res.cloudinary.com/dmyzudtut/image/upload/v1776915422/ChatGPT_Image_Apr_23_2026_09_05_16_AM_hkjila.png"
            alt="Mohit Rawat"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-white/60"
            >
              Creative Technologist
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-2 font-display text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-white"
            >
              Mohit Rawat
            </motion.h3>
          </div>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24 items-start">
          {/* Left — Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewport}
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[var(--accent-light)]">
              About
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              {about.headline}
            </h2>
            <p className="mt-8 text-[1.05rem] leading-[1.8] text-[var(--text-muted)]">
              {about.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {about.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[var(--accent-light)] shadow-[0_0_20px_rgba(124,58,237,0.1)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[var(--accent)]/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Education + stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewport}
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 lg:p-10">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.25em] text-[var(--text-dim)]">
                Education
              </p>
              <h3 className="mt-5 font-display text-[1.6rem] font-semibold tracking-[-0.03em] text-white">
                {about.education.degree}
              </h3>
              <p className="mt-2 text-[0.98rem] text-white/80">
                {about.education.field}
              </p>
              <p className="mt-1 text-[0.8rem] uppercase tracking-[0.18em] text-[var(--text-dim)]">
                {about.education.period}
              </p>
              <div className="mt-6 grid gap-3">
                {about.education.points.map((point) => (
                  <p
                    key={point}
                    className="rounded-2xl border border-white/[0.05] bg-black/20 px-4 py-3 text-[0.92rem] leading-[1.75] text-[var(--text-muted)]"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
              {about.stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
