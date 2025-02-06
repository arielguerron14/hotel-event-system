const db = require("../models/db");
const cron = require("node-cron");
const { validateScheduleData } = require("../utils/validators");
const { formatCronExpression } = require("../utils/formatters");
const { generateTaskId } = require("../utils/helpers");

exports.getSchedules = (req, res) => {
  db.query("SELECT * FROM schedules", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createSchedule = (req, res) => {
  const { name, cron_expression, task } = req.body;

  if (!validateScheduleData(req.body)) {
    return res.status(400).json({ error: "Invalid schedule data" });
  }

  const formattedCron = formatCronExpression(cron_expression);
  const taskId = generateTaskId();

  db.query(
    "INSERT INTO schedules (task_id, name, cron_expression, task) VALUES (?, ?, ?, ?)",
    [taskId, name, formattedCron, task],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });

      // Crear la tarea cron
      cron.schedule(formattedCron, () => {
        console.log(`Executing scheduled task [${taskId}]: ${task}`);
      });

      res.json({
        message: "Schedule created successfully",
        scheduleId: results.insertId,
        taskId
      });
    }
  );
};

exports.deleteSchedule = (req, res) => {
  const scheduleId = req.params.id;

  db.query("DELETE FROM schedules WHERE id = ?", [scheduleId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Schedule deleted successfully" });
  });
};
