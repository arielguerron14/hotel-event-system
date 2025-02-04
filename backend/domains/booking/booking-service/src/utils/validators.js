module.exports = {
  validateDate: (date) => {
    return !isNaN(Date.parse(date));
  },
  validateBookingData: (data) => {
    return data.user_id && data.room_id && data.check_in && data.check_out;
  }
};
