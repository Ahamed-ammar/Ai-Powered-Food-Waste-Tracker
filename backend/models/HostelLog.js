const mongoose = require('mongoose');

const hostelLogSchema = new mongoose.Schema({
  logId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  mealType: { 
    type: String, 
    enum: ['breakfast', 'lunch', 'dinner'],
    required: true
  },
  cooked: { type: Number, required: true },
  served: { type: Number, required: true },
  wasted: { type: Number, required: true },
  unit: { type: String, default: 'kg' },
  attendance: { type: Number },
  dayOfWeek: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HostelLog', hostelLogSchema);
