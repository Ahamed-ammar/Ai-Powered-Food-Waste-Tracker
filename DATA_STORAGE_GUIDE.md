# Data Storage Guide

## 📊 Where is User Data Stored?

All user signup data is stored in **MongoDB Atlas** (cloud database).

---

## 🗄️ Database Structure

### **Database Name:**
```
food_waste_tracker
```

### **Collections (Tables):**

1. **users** ← User signup data stored here
2. **restaurantorders** ← Restaurant orders
3. **restaurantwastes** ← Waste logs
4. **hostellogs** ← Hostel daily logs
5. **predictions** ← AI predictions

---

## 👤 User Data Schema

When someone signs up, this data is saved in the `users` collection:

```javascript
{
  _id: "507f1f77bcf86cd799439011",  // Unique ID (auto-generated)
  name: "John Doe",                  // User's name
  email: "john@example.com",         // Email or username
  password: "$2a$10$hashed...",       // Encrypted password
  role: "waiter",                    // User role
  organizationType: "restaurant",    // Organization type
  organizationId: null,              // Optional org ID
  createdAt: "2024-01-15T10:30:00Z"  // Signup date
}
```

---

## 🔍 How to View User Data

### **Method 1: MongoDB Atlas Dashboard**

1. Go to: https://cloud.mongodb.com/
2. Login with your account
3. Click "Database" → "Browse Collections"
4. Select database: `food_waste_tracker`
5. Select collection: `users`
6. See all users! 🎉

### **Method 2: Admin Panel (In Your App)**

1. Login as admin (`admin` / `123`)
2. Click purple "Admin Panel" card
3. Click "Users" tab
4. See all users in a table!

### **Method 3: Command Line Script**

```bash
cd backend
npm run view-users
```

**Output:**
```
📊 Total Users: 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Admin
   Email: admin
   Role: admin
   Organization: restaurant
   Joined: 1/15/2024
   ID: 507f1f77bcf86cd799439011

2. John Doe
   Email: john@example.com
   Role: waiter
   Organization: restaurant
   Joined: 1/15/2024
   ID: 507f1f77bcf86cd799439012

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🔐 Security

### **Password Encryption:**

Passwords are **encrypted** using bcrypt before storage:

**User types:**
```
mypassword123
```

**Database stores:**
```
$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
```

**This is one-way encryption:**
- ✅ Can verify if password is correct
- ❌ Cannot decrypt to see original password
- ✅ Even admins can't see passwords

---

## 📂 Data Flow

### **Signup Process:**

```
User fills form
    ↓
Frontend → POST /api/auth/register
    ↓
Backend (routes/auth.js)
    ↓
Password hashed with bcrypt
    ↓
Saved to MongoDB Atlas
    ↓
Collection: users
    ↓
User receives JWT token
    ↓
Logged in automatically
```

---

## 🌐 Connection Details

### **Your MongoDB Connection:**

Check your `backend/.env` file:

```env
MONGODB_URI=mongodb+srv://dreamstack:dreamstack123@cluster0.xxxxx.mongodb.net/food_waste_tracker
```

**Parts:**
- `mongodb+srv://` - Protocol
- `dreamstack` - Database username
- `dreamstack123` - Database password
- `cluster0.xxxxx.mongodb.net` - Cluster URL
- `food_waste_tracker` - Database name

---

## 📊 View Data in MongoDB Atlas

### **Step-by-Step:**

1. **Login:**
   - Go to https://cloud.mongodb.com/
   - Enter your credentials

2. **Navigate:**
   - Click "Database" (left sidebar)
   - Click "Browse Collections" button

3. **Select Database:**
   - Click `food_waste_tracker`

4. **Select Collection:**
   - Click `users`

5. **View Data:**
   - See all user documents
   - Each row is one user
   - Click to expand and see details

---

## 🛠️ Useful Commands

### **View all users:**
```bash
cd backend
npm run view-users
```

### **Create admin user:**
```bash
cd backend
npm run seed-admin
```

### **Test database connection:**
```bash
cd backend
npm run test-db
```

---

## 💾 Backup User Data

### **Export from Admin Panel:**

1. Login as admin
2. Go to Admin Panel
3. Click "Export" tab
4. Click "Export Users" → "Export JSON"
5. File downloads: `users_2024-01-15.json`

### **Export from MongoDB Atlas:**

1. Go to MongoDB Atlas
2. Click "..." on your cluster
3. Click "Command Line Tools"
4. Use `mongodump` command

---

## 📈 Data Statistics

### **View in Admin Panel:**

1. Login as admin
2. Go to Admin Panel
3. Click "Statistics" tab
4. See:
   - Total users
   - Restaurant users
   - Hostel users
   - User distribution chart

---

## 🔍 Query User Data

### **Using MongoDB Atlas:**

Click "Filter" in the users collection:

**Find admin users:**
```json
{ "role": "admin" }
```

**Find restaurant users:**
```json
{ "organizationType": "restaurant" }
```

**Find by email:**
```json
{ "email": "admin" }
```

---

## 📞 Support

**Team:** DreamStack  
**Leader:** Rajadurai R  
**Email:** kit27.csbs45@gmail.com

---

## ✅ Quick Summary

**Where:** MongoDB Atlas Cloud  
**Database:** food_waste_tracker  
**Collection:** users  
**View:** Admin Panel → Users tab  
**Command:** `npm run view-users`  

**All user signup data is safely stored in the cloud!** ☁️
