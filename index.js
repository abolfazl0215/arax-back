const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import models
const Blog = require("./models/Blog");
const Tour = require("./models/Tour");
const Review = require("./models/Review");
const Visa = require("./models/Visa");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://xchat:Abolfazl021_@db1.6qsnqns.mongodb.net/?appName=db1",
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Get all blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single blog by id
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new blog
app.post("/api/blogs", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a blog
app.put("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a blog
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ==================== TOUR ROUTES ====================

// Get all tours
app.get("/api/tours", async (req, res) => {
  try {
    // const filter = {};
    // // اگر ?special=true/false فرستاده شود، فقط همان نوع برگردد
    // if (typeof req.query.special !== "undefined") {
    //   filter.special = req.query.special === "true";
    // }
    const tours = await Tour.find({});
    console.log({ tours });
    res.json(tours);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single tour by id
app.get("/api/tours/:id", async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.json(tour);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new tour
app.post("/api/tours", async (req, res) => {
  try {
    const tour = new Tour(req.body);
    await tour.save();
    res.status(201).json(tour);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a tour
app.put("/api/tours/:id", async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.json(tour);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a tour
app.delete("/api/tours/:id", async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.json({ message: "Tour deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ==================== REVIEW ROUTES ====================

// Get all reviews
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single review by id
app.get("/api/reviews/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new review
app.post("/api/reviews", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a review
app.put("/api/reviews/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a review
app.delete("/api/reviews/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ==================== VISA ROUTES ====================

// Get all visas
app.get("/api/visas", async (req, res) => {
  try {
    const visas = await Visa.find({});
    console.log({ visas });
    res.json(visas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single visa by id
app.get("/api/visas/:id", async (req, res) => {
  try {
    const visa = await Visa.findById(req.params.id);
    if (!visa) {
      return res.status(404).json({ error: "Visa not found" });
    }
    res.json(visa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new visa
app.post("/api/visas", async (req, res) => {
  try {
    const visa = new Visa(req.body);
    await visa.save();
    res.status(201).json(visa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a visa
app.put("/api/visas/:id", async (req, res) => {
  try {
    const visa = await Visa.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!visa) {
      return res.status(404).json({ error: "Visa not found" });
    }
    res.json(visa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a visa
app.delete("/api/visas/:id", async (req, res) => {
  try {
    const visa = await Visa.findByIdAndDelete(req.params.id);
    if (!visa) {
      return res.status(404).json({ error: "Visa not found" });
    }
    res.json({ message: "Visa deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/getAllData", async (req, res) => {
  try {
    const blogs = await Blog.find();
    const tours = await Tour.find();
    const reviews = await Review.find();
    const visas = await Visa.find();
    res.json({ blogs, tours, reviews, visas });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
