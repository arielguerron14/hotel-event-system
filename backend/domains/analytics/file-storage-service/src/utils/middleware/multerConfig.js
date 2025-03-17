const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storagePath = process.env.STORAGE_PATH || "/var/www/file-storage";

// Asegurar que el directorio existe
if (!fs.existsSync(storagePath)) {
    console.log(`📂 Creando directorio: ${storagePath}`);
    fs.mkdirSync(storagePath, { recursive: true });
}

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("📂 Destino de guardado:", storagePath);
    cb(null, storagePath);
  },
  filename: (req, file, cb) => {
    console.log("📄 Nombre del archivo recibido:", file.originalname);
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

module.exports = upload;
