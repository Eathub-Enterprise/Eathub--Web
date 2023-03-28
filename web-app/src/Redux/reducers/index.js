import { combineReducers } from "redux";
import snackbarReducer from "./snackbarReducer";
import { vendorReducer } from "./vendorReducer";

const reducer = combineReducers({
    vendor: vendorReducer,
    snackbar: snackbarReducer
});

export default reducer;