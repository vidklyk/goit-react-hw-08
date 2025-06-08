import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  delete instance.defaults.headers.common.Authorization;
};

export const contactsAPI = {
  fetchContacts: () => instance.get("/contacts"),
  addContact: (contact) => instance.post("/contacts", contact),
  deleteContact: (id) => instance.delete(`/contacts/${id}`),
};
