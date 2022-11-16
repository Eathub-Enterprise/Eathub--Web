import axios from "axios";
import { URL } from "../../api/index";
import authHeader from "./authHeader";

const vendorSignUp = async (data = {}) => {
  const response = await axios
    .post(URL + "/user/create/vendor/", data)
    .then((response) => {
      if (response) {
        console.log(response);
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
  const response = await axios
    .post(URL + "/token/login", {
      username,
      password
    })
    .then((response) => {
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("vendor", JSON.stringify(response.data));
        localStorage.getItem(
            "vendor",
            JSON.stringify(response.data)
        );
    }
    })
    return response;
};

// To get data for Vendor dashboard

const getVendorData = async (user) => {
  await axios.get(URL + `/users/userdata/${user}`, authHeader());
  return console.log("it worked!");
};

const logOut = async (user) => {
  axios.interceptors.response.use();
};

const getVendorStatus = () => {
  return JSON.parse(localStorage.getItem("vendor"));
};

const authService = {
  vendorSignUp,
  vendorLogin,
  getVendorData,
  getVendorStatus,
  logOut,
};

export default authService;
