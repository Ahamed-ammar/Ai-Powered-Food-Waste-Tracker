# 🔐 Login Instructions

## The Fix is Applied!

The login form now accepts **username** (not just email).

---

## 📝 How to Login

### At http://localhost:3000

You'll see a login form with **TWO fields**:

1. **Email / Username** field
   - Type: `admin`

2. **Password** field
   - Type: `123`

Then click the green **"Login"** button.

---

## ✅ Step-by-Step

```
1. Open browser → http://localhost:3000

2. You see login page with:
   - 🌱 Green leaf logo
   - "Welcome Back" text
   - Input field labeled "Email / Username"
   - Input field labeled "Password"
   - Green "Login" button

3. Click in the first field (Email / Username)
   Type: admin

4. Click in the second field (Password)
   Type: 123

5. Click the green "Login" button

6. You're logged in! 🎉
```

---

## 🎯 What Happens After Login

You'll see the **Home Page** with:

- Welcome message: "Welcome, Admin!"
- Three module cards:
  1. 🍽️ Restaurant / Hotel (green card)
  2. 🏠 Hostel / Mess (green card)
  3. 🔐 **Admin Panel** (purple card) ← This is what you want!

**Click the purple "Admin Panel" card** to access admin features.

---

## 🔧 If You Don't See the Login Form

1. **Refresh the page** (press F5)
2. **Clear cache:** Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)
3. **Check frontend is running:**
   ```powershell
   cd frontend
   npm start
   ```

---

## 🚨 Common Issues

### Issue: "Invalid credentials"

**Fix:** Create admin user first:
```powershell
cd backend
npm run seed-admin
```

### Issue: No purple Admin Panel card

**Fix:** Make sure you logged in as admin (not regular user)

### Issue: Can't type in fields

**Fix:** 
- Refresh page
- Check browser console for errors (F12)
- Make sure frontend is running

---

## 🎉 You're All Set!

The form is fixed. Just type:
- **Email / Username:** `admin`
- **Password:** `123`

And click Login! 🚀
