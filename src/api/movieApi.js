import axios from "axios";
import { baseUrl } from "./movieConfig";

export const movieAPI = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
