import React, { useState } from 'react';
import axios from 'axios';

function DailyInput({ user }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    mealType: 'lunch',
    cooked: '',
    served: '',
    wasted: '',
    attendance: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/hostel/logs',
        { ...formData, userId: user.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setSuccess('Daily log saved successfully!');
      setFormData({
        date: new Date().toISOString().split('T')[0],
        mealType: 'lunch',
        cooked: '',
        served: '',
        wasted: '',
        attendance: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save log');
    }
  };

  return (
    <div className="card">
      <h2>Daily Food Log</h2>
      
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-warning">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label>Meal Type</label>
          <select
            value={formData.mealType}
            onChange={(e) => setFormData({ ...formData, mealType: e.target.value })}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        <div className="input-group">
          <label>Food Cooked (kg)</label>
          <input
            type="number"
            step="0.1"
            value={formData.cooked}
            onChange={(e) => setFormData({ ...formData, cooked: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label>Food Served (kg)</label>
          <input
            type="number"
            step="0.1"
            value={formData.served}
            onChange={(e) => setFormData({ ...formData, served: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label>Food Wasted (kg)</label>
          <input
            type="number"
            step="0.1"
            value={formData.wasted}
            onChange={(e) => setFormData({ ...formData, wasted: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label>Student Attendance</label>
          <input
            type="number"
            value={formData.attendance}
            onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Log
        </button>
      </form>
    </div>
  );
}

export default DailyInput;
