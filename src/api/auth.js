import customAxios from "../utils/api";

export const login = (data, options) => {
  return customAxios({
    url: "/login",
    method: "POST",
    data,
    ...options,
  });
};
