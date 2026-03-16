"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Code2,
  Globe,
  Layers3,
  Sparkles,
  Phone,
  Briefcase,
  GraduationCap,
  Server,
  Cloud,
  MapPin,
  ChevronRight,
  Rocket,
  BadgeCheck,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

const featuredProjects = [
  {
    title: "Tour Booking Platform",
    description:
      "Built the customer-facing frontend in Next.js with responsive UI, smooth booking flows, and production-ready performance.",
    stack: ["Next.js", "Custom CSS", "Responsive UI", "Razorpay"],
    link: "https://www.devsthanexpert.com",
    image: "https://res.cloudinary.com/dmyzudtut/image/upload/v1773675226/Screenshot_2026-03-16_at_9.01.19_PM_gbe67f.png",
  },
  {
    title: "Pahadi Saathi",
    description:
      "Developed a matrimonial platform for the Pahadi community with profile management, matchmaking preferences, responsive design, and Vercel deployment.",
    stack: ["Next.js", "React.js", "Vercel"],
    link: "https://pahadi-saathi-frontend-d6c6.vercel.app/",
    image: "https://res.cloudinary.com/dmyzudtut/image/upload/v1773675224/Screenshot_2026-03-16_at_9.02.11_PM_l8geu7.png",

  },
  {
    title: "Gogxn Gym Supplement Store",
    description:
      "Developed the complete frontend for a gym supplement e-commerce store with product listings, cart, checkout, and REST API integration — contributing to ~30% online sales growth.",
    stack: ["Next.js", "Custom CSS", "REST APIs", "Vercel"],
    link: "https://www.gogxn.com",

    image: "https://res.cloudinary.com/dmyzudtut/image/upload/v1773675225/Screenshot_2026-03-16_at_9.03.21_PM_p5raw5.png",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "RBAC"],
  },
  {
    title: "Tools",
    icon: Layers3,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Chrome DevTools",
      "Vercel",
    ],
  },
  {
    title: "Cloud & Integrations",
    icon: Cloud,
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS Amplify",
      "Razorpay",
      "ApiSensy",
      "Gmail OTP",
    ],
  },
];

const experience = [
  {
    role: "Web Developer",
    company: "Devsthan Expert Pvt. Ltd.",
    type: "Remote",
    period: "Jan 2024 – Present",
    points: [
      "Built the Tour Booking Platform frontend from scratch in Next.js using custom CSS.",
      "Developed a React.js admin panel for tours, vendors, bookings, pricing, content, and CRM workflows.",
      "Built a vendor panel for hotel and transport listings and booking operations.",
      "Integrated Razorpay, Gmail OTP, WhatsApp automation, and notification workflows.",
      "Built Node.js and Express.js REST APIs with role-based access control.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Bukalo India Pvt. Ltd.",
    type: "Remote",
    period: "Mar 2023 – Dec 2023",
    points: [
      "Developed the Gogxn Gym Supplement Store frontend using Next.js and custom CSS.",
      "Integrated REST APIs for products, authentication, cart, and checkout.",
      "Improved UI/UX and responsiveness, contributing to ~30% online sales growth.",
      "Collaborated closely with backend developers and designers.",
    ],
  },
];

const sideProjects = [
  {
    title: "Pahadi Saathi",
    subtitle: "Next.js",
    description:
      "Built a matrimonial platform for the Pahadi community with profile management, matchmaking preferences, responsive UI, and Vercel deployment.",
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "React.js",
    description:
      "Created a responsive portfolio website showcasing projects and skills, deployed on Vercel for fast updates.",
  },
];

const stats = [
  ["3+", "Years of professional web development experience"],
  ["5+", "Production systems across customer, admin, vendor, and CRM flows"],
  ["30%", "Approximate online sales growth contribution at Gogxn"],
  ["100%", "Focus on responsive and scalable UI delivery"],
];

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7015317899",
    href: "tel:+917015317899",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rawat009111@gmail.com",
    href: "mailto:rawat009111@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "mohit-rawat-323133229",
    href: "https://linkedin.com/in/mohit-rawat-323133229",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const hoverFloat = {
  y: -6,
  transition: {
    duration: 0.25,
    ease: "easeOut",
  },
};

const cn = (...classes) => classes.filter(Boolean).join(" ");

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({
  className = "",
  children,
  variant,
  size,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition outline-none";
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8",
  };
  const variants = {
    default: "",
    outline: "",
  };

  return (
    <button
      className={cn(base, sizes[size || "default"], variants[variant || "default"], className)}
      {...props}
    >
      {children}
    </button>
  );
}

function Badge({ className = "", children }) {
  return (
    <span className={cn("inline-flex items-center border text-sm font-medium", className)}>
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, description, t }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mb-12 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
    >
      <div className="max-w-2xl">
        <p
          className={cn(
            "mb-3 text-xs font-medium uppercase tracking-[.35em]",
            t.muted
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "text-3xl font-semibold tracking-tight md:text-5xl",
            t.title
          )}
        >
          {title}
        </h2>
      </div>
      <p className={cn("max-w-2xl text-base leading-7", t.sub)}>
        {description}
      </p>
    </motion.div>
  );
}

function ThemeButton({ dark, setDark, t, compact = false }) {
  return (
    <Button
      variant="outline"
      onClick={() => setDark((v) => !v)}
      className={cn("rounded-full border", compact ? "h-9 w-9 p-0" : "px-4", t.btnAlt, t.border)}
    >
      {dark ? (
        <Sun className={cn("h-4 w-4", !compact && "mr-2")} />
      ) : (
        <Moon className={cn("h-4 w-4", !compact && "mr-2")} />
      )}
      {!compact && <>{dark ? "Light" : "Dark"} Mode</>}
    </Button>
  );
}

export default function Page() {
  const [dark, setDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = dark
    ? {
      root: "bg-slate-950 text-slate-100 selection:bg-cyan-300/20 selection:text-cyan-100",
      header: "border-slate-800/80 bg-slate-950/70",
      title: "text-slate-50",
      text: "text-slate-100",
      sub: "text-slate-300",
      muted: "text-slate-400",
      card: "border border-slate-800 bg-slate-900/60",
      card2: "border border-slate-800 bg-slate-950/60",
      soft: "bg-slate-900/75",
      chip: "border border-slate-700 bg-slate-950/60 text-slate-200",
      btnAlt:
        "border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-800",
      btnMain:
        "border border-cyan-400/20 bg-cyan-400 text-slate-950 hover:bg-cyan-300",
      accent: "text-cyan-300",
      accentBg: "border border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
      accent2: "border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200",
      ok: "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
      border: "border-slate-800",
      line: "from-cyan-400/30 via-fuchsia-400/20",
      glow1: "bg-fuchsia-500/12",
      glow2: "bg-sky-500/10",
      glow3: "bg-cyan-400/10",
      grid: "bg-[radial-gradient(circle_at_top,rgba(56,189,248,.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,.10),transparent_22%),linear-gradient(to_right,rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,.08)_1px,transparent_1px)]",
    }
    : {
      root: "bg-[linear-gradient(135deg,#f8fafc_0%,#eff6ff_30%,#faf5ff_60%,#fff1f2_100%)] text-slate-800 selection:bg-indigo-200 selection:text-indigo-900",
      header: "border-indigo-100/50 bg-white/75 shadow-[0_1px_4px_rgba(99,102,241,.10)]",
      title: "text-slate-900",
      text: "text-slate-800",
      sub: "text-slate-600",
      muted: "text-slate-500",
      card: "border border-indigo-100/80 bg-white/95 shadow-[0_8px_32px_rgba(99,102,241,.10),0_2px_8px_rgba(0,0,0,.05)] backdrop-blur-md",
      card2: "border border-indigo-100/60 bg-white/90 shadow-[0_2px_12px_rgba(99,102,241,.06)] backdrop-blur-sm",
      soft: "bg-indigo-50/60",
      chip: "border border-indigo-200/80 bg-indigo-50 text-indigo-700",
      btnAlt: "border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50 shadow-sm",
      btnMain: "border border-indigo-400/30 bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-[0_4px_16px_rgba(99,102,241,.35)]",
      accent: "text-indigo-600",
      accentBg: "border border-indigo-200 bg-indigo-50 text-indigo-700",
      accent2: "border border-violet-200 bg-gradient-to-r from-violet-50 to-fuchsia-50 text-violet-700",
      ok: "border border-emerald-200 bg-emerald-50 text-emerald-700",
      border: "border-indigo-100",
      line: "from-indigo-400/50 via-violet-300/40",
      glow1: "bg-gradient-to-br from-fuchsia-200/50 to-pink-200/30",
      glow2: "bg-gradient-to-br from-indigo-200/60 to-sky-200/40",
      glow3: "bg-gradient-to-br from-violet-200/50 to-cyan-200/30",
      grid: "bg-[radial-gradient(circle_at_top,rgba(99,102,241,.12),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.10),transparent_26%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,.08),transparent_24%),linear-gradient(to_right,rgba(99,102,241,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,.06)_1px,transparent_1px)]",
    };

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300 relative",
        t.root
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full blur-3xl",
            t.glow1
          )}
        />
        <div
          className={cn(
            "absolute left-0 top-24 h-72 w-72 rounded-full blur-3xl",
            t.glow2
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl",
            t.glow3
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-[size:auto,auto,48px_48px,48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]",
            t.grid
          )}
        />
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur-xl",
          t.header
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div
              className={cn(
                "flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl shadow-lg",
                t.card2
              )}
            >
              <span className={cn("text-xs sm:text-sm font-semibold tracking-[.22em]", t.accent)}>
                MR
              </span>
            </div>
            <div>
              <p className={cn("text-sm font-medium", t.text)}>Mohit Rawat</p>
              <p className={cn("text-xs hidden sm:block", t.muted)}>Web Developer</p>
            </div>
          </motion.div>

          <nav className={cn("hidden items-center gap-8 text-sm md:flex", t.sub)}>
            {[
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={cn(
                  "relative transition hover:text-current after:absolute after:left-0 after:top-full after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full",
                  t.text
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Icon-only theme toggle on mobile, full on desktop */}
            <div className="md:hidden">
              <ThemeButton dark={dark} setDark={setDark} t={t} compact />
            </div>
            <div className="hidden md:block">
              <ThemeButton dark={dark} setDark={setDark} t={t} />
            </div>

            <a href="#contact" className="hidden sm:block">
              <Button
                className={cn(
                  "rounded-full shadow-lg transition hover:scale-[1.03] active:scale-[.98]",
                  t.btnMain
                )}
              >
                Hire Me
              </Button>
            </a>

            {/* Hamburger for mobile */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={cn("md:hidden rounded-xl p-2 transition", t.btnAlt)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={cn("md:hidden border-t overflow-hidden", t.border)}
          >
            <nav className="flex flex-col gap-1 px-4 py-3">
              {[
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition",
                    t.text,
                    dark ? "hover:bg-slate-800/60" : "hover:bg-indigo-50"
                  )}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 sm:hidden"
              >
                <Button
                  className={cn(
                    "w-full rounded-xl shadow-lg",
                    t.btnMain
                  )}
                >
                  Hire Me
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-14 md:pb-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:pb-24 lg:pt-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <Badge
                className={cn(
                  "rounded-full px-4 py-1.5 hover:opacity-90",
                  t.accent2
                )}
              >
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Production-ready Web Developer
              </Badge>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <p className={cn("max-w-xl text-sm uppercase tracking-[.3em]", t.muted)}>
                Next.js · React.js · Node.js · Express.js
              </p>
              <h1
                className={cn(
                  "max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl",
                  t.title
                )}
              >
                Building scalable web products with clean UI and real business
                impact.
              </h1>
              <p className={cn("max-w-3xl text-lg leading-8 md:text-xl", t.sub)}>
                I’m Mohit Rawat, a Web Developer with 3+ years of experience
                building production-ready applications across customer-facing
                platforms, admin panels, vendor systems, and CRM workflows with
                strong focus on performance, scalability, and responsive UI.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a href="#projects">
                <Button
                  className={cn(
                    "group rounded-full px-6 shadow-lg transition hover:scale-[1.03] active:scale-[.98]",
                    t.btnMain
                  )}
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="mailto:rawat009111@gmail.com">
                <Button
                  variant="outline"
                  className={cn(
                    "rounded-full px-6 border transition hover:scale-[1.03] active:scale-[.98]",
                    t.btnAlt
                  )}
                >
                  Email Me
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {[
                {
                  icon: Phone,
                  label: "+91-7015317899",
                  href: "tel:+917015317899",
                },
                {
                  icon: Mail,
                  label: "rawat009111@gmail.com",
                  href: "mailto:rawat009111@gmail.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/mohit-rawat-323133229",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm transition hover:-translate-y-1",
                    t.card
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.12 }}
            className="relative"
          >
            <div
              className={cn(
                "absolute inset-0 rounded-[2rem] bg-gradient-to-br blur-2xl",
                dark
                  ? "from-cyan-400/10 via-fuchsia-400/10 to-transparent"
                  : "from-sky-200/60 via-violet-200/40 to-transparent"
              )}
            />
            <Card
              className={cn(
                "relative overflow-hidden rounded-[2rem] backdrop-blur-xl",
                t.card
              )}
            >
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent",
                  t.accent
                )}
              />
              <CardContent className="p-6 md:p-8">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className={t.muted}>Currently working at</p>
                    <h3 className={cn("mt-1 text-2xl font-semibold", t.title)}>
                      Devsthan Expert Pvt. Ltd.
                    </h3>
                  </div>
                  <div className={cn("rounded-full px-3 py-1 text-xs", t.ok)}>
                    Open to opportunities
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        icon: Code2,
                        label: "Frontend",
                        value: "Next.js & React.js",
                        c: t.accent,
                      },
                      {
                        icon: Briefcase,
                        label: "Experience",
                        value: "3+ Years",
                        c: dark ? "text-fuchsia-300" : "text-violet-700",
                      },
                    ].map(({ icon: Icon, label, value, c }) => (
                      <motion.div
                        key={label}
                        whileHover={hoverFloat}
                        className={cn("rounded-2xl p-5 transition", t.card2)}
                      >
                        <Icon className={cn("mb-4 h-5 w-5", c)} />
                        <p className={t.muted}>{label}</p>
                        <p className={cn("mt-2 text-2xl font-semibold", t.title)}>
                          {value}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className={cn("rounded-3xl border p-6", t.soft, t.border)}>
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className={t.muted}>Core strengths</p>
                        <p className={cn("mt-1 text-lg font-medium", t.text)}>
                          Scalable products and responsive UI
                        </p>
                      </div>
                      <Globe className={cn("h-5 w-5", t.accent)} />
                    </div>

                    <div className="space-y-4">
                      {[
                        ["Responsive Design", "95%"],
                        ["REST API Integration", "92%"],
                        ["Web Performance", "90%"],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <div className={cn("mb-2 flex justify-between text-sm", t.sub)}>
                            <span>{label}</span>
                            <span>{value}</span>
                          </div>
                          <div
                            className={cn(
                              "h-2 rounded-full",
                              dark ? "bg-slate-800" : "bg-slate-200"
                            )}
                          >
                            <motion.div
                              initial={{ width: 0, opacity: 0.5 }}
                              whileInView={{ width: value }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, ease: "easeOut" }}
                              className={cn(
                                "h-2 rounded-full",
                                label.includes("REST")
                                  ? dark
                                    ? "bg-fuchsia-300"
                                    : "bg-violet-500"
                                  : label.includes("Performance")
                                    ? dark
                                      ? "bg-violet-300"
                                      : "bg-sky-500"
                                    : dark
                                      ? "bg-cyan-300"
                                      : "bg-cyan-500"
                              )}
                              style={{ width: value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map(([value, label]) => (
              <motion.div key={label} variants={fadeUp} whileHover={hoverFloat}>
                <Card className={cn("rounded-[1.75rem] transition", t.card)}>
                  <CardContent className="p-6">
                    <p className={cn("text-3xl font-semibold", t.title)}>{value}</p>
                    <p className={cn("mt-2 text-sm leading-6", t.muted)}>{label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]"
          >
            <motion.div variants={fadeUp} className={cn("rounded-[2rem] p-8", t.card)}>
              <Badge className={cn("mb-5 rounded-full px-4 py-2 hover:opacity-90", t.accentBg)}>
                <Rocket className="mr-2 h-3.5 w-3.5" />
                About Me
              </Badge>
              <h2 className={cn("text-3xl font-semibold tracking-tight md:text-4xl", t.title)}>
                Performance-driven development with practical product experience.
              </h2>
              <p className={cn("mt-6 text-lg leading-8", t.sub)}>
                I build scalable web applications with attention to clean UI,
                responsive design, maintainable architecture, and smooth user
                journeys. My experience spans public-facing websites, admin
                systems, vendor workflows, CRM modules, payments, and
                automation-driven communication flows.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Responsive UI", "Scalable Workflows", "Admin Panels", "REST APIs"].map(
                  (item) => (
                    <span
                      key={item}
                      className={cn("rounded-full px-4 py-2 text-sm", t.chip)}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={cn("rounded-[2rem] p-8", t.card2)}>
              <div className="mb-6 flex items-center gap-3">
                <div className={cn("rounded-2xl border p-3", t.soft, t.border)}>
                  <GraduationCap
                    className={cn("h-5 w-5", dark ? "text-fuchsia-300" : "text-violet-700")}
                  />
                </div>
                <div>
                  <p className={cn("text-sm uppercase tracking-[.2em]", t.muted)}>
                    Education
                  </p>
                  <h3 className={cn("text-2xl font-semibold", t.title)}>
                    Bachelor of Technology
                  </h3>
                </div>
              </div>

              <p className={cn("text-lg", t.text)}>Computer Science, M.D.U, Rohtak</p>
              <p className={cn("mt-2", t.muted)}>2018 – 2022</p>

              <div className="mt-8 grid gap-4">
                {[
                  {
                    icon: BadgeCheck,
                    title: "Production Ready",
                    desc: "Experience building live customer-facing applications and internal systems.",
                  },
                  {
                    icon: MapPin,
                    title: "Remote Experience",
                    desc: "Worked across distributed teams with designers and backend developers.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    whileHover={hoverFloat}
                    className={cn("rounded-2xl p-5 transition", t.card)}
                  >
                    <Icon
                      className={cn("mb-3 h-5 w-5", dark ? "text-fuchsia-300" : "text-violet-700")}
                    />
                    <p className={cn("font-medium", t.text)}>{title}</p>
                    <p className={cn("mt-2 text-sm leading-6", t.muted)}>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Professional journey."
            description="Building real-world platforms with frontend engineering, backend integration, and business-focused workflows."
            t={t}
          />

          <div className="relative">
            <div
              className={cn(
                "absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b to-transparent md:block",
                t.line
              )}
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-6"
            >
              {experience.map((item) => (
                <motion.div
                  key={item.role}
                  variants={fadeUp}
                  className="relative md:pl-14"
                >
                  <div
                    className={cn(
                      "absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full md:flex",
                      t.card2,
                      t.accent
                    )}
                  >
                    <Briefcase className="h-4 w-4" />
                  </div>

                  <motion.div whileHover={hoverFloat}>
                    <Card className={cn("rounded-[2rem] transition", t.card)}>
                      <CardContent className="p-6 md:p-8">
                        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className={cn("text-2xl font-semibold", t.title)}>
                              {item.role}
                            </h3>
                            <p className={cn("mt-1 text-base", t.accent)}>
                              {item.company} · {item.type}
                            </p>
                          </div>
                          <Badge className={cn("w-fit rounded-full px-4 py-2", t.accent2)}>
                            {item.period}
                          </Badge>
                        </div>

                        <div className="grid gap-3">
                          {item.points.map((point, i) => (
                            <motion.div
                              key={point}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.35, delay: i * 0.04 }}
                              className={cn(
                                "flex gap-3 rounded-2xl p-4 text-sm leading-7 transition",
                                t.card2
                              )}
                            >
                              <ChevronRight className={cn("mt-1 h-4 w-4 shrink-0", t.accent)} />
                              <span className={t.sub}>{point}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work and builds."
            description="Customer-facing products, internal dashboards, and personal builds designed with practical engineering and polished UI."
            t={t}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.title} variants={fadeUp} whileHover={hoverFloat}>
                <Card className={cn("group h-full rounded-[2rem] transition", t.card)}>
                  <CardContent className="flex h-full flex-col p-6">
                    <div
                      className={cn(
                        "relative mb-6 overflow-hidden rounded-[1.5rem] border p-4",
                        t.soft,
                        t.border
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 translate-y-full bg-gradient-to-t to-transparent transition duration-500 group-hover:translate-y-0",
                          dark ? "from-cyan-300/10" : "from-sky-300/15"
                        )}
                      />
                      <div
                        className={cn(
                          "relative flex aspect-[4/3] items-end overflow-hidden rounded-[1.2rem] transition-transform duration-500 group-hover:scale-[1.02]",
                          t.card2
                        )}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80" />
                        <div className="relative z-10 p-4">
                          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan-400">
                            Featured project
                          </p>
                          <p className="mt-1 text-lg font-semibold text-white">
                            {project.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className={cn("text-2xl font-semibold", t.title)}>
                      {project.title}
                    </h3>
                    <p className={cn("mt-3 flex-1 leading-7", t.muted)}>
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} className={cn("rounded-full px-3 py-1.5", t.chip)}>
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className={cn(
                        "mt-6 inline-flex items-center gap-2 text-sm font-medium transition group-hover:gap-3",
                        t.accent
                      )}
                    >
                      Explore details
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            {sideProjects.map((project) => (
              <motion.div key={project.title} variants={fadeUp} whileHover={hoverFloat}>
                <Card className={cn("rounded-[2rem] transition", t.card2)}>
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className={cn("text-xl font-semibold", t.title)}>
                        {project.title}
                      </h3>
                      <Badge className={cn("rounded-full px-3 py-1.5", t.accentBg)}>
                        {project.subtitle}
                      </Badge>
                    </div>
                    <p className={cn("leading-7", t.muted)}>{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="Tech stack and capabilities."
            description="A balanced toolkit across frontend, backend, cloud, integrations, and delivery workflows."
            t={t}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 lg:grid-cols-4"
          >
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <motion.div key={group.title} variants={fadeUp} whileHover={hoverFloat}>
                  <Card className={cn("h-full rounded-[2rem] transition", t.card)}>
                    <CardContent className="p-6">
                      <div className="mb-5 flex items-center gap-3">
                        <div className={cn("rounded-2xl p-3", t.card2)}>
                          <Icon className={cn("h-5 w-5", t.accent)} />
                        </div>
                        <h3 className={cn("text-xl font-semibold", t.title)}>
                          {group.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item} className={cn("rounded-full px-3 py-1.5", t.chip)}>
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={cn("rounded-[2rem] p-8 md:p-10", t.card)}
          >
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p
                  className={cn(
                    "mb-3 text-xs font-medium uppercase tracking-[.35em]",
                    t.muted
                  )}
                >
                  Contact
                </p>
                <h2 className={cn("text-3xl font-semibold tracking-tight md:text-5xl", t.title)}>
                  Let’s build something impactful.
                </h2>
              </div>
              <p className={cn("max-w-xl text-base leading-7", t.muted)}>
                Available for web development roles, freelance projects, and
                product-focused frontend work.
              </p>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  whileHover={hoverFloat}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={cn("group rounded-[1.5rem] p-6 transition", t.card2)}
                >
                  <Icon
                    className={cn(
                      "mb-4 h-5 w-5 transition group-hover:scale-110",
                      t.accent
                    )}
                  />
                  <p className={t.muted}>{label}</p>
                  <p className={cn("mt-2 break-all text-lg font-medium", t.text)}>
                    {value}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className={cn("border-t py-8", t.border)}>
        <div
          className={cn(
            "mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between lg:px-8",
            t.muted
          )}
        >
          <p>© 2026 Mohit Rawat. Built with Next.js and Tailwind CSS.</p>
          <p>Next.js · React.js · Node.js · Express.js</p>
        </div>
      </footer>
    </div>
  );
}