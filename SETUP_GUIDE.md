# Setup Guide - AI-Powered Food Waste Tracker

**Team:** DreamStack  
**Team Leader:** Rajadurai R  
**Email:** kit27.csbs45@gmail.com

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn
- For mobile: React Native CLI, Android Studio / Xcode

## Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/food_waste_tracker
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

5. Start MongoDB:
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

6. Run the backend server:
```bash
npm run dev
```

Backend will run on http://localhost:5000

## Frontend (Web) Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will run on http://localhost:3000

## Mobile App Setup

### Android

1. Navigate to mobile directory:
```bash
cd mobile
```

2. Install dependencies:
```bash
npm install
```

3. Start Metro bundler:
```bash
npm start
```

4. In a new terminal, run Android app:
```bash
npx react-native run-android
```

### iOS (macOS only)

1. Install CocoaPods dependencies:
```bash
cd ios
pod install
cd ..
```

2. Run iOS app:
```bash
npx react-native run-ios
```

## API Configuration

Update API base URL in mobile app if testing on physical device:

In mobile app files, replace:
```javascript
http://localhost:5000
```

With your computer's IP address:
```javascript
http://192.168.x.x:5000
```

## Default Test Accounts

After starting the backend, you can register new accounts or use these test credentials:

**Restaurant Admin:**
- Email: admin@restaurant.com
- Password: admin123
- Role: Admin
- Type: Restaurant

**Hostel Manager:**
- Email: manager@hostel.com
- Password: manager123
- Role: Mess Incharge
- Type: Hostel

## Features Overview

### Restaurant Module
- Create orders with table numbers
- Log food waste per order
- View daily waste analytics
- Dish-wise waste charts
- Cost tracking

### Hostel Module
- Log daily food quantities (cooked, served, wasted)
- Track student attendance
- AI predictions for next-day requirements
- Meal-wise analytics
- Waste percentage tracking

### AI Predictions
- Historical data analysis
- Day-of-week patterns
- Attendance-based forecasting
- Waste reduction recommendations
- Accuracy tracking

## Troubleshooting

### Backend Issues

**MongoDB connection error:**
- Ensure MongoDB is running
- Check MONGODB_URI in .env file
- Verify MongoDB port (default: 27017)

**Port already in use:**
- Change PORT in .env file
- Kill process using port: `npx kill-port 5000`

### Frontend Issues

**CORS errors:**
- Ensure backend is running
- Check API URL in axios calls
- Verify CORS is enabled in backend

### Mobile Issues

**Metro bundler error:**
- Clear cache: `npx react-native start --reset-cache`
- Delete node_modules and reinstall

**Android build error:**
- Clean build: `cd android && ./gradlew clean`
- Check Android SDK installation

## Production Deployment

### Backend
- Use environment variables for sensitive data
- Enable HTTPS
- Set up proper MongoDB authentication
- Use PM2 or similar for process management

### Frontend
- Build production bundle: `npm run build`
- Deploy to hosting service (Vercel, Netlify, etc.)
- Update API URLs to production backend

### Mobile
- Generate signed APK/IPA
- Submit to Play Store / App Store
- Configure production API endpoints

## Support

For issues or questions:
- Email: kit27.csbs45@gmail.com
- Team: DreamStack
- Leader: Rajadurai R
