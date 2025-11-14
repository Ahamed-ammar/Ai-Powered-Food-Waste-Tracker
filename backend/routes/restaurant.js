const express = require('express');
const router = express.Router();
const RestaurantOrder = require('../models/RestaurantOrder');
const RestaurantWaste = require('../models/RestaurantWaste');

// Create order
router.post('/orders', async (req, res) => {
  try {
    const { tableNo, dishes, userId } = req.body;
    const orderId = `ORD-${Date.now()}`;
    
    const order = new RestaurantOrder({
      orderId,
      userId,
      tableNo,
      dishes
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
});

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await RestaurantOrder.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

// Log waste
router.post('/waste', async (req, res) => {
  try {
    const { orderId, dishName, wasteQuantity, userId, estimatedCost, mealType } = req.body;
    const wasteId = `WASTE-${Date.now()}`;
    
    const waste = new RestaurantWaste({
      wasteId,
      orderId,
      userId,
      dishName,
      wasteQuantity,
      estimatedCost,
      mealType
    });

    await waste.save();
    
    // Update order status
    await RestaurantOrder.findOneAndUpdate(
      { orderId },
      { status: 'completed' }
    );

    res.status(201).json(waste);
  } catch (error) {
    res.status(500).json({ message: 'Error logging waste', error: error.message });
  }
});

// Get waste data
router.get('/waste', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    let query = {};
    
    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    
    const waste = await RestaurantWaste.find(query).sort({ date: -1 });
    res.json(waste);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching waste', error: error.message });
  }
});

module.exports = router;
