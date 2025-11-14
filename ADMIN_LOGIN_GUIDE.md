# Admin Login Guide

## 🔐 How to Login as Admin

### Step 1: Go to Login Page

Open your browser and go to:
```
http://localhost:3000
```

You should see the login page with:
- 🌱 Logo
- "Welcome Back" heading
- Two input fields
- Login button

---

### Step 2: Enter Admin Credentials

**In the "Email / Username" field, type:**
```
admin
```

**In the "Password" field, type:**
```
123
```

---

### Step 3: Click Login

Click the green "Login" button.

---

### Step 4: Access Admin Panel

After successful login, you'll see the home page with three cards:
1. 🍽️ Restaurant / Hotel (green)
2. 🏠 Hostel / Mess (green)
3. 🔐 Admin Panel (purple) ← Click this one!

---

## ✅ What You Should See

### Login Page:
```
┌─────────────────────────────┐
│           🌱                │
│      Welcome Back           │
│  Food Waste Tracker         │
│                             │
│  Email / Username           │
│  [admin            ]        │
│                             │
│  Password                   │
│  [***]                      │
│                             │
│  [      Login      ]        │
│                             │
│  Don't have account?        │
│  Register                   │
└─────────────────────────────┘
```

### After Login (Home Page):
```
┌─────────────────────────────┐
│  Welcome, Admin!            │
│  Choose Your Module         │
│                             │
│  ┌───────────────────┐      │
│  │  🍽️ Restaurant    │      │
│  └───────────────────┘      │
│                             │
│  ┌───────────────────┐      │
│  │  🏠 Hostel        │      │
│  └───────────────────┘      │
│                             │
│  ┌───────────────────┐      │
│  │  🔐 Admin Panel   │ ← Click!
│  └───────────────────┘      │
└─────────────────────────────┘
```

---

## 🚨 Troubleshooting

### Problem: Can't type in the field

**Solution:** 
- Refresh the page (F5)
- Clear browser cache (Ctrl + Shift + Delete)
- Try a different browser

### Problem: "Invalid credentials" error

**Solution:**
1. Make sure you created the admin user:
   ```powershell
   cd backend
   npm run seed-admin
   ```

2. Check backend is running:
   ```powershell
   cd backend
   npm run dev
   ```

3. Verify admin user exists in database

### Problem: No Admin Panel card after login

**Solution:**
- The user must have `role: 'admin'`
- Run seed-admin script again
- Or register with role "Admin"

---

## 📝 Alternative: Register as Admin

If seed-admin doesn't work, you can register manually:

1. Click "Register" on login page
2. Fill in:
   - **Name:** Admin
   - **Email/Username:** admin
   - **Password:** 123
   - **Organization Type:** Restaurant
   - **Role:** Admin ← Important!
3. Click "Register"
4. You'll be logged in automatically
5. See the purple Admin Panel card

---

## 🎯 Quick Test

1. ✅ Open http://localhost:3000
2. ✅ See login page
3. ✅ Type "admin" in Email/Username field
4. ✅ Type "123" in Password field
5. ✅ Click Login
6. ✅ See home page with 3 cards
7. ✅ See purple "Admin Panel" card
8. ✅ Click Admin Panel
9. ✅ See admin dashboard with 4 tabs

---

## 🎉 Success!

Once you're in the admin panel, you can:
- 📊 View system statistics
- 👥 Manage users
- 📋 Monitor activity
- 💾 Export data

---

**Now try logging in with: admin / 123** 🚀
