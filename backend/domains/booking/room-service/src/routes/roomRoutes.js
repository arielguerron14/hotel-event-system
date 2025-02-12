const express = require("express");
const router = express.Router();
const { getRooms, createRoom, updateRoomStatus } = require("../controllers/roomController");

router.get("/", getRooms);
router.post("/", createRoom);
router.put("/:id", updateRoomStatus);

module.exports = router;
