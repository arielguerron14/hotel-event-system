const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { validateFileUpload } = require("../utils/validators");
const { formatFileName } = require("../utils/formatters");
const { generateFileId } = require("../utils/helpers");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

exports.uploadFile = (req, res) => {
  if (!req.file || !validateFileUpload(req.file)) {
    return res.status(400).json({ error: "Invalid file upload" });
  }

  const formattedFileName = formatFileName(req.file.originalname);
  const fileId = generateFileId();

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: formattedFileName,
    Body: fs.createReadStream(req.file.path),
    ContentType: req.file.mimetype
  };

  s3.upload(params, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({
      message: "File uploaded successfully",
      fileId,
      fileUrl: data.Location
    });
  });
};

exports.getFile = (req, res) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: req.params.filename
  };

  s3.getObject(params, (err, data) => {
    if (err) return res.status(404).json({ error: "File not found" });

    res.setHeader("Content-Type", data.ContentType);
    res.send(data.Body);
  });
};
