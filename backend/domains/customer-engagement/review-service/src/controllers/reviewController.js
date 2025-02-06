const db = require("../models/db");
const { validateReviewData } = require("../utils/validators");
const { formatReviewMessage } = require("../utils/formatters");
const { generateReviewId } = require("../utils/helpers");

exports.getReviews = (req, res) => {
  db.query("SELECT * FROM reviews", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.submitReview = (req, res) => {
  const { customer_id, rating, comments } = req.body;

  if (!validateReviewData(req.body)) {
    return res.status(400).json({ error: "Invalid review data" });
  }

  const reviewId = generateReviewId();
  const formattedComments = formatReviewMessage(comments);

  db.query(
    "INSERT INTO reviews (review_id, customer_id, rating, comments) VALUES (?, ?, ?, ?)",
    [reviewId, customer_id, rating, formattedComments],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Review submitted successfully",
        reviewId,
        formattedComments
      });
    }
  );
};
