const express = require("express");
const cors = require("cors");

const app = express(); // Initialize Express app

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Sample route
app.get("/", (req, res) => {
  res.send("Hello from Express backend!");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
