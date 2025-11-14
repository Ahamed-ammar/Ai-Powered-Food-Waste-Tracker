# AI-Powered Food Waste Tracker

**Team:** DreamStack  
**Team Leader:** Rajadurai R  
**Email:** kit27.csbs45@gmail.com

## Project Structure

```
├── backend/          # Node.js + Express API
├── frontend/         # React Web App
├── mobile/           # React Native Mobile App
└── database/         # Database schemas and migrations
```

## Quick Start

### 1. Setup Database (Choose One)

**Option A: MongoDB Atlas (Recommended - No Installation)**
- See `MONGODB_ATLAS_SETUP.md` for 5-minute setup
- Free tier, cloud-based, easy deployment

**Option B: Local MongoDB**
- Install MongoDB and run `mongod`

### 2. Backend
```bash
cd backend
npm install
# Create .env file with your MongoDB connection string
npm run dev
```

### 3. Frontend (Web)
```bash
cd frontend
npm install
npm start
```

### 4. Mobile (Optional)
```bash
cd mobile
npm install
npx react-native run-android  # or run-ios
```

**📖 Detailed Setup:** See `QUICKSTART.md` or `SETUP_GUIDE.md`

## Features
- Restaurant waste tracking with order-based logging
- Hostel mess waste tracking with quantity-based logging
- AI predictions for food requirements
- Analytics dashboard with charts
- Role-based access control
- **Admin Panel** with user management and data export
- System statistics and monitoring
- CSV/JSON data export

## Tech Stack
- Backend: Node.js, Express, MongoDB (Atlas Cloud or Local)
- Frontend: React, Chart.js, Responsive CSS
- Mobile: React Native
- AI: Custom prediction algorithm with historical data analysis
