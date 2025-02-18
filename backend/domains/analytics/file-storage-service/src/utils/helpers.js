// Genera un ID único para los archivos subidos
exports.generateFileId = () => {
  return "FILE-" + Math.random().toString(36).substr(2, 9).toUpperCase();
};
