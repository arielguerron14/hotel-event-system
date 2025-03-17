const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storagePath = process.env.FILE_STORAGE_PATH || path.resolve(__dirname, "../../../uploads");

// 🔹 Verifica si la carpeta de almacenamiento existe y créala si no está
if (!fs.existsSync(storagePath)) {
    console.log(`📂 Creando directorio: ${storagePath}`);
    fs.mkdirSync(storagePath, { recursive: true });
}

// 🔹 Configuración de `multer`
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("📂 Guardando archivo en:", storagePath);
        cb(null, storagePath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

module.exports = multer({ storage });
