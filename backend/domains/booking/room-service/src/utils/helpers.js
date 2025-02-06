module.exports = {
  generateRoomIdentifier: () => {
    return "ROOM-" + Math.random().toString(36).substr(2, 6).toUpperCase();
  }
};
