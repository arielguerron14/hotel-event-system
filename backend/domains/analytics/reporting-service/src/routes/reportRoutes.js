const express = require("express");
const router = express.Router();
const { generateReport } = require("../controllers/reportingController");

router.get("/:reportType", generateReport);

module.exports = router;
