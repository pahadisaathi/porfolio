"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Journey from "./Journey";
import ProjectShowcase from "./ProjectShowcase";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div
      id="top"
      className="relative min-h-screen bg-[var(--bg)] text-[var(--text)]"
    >
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <ProjectShowcase />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
