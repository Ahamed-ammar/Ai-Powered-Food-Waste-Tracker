const express = require('express');
const router = express.Router();
const HostelLog = require('../models/HostelLog');
const Prediction = require('../models/Prediction');

// AI Prediction for hostel
router.post('/hostel/predict', async (req, res) => {
  try {
    const { date, mealType, userId } = req.body;
    
    const targetDate = new Date(date);
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][targetDate.getDay()];
    
    // Get historical data for same meal type and day
    const historicalLogs = await HostelLog.find({
      mealType,
      dayOfWeek,
      date: { $lt: targetDate }
    }).sort({ date: -1 }).limit(10);

    if (historicalLogs.length === 0) {
      return res.json({
        predictedQuantity: 0,
        message: 'Insufficient historical data',
        recommendation: 'Start with standard quantity and log data'
      });
    }

    // Calculate averages
    const avgCooked = historicalLogs.reduce((sum, log) => sum + log.cooked, 0) / historicalLogs.length;
    const avgServed = historicalLogs.reduce((sum, log) => sum + log.served, 0) / historicalLogs.length;
    const avgWasted = historicalLogs.reduce((sum, log) => sum + log.wasted, 0) / historicalLogs.length;
    const avgAttendance = historicalLogs.reduce((sum, log) => sum + (log.attendance || 0), 0) / historicalLogs.length;
    
    // Prediction: served + (wasted * 0.5) - reduce waste by 50%
    const predictedQuantity = Math.round(avgServed + (avgWasted * 0.5));
    
    const wastePercentage = avgCooked > 0 ? (avgWasted / avgCooked * 100).toFixed(2) : 0;
    
    // Generate recommendations
    const recommendations = [];
    if (wastePercentage > 20) {
      recommendations.push(`High waste detected (${wastePercentage}%). Reduce cooking quantity.`);
    }
    if (avgWasted > 5) {
      recommendations.push(`Average waste is ${avgWasted.toFixed(2)} kg. Consider portion control.`);
    }
    if (historicalLogs.length < 5) {
      recommendations.push('Limited data available. Predictions will improve with more logs.');
    }

    // Save prediction
    const predictionId = `PRED-${Date.now()}`;
    const prediction = new Prediction({
      predictionId,
      userId,
      date: targetDate,
      mealType,
      predictedQuantity,
      factors: {
        dayOfWeek,
        avgAttendance,
        historicalWaste: avgWasted
      }
    });
    
    await prediction.save();

    res.json({
      predictedQuantity,
      avgCooked: avgCooked.toFixed(2),
      avgServed: avgServed.toFixed(2),
      avgWasted: avgWasted.toFixed(2),
      wastePercentage,
      dayOfWeek,
      recommendations,
      dataPoints: historicalLogs.length
    });
  } catch (error) {
    res.status(500).json({ message: 'Error generating prediction', error: error.message });
  }
});

// Get predictions
router.get('/hostel', async (req, res) => {
  try {
    const predictions = await Prediction.find().sort({ date: -1 }).limit(20);
    res.json(predictions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching predictions', error: error.message });
  }
});

module.exports = router;
