import React from 'react';
import '../components/sections/Sections.css';

const Logo = ({ text = "Studio Ghibli" }) => {
  return (
    <div className="logo">
      <div className="logo-head"></div>
      <div className="logo-blades">
        <div className="logo-blade"></div>
        <div className="logo-blade"></div>
        <div className="logo-blade"></div>
        <div className="logo-blade"></div>
      </div>
      <div className="logo-text">{text}</div>
    </div>
  );
};

export default Logo; 