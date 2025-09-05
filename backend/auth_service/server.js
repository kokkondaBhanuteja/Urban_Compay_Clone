// Entry point for the Auth Service server
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// 1. IMPORT THE ROUTES
// This line brings in the /register and /login endpoints from your routes file.
const authRoutes = require('./src/api/routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

app.use('/', authRoutes);

app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));

