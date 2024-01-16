import React, { useState, useEffect, createContext, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import ErrorBoundary from "../layouts/ErrorBoundary/ErrorBoundary";
import Preloader from "../layouts/Preloader/Preloader";
import authService from "../services/auth/authService";
import { useGetVendorProfileQuery } from "../model/auth/authServices";
import { useDispatch, useSelector } from "react-redux";
import { vendorRefreshLogin } from "../model/auth/authAction";

export const ChartDataContext = createContext();

const ProtectedRoute = () => {
  const [chartData, setChartData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { data } = useGetVendorProfileQuery();

  // Checks if the Vendor has Logged in from token stored in LocalStorage
  let userLoggedIn = authService.getVendorStatus();
  const accessToken = userLoggedIn?.access;
  const refreshValue = userLoggedIn?.refresh;

  useEffect(() => {
    // if (data) {
    //   setChartData(data);
    // } else {
    //   setChartData({});
    // }

    // always change back to !accessToken
    if (!accessToken) {
      if (refreshValue) {
        console.log("Refresh Token called: ", refreshValue);
        // Handling refresh state with RTK
        dispatch(vendorRefreshLogin({ refresh: refreshValue }));
      } else {
        return navigate("/login");
      }
    }
  }, [accessToken, dispatch, navigate, refreshValue, userLoggedIn]);

  return (
    <div className="dashboard">
      <ChartDataContext.Provider value={chartData}>
        <Suspense fallback={<Preloader />}>
          <ErrorBoundary>
            <main>
              <aside className="sidebar">
                <Sidebar />
              </aside>
              <aside className="body">
                <Outlet />
              </aside>
            </main>
          </ErrorBoundary>
        </Suspense>
      </ChartDataContext.Provider>
    </div>
  );
};

export default ProtectedRoute;
