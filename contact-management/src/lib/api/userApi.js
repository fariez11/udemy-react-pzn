import { apiCall } from "./apiService";

export const userRegister = async (param) => {
  return apiCall(`/users`, "POST", null, param);
};

export const userLogin = async (param) => {
  return apiCall(`/users/login`, "POST", null, param);
};

export const userSession = async (token) => {
  return apiCall(`/users/current`, "GET", token);
};

export const updateName = async (token, param) => {
  return apiCall(`/users/current`, "PATCH", token, param);
};

export const userLogout = async (token) => {
  return apiCall(`/users/logout`, "DELETE", token);
};
