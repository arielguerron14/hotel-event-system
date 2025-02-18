const express = require("express");
const router = express.Router();
const { getInventory, addItem, deleteItem } = require("../controllers/inventoryController");
const authMiddleware = require("../utils/middleware/authMiddleware");

router.get("/", authMiddleware, getInventory);
router.post("/", authMiddleware, addItem);
router.delete("/:id", authMiddleware, deleteItem);

module.exports = router;
