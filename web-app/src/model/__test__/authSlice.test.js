import { configureStore } from "@reduxjs/toolkit";
import authSlice, {
  vendorLogin,
  vendorRegister,
  setCredentials,
} from "./authSlice";

test("AuthSlice behaviour", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authSlice,
      },
    });
  });

  test("Intitialise State", () => {
    it("Should initialise with default values", () => {
      const initialState = store.getState().auth;
      expect(initialState).toEqual({
        loading: false,
        vendor: null,
        error: null,
        success: false,
        auth_token: null,
      });
    });

    it("should set loading to false and update vendor on vendorLogin.fulfilled", () => {
      const mockPayload = {
        
      };
      store.dispatch(vendorLogin.fulfilled(mockPayload));
      const state = store.getState().auth;
      expect(state.loading).toBe(false);
      expect(state.vendor).toBe(mockPayload);
    });

    it("should set loading to false and update error on vendorLogin.rejected", () => {
      const mockErrorPayload = {
        /* your mock error payload here */
      };
      store.dispatch(vendorLogin.rejected(mockErrorPayload));
      const state = store.getState().auth;
      expect(state.loading).toBe(false);
      expect(state.error).toBe(mockErrorPayload);
    });
  });
});
