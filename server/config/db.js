const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error('Make sure your IP is whitelisted in MongoDB Atlas and the connection string is correct.');
    // Do not exit process, allow retry or running without DB for debugging
    // process.exit(1); 
  }
};

module.exports = connectDB;
