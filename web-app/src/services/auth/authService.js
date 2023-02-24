import axios from "axios";
import { URL, testURL } from "../../api/index";
import authHeader from "./authHeader";

const vendorSignUp = async (data = {}) => {
  const response = await axios
    .post(testURL + "/user/create/vendor/", data)
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
    .post(testURL + "/token/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("vendor", JSON.stringify(response.data));
        loginStatus = true;
      } else {
        throw Error(`This isn't working due to ${response.status}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return loginStatus;
};

// To get data for Vendor dashboard
const getVendorProfile = async () => {
  const response = await axios
    .get(testURL + `/vendor/profile/`, authHeader())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

// To get Ordered Meals
const getOrderedMeals = async () => {
  const response = await axios
    .get(testURL + `/get_ordered_items_or_change status/null/`, authHeader())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

// To get List of Meals
const getMealList = async () => {
  const response = await axios
    .get(testURL + `/food/all/`, authHeader())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}

const getVendorStatus = () => {
  return JSON.parse(localStorage.getItem("vendor"));
};

const logOut = async () => {
  localStorage.clear();
};

const authService = {
  vendorSignUp,
  vendorLogin,
  getVendorProfile,
  getVendorStatus,
  getOrderedMeals,
  getMealList,
  logOut,
};

export default authService;
