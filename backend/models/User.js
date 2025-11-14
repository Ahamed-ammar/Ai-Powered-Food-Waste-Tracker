const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['waiter', 'mess-incharge', 'admin', 'owner'],
    default: 'waiter'
  },
  organizationType: {
    type: String,
    enum: ['restaurant', 'hostel'],
    required: true
  },
  organizationId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
