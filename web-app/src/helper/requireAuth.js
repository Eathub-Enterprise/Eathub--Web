import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import authService from "../services/auth/authService";
import { useSelector, useDispatch } from "react-redux";
import { getVendorData } from "../Redux/actions";

const ProtectedRoute = () => {
  let userLoggedIn = authService.getVendorStatus();

  const vendor = useSelector((state) => state.vendor);
  const dispatch = useDispatch();

  const vendorData = async () => {
    const response = await authService
      .getVendorData()
      .then((details, headers) => {
        dispatch(getVendorData(details));
      });
    return response;
  };

    // need to fix the continous rendering issue when dependencies is not empty/available
  useEffect(() => {
    // change back to !userLoggedIn
    if (!userLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    authService.getVendorStatus();
    vendorData();
    // console.log("Vendor Details", vendor);
  });
  return (
    <div className="dashboard">
      <main>
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <aside className="body">
          <Outlet />
        </aside>
      </main>
    </div>
  );
};

export default ProtectedRoute;
