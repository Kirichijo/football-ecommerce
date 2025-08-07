const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.listen(5000, () => console.log('🚀 Server running on port 5000'));
