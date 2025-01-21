const express = require('express');
const { addHotel, getHotels, updateHotel, deleteHotel } = require('../controllers/hotelController');

const router = express.Router();

router.post('/', addHotel);
router.get('/', getHotels);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);

module.exports = router;
