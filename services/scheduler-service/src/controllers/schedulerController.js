const nodeSchedule = require('node-schedule');
const Task = require('../models/taskModel');

const scheduleTask = async (req, res) => {
  const { name, schedule, action } = req.body;

  if (!name || !schedule || !action) {
    return res.status(400).json({ message: 'Name, schedule, and action are required' });
  }

  try {
    const task = new Task({ name, schedule, action });
    await task.save();

    nodeSchedule.scheduleJob(task._id.toString(), schedule, () => {
      console.log(`Executing task: ${name}`);
    });

    res.status(201).json({ message: 'Task scheduled successfully', task });
  } catch (err) {
    res.status(500).json({ message: 'Failed to schedule task', error: err });
  }
};

module.exports = { scheduleTask };
