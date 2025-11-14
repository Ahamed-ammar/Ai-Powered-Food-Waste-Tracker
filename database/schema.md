# Database Schema Documentation

## Collections

### 1. users
Stores user authentication and profile information.

```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: 'waiter', 'mess-incharge', 'admin', 'owner'),
  organizationType: String (enum: 'restaurant', 'hostel'),
  organizationId: String,
  createdAt: Date
}
```

### 2. restaurantorders
Stores restaurant order information.

```javascript
{
  _id: ObjectId,
  orderId: String (unique),
  userId: ObjectId (ref: User),
  tableNo: String,
  dishes: [{
    dishName: String,
    quantityServed: Number,
    unit: String (default: 'grams')
  }],
  status: String (enum: 'active', 'completed'),
  createdAt: Date
}
```

### 3. restaurantwastes
Stores restaurant food waste logs.

```javascript
{
  _id: ObjectId,
  wasteId: String (unique),
  orderId: String,
  userId: ObjectId (ref: User),
  dishName: String,
  wasteQuantity: Number,
  unit: String (default: 'grams'),
  estimatedCost: Number,
  date: Date,
  mealType: String (enum: 'breakfast', 'lunch', 'dinner', 'snacks')
}
```

### 4. hostellogs
Stores hostel/mess daily food logs.

```javascript
{
  _id: ObjectId,
  logId: String (unique),
  userId: ObjectId (ref: User),
  date: Date,
  mealType: String (enum: 'breakfast', 'lunch', 'dinner'),
  cooked: Number (kg),
  served: Number (kg),
  wasted: Number (kg),
  unit: String (default: 'kg'),
  attendance: Number,
  dayOfWeek: String,
  createdAt: Date
}
```

### 5. predictions
Stores AI predictions for food requirements.

```javascript
{
  _id: ObjectId,
  predictionId: String (unique),
  userId: ObjectId (ref: User),
  date: Date,
  mealType: String (enum: 'breakfast', 'lunch', 'dinner'),
  predictedQuantity: Number,
  actualQuantity: Number,
  accuracyScore: Number,
  factors: {
    dayOfWeek: String,
    avgAttendance: Number,
    historicalWaste: Number
  },
  createdAt: Date
}
```

## Indexes

Recommended indexes for performance:

```javascript
// users
db.users.createIndex({ email: 1 }, { unique: true })

// restaurantorders
db.restaurantorders.createIndex({ orderId: 1 }, { unique: true })
db.restaurantorders.createIndex({ userId: 1 })
db.restaurantorders.createIndex({ createdAt: -1 })

// restaurantwastes
db.restaurantwastes.createIndex({ wasteId: 1 }, { unique: true })
db.restaurantwastes.createIndex({ orderId: 1 })
db.restaurantwastes.createIndex({ date: -1 })

// hostellogs
db.hostellogs.createIndex({ logId: 1 }, { unique: true })
db.hostellogs.createIndex({ date: -1 })
db.hostellogs.createIndex({ mealType: 1, dayOfWeek: 1 })

// predictions
db.predictions.createIndex({ predictionId: 1 }, { unique: true })
db.predictions.createIndex({ date: -1 })
```
