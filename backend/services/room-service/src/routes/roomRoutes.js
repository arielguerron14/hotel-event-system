const express = require('express');
const { addRoom, getRooms, updateRoomAvailability } = require('../controllers/roomController');

const router = express.Router();

router.post('/', addRoom);
router.get('/', getRooms);
router.put('/:id', updateRoomAvailability);

module.exports = router;
