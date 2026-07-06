require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const reviewRoutes = require("./routes/reviewRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");   // <-- ADD THIS
const dashboardRoutes = require("./routes/dashboardRoutes");
dotenv.config();

// Connect to MongoDB
connectDB();                                // <-- ADD THIS

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/reviews", reviewRoutes);

app.use("/api/dashboard", dashboardRoutes);
// test route
app.get("/", (req, res) => {
  res.json({
    message: "Homestay Review Analyzer Backend is Running!",
  });
});

// error test route
app.get("/error", (req, res, next) => {
  const error = new Error("Testing Error Middleware");
  error.status = 500;
  next(error);
});

// error middleware (must be last)
app.use(errorHandler);

// PORT
const PORT = process.env.PORT || 5000;

// server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});