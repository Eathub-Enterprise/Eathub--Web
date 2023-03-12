import React from 'react'

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
        return <>Oh no! Epic fail!</>
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary;