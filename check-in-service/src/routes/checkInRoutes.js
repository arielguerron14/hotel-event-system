const express = require('express');
const { registerCheckIn, getCheckIns, updateCheckIn, deleteCheckIn } = require('../controllers/checkInController');

const router = express.Router();

router.post('/', registerCheckIn);
router.get('/', getCheckIns);
router.put('/:id', updateCheckIn);
router.delete('/:id', deleteCheckIn);

module.exports = router;
