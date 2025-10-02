import Swal from "sweetalert2";

export const successAlert = async (message) => {
  return Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    // confirmButtonColor: '#4CAF50'
  });
};

export const dangerAlert = async (message) => {
  return Swal.fire({
    icon: "error",
    title: "Upsss...",
    text: message,
    // confirmButtonColor: '#4CAF50'
  });
};

export const confirmAlert = async (message) => {
  const result = await Swal.fire({
    icon: 'question',
    title: 'Are you sure?',
    text: message,
    showCancelButton: true,
    confirmButtonColor: '#D33',
    cancelButtonColor: '#3085D6',
    confirmButtonText: 'Yes'
  })

  return result.isConfirmed
}
