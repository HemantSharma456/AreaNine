// =============================================
// App.jsx — Main Application Component
// 
// Manages routing between sections (single-page),
// theme state, and active navigation tracking.
// =============================================

import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "./hooks/useHooks";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages/Sections
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import ArchitecturalBanner from "./components/ArchitecturalBanner";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import "./App.css";

// Section IDs in scroll order
const SECTIONS = ["home", "projects", "about", "gallery", "services", "contact"];

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  // ---- Track active section via IntersectionObserver ----
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // ---- Smooth scroll to section ----
  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="app" data-theme-active={theme}>
      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Projects */}
        <Projects />

        {/* Architectural Visual Interlude */}
        <ArchitecturalBanner />

        {/* 3. About */}
        <About />

        {/* 4. Gallery */}
        <Gallery />

        {/* 5. Services */}
        <Services />

        {/* 6. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
