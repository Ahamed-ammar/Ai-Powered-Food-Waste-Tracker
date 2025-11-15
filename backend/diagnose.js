// Diagnostic Script - Check MongoDB Connection and Data
// Run: node diagnose.js

const mongoose = require('mongoose');
const User = require('./models/User');
const fs = require('fs');
require('dotenv').config();

async function diagnose() {
  console.log('🔍 Running Diagnostics...\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Check 1: .env file exists
  console.log('1️⃣ Checking .env file...');
  if (!fs.existsSync('.env')) {
    console.log('   ❌ .env file NOT FOUND!');
    console.log('   💡 Fix: Run "copy .env.example .env"\n');
    return;
  }
  console.log('   ✅ .env file exists\n');

  // Check 2: MongoDB URI
  console.log('2️⃣ Checking MongoDB URI...');
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log('   ❌ MONGODB_URI not set in .env!');
    console.log('   💡 Fix: Add MONGODB_URI to .env file\n');
    return;
  }
  console.log('   ✅ MONGODB_URI found');
  console.log('   📝 URI:', uri.replace(/:[^:@]+@/, ':****@'), '\n');

  // Check 3: Database name in URI
  console.log('3️⃣ Checking database name...');
  if (!uri.includes('food_waste_tracker')) {
    console.log('   ⚠️  Database name "food_waste_tracker" not in URI!');
    console.log('   💡 Fix: Add /food_waste_tracker before the ?\n');
  } else {
    console.log('   ✅ Database name correct\n');
  }

  // Check 4: Connection
  console.log('4️⃣ Testing connection...');
  try {
    await mongoose.connect(uri);
    console.log('   ✅ Connected successfully!');
    console.log('   📊 Database:', mongoose.connection.name);
    console.log('   🌐 Host:', mongoose.connection.host, '\n');
  } catch (error) {
    console.log('   ❌ Connection FAILED!');
    console.log('   Error:', error.message);
    console.log('   💡 Check username, password, and IP whitelist\n');
    return;
  }

  // Check 5: Collections
  console.log('5️⃣ Checking collections...');
  const collections = await mongoose.connection.db.listCollections().toArray();
  if (collections.length === 0) {
    console.log('   ⚠️  No collections found!');
    console.log('   💡 Database is empty. Create data first.\n');
  } else {
    console.log('   ✅ Found', collections.length, 'collections:');
    collections.forEach(col => {
      console.log('      -', col.name);
    });
    console.log('');
  }

  // Check 6: Users
  console.log('6️⃣ Checking users...');
  const userCount = await User.countDocuments();
  if (userCount === 0) {
    console.log('   ⚠️  No users found!');
    console.log('   💡 Fix: Run "npm run seed-admin"\n');
  } else {
    console.log('   ✅ Found', userCount, 'users');
    const users = await User.find().select('name email role');
    users.forEach(user => {
      console.log('      -', user.name, `(${user.email})`, `[${user.role}]`);
    });
    console.log('');
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ Diagnosis Complete!\n');

  if (userCount > 0) {
    console.log('🎉 Everything looks good!');
    console.log('   You should see data in MongoDB Atlas now.\n');
  } else {
    console.log('💡 Next Steps:');
    console.log('   1. Run: npm run seed-admin');
    console.log('   2. Check MongoDB Atlas again\n');
  }

  process.exit(0);
}

diagnose().catch(err => {
  console.error('❌ Diagnostic failed:', err.message);
  process.exit(1);
});
