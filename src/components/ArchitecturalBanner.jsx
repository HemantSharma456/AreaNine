// =============================================
// ArchitecturalBanner Component
// Editorial visual bridge between website sections
// Features hero.jpg with architectural quote & atmosphere
// =============================================

import React from "react";
import heroImg from "../assets/images/hero.jpg";
import "./ArchitecturalBanner.css";

const ArchitecturalBanner = () => {
  return (
    <aside className="arch-banner" aria-label="Architectural Philosophy Statement">
      {/* Background Media with Atmospheric Vignette */}
      <div className="arch-banner__media" aria-hidden="true">
        <img
          src={heroImg}
          alt="AreaNine Architectural Space"
          className="arch-banner__img"
        />
        <div className="arch-banner__gradient" />
        <div className="arch-banner__vignette" />
      </div>

      {/* Editorial Content */}
      <div className="container arch-banner__container">
        <div className="arch-banner__content">
          <div className="arch-banner__tag">
            <span className="arch-banner__line" />
            <span className="label-text">Spatial Philosophy</span>
            <span className="arch-banner__line" />
          </div>

          <blockquote className="arch-banner__quote display-text">
            "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
          </blockquote>

          <div className="arch-banner__meta">
            <span className="arch-banner__cite">Le Corbusier</span>
            <span className="arch-banner__separator">/</span>
            <span className="arch-banner__studio">AreaNine Practice Monograph · Panipat, Haryana</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ArchitecturalBanner;
