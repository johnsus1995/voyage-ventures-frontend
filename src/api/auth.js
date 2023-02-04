import customAxios from "../utils/api";

export const login = (data, options) => {
  // debugger
  return customAxios({
    url: "/users/signin",
    method: "POST",
    data,
    ...options,
  });
};
