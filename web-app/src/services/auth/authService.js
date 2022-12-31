import axios from "axios";
import { URL } from "../../api/index";
import authHeader from "./authHeader";

const vendorSignUp = async (data = {}) => {
  const response = await axios
    .post(URL + "/user/create/vendor/", data)
    .then((response) => {
      if (response.data) {
        localStorage.clear();
      } else {
        throw Error(`This isn't working due to ${response.status}`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

const vendorLogin = async (username, password) => {
  let loginStatus = false;
  await axios
    .post(URL + "/token/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("vendor", JSON.stringify(response.data));
        loginStatus = true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return loginStatus;
};

// To get data for Vendor dashboard
const getVendorData = async () => {
  let user = JSON.parse(localStorage.getItem("vendor"));
  const response = await axios
    .get(URL + `/user/vendordata/${user.auth_token}`, authHeader())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // handle error
      if (error.response.status === 404) {
        console.error("User not found");
      } else if (error.response.status === 500) {
        console.error("Internal server error");
      } else {
        console.error(error.message);
      }
    });
  return response;
};

const getVendorStatus = () => {
  return JSON.parse(localStorage.getItem("vendor"));
};

const logOut = async () => {
  localStorage.clear();
};

const authService = {
  vendorSignUp,
  vendorLogin,
  getVendorData,
  getVendorStatus,
  logOut,
};

export default authService;
