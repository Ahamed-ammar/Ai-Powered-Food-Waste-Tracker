# Quick Start Guide

## AI-Powered Food Waste Tracker - DreamStack

### 🚀 Get Started in 5 Minutes

## Step 1: Install Prerequisites

Make sure you have installed:
- Node.js (v16+): https://nodejs.org/
- MongoDB (v5+): https://www.mongodb.com/try/download/community
- Git: https://git-scm.com/

## Step 2: Setup Database

### **Option A: MongoDB Atlas (Cloud - Recommended)**

No installation needed! Just:

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Create free account
3. Create free cluster (M0)
4. Create database user (username: `dreamstack`, password: `dreamstack123`)
5. Allow IP access (0.0.0.0/0 for development)
6. Copy connection string
7. Use it in Step 3 below

**See detailed guide:** `MONGODB_ATLAS_SETUP.md`

### **Option B: Local MongoDB**

**Windows:**
```bash
net start MongoDB
```

**macOS/Linux:**
```bash
sudo systemctl start mongod
```

Or run MongoDB in a terminal:
```bash
mongod
```

## Step 3: Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
# For MongoDB Atlas (Cloud):
echo PORT=5000 > .env
echo MONGODB_URI=mongodb+srv://dreamstack:dreamstack123@cluster0.xxxxx.mongodb.net/food_waste_tracker?retryWrites=true^&w=majority >> .env
echo JWT_SECRET=dreamstack_secret_2024 >> .env
echo NODE_ENV=development >> .env

# OR for Local MongoDB:
# echo MONGODB_URI=mongodb://localhost:27017/food_waste_tracker >> .env

# Note: Replace cluster0.xxxxx.mongodb.net with your actual Atlas cluster URL

# Start backend server
npm run dev
```

Backend will run on: http://localhost:5000

## Step 4: Setup Frontend (Web)

Open a new terminal:

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

Frontend will open automatically at: http://localhost:3000

## Step 5: Test the Application

1. **Register a new account**:
   - Open http://localhost:3000
   - Click "Register"
   - Fill in your details
   - Choose organization type (Restaurant or Hostel)

2. **For Restaurant Testing**:
   - Select "Restaurant/Hotel" module
   - Create a new order
   - Log waste for the order
   - View analytics

3. **For Hostel Testing**:
   - Select "Hostel/Mess" module
   - Enter daily food log
   - Generate AI prediction
   - View analytics

## Mobile App Setup (Optional)

### Android

```bash
# Navigate to mobile
cd mobile

# Install dependencies
npm install

# Start Metro bundler
npm start

# In new terminal, run Android
npx react-native run-android
```

### iOS (macOS only)

```bash
cd mobile
npm install
cd ios && pod install && cd ..
npx react-native run-ios
```

## Test Data

### Sample Restaurant Order
- Table: 5
- Dish: Chicken Biryani
- Quantity: 500g

### Sample Waste Log
- Order ID: (use generated ID)
- Dish: Chicken Biryani
- Waste: 150g
- Cost: ₹50

### Sample Hostel Log
- Date: Today
- Meal: Lunch
- Cooked: 50 kg
- Served: 45 kg
- Wasted: 5 kg
- Attendance: 200

## Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify port 5000 is available
- Check .env file exists

### Frontend won't start
- Check if backend is running
- Verify port 3000 is available
- Clear npm cache: `npm cache clean --force`

### Mobile app issues
- Clear Metro cache: `npx react-native start --reset-cache`
- Rebuild: `cd android && ./gradlew clean`

## API Testing

Use these endpoints to test:

**Health Check:**
```bash
curl http://localhost:5000/
```

**Register:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123","role":"admin","organizationType":"restaurant"}'
```

## Next Steps

1. ✅ Explore all features
2. ✅ Create multiple orders/logs
3. ✅ Generate AI predictions
4. ✅ View analytics dashboards
5. ✅ Test on mobile devices

## Support

**Team:** DreamStack  
**Leader:** Rajadurai R  
**Email:** kit27.csbs45@gmail.com

## Documentation

- Full Setup: See `SETUP_GUIDE.md`
- API Docs: See `API_DOCUMENTATION.md`
- Features: See `FEATURES.md`
- Database: See `database/schema.md`

---

**Happy Tracking! 🌱**
