const express = require('express');
const { createUserProfile, getUserProfile, updateUserProfile } = require('../controllers/userProfileController');

const router = express.Router();

router.post('/', createUserProfile);
router.get('/:email', getUserProfile);
router.put('/:email', updateUserProfile);

module.exports = router;
