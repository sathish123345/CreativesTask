import axios from "axios";
import apiConfig from "../config/api-config";

const apiClient = axios.create({
  baseURL: apiConfig.baseUrl,
  responseType: "json",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { apiClient, apiConfig };
