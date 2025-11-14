# MongoDB Atlas - Quick View Guide

## 🚀 Fast Steps to View User Data

### 1️⃣ Login
```
https://cloud.mongodb.com/
→ Enter email & password
→ Click Login
```

### 2️⃣ Navigate
```
Left Sidebar
→ Click "Database"
→ Click "Browse Collections" button
```

### 3️⃣ Select Database
```
Left Panel
→ Click "food_waste_tracker"
→ Click "users"
```

### 4️⃣ View Data! 🎉
```
See all registered users in table format!
```

---

## 📋 What You'll See

```
┌─────────────────────────────────────────────┐
│ users                    Documents: 3       │
├─────────────────────────────────────────────┤
│ _id          │ name  │ email │ role │ ...   │
├─────────────────────────────────────────────┤
│ 507f1f77...  │ Admin │ admin │ admin│ ...   │
│ 507f1f78...  │ John  │ john@ │waiter│ ...   │
│ 507f1f79...  │ Jane  │ jane@ │owner │ ...   │
└─────────────────────────────────────────────┘
```

---

## 🔍 Useful Filters

Click "Filter" button and enter:

**Find admins:**
```json
{ "role": "admin" }
```

**Find by email:**
```json
{ "email": "admin" }
```

**Find restaurant users:**
```json
{ "organizationType": "restaurant" }
```

**Find recent users (last 7 days):**
```json
{ "createdAt": { "$gte": { "$date": "2024-01-08T00:00:00Z" } } }
```

---

## 💡 Quick Tips

✅ **Click any row** to see full user details  
✅ **Use Filter** to search specific users  
✅ **Export** data using "..." menu  
✅ **Count** shown at top: "Documents: X"  

---

## 🎯 One-Minute Checklist

- [ ] Go to cloud.mongodb.com
- [ ] Login
- [ ] Database → Browse Collections
- [ ] food_waste_tracker → users
- [ ] See all users!

---

**That's it! Simple and fast!** 🚀
