import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

const responseBody = (response) => response.data;

// for testing
const sleep = (ms) => (response) =>
  new Promise((resolve) => setTimeout(() => resolve(response), ms));

export const requests = {
  listUsers: (pageNum) => axios.get(`users?page=${pageNum}`).then(responseBody),
  addUser: (user) => axios.post("users", user).then(responseBody),
  editUser: (updatedUser, userId) =>
    axios.put(`users/${userId}`, updatedUser).then(responseBody),
  deleteUser: (UserId) => axios.delete(`users/${UserId}`).then(responseBody),
};
