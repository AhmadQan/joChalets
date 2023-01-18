import axios from "axios";

const https = axios.create({
  baseURL: "https://jo-chalets.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default https;
