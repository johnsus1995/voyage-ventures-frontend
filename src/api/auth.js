import customAxios from "../utils/api";

export const login = (data, options) => {
  return customAxios({
    url: "/users/signin",
    method: "POST",
    data,
    ...options,
  });
};

export const register = (data, options) => {
  return customAxios({
    url: "/users/signup",
    method: "POST",
    data,
    ...options,
  });
};