# Admin Panel Guide

## 🔐 Admin Access

### Default Admin Credentials

**Username:** `admin`  
**Password:** `123`

---

## 🚀 Setup Admin User

### Method 1: Automatic Seed Script (Recommended)

```bash
cd backend
node seed-admin.js
```

This will create the admin user automatically.

### Method 2: Register Manually

1. Start the application
2. Go to http://localhost:3000
3. Click "Register"
4. Fill in:
   - Name: Admin
   - Email: admin
   - Password: 123
   - Organization Type: Restaurant
   - Role: Admin
5. Click "Register"

---

## 📊 Admin Panel Features

### 1. Statistics Dashboard

**Access:** Admin Panel → Statistics Tab

**Features:**
- Total users count
- Restaurant orders count
- Hostel logs count
- Total waste (restaurant & hostel)
- Cost loss tracking
- User distribution charts
- Waste comparison charts

**Use Cases:**
- Monitor system usage
- Track waste trends
- Analyze cost impact
- View user distribution

---

### 2. User Management

**Access:** Admin Panel → Users Tab

**Features:**
- View all users
- Filter by organization type (All/Restaurant/Hostel)
- Change user roles
- Delete users
- View user details (name, email, role, join date)

**Actions:**

**Change User Role:**
1. Click "Change Role" button
2. Enter new role: `waiter`, `mess-incharge`, `admin`, or `owner`
3. Confirm

**Delete User:**
1. Click "Delete" button
2. Confirm deletion
3. User and their data will be removed

**Filter Users:**
- Click "All" to see all users
- Click "Restaurant" to see only restaurant users
- Click "Hostel" to see only hostel users

---

### 3. Recent Activity

**Access:** Admin Panel → Activity Tab

**Features:**
- Recent restaurant orders (last 10)
- Recent waste logs (last 10)
- Recent hostel logs (last 10)
- Real-time activity monitoring

**Information Displayed:**

**Restaurant Orders:**
- Order ID
- User who created it
- Table number
- Number of dishes
- Order status
- Creation date

**Waste Logs:**
- Waste ID
- User who logged it
- Dish name
- Waste quantity
- Estimated cost
- Log date

**Hostel Logs:**
- Log ID
- User who created it
- Meal type
- Cooked/Served/Wasted quantities
- Log date

---

### 4. Data Export

**Access:** Admin Panel → Export Tab

**Export Options:**

**1. Users Data**
- All user accounts and profiles
- Formats: JSON, CSV

**2. Restaurant Waste**
- All restaurant waste logs
- Formats: JSON, CSV

**3. Hostel Logs**
- All hostel daily logs
- Formats: JSON, CSV

**4. AI Predictions**
- All prediction data
- Formats: JSON, CSV

**How to Export:**
1. Choose data type
2. Click "Export JSON" or "Export CSV"
3. File downloads automatically
4. Filename includes date: `users_2024-01-15.json`

**Use Cases:**
- Backup data
- Generate reports
- Data analysis in Excel
- Share with stakeholders

---

## 🎯 Admin Workflows

### Daily Monitoring

1. **Check Statistics:**
   - View total waste
   - Monitor cost loss
   - Check user activity

2. **Review Activity:**
   - Check recent orders
   - Monitor waste logs
   - Verify data quality

3. **User Management:**
   - Review new users
   - Update roles if needed
   - Remove inactive users

### Weekly Tasks

1. **Export Data:**
   - Download weekly reports
   - Backup all data
   - Analyze trends

2. **User Audit:**
   - Review all users
   - Check role assignments
   - Update permissions

### Monthly Tasks

1. **System Analysis:**
   - Compare monthly waste
   - Calculate cost savings
   - Generate reports

2. **Data Cleanup:**
   - Remove test data
   - Archive old logs
   - Optimize database

---

## 🔒 Security Best Practices

### Password Management

**Change Default Password:**
1. Login as admin
2. Go to profile settings (future feature)
3. Change password to strong one

**Recommended Password:**
- Minimum 8 characters
- Mix of letters, numbers, symbols
- Example: `Admin@2024!Secure`

### Access Control

**Role Hierarchy:**
1. **Admin** - Full system access
2. **Owner** - View analytics, manage staff
3. **Mess Incharge** - Hostel module access
4. **Waiter** - Restaurant module access

**Best Practices:**
- Only assign admin role to trusted users
- Regularly review user roles
- Remove inactive users
- Monitor admin activity

---

## 📱 Admin Panel Access

### Web Application

1. Login with admin credentials
2. On home page, see "Admin Panel" card (purple)
3. Click to enter admin panel
4. Access all admin features

**Note:** Admin panel only visible to users with `admin` role.

### Mobile Application

Admin panel is currently web-only. Use web browser on mobile device to access.

---

## 🛠️ Troubleshooting

### Can't See Admin Panel

**Problem:** Admin panel card not showing on home page

**Solutions:**
1. Check user role is `admin`
2. Logout and login again
3. Clear browser cache
4. Verify in database: `db.users.findOne({email: "admin"})`

### Can't Access Admin Routes

**Problem:** "Access denied" message

**Solutions:**
1. Verify logged in as admin
2. Check JWT token is valid
3. Restart backend server
4. Re-login to get new token

### Export Not Working

**Problem:** Export button doesn't download file

**Solutions:**
1. Check browser allows downloads
2. Disable popup blocker
3. Try different browser
4. Check backend is running

### No Data in Statistics

**Problem:** Statistics show zero

**Solutions:**
1. Add test data first
2. Create orders/logs
3. Wait for data to sync
4. Refresh the page

---

## 📊 Understanding Statistics

### User Metrics

- **Total Users:** All registered users
- **Restaurant Users:** Users in restaurant module
- **Hostel Users:** Users in hostel module

### Waste Metrics

- **Restaurant Waste:** Total in grams
- **Hostel Waste:** Total in kilograms
- **Cost Loss:** Total money wasted (₹)

### Activity Metrics

- **Orders:** Total restaurant orders
- **Waste Logs:** Total waste entries
- **Hostel Logs:** Total daily logs
- **Predictions:** Total AI predictions

---

## 🎓 Admin Training

### For New Admins

**Week 1: Learn the System**
- Explore all tabs
- Understand statistics
- Review user management
- Test data export

**Week 2: Daily Operations**
- Monitor daily activity
- Review waste logs
- Check user activity
- Export weekly reports

**Week 3: Advanced Features**
- User role management
- Data analysis
- Report generation
- System optimization

---

## 📞 Support

**For Admin Issues:**
- Team: DreamStack
- Leader: Rajadurai R
- Email: kit27.csbs45@gmail.com

**Documentation:**
- Setup Guide: `SETUP_GUIDE.md`
- API Docs: `API_DOCUMENTATION.md`
- Features: `FEATURES.md`

---

## 🔮 Future Admin Features

Coming soon:
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Custom reports
- [ ] User activity logs
- [ ] System settings
- [ ] Backup/restore
- [ ] Multi-admin support
- [ ] Audit trail
- [ ] Performance monitoring
- [ ] Mobile admin app

---

**Admin Panel Ready! 🎉**

Login with `admin` / `123` and start managing your system!
