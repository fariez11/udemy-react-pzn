export const addressAdd = async (token, id, param) => {
  return await fetch(
    `${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
      body: JSON.stringify(param),
    }
  );
};

export const addressList = async (token, id) => {
  return await fetch(
    `${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      }
    }
  );
};

export const addressDetail = async (token, contactId, addressId) => {
  return await fetch(
    `${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses/${addressId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      }
    }
  );
};

export const addressUpdate = async (token, contactId, addressId, param) => {
  return await fetch(
    `${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses/${addressId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
      body: JSON.stringify(param)
    }
  );
};

export const addressDelete = async (token, contactId, addressId) => {
  return await fetch(
    `${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses/${addressId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      }
    }
  );
};
