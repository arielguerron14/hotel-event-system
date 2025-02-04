const express = require('express');
const { getFeedback, submitFeedback } = require('../controllers/feedbackController');

const router = express.Router();

router.get('/', getFeedback); // Obtener todos los feedbacks
router.post('/', submitFeedback); // Enviar feedback

module.exports = router;
