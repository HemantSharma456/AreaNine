// =============================================
// Hero Section — Architectural Statement
// =============================================

import React, { useEffect, useState } from "react";
import PlaceholderImage from "../components/PlaceholderImage";
import hero from "../assets/images/hero4.jpg";
import "./Hero.css";

const Hero = ({ onNavigate }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: "12+", label: "Years Practice" },
    { value: "80+", label: "Completed Works" },
    { value: "18", label: "Design Awards" },
    { value: "12", label: "Global Regions" },
  ];

  return (
    <section className="hero" id="home" aria-label="Hero Section">
      {/* Background Media with Architectural Atmosphere */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src={hero}
          alt=""
          className="hero__bg-ambient"
          aria-hidden="true"
        />
        <img
          src={hero}
          alt="AreaNine Architecture Studio"
          className="hero__img"
        />
        <div className="hero__bg-gradient" />
        <div className="hero__bg-vignette" />
      </div>

      {/* Main Architectural Editorial Content */}
      <div className="container hero__container">
        <div className="hero__content">
          {/* Studio Meta Label */}
          <div className={`hero__label ${loaded ? "hero__label--visible" : ""}`}>
            <span className="label-text">Architecture Studio</span>
            <span className="hero__label-divider" />
            <span className="label-text">Est. 2012</span>
          </div>

          {/* Main Display Headline */}
          <h1 className={`hero__title display-text ${loaded ? "hero__title--visible" : ""}`}>
            Designing<br />
            <em>Spaces.</em><br />
            Defining<br />
            Experiences.
          </h1>

          {/* Editorial Philosophy Statement */}
          <p className={`hero__desc body-text ${loaded ? "hero__desc--visible" : ""}`}>
            AreaNine is a contemporary architecture studio building
            environments that resonate with purpose, precision, and poetry.
          </p>

          {/* Direct CTA Actions */}
          <div className={`hero__actions ${loaded ? "hero__actions--visible" : ""}`}>
            <button 
              className="hero__btn hero__btn--primary" 
              onClick={() => onNavigate("projects")}
            >
              View Projects
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button 
              className="hero__btn hero__btn--ghost" 
              onClick={() => onNavigate("about")}
            >
              <span>Our Story</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Metadata / Highlights Bar */}
      <div className={`hero__stats-bar ${loaded ? "hero__stats-bar--visible" : ""}`}>
        <div className="container hero__stats-container">
          <div className="hero__stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className={`hero__scroll ${loaded ? "hero__scroll--visible" : ""}`}
        onClick={() => onNavigate("projects")}
        role="button"
        tabIndex={0}
        aria-label="Scroll to Projects"
      >
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

