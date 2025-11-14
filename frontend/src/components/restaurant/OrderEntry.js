import React, { useState } from 'react';
import axios from 'axios';

function OrderEntry({ user, onOrderCreated }) {
  const [formData, setFormData] = useState({
    tableNo: '',
    dishes: [{ dishName: '', quantityServed: '' }]
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const addDish = () => {
    setFormData({
      ...formData,
      dishes: [...formData.dishes, { dishName: '', quantityServed: '' }]
    });
  };

  const updateDish = (index, field, value) => {
    const newDishes = [...formData.dishes];
    newDishes[index][field] = value;
    setFormData({ ...formData, dishes: newDishes });
  };

  const removeDish = (index) => {
    const newDishes = formData.dishes.filter((_, i) => i !== index);
    setFormData({ ...formData, dishes: newDishes });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/restaurant/orders',
        { ...formData, userId: user.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setSuccess(`Order created successfully! Order ID: ${response.data.orderId}`);
      setFormData({ tableNo: '', dishes: [{ dishName: '', quantityServed: '' }] });
      onOrderCreated();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create order');
    }
  };

  return (
    <div className="card">
      <h2>Create New Order</h2>
      
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-warning">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Table Number</label>
          <input
            type="text"
            value={formData.tableNo}
            onChange={(e) => setFormData({ ...formData, tableNo: e.target.value })}
            required
          />
        </div>

        <h3>Dishes</h3>
        {formData.dishes.map((dish, index) => (
          <div key={index} className="dish-row">
            <div className="input-group">
              <label>Dish Name</label>
              <input
                type="text"
                value={dish.dishName}
                onChange={(e) => updateDish(index, 'dishName', e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Quantity (grams)</label>
              <input
                type="number"
                value={dish.quantityServed}
                onChange={(e) => updateDish(index, 'quantityServed', e.target.value)}
                required
              />
            </div>
            {formData.dishes.length > 1 && (
              <button type="button" className="btn btn-secondary" onClick={() => removeDish(index)}>
                Remove
              </button>
            )}
          </div>
        ))}

        <button type="button" className="btn btn-secondary" onClick={addDish}>
          + Add Dish
        </button>

        <button type="submit" className="btn btn-primary" style={{ marginLeft: '10px' }}>
          Create Order
        </button>
      </form>
    </div>
  );
}

export default OrderEntry;
