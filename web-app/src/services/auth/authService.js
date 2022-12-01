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
      password,
    })
    .then((response) => {
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("vendor", JSON.stringify(response.data));
        localStorage.getItem("vendor", JSON.parse(response.data));
      }
    });
  return response;
};

// To get data for Vendor dashboard
const getVendorData = async () => {
  let user = JSON.parse(localStorage.getItem("vendor"));
  await axios.get(URL + `/users/userdata/${user.auth_token}`, authHeader());
  return console.log("it worked!");
};


// OR this template

async function request({
  method = "GET",
  url,
  data = {},
  dispatch,
  response,
  useBaseURL = true,
}) {
  let baseURL = {};

  if (useBaseURL) {
    baseURL = { baseURL: URL };
  }
  try {
    const vendor = JSON.parse(localStorage.getItem("vendor"));
    const token = vendor?.auth_token || "";
    console.log(token);
    const result = await axios.request({
      ...baseURL,
      url,
      method,
      data,
      headers: {
        authorization: token,
      },
      response,
      dispatch,
    });

    return result.data;
  } catch (err) {
    const error = err?.response?.data || err.msg;

    if (typeof error == "string") {
      //handle
      throw new Error(error);
    } else {
      const { status, ...rest } = error;
      throw new Error(error);
    }
  }
}

const getVendorStatus = () => {
  return JSON.parse(localStorage.getItem("vendor"));
}


const logOut = async () => {
  await localStorage.clear();
};

const authService = {
  vendorSignUp,
  vendorLogin,
  getVendorData,
  getVendorStatus,
  request,
  logOut,
};

export default authService;
