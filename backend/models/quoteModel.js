const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    quoteText: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    category: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);