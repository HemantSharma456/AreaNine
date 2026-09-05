// =============================================
// Services Section — Disciplines & Practice Scope
// =============================================

import React from "react";
import { services } from "../data/siteData";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useHooks";
import "./Services.css";

// Service icons as inline architectural wireframes
const ServiceIcon = ({ number }) => {
  const icons = {
    "01": (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="8" width="36" height="32" />
        <line x1="6" y1="16" x2="42" y2="16" />
        <line x1="20" y1="8" x2="20" y2="40" />
        <line x1="13" y1="24" x2="13" y2="32" />
        <line x1="28" y1="24" x2="36" y2="24" />
        <line x1="28" y1="30" x2="36" y2="30" />
      </svg>
    ),
    "02": (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="8" y="8" width="32" height="32" />
        <rect x="14" y="14" width="8" height="10" />
        <rect x="26" y="14" width="8" height="6" />
        <rect x="26" y="24" width="8" height="10" />
        <rect x="14" y="28" width="8" height="6" />
      </svg>
    ),
    "03": (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="6" width="36" height="36" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <line x1="6" y1="30" x2="42" y2="30" />
        <line x1="18" y1="6" x2="18" y2="42" />
        <line x1="30" y1="6" x2="30" y2="42" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
    "04": (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="24,6 42,38 6,38" />
        <line x1="24" y1="6" x2="24" y2="38" />
        <line x1="15" y1="24" x2="33" y2="24" />
        <rect x="19" y="28" width="10" height="10" />
      </svg>
    ),
    "05": (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="24" r="18" />
        <line x1="24" y1="6" x2="24" y2="42" />
        <line x1="6" y1="24" x2="42" y2="24" />
        <ellipse cx="24" cy="24" rx="8" ry="18" />
      </svg>
    ),
    "06": (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="6" width="36" height="28" />
        <line x1="24" y1="34" x2="24" y2="42" />
        <line x1="14" y1="42" x2="34" y2="42" />
        <rect x="12" y="12" width="10" height="10" />
        <rect x="26" y="12" width="10" height="6" />
        <line x1="26" y1="22" x2="36" y2="22" />
      </svg>
    ),
  };

  return (
    <div className="service-card__icon" aria-hidden="true">
      {icons[number]}
    </div>
  );
};

// ---- Service Card ----
const ServiceCard = ({ service, index }) => {
  const ref = useScrollAnimation(0.08);

  return (
    <article
      ref={ref}
      className="service-card reveal"
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="service-card__top">
        <ServiceIcon number={service.number} />
        <span className="service-card__number">{service.number}</span>
      </div>

      <h3 className="service-card__title heading-text">{service.title}</h3>
      <p className="service-card__desc body-text">{service.description}</p>

      <div className="service-card__footer">
        <span className="service-card__arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </div>
    </article>
  );
};

// ---- Main Services Section ----
const Services = () => {
  return (
    <section className="services section" id="services" aria-label="Our Architecture and Design Services">
      <div className="container">
        <SectionHeader
          number="04"
          label="What We Do"
          title="Practice Disciplines"
          subtitle="From master planning to exhibition design, our practice spans the full breadth of spatial and environmental design."
        />

        {/* 6-Grid Services */}
        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom Editorial Callout Strip */}
        <div className="services__cta">
          <div className="services__cta-content">
            <span className="label-text">New Projects</span>
            <p className="display-text services__cta-text">
              Have a site or brief in mind?
            </p>
          </div>
          <button
            className="services__cta-btn"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Start a Conversation</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

