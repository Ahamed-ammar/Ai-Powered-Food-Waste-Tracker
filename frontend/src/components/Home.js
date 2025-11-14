import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <h1>🌱 Food Waste Tracker</h1>
        <div className="navbar-right">
          <span>Welcome, {user.name}</span>
          <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div className="container home-container">
        <div className="welcome-section">
          <h2>Choose Your Module</h2>
          <p>Select the appropriate module for your organization</p>
        </div>

        <div className="module-grid">
          <div className="module-card" onClick={() => navigate('/restaurant')}>
            <div className="module-icon">🍽️</div>
            <h3>Restaurant / Hotel</h3>
            <p>Track order-based food waste, analyze dish performance, and get AI recommendations</p>
            <button className="btn btn-primary">Enter Module</button>
          </div>

          <div className="module-card" onClick={() => navigate('/hostel')}>
            <div className="module-icon">🏠</div>
            <h3>Hostel / Mess</h3>
            <p>Log daily food quantities, predict requirements, and reduce waste efficiently</p>
            <button className="btn btn-primary">Enter Module</button>
          </div>

          {user.role === 'admin' && (
            <div className="module-card admin-card" onClick={() => navigate('/admin')}>
              <div className="module-icon">🔐</div>
              <h3>Admin Panel</h3>
              <p>Manage users, view system analytics, export data, and monitor activity</p>
              <button className="btn btn-primary">Enter Admin</button>
            </div>
          )}
        </div>

        <div className="info-section">
          <div className="info-card">
            <h4>📊 Analytics Dashboard</h4>
            <p>View comprehensive waste analytics and trends</p>
          </div>
          <div className="info-card">
            <h4>🤖 AI Predictions</h4>
            <p>Get intelligent forecasts for food requirements</p>
          </div>
          <div className="info-card">
            <h4>💰 Cost Tracking</h4>
            <p>Monitor financial impact of food waste</p>
          </div>
        </div>

        <footer className="home-footer">
          <p>Team: DreamStack | Leader: Rajadurai R</p>
          <p>Contact: kit27.csbs45@gmail.com</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
