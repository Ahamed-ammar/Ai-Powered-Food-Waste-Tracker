# Quick Admin Setup

## 🔐 Create Admin User

### Step 1: Start Backend

```bash
cd backend
npm install
npm run dev
```

### Step 2: Create Admin User

**Option A: Automatic (Recommended)**

```bash
# In backend folder
npm run seed-admin
```

**Option B: Manual**

1. Go to http://localhost:3000
2. Click "Register"
3. Use these details:
   - Name: Admin
   - Email: admin
   - Password: 123
   - Organization: Restaurant
   - Role: Admin

### Step 3: Login as Admin

1. Go to http://localhost:3000
2. Login with:
   - Username: `admin`
   - Password: `123`

### Step 4: Access Admin Panel

1. After login, you'll see home page
2. Look for purple "Admin Panel" card
3. Click to enter admin dashboard

---

## ✅ Verify Admin Access

You should see:
- 🔐 Admin Panel card on home page (purple)
- Four tabs in admin panel:
  - 📊 Statistics
  - 👥 Users
  - 📋 Activity
  - 💾 Export

---

## 🎯 Quick Test

1. **View Statistics:**
   - Click "Statistics" tab
   - See system overview

2. **Manage Users:**
   - Click "Users" tab
   - See all registered users
   - Try filtering by type

3. **Check Activity:**
   - Click "Activity" tab
   - View recent orders/logs

4. **Export Data:**
   - Click "Export" tab
   - Try exporting users as JSON

---

## 🔒 Security Note

**Change the default password immediately in production!**

Default credentials are for development only:
- Username: admin
- Password: 123

For production, use strong password like:
- `Admin@2024!SecurePass`

---

## 📚 Full Documentation

See `ADMIN_GUIDE.md` for complete admin features and workflows.

---

**Admin Setup Complete! 🎉**
