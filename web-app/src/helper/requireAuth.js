import React, { useState, useEffect, createContext, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import ErrorBoundary from "../layouts/ErrorBoundary/ErrorBoundary";
import Preloader from "../layouts/Preloader/Preloader";
import authService from "../services/auth/authService";
// import ErrorBoundary from "../layouts/ErrorBoundary/ErrorBoundary";

export const ChartDataContext = createContext();

const ProtectedRoute = () => {
  const [chartData, setChartData] = useState({});
  const navigate = useNavigate();

  let userLoggedIn = authService.getVendorStatus();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getVendorProfile();
        setChartData(response.data);
        localStorage.setItem("vendor-info", JSON.stringify(response.data));
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    // always change back to !userLoggedIn
    if (!userLoggedIn) {
      return navigate("/");
    }
    authService.getVendorStatus();
  }, []);

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
