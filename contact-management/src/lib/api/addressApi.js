import { apiCall } from './apiService'

export const addressAdd = async (token, id, param) => {
  return apiCall(`/contacts/${id}/addresses`, 'POST', token, param)
};

export const addressList = async (token, id) => {
  return apiCall(`/contacts/${id}/addresses`, 'GET', token)
};

export const addressDetail = async (token, contactId, addressId) => {
  return apiCall(`/contacts/${contactId}/addresses/${addressId}`, 'GET', token)
};

export const addressUpdate = async (token, contactId, addressId, param) => {
  return apiCall(`/contacts/${contactId}/addresses/${addressId}`, 'PUT', token, param)
};

export const addressDelete = async (token, contactId, addressId) => {
  return apiCall(`/contacts/${contactId}/addresses/${addressId}`, 'DELETE', token)
};
