require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
require("./config/passport");
const rateLimit = require("express-rate-limit");
const reviewRoutes = require("./routes/reviewRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");   // <-- ADD THIS
const dashboardRoutes = require("./routes/dashboardRoutes");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
dotenv.config();

// Connect to MongoDB
connectDB();                                // <-- ADD THIS

const app = express();
const authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes

  max: 5,

  message: {
    message: "Too many login attempts. Please try again after 15 minutes.",
  },

  standardHeaders: true,

  legacyHeaders: false,
});
// middleware
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "homestay_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());
// routes
app.use("/api/reviews", reviewRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/ai", aiRoutes);
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