# MongoDB Atlas Cloud Setup Guide

## Why Use MongoDB Atlas?

✅ **No Local Installation** - No need to install MongoDB on your computer  
✅ **Free Forever** - 512MB storage free tier  
✅ **Cloud Access** - Access from anywhere  
✅ **Automatic Backups** - Data safety  
✅ **Easy Deployment** - Perfect for production  

---

## 🚀 Step-by-Step Setup

### **Step 1: Create Account**

1. Visit: https://www.mongodb.com/cloud/atlas/register
2. Sign up with:
   - Email
   - Google account
   - GitHub account
3. Verify your email

### **Step 2: Create Free Cluster**

1. After login, click **"Build a Database"**
2. Choose **"Shared"** (FREE tier)
3. Select cloud provider:
   - **AWS** (recommended)
   - Google Cloud
   - Azure
4. Choose region closest to you:
   - For India: Mumbai (ap-south-1)
   - For US: N. Virginia (us-east-1)
   - For Europe: Ireland (eu-west-1)
5. Cluster Name: `Cluster0` (default is fine)
6. Click **"Create Cluster"**
7. Wait 3-5 minutes for cluster creation

### **Step 3: Create Database User**

1. Click **"Database Access"** in left sidebar
2. Click **"+ ADD NEW DATABASE USER"**
3. Authentication Method: **Password**
4. Enter credentials:
   ```
   Username: dreamstack
   Password: dreamstack123
   ```
   (Or use your own secure password)
5. Database User Privileges: **"Read and write to any database"**
6. Click **"Add User"**

### **Step 4: Configure Network Access**

1. Click **"Network Access"** in left sidebar
2. Click **"+ ADD IP ADDRESS"**
3. For development, choose one:
   
   **Option A: Allow from Anywhere (Easy)**
   - Click **"ALLOW ACCESS FROM ANYWHERE"**
   - IP: `0.0.0.0/0`
   - Click **"Confirm"**
   
   **Option B: Add Your Current IP (Secure)**
   - Click **"ADD CURRENT IP ADDRESS"**
   - Click **"Confirm"**

### **Step 5: Get Connection String**

1. Click **"Database"** in left sidebar
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Driver: **Node.js**
5. Version: **4.1 or later**
6. Copy the connection string:
   ```
   mongodb+srv://dreamstack:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### **Step 6: Update Connection String**

Replace `<password>` with your actual password:

**Before:**
```
mongodb+srv://dreamstack:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

**After:**
```
mongodb+srv://dreamstack:dreamstack123@cluster0.xxxxx.mongodb.net/food_waste_tracker?retryWrites=true&w=majority
```

**Important:** Add `/food_waste_tracker` before the `?` to specify database name!

---

## 🔧 Configure Your Backend

### **Create/Update `.env` file**

In your `backend` folder, create `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb+srv://dreamstack:dreamstack123@cluster0.xxxxx.mongodb.net/food_waste_tracker?retryWrites=true&w=majority
JWT_SECRET=dreamstack_secret_2024_food_waste_tracker
NODE_ENV=development
```

**Replace:**
- `dreamstack123` with your password
- `cluster0.xxxxx.mongodb.net` with your actual cluster URL

---

## ✅ Test Connection

### **Method 1: Run Backend**

```bash
cd backend
npm install
npm run dev
```

**Success message:**
```
Server running on port 5000
MongoDB connected
```

### **Method 2: Test with Node.js**

Create `test-connection.js` in backend folder:

```javascript
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Atlas connected successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  });
```

Run:
```bash
node test-connection.js
```

---

## 🔍 View Your Data

### **Using MongoDB Atlas Dashboard**

1. Go to **"Database"** in left sidebar
2. Click **"Browse Collections"** on your cluster
3. You'll see your databases and collections
4. Click on collections to view data

### **Collections Created by App**

After running the app, you'll see:
- `users` - User accounts
- `restaurantorders` - Restaurant orders
- `restaurantwastes` - Waste logs
- `hostellogs` - Hostel daily logs
- `predictions` - AI predictions

---

## 🛡️ Security Best Practices

### **For Development:**
```env
MONGODB_URI=mongodb+srv://dreamstack:dreamstack123@cluster0.xxxxx.mongodb.net/food_waste_tracker?retryWrites=true&w=majority
```

### **For Production:**

1. **Use Strong Password:**
   ```
   Password: Ds@2024#FoodWaste!Secure
   ```

2. **Restrict IP Access:**
   - Remove "0.0.0.0/0"
   - Add only your server IP

3. **Use Environment Variables:**
   - Never commit `.env` to Git
   - Use hosting platform's environment variables

4. **Create Separate Users:**
   - Read-only user for analytics
   - Write user for app
   - Admin user for management

---

## 📊 Monitor Your Database

### **Atlas Dashboard Features:**

1. **Metrics:**
   - Click "Metrics" tab
   - View connections, operations, storage

2. **Real-time Performance:**
   - Monitor queries
   - Check slow operations

3. **Alerts:**
   - Set up email alerts
   - Monitor disk usage

---

## 💰 Free Tier Limits

**MongoDB Atlas Free Tier (M0):**
- ✅ 512 MB storage
- ✅ Shared RAM
- ✅ Shared vCPU
- ✅ No credit card required
- ✅ Perfect for development & small projects

**Estimated Capacity:**
- ~10,000 waste logs
- ~5,000 orders
- ~1,000 users
- Plenty for testing and small deployments!

---

## 🚨 Troubleshooting

### **Error: "Authentication failed"**
**Fix:** Check username and password in connection string

### **Error: "IP not whitelisted"**
**Fix:** Add your IP in Network Access

### **Error: "Connection timeout"**
**Fix:** 
- Check internet connection
- Verify cluster is running
- Check firewall settings

### **Error: "Database name not specified"**
**Fix:** Add `/food_waste_tracker` in connection string:
```
...mongodb.net/food_waste_tracker?retryWrites=true...
```

---

## 🎯 Quick Setup Summary

1. ✅ Create Atlas account
2. ✅ Create free cluster (3-5 min wait)
3. ✅ Create database user
4. ✅ Allow IP access (0.0.0.0/0 for dev)
5. ✅ Copy connection string
6. ✅ Update backend/.env file
7. ✅ Run backend: `npm run dev`
8. ✅ See "MongoDB connected" message

---

## 📞 Support

**MongoDB Atlas Support:**
- Documentation: https://docs.atlas.mongodb.com/
- Community: https://community.mongodb.com/
- Support: https://support.mongodb.com/

**Project Support:**
- Team: DreamStack
- Leader: Rajadurai R
- Email: kit27.csbs45@gmail.com

---

**Now you don't need to install MongoDB locally! 🎉**
