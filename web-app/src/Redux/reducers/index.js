import { combineReducers } from "redux";
import { vendorReducer } from "./vendorReducer";

const reducer = combineReducers({
    vendor: vendorReducer
});

export default reducer;