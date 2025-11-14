import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecentActivity() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/admin/activity', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActivity(response.data);
    } catch (error) {
      console.error('Error fetching activity:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="card">Loading activity...</div>;
  if (!activity) return <div className="card">No activity data</div>;

  return (
    <div>
      <div className="card">
        <h3>Recent Restaurant Orders</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Table</th>
              <th>Dishes</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activity.recentOrders.map(order => (
              <tr key={order._id}>
                <td>{order.orderId}</td>
                <td>{order.userId?.name || 'N/A'}</td>
                <td>{order.tableNo}</td>
                <td>{order.dishes.length}</td>
                <td>
                  <span className={`badge badge-${order.status}`}>
                    {order.status}
                  </span>
                </td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Recent Waste Logs</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Waste ID</th>
              <th>User</th>
              <th>Dish</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activity.recentWaste.map(waste => (
              <tr key={waste._id}>
                <td>{waste.wasteId}</td>
                <td>{waste.userId?.name || 'N/A'}</td>
                <td>{waste.dishName}</td>
                <td>{waste.wasteQuantity}g</td>
                <td>₹{waste.estimatedCost}</td>
                <td>{new Date(waste.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Recent Hostel Logs</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Log ID</th>
              <th>User</th>
              <th>Meal</th>
              <th>Cooked</th>
              <th>Served</th>
              <th>Wasted</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activity.recentHostelLogs.map(log => (
              <tr key={log._id}>
                <td>{log.logId}</td>
                <td>{log.userId?.name || 'N/A'}</td>
                <td>{log.mealType}</td>
                <td>{log.cooked}kg</td>
                <td>{log.served}kg</td>
                <td>{log.wasted}kg</td>
                <td>{new Date(log.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentActivity;
