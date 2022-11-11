// protected route
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
//   let token = localStorage.getItem('vendor');
//   if(token === true){
//           token ? <Outlet />: <Navigate to="/login" />
//   }

  let auth = localStorage.getItem('vendor')
  return (
    auth ? <Outlet/> : <Navigate to='/login'/>
  )
};

export default Protected;
