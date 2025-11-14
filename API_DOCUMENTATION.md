# API Documentation

Base URL: `http://localhost:5000/api`

## Authentication

### Register User
**POST** `/auth/register`

Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "waiter",
  "organizationType": "restaurant"
}
```

Response:
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "waiter",
    "organizationType": "restaurant"
  }
}
```

### Login
**POST** `/auth/login`

Request Body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response: Same as register

## Restaurant Module

### Create Order
**POST** `/restaurant/orders`

Headers: `Authorization: Bearer {token}`

Request Body:
```json
{
  "tableNo": "5",
  "dishes": [
    {
      "dishName": "Biryani",
      "quantityServed": 500
    }
  ],
  "userId": "user_id"
}
```

Response:
```json
{
  "orderId": "ORD-1234567890",
  "tableNo": "5",
  "dishes": [...],
  "status": "active",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### Get All Orders
**GET** `/restaurant/orders`

Headers: `Authorization: Bearer {token}`

Response: Array of orders

### Log Waste
**POST** `/restaurant/waste`

Headers: `Authorization: Bearer {token}`

Request Body:
```json
{
  "orderId": "ORD-1234567890",
  "dishName": "Biryani",
  "wasteQuantity": 150,
  "estimatedCost": 50,
  "mealType": "lunch",
  "userId": "user_id"
}
```

### Get Waste Data
**GET** `/restaurant/waste?startDate=2024-01-01&endDate=2024-01-31`

Headers: `Authorization: Bearer {token}`

Response: Array of waste logs

### Daily Analytics
**GET** `/analytics/restaurant/daily?date=2024-01-01`

Headers: `Authorization: Bearer {token}`

Response:
```json
{
  "totalWaste": 1500,
  "totalCost": 500,
  "wasteCount": 10,
  "dishWise": {
    "Biryani": {
      "quantity": 500,
      "cost": 200,
      "count": 3
    }
  }
}
```

## Hostel Module

### Create Log
**POST** `/hostel/logs`

Headers: `Authorization: Bearer {token}`

Request Body:
```json
{
  "date": "2024-01-01",
  "mealType": "lunch",
  "cooked": 50,
  "served": 45,
  "wasted": 5,
  "attendance": 200,
  "userId": "user_id"
}
```

### Get Logs
**GET** `/hostel/logs?startDate=2024-01-01&endDate=2024-01-31&mealType=lunch`

Headers: `Authorization: Bearer {token}`

Response: Array of logs

### Generate Prediction
**POST** `/predictions/hostel/predict`

Headers: `Authorization: Bearer {token}`

Request Body:
```json
{
  "date": "2024-01-02",
  "mealType": "lunch",
  "userId": "user_id"
}
```

Response:
```json
{
  "predictedQuantity": 48,
  "avgCooked": "50.00",
  "avgServed": "45.50",
  "avgWasted": "4.50",
  "wastePercentage": "9.00",
  "dayOfWeek": "Tuesday",
  "recommendations": [
    "Average waste is 4.50 kg. Consider portion control."
  ],
  "dataPoints": 10
}
```

### Get Predictions
**GET** `/predictions/hostel`

Headers: `Authorization: Bearer {token}`

Response: Array of predictions

### Hostel Analytics
**GET** `/analytics/hostel/summary?startDate=2024-01-01&endDate=2024-01-31`

Headers: `Authorization: Bearer {token}`

Response:
```json
{
  "totalCooked": 1500,
  "totalServed": 1350,
  "totalWasted": 150,
  "wastePercentage": "10.00",
  "mealWise": {
    "breakfast": {
      "cooked": 500,
      "served": 450,
      "wasted": 50,
      "count": 10
    }
  },
  "logCount": 30
}
```

## Error Responses

All endpoints may return error responses:

```json
{
  "message": "Error description",
  "error": "Detailed error message"
}
```

Common HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error
