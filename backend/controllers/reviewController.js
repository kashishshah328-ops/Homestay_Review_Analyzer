const reviews = require("../data/reviews");

// GET ALL REVIEWS
const getAllReviews = (req, res) => {
  res.status(200).json(reviews);
};

// GET REVIEW BY ID
const getReviewById = (req, res) => {
  const id = parseInt(req.params.id);

  const review = reviews.find((r) => r.id === id);

  if (!review) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  res.status(200).json(review);
};

// CREATE REVIEW
const createReview = (req, res) => {
  const { guestName, review, sentiment, theme, response } = req.body;

  if (!guestName || !review) {
    return res.status(400).json({
      message: "Guest name and review are required",
    });
  }

  const newReview = {
    id: reviews.length + 1,
    guestName,
    review,
    sentiment,
    theme,
    response,
  };

  reviews.push(newReview);

  res.status(201).json(newReview);
};

// UPDATE REVIEW
const updateReview = (req, res) => {
  const id = parseInt(req.params.id);

  const reviewIndex = reviews.findIndex((r) => r.id === id);

  if (reviewIndex === -1) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  reviews[reviewIndex] = {
    ...reviews[reviewIndex],
    ...req.body,
  };

  res.status(200).json({
    message: "Review updated successfully",
    review: reviews[reviewIndex],
  });
};

// DELETE REVIEW (MOVE THIS UP)
const deleteReview = (req, res) => {
  const id = parseInt(req.params.id);

  const reviewIndex = reviews.findIndex((r) => r.id === id);

  if (reviewIndex === -1) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  reviews.splice(reviewIndex, 1);

  res.status(204).send();
};
const searchReviews = (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({
      message: "Search query is required",
    });
  }

  const result = reviews.filter((r) => {
    return (
      (r.review && r.review.toLowerCase().includes(query.toLowerCase())) ||
      (r.guestName && r.guestName.toLowerCase().includes(query.toLowerCase()))
    );
  });

  res.status(200).json(result);
};
// EXPORTS (LAST ONLY)
module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,
};