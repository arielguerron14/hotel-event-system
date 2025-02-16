// Formatea el nombre del archivo antes de guardarlo
exports.formatFileName = (originalName) => {
    return originalName.replace(/\s+/g, "_").toLowerCase();
};
