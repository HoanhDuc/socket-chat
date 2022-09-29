import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token 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`,
    accept: "application/vnd.github+json"
  },
});

export const $axios = axios;
export const $axiosInstance = axiosInstance;
