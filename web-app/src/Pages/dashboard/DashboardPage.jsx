import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./dashboardpage.css";

const DashboardPage = () => {
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

export default DashboardPage;
