import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getEvents = async () => {
  return await axios.get(`${API_URL}/events`);
};
