const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
    },
    airline: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    duration: {
      type: String,
    },
    location: {
      city: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    // تور ویژه یا عادی
    special: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Tour", tourSchema);
