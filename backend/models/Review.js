const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
    },

    hotelName: {
       type: String,
       default: "",
    },

    review: {
      type: String,
      required: true,
    },

    rating: {
     type: Number,
     default: 0,
    },

    sentiment: {
      type: String,
      default: "Neutral",
    },

    theme: {
      type: String,
      default: "General",
    },

    response: {
      type: String,
      default: "Thank you for your valuable feedback.",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);