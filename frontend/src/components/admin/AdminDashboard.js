import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SystemStats from './SystemStats';
import UserManagement from './UserManagement';
import RecentActivity from './RecentActivity';
import DataExport from './DataExport';
import './Admin.css';

function AdminDashboard({ user, onLogout }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('stats');

  // Check if user is admin
  useEffect(() => {
    if (user.role !== 'admin') {
      alert('Access denied. Admin only.');
      navigate('/home');
    }
  }, [user, navigate]);

  return (
    <div>
      <nav className="navbar">
        <h1>🔐 Admin Panel</h1>
        <div className="navbar-right">
          <span>Admin: {user.name}</span>
          <button className="btn btn-secondary" onClick={() => navigate('/home')}>Back to Home</button>
          <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="admin-header">
          <h2>System Administration</h2>
          <p>Manage users, view analytics, and export data</p>
        </div>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            📊 Statistics
          </button>
          <button 
            className={`tab ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            👥 Users
          </button>
          <button 
            className={`tab ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            📋 Activity
          </button>
          <button 
            className={`tab ${activeTab === 'export' ? 'active' : ''}`}
            onClick={() => setActiveTab('export')}
          >
            💾 Export
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'stats' && <SystemStats />}
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'activity' && <RecentActivity />}
          {activeTab === 'export' && <DataExport />}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
