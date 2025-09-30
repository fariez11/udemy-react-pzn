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
