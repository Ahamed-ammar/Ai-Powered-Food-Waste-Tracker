# Setup Checklist ✅

## Pre-Installation

- [ ] Computer with Windows/macOS/Linux
- [ ] Internet connection
- [ ] Text editor (VS Code recommended)

---

## Step 1: Install Node.js

- [ ] Go to https://nodejs.org/
- [ ] Download LTS version
- [ ] Install (click Next, Next, Finish)
- [ ] Verify: Open terminal, type `node --version`
- [ ] Should show: v16.x.x or higher

**Time: 5 minutes**

---

## Step 2: Setup MongoDB Atlas (Cloud Database)

- [ ] Go to https://www.mongodb.com/cloud/atlas/register
- [ ] Sign up with email/Google/GitHub
- [ ] Verify email
- [ ] Click "Build a Database"
- [ ] Choose "FREE" tier (M0 Sandbox)
- [ ] Select cloud provider (AWS recommended)
- [ ] Select region (closest to you)
- [ ] Click "Create Cluster"
- [ ] Wait 3-5 minutes for cluster creation
- [ ] Click "Database Access" → "Add New Database User"
- [ ] Username: `dreamstack`
- [ ] Password: `dreamstack123`
- [ ] Privileges: "Read and write to any database"
- [ ] Click "Add User"
- [ ] Click "Network Access" → "Add IP Address"
- [ ] Click "Allow Access from Anywhere"
- [ ] Click "Confirm"
- [ ] Click "Database" → "Connect" → "Connect your application"
- [ ] Copy connection string
- [ ] Replace `<password>` with `dreamstack123`
- [ ] Add `/food_waste_tracker` before the `?`

**Time: 5 minutes**

**Final connection string should look like:**
```
mongodb+srv://dreamstack:dreamstack123@cluster0.xxxxx.mongodb.net/food_waste_tracker?retryWrites=true&w=majority
```

---

## Step 3: Setup Backend

- [ ] Open terminal in project folder
- [ ] Run: `cd backend`
- [ ] Run: `npm install` (wait 1-2 minutes)
- [ ] Create `.env` file in backend folder
- [ ] Copy from `.env.example`
- [ ] Update `MONGODB_URI` with your Atlas connection string
- [ ] Save `.env` file
- [ ] Test connection: `node test-connection.js`
- [ ] Should see: "✅ SUCCESS! MongoDB connected"
- [ ] Run: `npm run dev`
- [ ] Should see: "Server running on port 5000" and "MongoDB connected"
- [ ] Keep this terminal open!

**Time: 3 minutes**

---

## Step 4: Setup Frontend

- [ ] Open NEW terminal
- [ ] Run: `cd frontend`
- [ ] Run: `npm install` (wait 1-2 minutes)
- [ ] Run: `npm start`
- [ ] Browser should open automatically
- [ ] Should see: http://localhost:3000
- [ ] Should see: Splash screen with 🌱 logo
- [ ] Should see: Login/Register page
- [ ] Keep this terminal open!

**Time: 3 minutes**

---

## Step 5: Test the Application

- [ ] Click "Register"
- [ ] Fill in:
  - Name: Test User
  - Email: test@example.com
  - Password: test123
  - Organization Type: Restaurant
  - Role: Admin
- [ ] Click "Register"
- [ ] Should redirect to Home page
- [ ] Should see: "Welcome, Test User"
- [ ] Should see: Two module cards (Restaurant & Hostel)

**Time: 1 minute**

---

## Step 6: Test Restaurant Module

- [ ] Click "Restaurant / Hotel" card
- [ ] Click "📝 New Order" tab
- [ ] Fill in:
  - Table Number: 5
  - Dish Name: Chicken Biryani
  - Quantity: 500
- [ ] Click "Create Order"
- [ ] Should see success message with Order ID
- [ ] Click "🗑️ Log Waste" tab
- [ ] Select the order you just created
- [ ] Fill in:
  - Dish Name: Chicken Biryani
  - Waste Quantity: 150
  - Estimated Cost: 50
- [ ] Click "Log Waste"
- [ ] Should see success message
- [ ] Click "📊 Analytics" tab
- [ ] Should see waste statistics and charts

**Time: 2 minutes**

---

## Step 7: Test Hostel Module

- [ ] Click "Back to Home"
- [ ] Click "Hostel / Mess" card
- [ ] Click "📝 Daily Input" tab
- [ ] Fill in:
  - Date: Today
  - Meal Type: Lunch
  - Food Cooked: 50
  - Food Served: 45
  - Food Wasted: 5
  - Student Attendance: 200
- [ ] Click "Save Log"
- [ ] Should see success message
- [ ] Click "🤖 AI Predictions" tab
- [ ] Select tomorrow's date
- [ ] Click "🤖 Generate Prediction"
- [ ] Should see predicted quantity and recommendations
- [ ] Click "📊 Analytics" tab
- [ ] Should see hostel statistics

**Time: 2 minutes**

---

## Optional: Mobile App Setup

### For Android:

- [ ] Install Android Studio
- [ ] Setup Android SDK
- [ ] Create Android Virtual Device (AVD)
- [ ] Open terminal: `cd mobile`
- [ ] Run: `npm install`
- [ ] Run: `npm start` (Metro bundler)
- [ ] Open new terminal: `npx react-native run-android`
- [ ] App should open on emulator/device

**Time: 30-60 minutes (one-time setup)**

### For iOS (macOS only):

- [ ] Install Xcode from App Store
- [ ] Install CocoaPods: `sudo gem install cocoapods`
- [ ] Open terminal: `cd mobile`
- [ ] Run: `npm install`
- [ ] Run: `cd ios && pod install && cd ..`
- [ ] Run: `npx react-native run-ios`
- [ ] App should open on simulator

**Time: 30-60 minutes (one-time setup)**

---

## Troubleshooting Checklist

### Backend Issues:

- [ ] Node.js installed? `node --version`
- [ ] In backend folder? `cd backend`
- [ ] Dependencies installed? `npm install`
- [ ] `.env` file exists?
- [ ] MongoDB Atlas connection string correct?
- [ ] Test connection: `node test-connection.js`

### Frontend Issues:

- [ ] Backend running? Check terminal 1
- [ ] In frontend folder? `cd frontend`
- [ ] Dependencies installed? `npm install`
- [ ] Port 3000 available?
- [ ] Try: `npm cache clean --force && npm install`

### Database Issues:

- [ ] MongoDB Atlas cluster created?
- [ ] Database user created?
- [ ] IP whitelisted (0.0.0.0/0)?
- [ ] Connection string has password?
- [ ] Connection string has database name?
- [ ] Internet connection working?

---

## Success Indicators

You know it's working when you see:

✅ **Backend Terminal:**
```
Server running on port 5000
MongoDB connected
```

✅ **Frontend Terminal:**
```
Compiled successfully!
webpack compiled with 0 warnings
```

✅ **Browser:**
- Opens to http://localhost:3000
- Shows login/register page
- Can create account and login
- Can access both modules

✅ **MongoDB Atlas Dashboard:**
- Collections appear after using app
- Can see data in "Browse Collections"

---

## Final Verification

- [ ] Backend running (Terminal 1)
- [ ] Frontend running (Terminal 2)
- [ ] Can register new user
- [ ] Can login
- [ ] Can create restaurant order
- [ ] Can log waste
- [ ] Can view analytics
- [ ] Can log hostel data
- [ ] Can generate predictions
- [ ] Charts display correctly

---

## 🎉 Congratulations!

If all checkboxes are checked, you have successfully:
- ✅ Installed all requirements
- ✅ Setup MongoDB Atlas cloud database
- ✅ Configured backend API
- ✅ Launched web application
- ✅ Tested all features

**Your AI-Powered Food Waste Tracker is ready! 🌱**

---

## Next Steps

1. [ ] Explore all features
2. [ ] Add more test data
3. [ ] Customize UI (optional)
4. [ ] Deploy to production (optional)
5. [ ] Setup mobile app (optional)

---

## 📚 Documentation Reference

- **Quick Start:** `QUICKSTART.md`
- **Full Setup:** `SETUP_GUIDE.md`
- **MongoDB Atlas:** `MONGODB_ATLAS_SETUP.md`
- **Getting Started:** `GETTING_STARTED.md`
- **Installation Summary:** `INSTALLATION_SUMMARY.md`

---

**Team:** DreamStack  
**Leader:** Rajadurai R  
**Email:** kit27.csbs45@gmail.com
