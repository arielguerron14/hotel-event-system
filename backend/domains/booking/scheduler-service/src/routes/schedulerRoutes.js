const express = require("express");
const router = express.Router();
const { createSchedule, getSchedules, deleteSchedule } = require("../controllers/schedulerController");

router.get("/", getSchedules);
router.post("/", createSchedule);
router.delete("/:id", deleteSchedule);

module.exports = router;
