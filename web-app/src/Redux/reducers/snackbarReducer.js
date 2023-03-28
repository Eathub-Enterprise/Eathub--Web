import { actionTypes } from "../constants";

const initialState = {
  open: false,
  message: "",
  duration: 0,
};

export default function snackbarReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPEN_SNACKBAR:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        duration: action.payload.duration,
      };
    case actionTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        open: false,
        message: "",
        duration: 0,
      };
    default:
      return state;
  }
}
