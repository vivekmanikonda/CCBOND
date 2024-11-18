// db.js
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;


