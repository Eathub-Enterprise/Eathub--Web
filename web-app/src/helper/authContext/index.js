import React from "react";
import authService from "../../services/auth/authService";

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor() {
    super();
    this.vendorLogin = authService.vendorLogin.bind(this);
    this.logOut = authService.logOut.bind(this);
  }
  state = { isAuth: false };
  vendorLogin() {
    setTimeout(() => this.setState({ isAuth: true }), 1000);
    console.log(this.state);
  }
  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          vendorLogin: this.vendorLogin,
          logOut: this.logOut,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer };
