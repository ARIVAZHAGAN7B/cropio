const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const sustainabilityRoutes = require('./Routes/FarmerRoutes');
app.use('/user/sustainablity', sustainabilityRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});