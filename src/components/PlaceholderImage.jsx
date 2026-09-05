// =============================================
// PlaceholderImage Component — Architectural Rendering & Fallback
// =============================================

import React, { useState } from "react";

const PlaceholderImage = ({
  src,
  alt = "Architecture Visual",
  className = "",
  style = {},
  objectFit = "cover",
  aspectRatio,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Extract label
  const filename = src?.split("/").pop()?.replace(/\.\w+$/, "") || "Visual";
  const label = filename.replace(/-/g, " ").replace(/_/g, " ");

  // Seeded variation based on filename/label for architectural variety
  const hash = label.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variant = hash % 4;

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    aspectRatio: aspectRatio || undefined,
    backgroundColor: "var(--bg-secondary)",
    ...style,
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit,
    display: loaded && !error ? "block" : "none",
    opacity: loaded && !error ? 1 : 0,
    transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const placeholderStyle = {
    display: loaded && !error ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    minHeight: "160px",
    background: "radial-gradient(ellipse at center, rgba(30,30,30,0.95) 0%, rgba(12,12,12,1) 100%)",
    position: "absolute",
    inset: 0,
    padding: "1.5rem",
    boxSizing: "border-box",
  };

  return (
    <div className={`placeholder-img-wrapper ${className}`} style={containerStyle}>
      <img
        src={src}
        alt={alt}
        style={imgStyle}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />

      {/* Architectural blueprint / isometric wireframe fallback */}
      <div style={placeholderStyle} className="arch-blueprint">
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.35, marginBottom: "0.75rem" }}
        >
          {variant === 0 && (
            /* Isometric architectural pavilion wireframe */
            <g stroke="#e2e2e2" strokeWidth="0.75">
              <polygon points="50,15 85,32 50,50 15,32" />
              <polygon points="50,50 85,32 85,68 50,85" />
              <polygon points="50,50 15,32 15,68 50,85" />
              <line x1="50" y1="50" x2="50" y2="85" strokeDasharray="2 2" />
              <line x1="32" y1="24" x2="32" y2="60" strokeWidth="0.5" />
              <line x1="68" y1="24" x2="68" y2="60" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="1.5" fill="#e2e2e2" />
            </g>
          )}

          {variant === 1 && (
            /* Architectural facade elevation & cross-section grid */
            <g stroke="#e2e2e2" strokeWidth="0.75">
              <rect x="18" y="20" width="64" height="60" />
              <line x1="18" y1="40" x2="82" y2="40" />
              <line x1="18" y1="60" x2="82" y2="60" />
              <line x1="39" y1="20" x2="39" y2="80" />
              <line x1="60" y1="20" x2="60" y2="80" />
              <circle cx="50" cy="12" r="3" strokeWidth="0.5" />
              <line x1="10" y1="80" x2="90" y2="80" strokeWidth="1.2" />
            </g>
          )}

          {variant === 2 && (
            /* Cantilevered volumetric perspective */
            <g stroke="#e2e2e2" strokeWidth="0.75">
              <polygon points="20,25 70,18 80,45 30,52" />
              <polygon points="30,52 80,45 75,78 25,85" />
              <polygon points="25,85 20,25 30,52" />
              <line x1="45" y1="22" x2="45" y2="78" strokeDasharray="1.5 1.5" />
              <line x1="10" y1="88" x2="90" y2="88" strokeWidth="1" />
            </g>
          )}

          {variant === 3 && (
            /* Curvilinear spatial plan */
            <g stroke="#e2e2e2" strokeWidth="0.75">
              <rect x="15" y="15" width="70" height="70" />
              <circle cx="50" cy="50" r="28" strokeDasharray="3 2" />
              <circle cx="50" cy="50" r="14" />
              <line x1="15" y1="50" x2="85" y2="50" strokeWidth="0.4" />
              <line x1="50" y1="15" x2="50" y2="85" strokeWidth="0.4" />
            </g>
          )}
        </svg>

        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.62rem",
            fontWeight: "600",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(235, 235, 235, 0.65)",
            textAlign: "center",
          }}
        >
          {label}
        </span>

        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.12em",
            color: "rgba(180, 180, 180, 0.3)",
            textTransform: "uppercase",
            marginTop: "0.2rem",
          }}
        >
          Architectural Study · 1:100
        </span>
      </div>
    </div>
  );
};

export default PlaceholderImage;

