import api from "./api";

export const createData = async (data) => {
  return api.post(`/addList`, data).then((res) => res.data);
};

export const getData = async () => {
  return api.get("/getAll").then((res) => res.data);
};
