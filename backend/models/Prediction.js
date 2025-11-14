const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  predictionId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  mealType: { 
    type: String, 
    enum: ['breakfast', 'lunch', 'dinner']
  },
  predictedQuantity: { type: Number, required: true },
  actualQuantity: { type: Number },
  accuracyScore: { type: Number },
  factors: {
    dayOfWeek: String,
    avgAttendance: Number,
    historicalWaste: Number
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prediction', predictionSchema);
