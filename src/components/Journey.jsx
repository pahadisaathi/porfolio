"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { journey } from "@/lib/data";

const viewport = { once: false, amount: 0.3 };

function ScrollBullet({ text, index, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`group relative flex items-start gap-4 rounded-2xl border px-5 py-4 transition-all duration-500 ${
        active
          ? "border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] shadow-[0_10px_30px_rgba(124,58,237,0.08)]"
          : "border-white/[0.04] bg-white/[0.01] grayscale hover:grayscale-0 hover:border-white/[0.1] hover:bg-white/[0.03]"
      }`}
    >
      <div className="relative mt-2.5">
        <div
          className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
            active
              ? "bg-[var(--accent-light)] scale-110 shadow-[0_0_12px_rgba(167,139,250,0.8)]"
              : "bg-white/20 scale-100"
          }`}
        />
        {active && (
          <motion.div
            layoutId="bullet-ring"
            className="absolute -inset-1 rounded-full border border-[var(--accent-light)]/40"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </div>
      <p
        className={`text-[0.95rem] leading-[1.7] transition-colors duration-500 ${
          active ? "text-white font-medium" : "text-[var(--text-dim)]"
        }`}
      >
        {text}
      </p>
    </motion.div>
  );
}

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const visibilityRef = useRef(new Map());

  useEffect(() => {
    const elements = itemRefs.current.filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityRef.current.set(entry.target.dataset.index, entry.intersectionRatio);
        });

        let maxRatio = -1;
        let bestIndex = -1;

        visibilityRef.current.forEach((ratio, index) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestIndex = Number(index);
          }
        });

        if (maxRatio > 0.1 && bestIndex !== -1) {
          setActiveIndex((prev) => (prev !== bestIndex ? bestIndex : prev));
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -40% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      visibilityRef.current.clear();
    };
  }, []);

  const activeMilestone = journey.milestones[activeIndex];

  return (
    <section id="journey" className="relative px-6 py-32 lg:px-10" ref={containerRef}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 max-w-[860px]"
        >
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-[var(--accent-light)]">
            Career Journey
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
            {journey.headline}
          </h2>
          <p className="mt-6 max-w-[720px] text-[1.05rem] leading-[1.8] text-[var(--text-muted)]">
            {journey.intro}
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Panel: Sticky Interactive Summary */}
          <div className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-8 lg:p-10 backdrop-blur-xl shadow-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_60%)]" />
              
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--accent-light)]">
                    Timeline Overview
                  </p>
                  <span className="text-[0.7rem] font-mono text-white/30 uppercase tracking-widest">
                    Milestone 0{activeIndex + 1}
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  {journey.milestones.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={`nav-${index}`}
                        onClick={() => {
                          itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
                        }}
                        className={`group relative w-full text-left transition-all duration-500 ${
                          isActive ? "opacity-100 translate-x-1" : "opacity-40 hover:opacity-70"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`h-1 transition-all duration-500 ${isActive ? "w-8 bg-[var(--accent)]" : "w-4 bg-white/20"}`} />
                          <div>
                            <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--accent-light)]">
                              {item.year}
                            </p>
                            <p className="font-medium text-white text-base">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Enhanced Detailed Reveal */}
                <div className="mt-12 h-[1px] w-full bg-white/5" />
                
                <motion.div
                  key={`detail-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10"
                >
                  <h3 className="font-display text-[1.8rem] font-semibold tracking-tight text-white leading-tight">
                    {activeMilestone.title}
                  </h3>
                  {activeMilestone.company && (
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-light)]">
                      {activeMilestone.company}
                    </p>
                  )}
                  <div className="mt-8 space-y-4">
                    {activeMilestone.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-4 text-[0.92rem] leading-relaxed text-[var(--text-muted)]">
                        <span className="mt-2.5 h-[1.5px] w-4 shrink-0 bg-[var(--accent)]/40" />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrollable Timeline Cards */}
          <div className="relative pl-10 lg:pl-16">
            {/* Live Progress Line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-white/[0.04]">
              <motion.div
                className="absolute top-0 w-full bg-gradient-to-b from-[var(--accent-light)] to-[var(--accent)]"
                style={{ height: "100%", scaleY, originY: 0 }}
              />
            </div>

            <div className="space-y-24">
              {journey.milestones.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.article
                    key={index}
                    id={`journey-step-${index}`}
                    ref={(el) => (itemRefs.current[index] = el)}
                    data-index={index}
                    className="relative group lg:pt-10"
                  >
                    {/* Floating Step Number */}
                    <div className={`absolute -left-[45px] lg:-left-[64px] top-10 lg:top-20 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 ${
                      isActive 
                      ? "bg-[var(--accent)] scale-110 text-white shadow-[0_0_30px_rgba(124,58,237,0.5)] border-transparent" 
                      : "bg-[#080811] border-white/10 text-white/20 scale-100"
                    }`}>
                      <span className="text-[0.75rem] font-bold">0{index + 1}</span>
                    </div>

                    <div className={`relative overflow-hidden rounded-[2.5rem] border p-8 lg:p-12 transition-all duration-500 ease-out ${
                      isActive
                        ? "border-[var(--accent)]/40 bg-white/[0.04] shadow-[0_40px_100px_rgba(0,0,0,0.5)] translate-x-2 scale-[1.01]"
                        : "border-white/[0.06] bg-transparent opacity-30 grayscale scale-[0.98]"
                    }`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.08),transparent_70%)]" />
                      
                      <div className="relative">
                        <header className="flex flex-col gap-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] px-4 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--accent-light)]">
                              {item.year}
                            </span>
                            {item.company && (
                              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-white/40">
                                {item.company}
                              </span>
                            )}
                          </div>
                          <h3 className="font-display text-[2rem] font-semibold tracking-tight text-white lg:text-[2.6rem] leading-tight">
                            {item.title}
                          </h3>
                        </header>

                        <p className="mt-8 text-[1.05rem] leading-[1.8] text-[var(--text-muted)]">
                          {item.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {item.tags?.map((tag) => (
                            <span 
                              key={tag}
                              className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.04] px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--accent-light)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-12 grid gap-4">
                          {item.bullets.map((bullet, bIndex) => (
                            <ScrollBullet
                              key={bIndex}
                              index={bIndex}
                              text={bullet}
                              active={isActive}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
