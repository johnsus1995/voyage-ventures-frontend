import axios from "axios";
import { apiErrorHandler, apiSuccessHandler } from "helpers/responseHandler";
import Qs from "qs";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  paramsSerializer: {
    serialize: (params) => Qs.stringify(params, { arrayFormat: "brackets" }),
  },
});

customAxios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("user_token");

    config.headers = {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...config.headers,
    };

    // if (config.query) {
    //   config.url = generatePath(config.url, config.query);
    // }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(apiSuccessHandler, apiErrorHandler);

export default customAxios;
