const fs = require("fs");
const path = require("path");

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({
    message: "File uploaded successfully",
    filename: req.file.filename,
    path: req.file.path
  });
};

exports.getFile = (req, res) => {
  const filePath = path.join("/var/www/file-storage", req.params.filename);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  res.sendFile(filePath);
};

