import { actionTypes } from '../constants';

const initialState = {
    vendor: [],
};

export const vendorReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.VENDOR_INFO:
            return { ...state, vendor:payload}
        default:
            return state;
    }
};