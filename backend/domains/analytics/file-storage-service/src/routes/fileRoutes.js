const express = require("express");
const router = express.Router();
const { uploadFile, getFile, deleteFile } = require("../controllers/fileController");
const upload = require("../utils/middleware/uploadMiddleware");

router.post("/upload", upload.single("file"), uploadFile);
router.get("/:filename", getFile);  // 🔥 Elimina `/files`
router.delete("/:filename", deleteFile);  // 🔥 Elimina `/files`

module.exports = router;
