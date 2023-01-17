import axios, { AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
  baseURL: "https://api.chess.com/pub",
});
