const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();
const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
const protect = require("../middleware/authMiddleware");

const {
  validateRegister,
  validateLogin,
} = require("../middleware/validationMiddleware");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

// ===============================
// Register
// ===============================

router.post(
  "/register",
  validateRegister,
  registerUser
);

// ===============================
// Login
// ===============================

router.post(
  "/login",
  authLimiter,
  validateLogin,
  loginUser
);

// ===============================
// Protected Profile
// ===============================

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Welcome!",
    user: req.user,
  });
});

// ===============================
// Google Login
// ===============================

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// ===============================
// Google Callback
// ===============================

router.get(
  "/google/callback",

  passport.authenticate("google", {
    session: false,
    failureRedirect:
  "http://localhost:3000/login?error=google_login_failed",
  }),

  (req, res) => {

    const token = jwt.sign(
      {
        id: req.user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const name = encodeURIComponent(req.user.name);
    const email = encodeURIComponent(req.user.email);
    res.redirect(
  `http://localhost:3000/oauth-success?token=${token}&name=${name}&email=${email}`
);
  }
);

module.exports = router;