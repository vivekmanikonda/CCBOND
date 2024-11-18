const express = require('express');
const cors = require('cors');

const connectDB = require('./db.js');
const authRoutes = require('./routes.js');

const app = express();
const PORT = 3000; // Set port

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
