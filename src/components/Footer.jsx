"use client";

import { ArrowUp } from "lucide-react";
import { siteConfig, footer } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-8 px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-6">
          <p className="text-[0.8rem] text-[var(--text-dim)]">
            &copy; {currentYear} {siteConfig.name}
          </p>
          <div className="hidden h-3 w-px bg-white/[0.08] sm:block" />
          <div className="hidden sm:flex items-center gap-5">
            {footer.links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-1.5 text-[0.75rem] text-[var(--text-dim)] transition-colors duration-300 hover:text-white"
                  aria-label={link.label}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-[0.75rem] text-[var(--text-dim)] transition-colors hover:text-white"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}
