import customAxios from "../utils/api";

export const create = (config={}) => {
    // const {} = config
    return customAxios({
      url: "/tours/create",
      method: "POST",
      ...config
    });
  };