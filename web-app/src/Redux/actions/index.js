import { actionTypes } from "../constants";

export const getVendorData = (vendor_data) => {
    return {
        type: actionTypes.VENDOR_INFO,
        payload: vendor_data
    }
}