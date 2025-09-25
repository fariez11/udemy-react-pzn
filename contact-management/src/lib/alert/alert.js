import Swal from "sweetalert2";

export const successAlert = (message) => {
  return Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    // confirmButtonColor: '#4CAF50'
  });
};


export const dangerAlert = (message) => {
  return Swal.fire({
    icon: "error",
    title: "Upsss...",
    text: message,
    // confirmButtonColor: '#4CAF50'
  });
};
