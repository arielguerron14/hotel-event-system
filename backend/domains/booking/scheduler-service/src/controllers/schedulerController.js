const { getAllSchedules, createSchedule } = require('../models/schedulerModel');

const getSchedules = async (req, res) => {
  try {
    const schedules = await getAllSchedules();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schedules', error: error.message });
  }
};

const addSchedule = async (req, res) => {
  const scheduleData = req.body;

  if (!scheduleData || !scheduleData.id || !scheduleData.task_name || !scheduleData.schedule_time || !scheduleData.status) {
    return res.status(400).json({ message: 'Invalid schedule data' });
  }

  try {
    await createSchedule(scheduleData);
    res.status(201).json({ message: 'Schedule added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding schedule', error: error.message });
  }
};

module.exports = { getSchedules, addSchedule };

