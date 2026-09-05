// =============================================
// ArchitecturalBanner Component
// Editorial visual bridge between website sections
// Clean split layout: unblocked team portrait + spatial philosophy
// =============================================

import React from "react";
import heroImg from "../assets/images/hero.jpg";
import "./ArchitecturalBanner.css";

const ArchitecturalBanner = () => {
  return (
    <section className="arch-banner" aria-label="Architectural Philosophy Statement">
      <div className="container arch-banner__container">
        <div className="arch-banner__grid">
          {/* Left Column: Spatial Philosophy Editorial */}
          <div className="arch-banner__editorial">
            <div className="arch-banner__tag">
              <span className="arch-banner__line" />
              <span className="label-text">Spatial Philosophy</span>
            </div>

            <blockquote className="arch-banner__quote display-text">
              "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
            </blockquote>

            <div className="arch-banner__meta">
              <span className="arch-banner__cite">Le Corbusier</span>
              <span className="arch-banner__separator">/</span>
              <span className="arch-banner__studio">AreaNine Practice Monograph</span>
            </div>

            <div className="arch-banner__note">
              <span className="arch-banner__location-dot" />
              <span>Studio Practice · Panipat, Haryana</span>
            </div>
          </div>

          {/* Right Column: Pristine, Uncluttered Team Photo */}
          <div className="arch-banner__frame">
            <div className="arch-banner__image-wrap">
              <img
                src={heroImg}
                alt="AreaNine Architecture Studio Team in Panipat, Haryana"
                className="arch-banner__img"
              />
              <div className="arch-banner__frame-badge">
                <span className="label-text">AreaNine Studio Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalBanner;
