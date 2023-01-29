import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

const responseBody = (response) => response.data;

// for testing
const sleep = (ms) => (response) =>
  new Promise((resolve) => setTimeout(() => resolve(response), ms));

export const requests = {
  listUsers: (pageNum) => axios.get(`users?page=${pageNum}`).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  formUrlPost: (url, file) => {
    let formData = new FormData();
    formData.append("file", file);
    return axios
      .post(url, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "content-type": "multipart/form-data",
        },
      })
      .then(responseBody);
  },
  put: (url, body) =>
    axios
      .put(url, body, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      })
      .then(responseBody),

  delete: (url, body) =>
    axios
      .delete(url, body, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      })
      .then(responseBody),
};
