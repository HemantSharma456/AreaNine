// =============================================
// Contact Section — Inquiries & Collaboration
// =============================================

import React, { useState } from "react";
import PlaceholderImage from "../components/PlaceholderImage";
import SectionHeader from "../components/SectionHeader";
import { siteConfig } from "../data/siteData";
import { useScrollAnimation } from "../hooks/useHooks";
import "./Contact.css";

const Contact = () => {
  const formRef = useScrollAnimation(0.1);
  const infoRef = useScrollAnimation(0.1);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="contact section" id="contact" aria-label="Contact AreaNine Studio">
      {/* Subtle Background Layer */}
      <div className="contact__bg" aria-hidden="true">
        <PlaceholderImage
          src="/assets/images/contact-bg.jpg"
          alt="Contact Background Atmosphere"
          objectFit="cover"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
        <div className="contact__bg-overlay" />
      </div>

      <div className="container contact__inner">
        {/* Left: Studio Information */}
        <div className="contact__info" ref={infoRef}>
          <SectionHeader
            number="05"
            label="Inquiries"
            title={"Let's Shape\nSomething Enduring"}
            light
          />

          <div className="contact__details">
            {[
              {
                label: "Electronic Mail",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                label: "Direct Line",
                value: siteConfig.phone,
                href: `tel:${siteConfig.phone}`,
              },
              {
                label: "Studio Location",
                value: siteConfig.location,
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="contact__detail-item reveal">
                <span className="label-text">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="contact__detail-value">
                    {item.value}
                  </a>
                ) : (
                  <p className="contact__detail-value">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="contact__social">
            {["Instagram", "LinkedIn", "Dezeen", "ArchDaily"].map((platform) => (
              <a key={platform} href="#" className="contact__social-link" aria-label={`Follow us on ${platform}`}>
                <span>{platform}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Architectural Inquiry Form */}
        <div className="contact__form-wrap" ref={formRef}>
          {submitted ? (
            <div className="contact__success" role="status" aria-live="polite">
              <div className="contact__success-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="display-text">Message Received.</h3>
              <p className="body-text">
                Thank you for contacting AreaNine. Our studio partners will review your project requirements and respond promptly.
              </p>
              <button 
                className="contact__reset-btn"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", projectType: "", message: "" });
                }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate={false}>
              <div className="contact__form-grid">
                {/* Full Name */}
                <div className={`form-field ${focused === "name" || formData.name ? "form-field--active" : ""}`}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    autoComplete="name"
                  />
                  <div className="form-field__line" />
                </div>

                {/* Email Address */}
                <div className={`form-field ${focused === "email" || formData.email ? "form-field--active" : ""}`}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                    autoComplete="email"
                  />
                  <div className="form-field__line" />
                </div>

                {/* Project Typology */}
                <div className={`form-field form-field--full form-field--select ${focused === "projectType" || formData.projectType ? "form-field--active" : ""}`}>
                  <label htmlFor="projectType">Project Typology</label>
                  <select
                    name="projectType"
                    id="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    onFocus={() => setFocused("projectType")}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="" disabled hidden>Select project type</option>
                    <option value="residential">Residential Architecture</option>
                    <option value="commercial">Commercial / Office</option>
                    <option value="cultural">Cultural & Arts</option>
                    <option value="hospitality">Hospitality & Wellness</option>
                    <option value="masterplanning">Master Planning</option>
                    <option value="interior">Interior Architecture</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <div className="form-field__line" />
                </div>

                {/* Message */}
                <div className={`form-field form-field--full form-field--textarea ${focused === "message" || formData.message ? "form-field--active" : ""}`}>
                  <label htmlFor="message">Tell us about your project or brief *</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={4}
                  />
                  <div className="form-field__line" />
                </div>
              </div>

              <button type="submit" className="contact__submit">
                <span>Submit Inquiry</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

