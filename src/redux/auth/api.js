import axios from "axios";

const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeader = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete authInstance.defaults.headers.common.Authorization;
};

export default authInstance;
