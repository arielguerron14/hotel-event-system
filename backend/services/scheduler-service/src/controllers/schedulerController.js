const Task = require('../models/taskModel');

const createTask = async (req, res) => {
  const { name, schedule, action } = req.body;

  if (!name || !schedule || !action) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const task = new Task({ name, schedule, action });
    await task.save();
    res.status(201).json({ message: 'Task scheduled successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Error scheduling task', error });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};

module.exports = { createTask, getTasks };
