const express = require("express");
const router = express.Router();
const { generateInvoice, getInvoices } = require("../controllers/billingController");

router.get("/", getInvoices);
router.post("/generate", generateInvoice);

module.exports = router;
