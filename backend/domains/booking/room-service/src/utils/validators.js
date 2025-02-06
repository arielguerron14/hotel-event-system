module.exports = {
  validateRoomData: (data) => {
    return (
      data.room_number &&
      typeof data.room_number === "number" &&
      data.type &&
      typeof data.price === "number" &&
      ["available", "occupied", "maintenance"].includes(data.status)
    );
  }
};
