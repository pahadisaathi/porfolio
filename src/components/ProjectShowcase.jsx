"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const viewport = { once: true, amount: 0.15 };

export default function ProjectShowcase() {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
          className="mb-20"
        >
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[var(--accent-light)]">
            Projects
          </p>
          <h2 className="mt-4 max-w-[700px] font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            Selected work and builds.
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={viewport}
              className="group"
            >
              <div
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
                style={index % 2 === 1 ? { direction: "rtl" } : {}}
              >
                {/* Image Link Wrapper */}
                <a
                  href={project.href}
                  target={project.href?.startsWith("http") ? "_blank" : undefined}
                  rel={project.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="relative block overflow-hidden rounded-2xl group/img"
                  style={{ direction: "ltr" }}
                >
                  <div
                    className="absolute inset-0 z-10 opacity-40 transition-opacity duration-500 group-hover/img:opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}33, transparent 60%)`,
                    }}
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60 flex items-end justify-center pb-8 opacity-0 transition-opacity duration-500 group-hover/img:opacity-100">
                     <span className="rounded-full bg-white/10 backdrop-blur-md px-6 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white border border-white/20">
                        View Project
                     </span>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={1000}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-1000 ease-out group-hover/img:scale-110 group-hover:grayscale-0"
                  />

                  {/* Floating year badge */}
                  <div className="absolute top-5 right-5 z-20 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[0.7rem] font-medium text-white/70 backdrop-blur-md">
                    {project.year}
                  </div>
                </a>

                {/* Content */}
                <div style={{ direction: "ltr" }} className="flex flex-col justify-center">
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.25em] text-[var(--accent-light)]">
                    {project.category}
                  </span>

                  <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-[500px] text-[0.95rem] leading-[1.8] text-[var(--text-muted)]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.04] px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-[var(--accent-light)] transition-colors duration-300 group-hover:bg-[var(--accent)]/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View project link */}
                  <a
                    href={project.href}
                    target={project.href?.startsWith("http") ? "_blank" : undefined}
                    rel={project.href?.startsWith("http") ? "noreferrer" : undefined}
                    className="group/link mt-8 inline-flex items-center gap-2 text-[0.85rem] font-medium text-[var(--accent-light)] transition-all duration-300 hover:gap-3"
                  >
                    {project.linkLabel || "Explore details"}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
