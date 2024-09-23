import Swal from "sweetalert2";

export default function ErrorPopup(errorMessage: string) {
  return Swal.fire({
    icon: "error",
    title: "Something went wrong!",
    text: `${errorMessage}`,
  });
}
