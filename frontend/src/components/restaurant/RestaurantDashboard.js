import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import OrderEntry from './OrderEntry';
import WasteLogging from './WasteLogging';
import RestaurantAnalytics from './RestaurantAnalytics';
import './Restaurant.css';

function RestaurantDashboard({ user, onLogout }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/restaurant/orders', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h1>🍽️ Restaurant Module</h1>
        <div className="navbar-right">
          <button className="btn btn-secondary" onClick={() => navigate('/home')}>Back to Home</button>
          <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            📝 New Order
          </button>
          <button 
            className={`tab ${activeTab === 'waste' ? 'active' : ''}`}
            onClick={() => setActiveTab('waste')}
          >
            🗑️ Log Waste
          </button>
          <button 
            className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📊 Analytics
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'orders' && <OrderEntry user={user} onOrderCreated={fetchOrders} />}
          {activeTab === 'waste' && <WasteLogging user={user} orders={orders} />}
          {activeTab === 'analytics' && <RestaurantAnalytics />}
        </div>
      </div>
    </div>
  );
}

export default RestaurantDashboard;
