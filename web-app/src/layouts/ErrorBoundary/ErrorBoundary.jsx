import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
import image from "../../Assets/images/Server0down.png";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // initialize the error state
    this.state = { hasError: false };
  }

  // if an error happened, set the state to true
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // send error to somewhere here
    console.log(error, errorInfo);
  }

  render() {
    // if error happened, return a fallback component
    if (this.state.hasError) {
      return (
        <div className="server">
          <img src={image} alt={image} />
          <h1>Hang on! Site is under maintenance</h1>
          <h3>Currently looking for ways to serve you better</h3>
          <button style={{ backgroundColor: "red", border: "1px solid red" }}>
            <Link to="/" className="error-link">
              <p>Return to Homepage</p>{" "}
            </Link>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
