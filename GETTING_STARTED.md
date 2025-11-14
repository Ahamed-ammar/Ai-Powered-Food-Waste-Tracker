# Getting Started - Complete Guide

## 🎯 What You Need

### Required (Must Have)
1. ✅ **Node.js** (v16+) - https://nodejs.org/
2. ✅ **Database** - Choose ONE:
   - **MongoDB Atlas** (Cloud - Recommended) - Free, no installation
   - **MongoDB Local** - Requires installation

### Optional (For Mobile)
3. ⭐ **Android Studio** (for Android app)
4. ⭐ **Xcode** (for iOS app, macOS only)

---

## 🚀 Setup in 3 Steps

### **Step 1: Database Setup (5 minutes)**

#### **Option A: MongoDB Atlas (Recommended)**

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up (free)
3. Create cluster (FREE tier)
4. Create user: `dreamstack` / `dreamstack123`
5. Allow IP: `0.0.0.0/0`
6. Copy connection string

**Detailed guide:** `MONGODB_ATLAS_SETUP.md`

#### **Option B: Local MongoDB**

1. Download: https://www.mongodb.com/try/download/community
2. Install MongoDB
3. Run: `mongod`

---

### **Step 2: Backend Setup (2 minutes)**

```bash
# Open terminal in project folder
cd backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Edit .env file and add your MongoDB connection string:
# For Atlas: mongodb+srv://dreamstack:dreamstack123@cluster0.xxxxx.mongodb.net/food_waste_tracker
# For Local: mongodb://localhost:27017/food_waste_tracker

# Test connection (optional)
node test-connection.js

# Start backend
npm run dev
```

**Expected output:**
```
Server running on port 5000
MongoDB connected
```

---

### **Step 3: Frontend Setup (2 minutes)**

Open **new terminal**:

```bash
cd frontend

# Install dependencies
npm install

# Start web app
npm start
```

**Browser opens automatically at:** http://localhost:3000

---

## ✅ Verify Everything Works

1. **Backend Check:**
   - Terminal shows: "MongoDB connected"
   - Visit: http://localhost:5000
   - Should see: `{"message":"AI-Powered Food Waste Tracker API - DreamStack"}`

2. **Frontend Check:**
   - Browser opens to http://localhost:3000
   - See splash screen with 🌱 logo
   - See login/register page

3. **Test Registration:**
   - Click "Register"
   - Fill form:
     - Name: Test User
     - Email: test@example.com
     - Password: test123
     - Organization: Restaurant
     - Role: Admin
   - Click "Register"
   - Should redirect to home page

4. **Test Features:**
   - Select "Restaurant" or "Hostel" module
   - Create an order/log
   - View analytics

---

## 📱 Mobile Setup (Optional)

### For Android:

```bash
cd mobile
npm install

# Start Metro
npm start

# In new terminal
npx react-native run-android
```

### For iOS (macOS only):

```bash
cd mobile
npm install
cd ios && pod install && cd ..
npx react-native run-ios
```

---

## 🔧 Troubleshooting

### Backend won't start?

**Check:**
- ✅ Node.js installed: `node --version`
- ✅ MongoDB running (if local) or Atlas connection string correct
- ✅ `.env` file exists in backend folder
- ✅ Port 5000 not in use

**Fix:**
```bash
cd backend
npm install
node test-connection.js  # Test database connection
```

### Frontend won't start?

**Check:**
- ✅ Backend is running
- ✅ Port 3000 not in use

**Fix:**
```bash
cd frontend
rm -rf node_modules
npm install
npm start
```

### Can't connect to database?

**For Atlas:**
- ✅ Check username/password in connection string
- ✅ Verify IP is whitelisted (0.0.0.0/0)
- ✅ Check internet connection

**For Local:**
- ✅ MongoDB is running: `mongod`
- ✅ Connection string: `mongodb://localhost:27017/food_waste_tracker`

---

## 📚 Documentation

- **Quick Start:** `QUICKSTART.md` - 5-minute setup
- **Full Setup:** `SETUP_GUIDE.md` - Detailed instructions
- **MongoDB Atlas:** `MONGODB_ATLAS_SETUP.md` - Cloud database setup
- **API Reference:** `API_DOCUMENTATION.md` - All endpoints
- **Features:** `FEATURES.md` - Complete feature list
- **Database:** `database/schema.md` - Database structure

---

## 🎓 Learning Path

### Day 1: Setup & Basics
1. ✅ Install Node.js
2. ✅ Setup MongoDB Atlas
3. ✅ Run backend & frontend
4. ✅ Create test account
5. ✅ Explore UI

### Day 2: Restaurant Module
1. ✅ Create orders
2. ✅ Log waste
3. ✅ View analytics
4. ✅ Understand charts

### Day 3: Hostel Module
1. ✅ Log daily data
2. ✅ Generate predictions
3. ✅ View recommendations
4. ✅ Analyze trends

### Day 4: Mobile App
1. ✅ Setup React Native
2. ✅ Run on device/emulator
3. ✅ Test all features

### Day 5: Customization
1. ✅ Modify UI
2. ✅ Add features
3. ✅ Deploy online

---

## 🆘 Need Help?

**Common Issues:**
- Database connection: See `MONGODB_ATLAS_SETUP.md`
- Installation problems: See `SETUP_GUIDE.md`
- API errors: See `API_DOCUMENTATION.md`

**Contact:**
- Team: DreamStack
- Leader: Rajadurai R
- Email: kit27.csbs45@gmail.com

---

## 🎉 You're Ready!

Once you see:
- ✅ Backend: "MongoDB connected"
- ✅ Frontend: Login page at http://localhost:3000
- ✅ Can register and login

**You're all set! Start tracking food waste! 🌱**
