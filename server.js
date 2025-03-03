const express = require("express");
const mongoose = require("mongoose");

// Create an Express app
const app = express();

// MongoDB Atlas connection URI (replace <username>, <password>, and <dbname> with your details)
const mongoURI =
  "mongodb+srv://sathya:codevolt25@codevoltcluster.2wof2.mongodb.net/?retryWrites=true&w=majority&appName=codevoltcluster";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Simple route to test the server
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

// Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
