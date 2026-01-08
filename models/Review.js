const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    reviewer: {
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
    },
    tour: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    videoThumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Review", reviewSchema);
