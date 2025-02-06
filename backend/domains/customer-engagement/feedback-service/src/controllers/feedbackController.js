const db = require("../models/db");
const { validateFeedbackData } = require("../utils/validators");
const { formatFeedbackMessage } = require("../utils/formatters");
const { generateFeedbackId } = require("../utils/helpers");

exports.getFeedback = (req, res) => {
  db.query("SELECT * FROM feedback", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.submitFeedback = (req, res) => {
  const { customer_id, rating, comments } = req.body;

  if (!validateFeedbackData(req.body)) {
    return res.status(400).json({ error: "Invalid feedback data" });
  }

  const feedbackId = generateFeedbackId();
  const formattedComments = formatFeedbackMessage(comments);

  db.query(
    "INSERT INTO feedback (feedback_id, customer_id, rating, comments) VALUES (?, ?, ?, ?)",
    [feedbackId, customer_id, rating, formattedComments],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Feedback submitted successfully",
        feedbackId,
        formattedComments
      });
    }
  );
};
