const express = require('express');
const { getSchedules, addSchedule } = require('../controllers/schedulerController');

const router = express.Router();

router.get('/', getSchedules); // Obtener todos los horarios
router.post('/', addSchedule); // Agregar un nuevo horario

module.exports = router;
