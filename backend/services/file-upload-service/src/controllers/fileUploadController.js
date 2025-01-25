const multer = require('multer');
const File = require('../models/fileModel');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadFile = (req, res) => {
  const { file } = req;
  if (!file) {
    return res.status(400).json({ message: 'No file provided' });
  }

  const fileRecord = new File({
    fileName: file.originalname,
    filePath: file.path,
    fileSize: file.size,
  });

  fileRecord.save()
    .then(() => res.status(201).json({ message: 'File uploaded successfully', file: fileRecord }))
    .catch((err) => res.status(500).json({ message: 'Failed to save file record', error: err }));
};

module.exports = { upload, uploadFile };
