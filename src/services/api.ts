import axios from "axios";

export const api = axios.create({
  baseURL: "https://wookie.codesubmit.io",
  headers: {
    Authorization: "Bearer Wookie2021",
  },
});
