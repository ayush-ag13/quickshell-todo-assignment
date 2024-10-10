import React from "react";
import { ThreeDots } from "react-loader-spinner";
import './Loading.css'; // Import the CSS file

const StyledLoading = () => {
  return (
    <div className="loading-container">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d" // Loader color
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <span className="loading-text">
        Loading...
      </span>
    </div>
  );
};

export default StyledLoading;
