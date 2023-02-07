const express = require('express');
const { protect } = require("../middleware/authMiddleware");

// Import our modular routers for /tips and /feedback
const daysRouter = require('./daysRoutes');
const userRouter = require('./userRoutes');

const app = express();

app.use('/timeblocks', protect, daysRouter);

module.exports = app;