const express = require('express');
const { getReviews, addReview } = require('../controllers/reviewController');

const router = express.Router();

router.get('/', getReviews); // Obtener todas las reseñas
router.post('/', addReview); // Agregar una nueva reseña

module.exports = router;
