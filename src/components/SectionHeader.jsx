// =============================================
// SectionHeader — Reusable Architectural Section Header
// =============================================

import React from "react";
import { useScrollAnimation } from "../hooks/useHooks";
import "./SectionHeader.css";

const SectionHeader = ({ label, title, subtitle, align = "left", light = false, number }) => {
  const ref = useScrollAnimation(0.1);

  // Render title with line breaks if provided
  const renderTitle = () => {
    if (!title) return null;
    if (typeof title === "string" && title.includes("\n")) {
      return title.split("\n").map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx < title.split("\n").length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return title;
  };

  return (
    <header
      ref={ref}
      className={`section-header reveal section-header--${align} ${light ? "section-header--light" : ""}`}
    >
      <div className="section-header__meta">
        {number && <span className="section-header__num">{number}</span>}
        {label && <span className="label-text section-header__label">{label}</span>}
      </div>
      <h2 className="section-header__title display-text">{renderTitle()}</h2>
      {subtitle && <p className="section-header__subtitle body-text">{subtitle}</p>}
    </header>
  );
};

export default SectionHeader;

