import axios from "axios";

const https = axios.create({
  baseURL: "http://localhost:3000/api/",
  // baseURL: "https://www.jochalets.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default https;
