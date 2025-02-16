// Validar archivos antes de subirlos
exports.validateFileUpload = (file) => {
    const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
    return allowedTypes.includes(file.mimetype);
};
