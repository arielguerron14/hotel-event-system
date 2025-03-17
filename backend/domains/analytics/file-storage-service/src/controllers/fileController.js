const path = require("path");
const fs = require("fs");

exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    res.json({ message: "File uploaded successfully", filename: req.file.filename });
};

exports.getFile = (req, res) => {
    const filePath = path.resolve(__dirname, "../../uploads", req.params.filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found" });
    }

    res.sendFile(filePath);
};

exports.deleteFile = (req, res) => {
    const filePath = path.join(__dirname, "../../uploads", req.params.filename);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found" });
    }
    fs.unlinkSync(filePath);
    res.json({ message: "File deleted successfully" });
};


