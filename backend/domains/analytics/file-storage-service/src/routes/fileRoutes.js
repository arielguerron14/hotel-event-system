const express = require("express");
const router = express.Router();
const { uploadFile, getFile } = require("../controllers/fileStorageController");
const upload = require("../utils/middleware/multerConfig");

router.post("/upload", upload.single("file"), uploadFile);
router.get("/:filename", getFile);

module.exports = router;
