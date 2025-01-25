const path = require('path');
const File = require('../models/fileModel');

const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const file = new File({
      originalName: req.file.originalname,
      storedName: req.file.filename,
      filePath: `/uploads/${req.file.filename}`,
      fileType: req.file.mimetype,
      size: req.file.size,
    });

    await file.save();

    res.status(201).json({
      message: 'File uploaded successfully',
      file,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error saving file metadata', error });
  }
};

const downloadFile = async (req, res) => {
  const { fileName } = req.params;

  try {
    const file = await File.findOne({ storedName: fileName });

    if (!file) {
      return res.status(404).json({ message: 'File not found in database' });
    }

    const filePath = path.join(__dirname, '../../uploads', fileName);

    res.download(filePath, (err) => {
      if (err) {
        return res.status(404).json({ message: 'File not found in storage' });
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error downloading file', error });
  }
};

module.exports = { uploadFile, downloadFile };
