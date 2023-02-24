import React, { useState, useEffect } from 'react';

function ErrorBoundary(props) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        function componentDidCatch(error, errorInfo) {
            console.error(error, errorInfo);
            setHasError(true);
        }

        componentDidCatch();
    })
    if(hasError){
        return <h1>
            Something went Wrong!, try Again😔
        </h1>
    }
    return props.children;
}

export default ErrorBoundary;