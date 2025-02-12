const express = require("express");
const router = express.Router();
const { getLoyaltyPoints, addLoyaltyPoints } = require("../controllers/loyaltyController");

router.get("/", getLoyaltyPoints);
router.post("/", addLoyaltyPoints);

module.exports = router;
