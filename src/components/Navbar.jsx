// =============================================
// Navbar Component — Refined Architectural Navigation
// =============================================

import React, { useState, useEffect } from "react";
import { useNavScroll, useLockBodyScroll } from "../hooks/useHooks";
import { siteConfig } from "../data/siteData";
import LogoMark from "./LogoMark";
import "./Navbar.css";

const Navbar = ({ activeSection, onNavigate, theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useNavScroll(40);

  // Lock body scroll when mobile menu is open
  useLockBodyScroll(menuOpen);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav 
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${menuOpen ? "navbar--open" : ""}`}
      aria-label="Main Navigation"
    >
      <div className="navbar__inner">

        {/* Logo */}
        <button 
          className="navbar__logo" 
          onClick={() => handleNav("home")}
          aria-label="AreaNine Home"
        >
          <LogoMark size={34} showCircle={true} />
          <span className="navbar__logo-name">AreaNine</span>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="navbar__links" role="menubar">
          {navLinks.map((link) => (
            <li key={link.id} role="none">
              <button
                role="menuitem"
                className={`navbar__link ${activeSection === link.id ? "navbar__link--active" : ""}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="navbar__controls">
          <button
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button 
            className="navbar__cta" 
            onClick={() => handleNav("contact")}
          >
            Enquire
          </button>

          <button
            className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Editorial Menu */}
      <div 
        className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="navbar__mobile-inner">
          <div className="navbar__mobile-header">
            <div className="navbar__mobile-logo">
              <LogoMark size={48} showCircle={true} />
              <span className="navbar__mobile-brand-title">AreaNine</span>
            </div>
            <span className="label-text">Navigation</span>
          </div>

          <ul className="navbar__mobile-nav">
            {navLinks.map((link, i) => (
              <li key={link.id} style={{ transitionDelay: `${i * 0.05}s` }}>
                <button
                  className={`navbar__mobile-link ${activeSection === link.id ? "active" : ""}`}
                  onClick={() => handleNav(link.id)}
                >
                  <span className="navbar__mobile-num">0{i + 1}</span>
                  <span className="navbar__mobile-label">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar__mobile-footer">
            <div className="navbar__mobile-contact">
              <span className="label-text">Direct Inquiries</span>
              <a href={`mailto:${siteConfig.email}`} className="navbar__mobile-email">{siteConfig.email}</a>
              <span className="navbar__mobile-location">{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

