// =============================================
// LogoMark Component — AreaNine Brand Identity
// =============================================

import React from "react";
import logo from "../assets/images/logo.png";
import "./LogoMark.css";

const LogoMark = ({ size = 36, className = "" }) => (
  <div 
    className={`logomark-badge ${className}`}
    style={{ 
      width: `${size}px`, 
      height: `${size}px`,
      minWidth: `${size}px`,
      minHeight: `${size}px`,
    }}
  >
    <img
      src={logo}
      alt="AreaNine Company Logo"
      className="logomark-img"
      width={size}
      height={size}
    />
  </div>
);

export default LogoMark;
