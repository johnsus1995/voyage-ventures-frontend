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

export const fetchTourById = (id, options) => {
  return customAxios({
    url: `/tours/${id}`,
    method: "GET",
    ...options,
  });
};

export const fetchTourByUserId = (id, options) => {
  return customAxios({
    url: `/tours/user/${id}`,
    method: "GET",
    ...options,
  });
};

export const deleteTour = (id, options) => {
  return customAxios({
    url: `/tours/${id}`,
    method: "DELETE",
    ...options,
  });
};

export const updateTour = (id, options) => {
  return customAxios({
    url: `/tours/${id}`,
    method: "PUT",
    ...options,
  });
};