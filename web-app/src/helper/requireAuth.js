import React, { useState, useEffect, createContext, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import ErrorBoundary from "../layouts/ErrorBoundary/ErrorBoundary";
import Preloader from "../layouts/Preloader/Preloader";
import authService from "../services/auth/authService";
import { useGetVendorProfileQuery } from "../model/auth/authServices";
import { useDispatch } from "react-redux";
import { vendorRefreshLogin } from "../model/auth/authAction";

export const ChartDataContext = createContext();

const ProtectedRoute = () => {
  const [chartData, setChartData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Checks if the Vendor has Logged in from token stored in LocalStorage
  let userLoggedIn = authService.getVendorStatus();
  const accessToken = userLoggedIn?.access;
  const refreshValue = userLoggedIn?.refresh;
  let email = JSON.parse(localStorage.getItem("email"));

  // Getting Profile State with RTK
  const { data, error } = useGetVendorProfileQuery(email);

  useEffect(() => {
    // Handles the state context
    if (data) {
      setChartData(data);
    } else {
      setChartData({});
    }

    // always change back to !accessToken
    if (!accessToken) {
      return navigate("/login");
    }

    // Handle Refresh
    const refreshInterval = setInterval(() => {
      try {
        if (refreshValue) {
          dispatch(vendorRefreshLogin({ refresh: refreshValue }));
        } else {
          console.error("Refresh token not available");
        }
      } catch (error) {
        throw error;
      }
    }, 500000);

    // Cleanup interval on component unmount
    return () => clearInterval(refreshInterval);
  }, [data, accessToken, dispatch, refreshValue, navigate, error?.status]);

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
