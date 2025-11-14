import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId, userName) => {
    if (!window.confirm(`Are you sure you want to delete user: ${userName}?`)) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('User deleted successfully');
      fetchUsers();
    } catch (error) {
      alert('Error deleting user');
    }
  };

  const handleChangeRole = async (userId, currentRole) => {
    const newRole = prompt('Enter new role (waiter, mess-incharge, admin, owner):', currentRole);
    if (!newRole || newRole === currentRole) return;

    const validRoles = ['waiter', 'mess-incharge', 'admin', 'owner'];
    if (!validRoles.includes(newRole)) {
      alert('Invalid role');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.patch(
        `http://localhost:5000/api/admin/users/${userId}/role`,
        { role: newRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Role updated successfully');
      fetchUsers();
    } catch (error) {
      alert('Error updating role');
    }
  };

  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    return user.organizationType === filter;
  });

  if (loading) return <div className="card">Loading users...</div>;

  return (
    <div>
      <div className="card">
        <div className="user-management-header">
          <h3>User Management ({filteredUsers.length} users)</h3>
          <div className="filter-buttons">
            <button 
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`btn ${filter === 'restaurant' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('restaurant')}
            >
              Restaurant
            </button>
            <button 
              className={`btn ${filter === 'hostel' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('hostel')}
            >
              Hostel
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Organization</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge badge-${user.role}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`badge badge-${user.organizationType}`}>
                    {user.organizationType}
                  </span>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <button 
                    className="btn-small btn-secondary"
                    onClick={() => handleChangeRole(user._id, user.role)}
                  >
                    Change Role
                  </button>
                  <button 
                    className="btn-small btn-danger"
                    onClick={() => handleDeleteUser(user._id, user.name)}
                    style={{ marginLeft: '8px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;