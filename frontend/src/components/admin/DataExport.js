import React, { useState } from 'react';
import axios from 'axios';

function DataExport() {
  const [loading, setLoading] = useState(false);

  const handleExport = async (type, filename) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/api/admin/export/${type}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Convert to JSON and download
      const dataStr = JSON.stringify(response.data, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert('Data exported successfully!');
    } catch (error) {
      alert('Error exporting data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = async (type, filename) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/api/admin/export/${type}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = response.data;
      if (!data || data.length === 0) {
        alert('No data to export');
        return;
      }

      // Convert to CSV
      const headers = Object.keys(data[0]).filter(key => key !== '__v' && key !== 'password');
      const csvContent = [
        headers.join(','),
        ...data.map(row => 
          headers.map(header => {
            const value = row[header];
            if (typeof value === 'object' && value !== null) {
              return JSON.stringify(value).replace(/,/g, ';');
            }
            return value;
          }).join(',')
        )
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert('CSV exported successfully!');
    } catch (error) {
      alert('Error exporting CSV');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card">
        <h3>Export Data</h3>
        <p>Download system data in JSON or CSV format</p>
      </div>

      <div className="grid grid-2">
        <div className="export-card">
          <div className="export-icon">👥</div>
          <h4>Users Data</h4>
          <p>Export all user accounts and profiles</p>
          <div className="export-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleExport('users', 'users')}
              disabled={loading}
            >
              Export JSON
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => exportToCSV('users', 'users')}
              disabled={loading}
            >
              Export CSV
            </button>
          </div>
        </div>

        <div className="export-card">
          <div className="export-icon">🗑️</div>
          <h4>Restaurant Waste</h4>
          <p>Export all restaurant waste logs</p>
          <div className="export-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleExport('restaurant-waste', 'restaurant_waste')}
              disabled={loading}
            >
              Export JSON
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => exportToCSV('restaurant-waste', 'restaurant_waste')}
              disabled={loading}
            >
              Export CSV
            </button>
          </div>
        </div>

        <div className="export-card">
          <div className="export-icon">🏠</div>
          <h4>Hostel Logs</h4>
          <p>Export all hostel daily logs</p>
          <div className="export-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleExport('hostel-logs', 'hostel_logs')}
              disabled={loading}
            >
              Export JSON
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => exportToCSV('hostel-logs', 'hostel_logs')}
              disabled={loading}
            >
              Export CSV
            </button>
          </div>
        </div>

        <div className="export-card">
          <div className="export-icon">🤖</div>
          <h4>AI Predictions</h4>
          <p>Export all prediction data</p>
          <div className="export-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleExport('predictions', 'predictions')}
              disabled={loading}
            >
              Export JSON
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => exportToCSV('predictions', 'predictions')}
              disabled={loading}
            >
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="alert alert-success">
          Exporting data... Please wait.
        </div>
      )}
    </div>
  );
}

export default DataExport;
