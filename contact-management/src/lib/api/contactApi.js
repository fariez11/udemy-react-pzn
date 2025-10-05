import { apiCall } from "./apiService";

export const contactCreate = async (token, param) => {
  return apiCall(`${baseUrl}/contacts`, 'POST', token, param)
};

export const contactList = async (token, { name, email, phone, page }) => {
  const queryParams = new URLSearchParams();
  if (name) queryParams.append("name", name);
  if (email) queryParams.append("email", email);
  if (phone) queryParams.append("phone", phone);
  if (page) queryParams.append("page", page);

  return apiCall(`/contacts${queryParams.toString() ? `?${queryParams.toString()}` : ''}`, 'GET', token);
};

export const contactDetail = async (token, id) => {
 return apiCall(`/contacts/${id}`, 'GET', token)
};

export const contactUpdate = async (token, id, param) => {
  return apiCall(`/contacts/${id}`, 'PUT', token, param)
};

export const contactDelete = async (token, id) => {
  return apiCall(`/contacts/${id}`, 'DELETE', token)
};
