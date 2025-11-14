import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DailyInput from './DailyInput';
import Predictions from './Predictions';
import HostelAnalytics from './HostelAnalytics';
import './Hostel.css';

function HostelDashboard({ user, onLogout }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('input');

  return (
    <div>
      <nav className="navbar">
        <h1>🏠 Hostel / Mess Module</h1>
        <div className="navbar-right">
          <button className="btn btn-secondary" onClick={() => navigate('/home')}>Back to Home</button>
          <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'input' ? 'active' : ''}`}
            onClick={() => setActiveTab('input')}
          >
            📝 Daily Input
          </button>
          <button 
            className={`tab ${activeTab === 'predictions' ? 'active' : ''}`}
            onClick={() => setActiveTab('predictions')}
          >
            🤖 AI Predictions
          </button>
          <button 
            className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📊 Analytics
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'input' && <DailyInput user={user} />}
          {activeTab === 'predictions' && <Predictions user={user} />}
          {activeTab === 'analytics' && <HostelAnalytics />}
        </div>
      </div>
    </div>
  );
}

export default HostelDashboard;
