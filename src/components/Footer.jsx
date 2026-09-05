// =============================================
// Footer Component — Architectural Studio Monograph
// =============================================

import React from "react";
import { siteConfig } from "../data/siteData";
import LogoMark from "./LogoMark";
import "./Footer.css";

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand Identity */}
          <div className="footer__brand">
            <button 
              className="footer__logo" 
              onClick={() => onNavigate("home")}
              aria-label="AreaNine Home"
            >
              <LogoMark size={40} showCircle={true} />
              <span className="footer__logo-name">AreaNine</span>
            </button>
            <p className="footer__tagline display-text">
              Designing Spaces.<br />Defining Experiences.
            </p>
            <p className="footer__desc body-text">
              An international architecture practice shaping contemporary built environments with purpose, rigour, and enduring craft.
            </p>
          </div>

          {/* Studio Navigation */}
          <div className="footer__nav">
            <span className="label-text">Directory</span>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => onNavigate(link.id)}>{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Studio Contact */}
          <div className="footer__contact">
            <span className="label-text">Studio Inquiries</span>
            <div className="footer__contact-items">
              <a href={`mailto:${siteConfig.email}`} className="footer__contact-link">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="footer__contact-link">
                {siteConfig.phone}
              </a>
              <p className="footer__contact-address">{siteConfig.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} AreaNine Architecture Studio. All rights reserved.
          </p>

          <button 
            className="footer__top-btn" 
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

