import api from "./api";

export const createData = async (data) => {
  return api.post(`/addList`, data).then((res) => res.data);
};

export const getData = async () => {
  return api.get("/getAll").then((res) => res.data);
};

export const getEditData = async (slug) => {
  return api.get(`/edit/${slug}`).then((res) => res.data);
};

export const updateData = async (slugCustomer, slugTrans, data) => {
  return api
    .put(`/update/customer/${slugCustomer}/transaction/${slugTrans}`, {
      data,
    })
    .then((res) => res.data);
};

export const deleteData = async (slug) => {
  return api.delete(`/delete/${slug}`).then((res) => res.data);
};
