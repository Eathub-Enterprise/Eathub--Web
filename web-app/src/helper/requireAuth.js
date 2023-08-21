import React, { useState, useEffect, createContext, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import ErrorBoundary from "../layouts/ErrorBoundary/ErrorBoundary";
import Preloader from "../layouts/Preloader/Preloader";
import useDataFetch from "../Hooks/useDataFetch";
import authHeader from "../services/auth/authHeader";
// import ErrorBoundary from "../layouts/ErrorBoundary/ErrorBoundary";

export const ChartDataContext = createContext();

const ProtectedRoute = () => {
  const [chartData, setChartData] = useState({});
  const navigate = useNavigate();
  // Checks if the Vendor has Logged in from token stored in LocalStorage
  const getVendorStatus = () => {
    return JSON.parse(localStorage.getItem("vendorInfo"));
  };
  let userLoggedIn = getVendorStatus();
  // using the custom hook i created
  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useDataFetch(URL + `/vendor/profile`, authHeader());

  useEffect(() => {
    if (profileData) {
      setChartData(profileData);
      localStorage.setItem("vendor-info", JSON.stringify(profileData));
    }

    // always change back to !userLoggedIn
    if (userLoggedIn) {
      return navigate("/");
    }
    getVendorStatus();
  }, [profileData, userLoggedIn, navigate]);

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
