import React from "react";
import backgroundImage from "../../assets/dashboard/dashboard_bg.png"; // Adjust the relative path to the image

const Background = ({ children }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay to make text readable */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Page content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
