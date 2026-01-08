const mongoose = require("mongoose");

const visaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    processingTime: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    validity: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    popular:{
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Visa", visaSchema);
