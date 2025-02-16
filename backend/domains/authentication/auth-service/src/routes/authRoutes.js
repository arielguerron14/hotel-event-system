const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/", (req, res) => {
    res.json({ message: "Auth Service is running" });
});

router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
