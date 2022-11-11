export default function authHeader() {
    const vendor = JSON.parse(localStorage.getItem("vendor"));
    if(vendor && vendor.auth_token){
        return {
            headers: {
                "authorization": vendor.auth_token
            }
        }
    } else{
        return {}
    }
}