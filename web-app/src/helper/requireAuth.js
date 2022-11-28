import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import authService from '../services/auth/authService';

const ProtectedRoute = ({ children }) => {
    let userLoggedIn = authService.getVendorStatus();

    if(!userLoggedIn) {
        return <Navigate to="/login" replace />
    }
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