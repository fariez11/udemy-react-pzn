import { dangerAlert } from "../alert/alert";

const baseUrl = import.meta.env.VITE_API_PATH;
const craeteHeaders = (token) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (token) {
    headers["Authorization"] = token;
  }

  return headers;
};

export const apiCall = async (url, method, token, body = null) => {
  try {
    const config = {
      method,
      headers: craeteHeaders(token),
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(`${baseUrl}${url}`, config);
    return response;
  } catch (error) {
    dangerAlert(error);
  }
};
