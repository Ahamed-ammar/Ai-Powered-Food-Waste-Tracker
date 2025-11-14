# How to View User Data on MongoDB Atlas Website

## 🌐 Step-by-Step Guide with Screenshots Description

---

## Step 1: Login to MongoDB Atlas

### 1.1 Open Browser
- Open any web browser (Chrome, Firefox, Edge)
- Go to: **https://cloud.mongodb.com/**

### 1.2 Login
- Enter your **email** (the one you used to create MongoDB Atlas account)
- Enter your **password**
- Click **"Login"** button

**What you'll see:**
```
┌─────────────────────────────────┐
│   MongoDB Atlas                 │
│                                 │
│   Email                         │
│   [your-email@example.com]      │
│                                 │
│   Password                      │
│   [••••••••]                    │
│                                 │
│   [      Login      ]           │
└─────────────────────────────────┘
```

---

## Step 2: Navigate to Database

### 2.1 Find Left Sidebar
After login, you'll see the MongoDB Atlas dashboard.

Look at the **left sidebar** (left side of screen).

### 2.2 Click "Database"
- In the left sidebar, find and click **"Database"**
- It has a database icon 🗄️

**Left Sidebar looks like:**
```
┌─────────────────┐
│ Overview        │
│ ► Database      │ ← Click here!
│   Network Access│
│   Database Access│
│   Monitoring    │
└─────────────────┘
```

---

## Step 3: View Your Cluster

### 3.1 See Your Cluster
After clicking "Database", you'll see your cluster.

**It looks like:**
```
┌──────────────────────────────────────┐
│  Cluster0                            │
│  ○ M0 Sandbox (Free)                 │
│                                      │
│  [Browse Collections] [Connect] [...] │
└──────────────────────────────────────┘
```

### 3.2 Click "Browse Collections"
- Find the green button **"Browse Collections"**
- Click it

---

## Step 4: Select Database

### 4.1 See Database List
You'll see a list of databases on the left.

**Look for:**
```
┌─────────────────────────┐
│ Databases               │
│                         │
│ ► admin                 │
│ ► config                │
│ ► local                 │
│ ► food_waste_tracker    │ ← This one!
└─────────────────────────┘
```

### 4.2 Click "food_waste_tracker"
- Click on **"food_waste_tracker"** database
- It will expand to show collections

---

## Step 5: View Users Collection

### 5.1 See Collections
After clicking the database, you'll see collections:

```
┌─────────────────────────────┐
│ ▼ food_waste_tracker        │
│   ► users                   │ ← Click here!
│   ► restaurantorders        │
│   ► restaurantwastes        │
│   ► hostellogs              │
│   ► predictions             │
└─────────────────────────────┘
```

### 5.2 Click "users"
- Click on **"users"** collection
- This is where all signup data is stored!

---

## Step 6: View User Data! 🎉

### 6.1 See All Users
You'll now see all registered users in a table format!

**Example view:**
```
┌─────────────────────────────────────────────────────────────┐
│ users                                    Documents: 3        │
├─────────────────────────────────────────────────────────────┤
│ _id                    │ name    │ email  │ role   │ ...    │
├─────────────────────────────────────────────────────────────┤
│ 507f1f77bcf86cd799439011│ Admin   │ admin  │ admin  │ ...    │
│ 507f1f77bcf86cd799439012│ John Doe│ john@..│ waiter │ ...    │
│ 507f1f77bcf86cd799439013│ Jane    │ jane@..│ owner  │ ...    │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Click on Any Row
- Click on any user row to see **full details**
- You'll see all fields:
  - `_id` - Unique ID
  - `name` - User's name
  - `email` - Email or username
  - `password` - Encrypted password
  - `role` - User role
  - `organizationType` - Restaurant or Hostel
  - `createdAt` - Signup date

---

## 📊 What You Can Do

### View Details
- Click any user to see full information

### Search Users
- Use the **Filter** box at top
- Example: `{ "role": "admin" }` to find admins

### Count Users
- See total count at top: "Documents: 3"

### Export Data
- Click **"..."** menu
- Select **"Export Collection"**
- Download as JSON or CSV

---

## 🔍 Example: Finding Specific Users

### Find Admin Users
1. Click **"Filter"** button
2. Enter: `{ "role": "admin" }`
3. Press Enter
4. See only admin users

### Find by Email
1. Click **"Filter"** button
2. Enter: `{ "email": "admin" }`
3. Press Enter
4. See user with email "admin"

### Find Restaurant Users
1. Click **"Filter"** button
2. Enter: `{ "organizationType": "restaurant" }`
3. Press Enter
4. See only restaurant users

---

## 🎯 Quick Navigation Summary

```
1. https://cloud.mongodb.com/
   ↓
2. Login with your credentials
   ↓
3. Click "Database" (left sidebar)
   ↓
4. Click "Browse Collections" button
   ↓
5. Click "food_waste_tracker" database
   ↓
6. Click "users" collection
   ↓
7. See all user signup data! 🎉
```

---

## 📸 Visual Guide

### Screen 1: Login Page
```
┌─────────────────────────────────────┐
│        MongoDB Atlas                │
│                                     │
│  Welcome Back                       │
│                                     │
│  Email                              │
│  [________________________]         │
│                                     │
│  Password                           │
│  [________________________]         │
│                                     │
│  [ Login ]                          │
└─────────────────────────────────────┘
```

### Screen 2: Dashboard
```
┌──────────────────────────────────────────────┐
│ MongoDB Atlas                                │
├──────────────────────────────────────────────┤
│ ┌─────────┐  ┌──────────────────────────┐   │
│ │Overview │  │  Cluster0                │   │
│ │►Database│  │  M0 Sandbox              │   │
│ │Network  │  │                          │   │
│ │Database │  │  [Browse Collections]    │   │
│ │Access   │  └──────────────────────────┘   │
│ └─────────┘                                  │
└──────────────────────────────────────────────┘
```

### Screen 3: Collections View
```
┌──────────────────────────────────────────────┐
│ Collections                                  │
├──────────────────────────────────────────────┤
│ ┌─────────────┐  ┌──────────────────────┐   │
│ │Databases    │  │ users                │   │
│ │             │  │ Documents: 3         │   │
│ │►admin       │  ├──────────────────────┤   │
│ │►config      │  │ _id  │name  │email  │   │
│ │▼food_waste_ │  │ 507..│Admin │admin  │   │
│ │  tracker    │  │ 508..│John  │john@..│   │
│ │  ►users     │  │ 509..│Jane  │jane@..│   │
│ │  ►restaurant│  └──────────────────────┘   │
│ │   orders    │                              │
│ └─────────────┘                              │
└──────────────────────────────────────────────┘
```

---

## ✅ Verification Checklist

After following these steps, you should see:

- [ ] Logged into MongoDB Atlas
- [ ] Clicked "Database" in sidebar
- [ ] Clicked "Browse Collections"
- [ ] See "food_waste_tracker" database
- [ ] See "users" collection
- [ ] See list of all registered users
- [ ] Can click on users to see details
- [ ] Can see encrypted passwords
- [ ] Can see user roles and organization types

---

## 🚨 Troubleshooting

### Can't Login?
- Check email and password
- Try "Forgot Password" link
- Make sure you're using the account that created the cluster

### Don't See "food_waste_tracker" Database?
- Make sure backend has run at least once
- Check your `.env` file has correct connection string
- Try creating a test user in your app first

### Don't See "users" Collection?
- No users have signed up yet
- Run: `npm run seed-admin` in backend folder
- Or register a user in your app

### Collection is Empty?
- No users registered yet
- Create admin user: `cd backend && npm run seed-admin`
- Or register via app: http://localhost:3000

---

## 📞 Need Help?

**Team:** DreamStack  
**Leader:** Rajadurai R  
**Email:** kit27.csbs45@gmail.com

---

## 🎉 Success!

Once you see the users collection with data, you've successfully viewed your signup data on MongoDB Atlas!

**All user information is stored safely in the cloud!** ☁️
