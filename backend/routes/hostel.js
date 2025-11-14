const express = require('express');
const router = express.Router();
const HostelLog = require('../models/HostelLog');

// Create hostel log
router.post('/logs', async (req, res) => {
  try {
    const { date, mealType, cooked, served, wasted, attendance, userId } = req.body;
    const logId = `LOG-${Date.now()}`;
    
    const logDate = new Date(date);
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][logDate.getDay()];
    
    const log = new HostelLog({
      logId,
      userId,
      date: logDate,
      mealType,
      cooked,
      served,
      wasted,
      attendance,
      dayOfWeek
    });

    await log.save();
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: 'Error creating log', error: error.message });
  }
});

// Get hostel logs
router.get('/logs', async (req, res) => {
  try {
    const { startDate, endDate, mealType } = req.query;
    let query = {};
    
    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    
    if (mealType) {
      query.mealType = mealType;
    }
    
    const logs = await HostelLog.find(query).sort({ date: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching logs', error: error.message });
  }
});

module.exports = router;
