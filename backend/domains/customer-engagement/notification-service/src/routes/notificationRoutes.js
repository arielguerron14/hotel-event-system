const express = require('express');
const { getNotifications, sendNotification } = require('../controllers/notificationController');

const router = express.Router();

router.get('/', getNotifications); // Obtener todas las notificaciones
router.post('/', sendNotification); // Enviar una nueva notificación

module.exports = router;
