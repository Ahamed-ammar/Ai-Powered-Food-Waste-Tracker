const express = require('express');
const router = express.Router();
const RestaurantWaste = require('../models/RestaurantWaste');
const HostelLog = require('../models/HostelLog');

// Restaurant analytics
router.get('/restaurant/daily', async (req, res) => {
  try {
    const { date } = req.query;
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    const waste = await RestaurantWaste.find({
      date: { $gte: startDate, $lte: endDate }
    });

    const totalWaste = waste.reduce((sum, item) => sum + item.wasteQuantity, 0);
    const totalCost = waste.reduce((sum, item) => sum + item.estimatedCost, 0);
    
    const dishWise = waste.reduce((acc, item) => {
      if (!acc[item.dishName]) {
        acc[item.dishName] = { quantity: 0, cost: 0, count: 0 };
      }
      acc[item.dishName].quantity += item.wasteQuantity;
      acc[item.dishName].cost += item.estimatedCost;
      acc[item.dishName].count += 1;
      return acc;
    }, {});

    res.json({
      totalWaste,
      totalCost,
      dishWise,
      wasteCount: waste.length
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching analytics', error: error.message });
  }
});

// Hostel analytics
router.get('/hostel/summary', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    const logs = await HostelLog.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    });

    const totalCooked = logs.reduce((sum, log) => sum + log.cooked, 0);
    const totalServed = logs.reduce((sum, log) => sum + log.served, 0);
    const totalWasted = logs.reduce((sum, log) => sum + log.wasted, 0);
    
    const wastePercentage = totalCooked > 0 ? (totalWasted / totalCooked * 100).toFixed(2) : 0;
    
    const mealWise = logs.reduce((acc, log) => {
      if (!acc[log.mealType]) {
        acc[log.mealType] = { cooked: 0, served: 0, wasted: 0, count: 0 };
      }
      acc[log.mealType].cooked += log.cooked;
      acc[log.mealType].served += log.served;
      acc[log.mealType].wasted += log.wasted;
      acc[log.mealType].count += 1;
      return acc;
    }, {});

    res.json({
      totalCooked,
      totalServed,
      totalWasted,
      wastePercentage,
      mealWise,
      logCount: logs.length
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching analytics', error: error.message });
  }
});

module.exports = router;
