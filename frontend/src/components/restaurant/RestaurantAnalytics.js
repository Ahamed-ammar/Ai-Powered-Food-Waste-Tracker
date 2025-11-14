import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function RestaurantAnalytics() {
  const [analytics, setAnalytics] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAnalytics();
  }, [date]);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `http://localhost:5000/api/analytics/restaurant/daily?date=${date}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAnalytics(response.data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="card">Loading analytics...</div>;
  if (!analytics) return <div className="card">No data available</div>;

  const dishNames = Object.keys(analytics.dishWise);
  const dishWasteData = dishNames.map(name => analytics.dishWise[name].quantity);
  const dishCostData = dishNames.map(name => analytics.dishWise[name].cost);

  const pieData = {
    labels: dishNames,
    datasets: [{
      data: dishWasteData,
      backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']
    }]
  };

  const barData = {
    labels: dishNames,
    datasets: [{
      label: 'Waste Cost (₹)',
      data: dishCostData,
      backgroundColor: '#10b981'
    }]
  };

  return (
    <div>
      <div className="card">
        <h2>Daily Waste Analytics</h2>
        <div className="input-group">
          <label>Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-3">
        <div className="stat-card">
          <h3>Total Waste</h3>
          <div className="value">{analytics.totalWaste}g</div>
        </div>
        <div className="stat-card">
          <h3>Cost Loss</h3>
          <div className="value">₹{analytics.totalCost}</div>
        </div>
        <div className="stat-card">
          <h3>Waste Entries</h3>
          <div className="value">{analytics.wasteCount}</div>
        </div>
      </div>

      {dishNames.length > 0 && (
        <div className="grid grid-2">
          <div className="card">
            <h3>Dish-wise Waste Distribution</h3>
            <Pie data={pieData} />
          </div>
          <div className="card">
            <h3>Cost Impact by Dish</h3>
            <Bar data={barData} />
          </div>
        </div>
      )}

      {analytics.totalWaste > 1000 && (
        <div className="alert alert-warning">
          ⚠️ High waste detected today! Consider reducing portion sizes or adjusting menu.
        </div>
      )}
    </div>
  );
}

export default RestaurantAnalytics;
