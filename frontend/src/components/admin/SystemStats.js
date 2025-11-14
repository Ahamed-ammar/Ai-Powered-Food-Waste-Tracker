import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SystemStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/admin/stats', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="card">Loading statistics...</div>;
  if (!stats) return <div className="card">No data available</div>;

  const userTypeData = {
    labels: ['Restaurant Users', 'Hostel Users'],
    datasets: [{
      data: [stats.users.restaurant, stats.users.hostel],
      backgroundColor: ['#10b981', '#3b82f6']
    }]
  };

  const wasteData = {
    labels: ['Restaurant Waste (g)', 'Hostel Waste (kg)'],
    datasets: [{
      label: 'Total Waste',
      data: [stats.restaurant.totalWaste, stats.hostel.totalWaste],
      backgroundColor: ['#ef4444', '#f59e0b']
    }]
  };

  return (
    <div>
      <div className="grid grid-3">
        <div className="stat-card">
          <h3>Total Users</h3>
          <div className="value">{stats.users.total}</div>
        </div>
        <div className="stat-card">
          <h3>Restaurant Orders</h3>
          <div className="value">{stats.restaurant.orders}</div>
        </div>
        <div className="stat-card">
          <h3>Hostel Logs</h3>
          <div className="value">{stats.hostel.logs}</div>
        </div>
      </div>

      <div className="grid grid-3">
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}>
          <h3>Restaurant Waste</h3>
          <div className="value">{stats.restaurant.totalWaste.toFixed(0)}g</div>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
          <h3>Hostel Waste</h3>
          <div className="value">{stats.hostel.totalWaste.toFixed(2)}kg</div>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }}>
          <h3>Cost Loss</h3>
          <div className="value">₹{stats.restaurant.totalCost}</div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>User Distribution</h3>
          <Pie data={userTypeData} />
        </div>
        <div className="card">
          <h3>Total Waste Comparison</h3>
          <Bar data={wasteData} />
        </div>
      </div>

      <div className="card">
        <h3>System Overview</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Total Waste Logs:</span>
            <span className="stat-value">{stats.restaurant.wasteLogs}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">AI Predictions:</span>
            <span className="stat-value">{stats.predictions}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Restaurant Users:</span>
            <span className="stat-value">{stats.users.restaurant}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Hostel Users:</span>
            <span className="stat-value">{stats.users.hostel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemStats;
