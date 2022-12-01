import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getVendorData } from '../../../../Redux/actions';
import authService from "../../../../services/auth/authService";


// test Data

const Overview = () => {
  const vendor = useSelector((state) => state);
  const dispatch = useDispatch();

  const vendorData = async() => {
    const response = await authService.getVendorData().then((response) => {
      JSON.stringify(response.data).replace( /</g, '\\u003c');
      console.log(response.data);
      dispatch(getVendorData(response));
    });

    return response;
    // const response = await authService.request({
    //   method: 'GET', url:`/users/userdata/${vendor}`,
    //   data:{vendor}
    // },((response) => {
    //   JSON.stringify(response.data);
    //   console.log(response.data);
    //   dispatch(getVendorData(response.data));
    // }))
  }
  
  useEffect(() => {
    vendorData();
    authService.getVendorStatus();
    console.log('Vendor Details', vendor);
  }, [])

  return (
    <div>overview</div>
  )
}

export default Overview