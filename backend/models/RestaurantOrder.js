const mongoose = require('mongoose');

const restaurantOrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tableNo: { type: String, required: true },
  dishes: [{
    dishName: String,
    quantityServed: Number,
    unit: { type: String, default: 'grams' }
  }],
  status: { 
    type: String, 
    enum: ['active', 'completed'],
    default: 'active'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RestaurantOrder', restaurantOrderSchema);
