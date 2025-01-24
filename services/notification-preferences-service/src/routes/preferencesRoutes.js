const express = require('express');
const { updatePreferences, getPreferences } = require('../controllers/preferencesController');

const router = express.Router();

router.put('/', updatePreferences);
router.get('/:userId', getPreferences);

module.exports = router;
