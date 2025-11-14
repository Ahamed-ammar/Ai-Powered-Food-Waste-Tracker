import React from 'react';
import './Splash.css';

function Splash() {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="logo-container">
          <div className="logo-icon">🌱</div>
          <h1 className="app-title">Food Waste Tracker</h1>
          <p className="team-name">DreamStack</p>
        </div>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}

export default Splash;
