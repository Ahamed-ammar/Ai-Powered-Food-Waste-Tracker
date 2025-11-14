const mongoose = require('mongoose');

const restaurantWasteSchema = new mongoose.Schema({
  wasteId: { type: String, required: true, unique: true },
  orderId: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dishName: { type: String, required: true },
  wasteQuantity: { type: Number, required: true },
  unit: { type: String, default: 'grams' },
  estimatedCost: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  mealType: { 
    type: String, 
    enum: ['breakfast', 'lunch', 'dinner', 'snacks']
  }
});

module.exports = mongoose.model('RestaurantWaste', restaurantWasteSchema);
