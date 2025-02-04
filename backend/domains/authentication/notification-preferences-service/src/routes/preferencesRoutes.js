const express = require('express');
const { setPreferences, getPreferences } = require('../controllers/preferencesController');

const router = express.Router();

router.put('/', setPreferences);
router.get('/:userId', getPreferences);

module.exports = router;
