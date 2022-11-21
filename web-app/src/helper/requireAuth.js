import { Navigate } from 'react-router-dom';
import authService from '../services/auth/authService';

const ProtectedRoute = ({ children }) => {
    let userLoggedIn = authService.getVendorStatus;

    if(!userLoggedIn) {
        return <Navigate to="/login" replace />
    }
    return children;
};

export default ProtectedRoute;