import React from 'react';

const LoadingIndicator = () => {
    return (
        <div className="d-flex justify-content-center pt-3" style={{backgroundColor: "white", width: "100%", height: "100px"}}>
            <h5 className="ml-3">Loading</h5>
            <div className="spinner-grow ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default LoadingIndicator;