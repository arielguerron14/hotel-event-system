const express = require("express");
const router = express.Router();
const reportingController = require("../controllers/reportingController"); // Asegúrate de que no falta ".js"

router.get("/", reportingController.getReports);

module.exports = router;
