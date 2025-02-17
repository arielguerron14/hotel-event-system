const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const upload = require("../utils/middleware/multerConfig");
const { uploadFile, getFile } = require("../controllers/fileController");

// ✅ Nueva ruta para listar archivos en /files
router.get("/", (req, res) => {
    const directoryPath = "/var/www/file-storage"; // Ruta donde se guardan los archivos
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Error al listar archivos" });
        }
        res.json({ files });
    });
});

// ✅ Ruta para subir archivos
router.post("/upload", upload.single("file"), uploadFile);

// ✅ Ruta para obtener un archivo por nombre
router.get("/:filename", getFile);

module.exports = router;
