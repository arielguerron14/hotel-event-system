const express = require('express');
const { addEventToCalendar, getCalendarEvents, deleteCalendarEvent } = require('../controllers/calendarController');

const router = express.Router();

router.post('/', addEventToCalendar);
router.get('/', getCalendarEvents);
router.delete('/:id', deleteCalendarEvent);

module.exports = router;
