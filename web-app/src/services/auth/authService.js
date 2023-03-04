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
      console.log("Error occurred during the process of Sign Up : ", err);
    });
  return response;
};

// To Login
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
      console.log("Error Occured on trying to Login : ", error);
    });
  // a kind of state to authenticate that the login happened
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
      console.log("Unable to grab Data for the Dashboard : ", error);
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
      console.log("Error getting the list of Ordered Meals: ", error);
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
      console.log("Error trying to get the list of meals : ", err);
    });
  return response;
};

// To get a particular meal with it's id
const getMeal = async (mealId) => {
  const response = await axios
    .get(testURL + `/vendors/food/get_or_update/${mealId}/`, authHeader())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Unable to grab the ID of Meal : ", err);
    });
  return response;
};

// To get Categories for Meals
const getMealCategory = async () => {
  const response = await axios
    .get(testURL + `/menu/cat/List/`, authHeader())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Unable to get Categories of meals : ", err);
    });
  return response;
};

// To create Meal
const createMeal = async (data = {}) => {
  const key = JSON.parse(localStorage.getItem("vendor"));
  const response = await axios
    .post(testURL + "/menu/food/create_or_getAll/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Token ${key.auth_token}`,
      },
    })
    .then((response) => {
      if (response.data) {
        console.log("Data inputed!");
        // localStorage.clear();
      } else {
        throw Error(`This is clearly not working due to ${response.status}`);
      }
    })
    .catch((err) => {
      console.log(" Error occured during Creation of Meal : ", err);
    });
  return response;
};

// To update a Meal
const updateMeal = async (mealId, updatedMealData) => {
  const response = await axios
    .put(
      testURL + `/vendors/food/get_or_update/${mealId}`,
      updatedMealData,
      authHeader()
    )
    .then((response) => {
      if (response.data) {
        console.log("Data inputed!");
      } else {
        throw Error(`This is clearly not working due to ${response.status}`);
      }
    })
    .catch((err) => {
      console.log("Error Occured during Update : ", err);
    });
  return response;
};

// to delete a meal
const deleteMeal = async (mealId) => {
  const response = await axios
    .delete(testURL + `/vendors/food/get_or_update/${mealId}`, authHeader())
    .then((response) => {
      console.log("Data has been deleted");
    })
    .catch((err) => {
      console.log("Error occured during deletion : ", err);
    });
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
  getVendorProfile,
  getVendorStatus,
  getOrderedMeals,
  getMealList,
  getMeal,
  getMealCategory,
  createMeal,
  updateMeal,
  deleteMeal,
  logOut,
};

export default authService;
