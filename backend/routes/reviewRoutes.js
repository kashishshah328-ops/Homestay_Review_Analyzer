const express = require("express");
const router = express.Router();

// Temporary in-memory storage
let reviews = [];

// GET all reviews
router.get("/", (req, res) => {
  res.json(reviews);
});

// POST review
router.post("/", (req, res) => {
  const { guestName, review } = req.body;

  const positiveWords = [
    "clean",
    "excellent",
    "good",
    "friendly",
    "great",
    "comfortable",
    "helpful",
  ];

  const negativeWords = [
    "dirty",
    "bad",
    "worst",
    "late",
    "smelly",
    "poor",
    "terrible",
  ];

  let sentiment = "Neutral";
  let theme = "General";
  let response = "Thank you for your valuable feedback.";

  const reviewText = review.toLowerCase();

  if (positiveWords.some((word) => reviewText.includes(word))) {
    sentiment = "Positive";
    theme = "Hospitality";
    response = "Thank you for your wonderful feedback!";
  }

  if (negativeWords.some((word) => reviewText.includes(word))) {
    sentiment = "Negative";
    theme = "Cleanliness";
    response = "We sincerely apologize for your experience.";
  }

  const newReview = {
    id: Date.now(),
    guestName,
    review,
    sentiment,
    theme,
    response,
  };

  // Save review
  reviews.push(newReview);

  res.status(201).json(newReview);
});

module.exports = router;