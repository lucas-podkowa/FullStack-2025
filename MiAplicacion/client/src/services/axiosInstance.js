import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  // baseURL: "http://localhost:3000/api",
  // tu API base
  timeout: 5000,
  // 5 segundos de timeout
});

export default axiosInstance;
