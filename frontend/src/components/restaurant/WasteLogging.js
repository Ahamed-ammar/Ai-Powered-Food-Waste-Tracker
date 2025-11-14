import React, { useState } from 'react';
import axios from 'axios';

function WasteLogging({ user, orders }) {
  const [formData, setFormData] = useState({
    orderId: '',
    dishName: '',
    wasteQuantity: '',
    estimatedCost: '',
    mealType: 'lunch'
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const activeOrders = orders.filter(order => order.status === 'active');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/restaurant/waste',
        { ...formData, userId: user.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setSuccess('Waste logged successfully!');
      setFormData({
        orderId: '',
        dishName: '',
        wasteQuantity: '',
        estimatedCost: '',
        mealType: 'lunch'
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to log waste');
    }
  };

  return (
    <div className="card">
      <h2>Log Food Waste</h2>
      
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-warning">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Select Order</label>
          <select
            value={formData.orderId}
            onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
            required
          >
            <option value="">Choose an order...</option>
            {activeOrders.map(order => (
              <option key={order.orderId} value={order.orderId}>
                {order.orderId} - Table {order.tableNo}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Dish Name</label>
          <input
            type="text"
            value={formData.dishName}
            onChange={(e) => setFormData({ ...formData, dishName: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label>Waste Quantity (grams)</label>
          <input
            type="number"
            value={formData.wasteQuantity}
            onChange={(e) => setFormData({ ...formData, wasteQuantity: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label>Estimated Cost (₹)</label>
          <input
            type="number"
            value={formData.estimatedCost}
            onChange={(e) => setFormData({ ...formData, estimatedCost: e.target.value })}
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
            <option value="snacks">Snacks</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Log Waste
        </button>
      </form>
    </div>
  );
}

export default WasteLogging;
