const express = require('express');
const multer = require('multer');
const { uploadFile, downloadFile } = require('../controllers/fileController');

const router = express.Router();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), uploadFile);
router.get('/download/:fileName', downloadFile);

module.exports = router;
