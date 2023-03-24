import customAxios from "../utils/api";

export const create = (data, options) => {
  return customAxios({
    url: "/tours/create",
    method: "POST",
    data,
    ...options,
  });
};

export const fetchAllTours = (data, options) => {
  return customAxios({
    url: "/tours/all-tours",
    method: "GET",
    data,
    ...options,
  });
};