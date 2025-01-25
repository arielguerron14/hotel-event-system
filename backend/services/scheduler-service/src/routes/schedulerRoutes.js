const express = require('express');
const { createTask, getTasks } = require('../controllers/schedulerController');

const router = express.Router();

router.post('/', createTask);
router.get('/', getTasks);

module.exports = router;
