
const express = require("express");
const router = express.Router();
const Quote = require("../models/quoteModel");
const verifyToken = require("../middleware/authMiddleware");

// Create or upload data
router.post("/upload",  verifyToken, async (req, res) => {
  
  try {
       const { quoteText, author, category } = req.body;

    // validation
    if (!quoteText || !author || !category) {
      return res.status(400).json({
        message: "Quote text, author and category are required",
      });
    }

    const quote = await Quote.create({
      quoteText,
      author,
      category: category.toLowerCase(),
      
    });

    res.status(201).json({
      success: true,
      data: quote,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});


// GET all quotes + category filter
router.get("/quotes", async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};

    // apply filter if category exists
    if (category) {
      filter.category = category.toLowerCase();
    }

    const quotes = await Quote.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: quotes.length,
      data: quotes,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});


router.get("/search",async (req, res) => {
  try {
    const { author } = req.query;

    if (!author) {
      return res.status(400).json({ message: "Author is required" });
    }

    const results = await Quote.find({
      author: { $regex: `^${author}`, $options: "i" } 
    });

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;