const express = require("express");
const router = express.Router();
const upload = require("../utils/middleware/multerConfig");
const { uploadFile, getFile } = require("../controllers/fileController");

router.post("/upload", (req, res, next) => {
    console.log("📌 Middleware antes de Multer");
    console.log("📢 Headers:", req.headers);
    console.log("📝 Campos recibidos:", req.body);
    console.log("📂 Archivos recibidos:", req.files);
    console.log("📂 Archivo individual:", req.file);
    next();
}, upload.single("file"), uploadFile);

router.get("/:filename", getFile);

module.exports = router;
