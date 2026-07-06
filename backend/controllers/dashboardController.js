const Review = require("../models/Review");

const getDashboardStats = async (req, res) => {
  try {
    const reviews = await Review.find();

    const total = reviews.length;

    const positive = reviews.filter(
  (r) => r.sentiment?.trim().toLowerCase() === "positive"
).length;


    const neutral = reviews.filter(
  (r) => r.sentiment?.trim().toLowerCase() === "neutral"
).length;

    const negative = reviews.filter(
  (r) => r.sentiment?.trim().toLowerCase() === "negative"
).length;

    const averageRating =
      total === 0
        ? 0
        : reviews.reduce((sum, review) => sum + review.rating, 0) / total;

    res.json({
      total,
      positive,
      neutral,
      negative,

      positivePercent:
        total === 0 ? 0 : Math.round((positive / total) * 100),

      neutralPercent:
        total === 0 ? 0 : Math.round((neutral / total) * 100),

      negativePercent:
        total === 0 ? 0 : Math.round((negative / total) * 100),

      averageRating: averageRating.toFixed(1),
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};