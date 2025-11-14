// Test MongoDB Connection Script
// Run: node test-connection.js

const mongoose = require('mongoose');
require('dotenv').config();

console.log('🔍 Testing MongoDB Connection...\n');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/food_waste_tracker';

console.log('Connection String:', MONGODB_URI.replace(/:[^:@]+@/, ':****@')); // Hide password
console.log('Connecting...\n');

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ SUCCESS! MongoDB connected successfully!');
    console.log('📊 Database:', mongoose.connection.name);
    console.log('🌐 Host:', mongoose.connection.host);
    console.log('\n🎉 Your database is ready to use!');
    console.log('\nYou can now run: npm run dev');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ CONNECTION FAILED!');
    console.error('Error:', err.message);
    console.error('\n💡 Troubleshooting:');
    console.error('1. Check your .env file exists in backend folder');
    console.error('2. Verify MONGODB_URI is correct');
    console.error('3. For Atlas: Check username, password, and IP whitelist');
    console.error('4. For Local: Make sure MongoDB is running (mongod)');
    console.error('\nSee MONGODB_ATLAS_SETUP.md for detailed help');
    process.exit(1);
  });
