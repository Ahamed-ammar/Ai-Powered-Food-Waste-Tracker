const express = require('express');
const router = express.Router();
const User = require('../models/User');
const RestaurantWaste = require('../models/RestaurantWaste');
const HostelLog = require('../models/HostelLog');
const RestaurantOrder = require('../models/RestaurantOrder');
const Prediction = require('../models/Prediction');

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// Get system statistics
router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalOrders = await RestaurantOrder.countDocuments();
    const totalWasteLogs = await RestaurantWaste.countDocuments();
    const totalHostelLogs = await HostelLog.countDocuments();
    const totalPredictions = await Prediction.countDocuments();

    const restaurantUsers = await User.countDocuments({ organizationType: 'restaurant' });
    const hostelUsers = await User.countDocuments({ organizationType: 'hostel' });

    const totalRestaurantWaste = await RestaurantWaste.aggregate([
      { $group: { _id: null, total: { $sum: '$wasteQuantity' }, cost: { $sum: '$estimatedCost' } } }
    ]);

    const totalHostelWaste = await HostelLog.aggregate([
      { $group: { _id: null, total: { $sum: '$wasted' } } }
    ]);

    res.json({
      users: {
        total: totalUsers,
        restaurant: restaurantUsers,
        hostel: hostelUsers
      },
      restaurant: {
        orders: totalOrders,
        wasteLogs: totalWasteLogs,
        totalWaste: totalRestaurantWaste[0]?.total || 0,
        totalCost: totalRestaurantWaste[0]?.cost || 0
      },
      hostel: {
        logs: totalHostelLogs,
        totalWaste: totalHostelWaste[0]?.total || 0
      },
      predictions: totalPredictions
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats', error: error.message });
  }
});

// Get recent activity
router.get('/activity', async (req, res) => {
  try {
    const recentOrders = await RestaurantOrder.find()
      .populate('userId', 'name email')
      .sort({ createdAt: -1 })
      .limit(10);

    const recentWaste = await RestaurantWaste.find()
      .populate('userId', 'name email')
      .sort({ date: -1 })
      .limit(10);

    const recentHostelLogs = await HostelLog.find()
      .populate('userId', 'name email')
      .sort({ date: -1 })
      .limit(10);

    res.json({
      recentOrders,
      recentWaste,
      recentHostelLogs
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activity', error: error.message });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
});

// Update user role
router.patch('/users/:id/role', async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
});

// Export data
router.get('/export/:type', async (req, res) => {
  try {
    const { type } = req.params;
    let data;

    switch (type) {
      case 'users':
        data = await User.find().select('-password');
        break;
      case 'restaurant-waste':
        data = await RestaurantWaste.find().populate('userId', 'name email');
        break;
      case 'hostel-logs':
        data = await HostelLog.find().populate('userId', 'name email');
        break;
      case 'predictions':
        data = await Prediction.find().populate('userId', 'name email');
        break;
      default:
        return res.status(400).json({ message: 'Invalid export type' });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error exporting data', error: error.message });
  }
});

module.exports = router;
