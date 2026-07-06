const Review = require("../models/Review");

// GET ALL REVIEWS
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET REVIEW BY ID
const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE REVIEW
// CREATE REVIEW
const createReview = async (req, res) => {
  try {
    const { guestName, hotelName, review, rating } = req.body;

    if (!guestName || !review) {
      return res.status(400).json({
        message: "Guest name and review are required",
      });
    }

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

    // Detect Positive
    if (positiveWords.some((word) => reviewText.includes(word))) {
      sentiment = "Positive";
      theme = "Hospitality";
      response = "Thank you for your wonderful feedback!";
    }

    // Detect Negative (overrides Positive if both are found)
    if (negativeWords.some((word) => reviewText.includes(word))) {
      sentiment = "Negative";
      theme = "Cleanliness";
      response = "We sincerely apologize for your experience.";
    }

    // Debug log
    console.log("==================================");
    console.log("Review:", review);
    console.log("Detected Sentiment:", sentiment);
    console.log("Rating:", rating);
    console.log("==================================");

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
};

// UPDATE REVIEW
const updateReview = async (req, res) => {
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
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json({
      message: "Review updated successfully",
      review: updatedReview,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE REVIEW
const deleteReview = async (req, res) => {
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
    res.status(500).json({ message: error.message });
  }
};

// SEARCH REVIEWS
const searchReviews = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({
        message: "Search query is required",
      });
    }

    const result = await Review.find({
      $or: [
        { guestName: { $regex: query, $options: "i" } },
        { review: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,
};