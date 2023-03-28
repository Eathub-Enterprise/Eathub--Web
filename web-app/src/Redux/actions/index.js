import { actionTypes } from "../constants";

export const getVendorData = (vendor_data) => {
  return {
    type: actionTypes.VENDOR_INFO,
    payload: vendor_data,
  };
};

export const openSnackbar = (message, duration) => {
  return {
    type: actionTypes.OPEN_SNACKBAR,
    payload: { message, duration },
  };
};

export const closeSnackbar = () => ({
  type: actionTypes.CLOSE_SNACKBAR,
});
