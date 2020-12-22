//api config
import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://incredible-blog-app.herokuapp.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrls.production,
});

export default api;
