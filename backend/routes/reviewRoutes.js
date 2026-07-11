const express = require("express");
const router = express.Router();

const Review = require("../models/Review");
const protect = require("../middleware/authMiddleware");

// =====================================
// GET ALL REVIEWS
// =====================================
router.get("/", protect, async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// =====================================
// GET REVIEW BY ID
// =====================================
router.get("/:id", protect, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =====================================
// CREATE REVIEW
// =====================================
router.post("/", protect, async (req, res) => {
  try {
    const { guestName, hotelName, review, rating } = req.body;

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

    const newReview = await Review.create({
      guestName,
      hotelName,
      review,
      rating,
      sentiment,
      theme,
      response,
    });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =====================================
// UPDATE REVIEW
// =====================================
router.put("/:id", protect, async (req, res) => {
  try {
    const { guestName, hotelName, review, rating } = req.body;

    const positiveWords = [
      "clean",
      "excellent",
      "good",
      "friendly",
      "great",
      "comfortable",
      "helpful",
      "amazing",
      "awesome",
      "perfect",
      "nice",
      "love",
    ];

    const negativeWords = [
      "dirty",
      "bad",
      "worst",
      "late",
      "smelly",
      "poor",
      "terrible",
      "awful",
      "horrible",
      "rude",
      "disappointing",
      "broken",
      "noisy",
      "uncomfortable",
      "not clean",
    ];

    let sentiment = "Neutral";
    let theme = "General";
    let response = "Thank you for your valuable feedback.";

    const reviewText = review.toLowerCase();

    if (negativeWords.some((word) => reviewText.includes(word))) {
      sentiment = "Negative";
      theme = "Cleanliness";
      response = "We sincerely apologize for your experience.";
    } else if (positiveWords.some((word) => reviewText.includes(word))) {
      sentiment = "Positive";
      theme = "Hospitality";
      response = "Thank you for your wonderful feedback!";
    }

    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      {
        guestName,
        hotelName,
        review,
        rating,
        sentiment,
        theme,
        response,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedReview) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =====================================
// DELETE REVIEW
// =====================================
router.delete("/:id", protect, async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);

    if (!deletedReview) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json({
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =====================================
// REVIEW STATISTICS
// =====================================
router.get("/stats/summary", protect, async (req, res) => {
  try {
    const totalReviews = await Review.countDocuments();

    const positiveReviews = await Review.countDocuments({
      sentiment: "Positive",
    });

    const negativeReviews = await Review.countDocuments({
      sentiment: "Negative",
    });

    const neutralReviews = await Review.countDocuments({
      sentiment: "Neutral",
    });

    res.status(200).json({
      totalReviews,
      positiveReviews,
      negativeReviews,
      neutralReviews,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;