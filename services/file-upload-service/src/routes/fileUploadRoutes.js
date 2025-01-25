const express = require('express');
const { upload, uploadFile } = require('../controllers/fileUploadController');

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
