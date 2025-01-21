const express = require('express');
const { logAccess, getAccessLogs, deleteAccessLog } = require('../controllers/securityController');

const router = express.Router();

router.post('/', logAccess);
router.get('/', getAccessLogs);
router.delete('/:id', deleteAccessLog);

module.exports = router;
