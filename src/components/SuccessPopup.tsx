import Swal from "sweetalert2";

function SuccessPopup() {
  return Swal.fire({
    icon: "success",
    title: "Success",
    showConfirmButton: false,
    timer: 1500,
  });
}

export default SuccessPopup;
