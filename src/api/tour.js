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

export const updateTour = (config) => {
  const {data} = config
  const id = config.options.query.id
  return customAxios({
    url: `/tours/${id}`,
    method: "PUT",
    // ...options,
    data,
  });
};

export const searchTours = (search_query) => {
  return customAxios({
    url: `/tours/search?search_query=${search_query}`,
    method: "GET",
    // data,
    // ...options,
  });
};