const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const FarmerRoutes = require('./Routes/FarmerRoutes');
app.use('/api/farmer', FarmerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});