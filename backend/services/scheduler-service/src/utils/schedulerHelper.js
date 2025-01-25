const cron = require('node-cron');
const Task = require('../models/taskModel');

// Función para ejecutar tareas
const executeTask = (action) => {
  console.log(`Executing task: ${action}`);
  // Aquí se puede agregar lógica específica, como enviar un correo o notificación
};

// Función para iniciar el programador de tareas
const startScheduler = async () => {
  try {
    const tasks = await Task.find();

    tasks.forEach((task) => {
      cron.schedule(task.schedule, () => {
        executeTask(task.action);
      });
      console.log(`Task "${task.name}" scheduled with schedule: ${task.schedule}`);
    });
  } catch (error) {
    console.error('Error initializing scheduler:', error);
  }
};

module.exports = { startScheduler };
