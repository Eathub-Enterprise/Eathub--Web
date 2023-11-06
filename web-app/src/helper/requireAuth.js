import React, { useState, useEffect, createContext, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import ErrorBoundary from "../layouts/ErrorBoundary/ErrorBoundary";
import Preloader from "../layouts/Preloader/Preloader";
import authService from "../services/auth/authService";
import { useGetVendorProfileQuery } from "../model/auth/authServices";

export const ChartDataContext = createContext();

const ProtectedRoute = () => {
  const [chartData, setChartData] = useState({});
  const navigate = useNavigate();

  const { data } = useGetVendorProfileQuery();
  // Checks if the Vendor has Logged in from token stored in LocalStorage
  let userLoggedIn = authService.getVendorStatus();

  useEffect(() => {
    if (data) {
      setChartData(data);
    } else {
      setChartData({});
    }

    // always change back to !userLoggedIn
    if (!userLoggedIn) {
      return navigate("/login");
    }
  }, [data, navigate, userLoggedIn]);

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
