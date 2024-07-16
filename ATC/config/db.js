// config/db.js

const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const connectionString = 'mongodb://localhost:27017/auth?readPreference=primary&ssl=false&directConnection=true';
    const conn = await mongoose.connect(connectionString);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;