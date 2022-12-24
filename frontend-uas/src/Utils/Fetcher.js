import axios from "axios";

export default async function fetcher(url, config) {
  try {
    return await axios(url, config);
  } catch (error) {
    if (error.response.status === 401) {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    return error;
  }
}