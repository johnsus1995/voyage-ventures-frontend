import customAxios from "../utils/api";

export const login = (config={}) => {
  // const {} = config
  return customAxios({
    url: "/users/signin",
    method: "POST",
    ...config
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