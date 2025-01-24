const express = require('express');
const { createUserProfile, getUserProfile } = require('../controllers/userProfileController');

const router = express.Router();

router.post('/', createUserProfile);
router.get('/:userId', getUserProfile);

module.exports = router;
