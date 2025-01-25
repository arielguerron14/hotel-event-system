const express = require('express');
const { createAuditLog, getAuditLogs } = require('../controllers/auditLogController');

const router = express.Router();

router.post('/', createAuditLog);
router.get('/', getAuditLogs);

module.exports = router;
