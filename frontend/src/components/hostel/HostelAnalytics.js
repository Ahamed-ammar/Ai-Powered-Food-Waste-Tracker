import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function HostelAnalytics() {
  const [analytics, setAnalytics] = useState(null);
  const [startDate, setStartDate] = useState(new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAnalytics();
  }, [startDate, endDate]);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `http://localhost:5000/api/analytics/hostel/summary?startDate=${startDate}&endDate=${endDate}`,
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

  const mealTypes = Object.keys(analytics.mealWise);
  const mealWasteData = mealTypes.map(meal => analytics.mealWise[meal].wasted);
  const mealCookedData = mealTypes.map(meal => analytics.mealWise[meal].cooked);

  const barData = {
    labels: mealTypes,
    datasets: [
      {
        label: 'Cooked (kg)',
        data: mealCookedData,
        backgroundColor: '#10b981'
      },
      {
        label: 'Wasted (kg)',
        data: mealWasteData,
        backgroundColor: '#ef4444'
      }
    ]
  };

  return (
    <div>
      <div className="card">
        <h2>Hostel Analytics</h2>
        <div className="grid grid-2">
          <div className="input-group">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-3">
        <div className="stat-card">
          <h3>Total Cooked</h3>
          <div className="value">{analytics.totalCooked.toFixed(2)} kg</div>
        </div>
        <div className="stat-card">
          <h3>Total Wasted</h3>
          <div className="value">{analytics.totalWasted.toFixed(2)} kg</div>
        </div>
        <div className="stat-card">
          <h3>Waste %</h3>
          <div className="value">{analytics.wastePercentage}%</div>
        </div>
      </div>

      {mealTypes.length > 0 && (
        <div className="card">
          <h3>Meal-wise Analysis</h3>
          <Bar data={barData} />
        </div>
      )}

      {parseFloat(analytics.wastePercentage) > 15 && (
        <div className="alert alert-warning">
          ⚠️ Waste percentage is high ({analytics.wastePercentage}%). Consider using AI predictions to optimize cooking quantities.
        </div>
      )}
    </div>
  );
}

export default HostelAnalytics;
