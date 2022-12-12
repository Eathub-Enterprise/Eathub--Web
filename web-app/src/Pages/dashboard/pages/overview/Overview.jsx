import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVendorData } from "../../../../Redux/actions";
import authService from "../../../../services/auth/authService";

// test Data

const Overview = () => {
  const vendor = useSelector((state) => state.vendor);
  const dispatch = useDispatch();

  const vendorData = async () => {
    const response = await authService.getVendorData()
    .then((details) => {
      dispatch(getVendorData(details));
    });
    return response;
  };

  useEffect(() => {
    vendorData();
    authService.getVendorStatus();
    console.log("Vendor Details", vendor); 
    // need to fix the continous rendering issue
  });

  return <div>overview</div>;
};

export default Overview;
