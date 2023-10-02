import Swal from "sweetalert2";

/**
 * Reusable Notification Bar
 * @param {*} text  the text content
 * @param {*} icon  "info" | "warning" | "success" | "error"
 */

export const showToastNotification = (text, icon) => {
  Swal.fire({
    text,
    icon,
    iconColor: "#fff",
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 2000,
    background: icon === "error" ? "#ff0000" : "#ff8323",
    color: "#fff",
  });
};
