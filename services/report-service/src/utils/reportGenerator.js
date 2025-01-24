const axios = require('axios');

const generateEventReport = async () => {
  const events = await axios.get('http://event-service:3001/api/events');
  const report = events.data.map(event => ({
    eventName: event.name,
    attendees: event.attendees.length,
    date: event.date,
  }));

  return report;
};

const generateUserReport = async () => {
  const users = await axios.get('http://user-profile-service:3004/api/user-profiles');
  const report = users.data.map(user => ({
    userName: user.name,
    email: user.email,
    preferences: user.preferences,
  }));

  return report;
};

module.exports = { generateEventReport, generateUserReport };
