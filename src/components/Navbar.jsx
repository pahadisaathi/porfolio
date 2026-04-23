"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig, navItems } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-[#06060a]/95 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        } ${mobileOpen || visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="group flex items-center gap-3 relative z-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] font-display text-[0.7rem] font-semibold tracking-[0.15em] text-white transition-transform duration-300 group-hover:scale-105">
              {siteConfig.monogram}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white">{siteConfig.name}</p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-dim)]">
                {siteConfig.tagline}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-[0.82rem] font-medium text-[var(--text-muted)] transition-colors duration-300 hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-5 py-2.5 text-[0.8rem] font-medium text-[var(--accent-light)] transition-all duration-300 hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] sm:inline-flex"
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] md:hidden"
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#06060a] md:hidden"
          >
            <div className="absolute top-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[var(--accent)]/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

            <div className="relative flex h-full flex-col overflow-y-auto px-8 py-24">
              <div className="absolute left-8 right-8 top-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] font-display text-[0.6rem] font-semibold text-white">
                    {siteConfig.monogram}
                  </div>
                  <span className="text-sm font-medium text-white">{siteConfig.name}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08]"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-4 flex flex-col gap-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    className="group flex items-center"
                  >
                    <span className="font-display text-4xl font-semibold tracking-tight text-white transition-colors group-hover:text-[var(--accent-light)]">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>
              <div className="mt-12 space-y-4">
                <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[var(--accent-light)]">
                  Connect
                </p>
                <div className="grid gap-3">
                  <a
                    href="tel:+917015317899"
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-5"
                  >
                    <span className="text-[0.65rem] uppercase tracking-widest text-white/40">
                      Phone
                    </span>
                    <span className="text-sm font-medium text-white">
                      +91-7015317899
                    </span>
                  </a>
                  <a
                    href="mailto:rawat009111@gmail.com"
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-5"
                  >
                    <span className="text-[0.65rem] uppercase tracking-widest text-white/40">
                      Email
                    </span>
                    <span className="text-sm font-medium text-white">
                      rawat009111@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-auto pt-10">
                <motion.a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--accent)] px-8 py-5 text-base font-bold text-white shadow-[0_20px_50px_rgba(124,58,237,0.3)]"
                >
                  Start a project
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
