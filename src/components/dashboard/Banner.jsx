import React from "react";
import logo from "../../assets/dashboard/logo.svg";
import tokens from "../../assets/dashboard/tokens.svg";
import notification from "../../assets/dashboard/notification.svg";
import profile from "../../assets/dashboard/profile.svg";

const Banner = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 text-white bg-transparent shadow-md shadow-white/10 backdrop-blur-lg">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-7  w-auto" />
        <h1 className="ml-3 text-xl font-bold">Vivea</h1>
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center space-x-6">
        <img
          src={tokens}
          alt="Icon 1"
          className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
        />
        <img
          src={notification}
          alt="Icon 2"
          className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
        />
        <img
          src={profile}
          alt="Icon 3"
          className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
        />
      </div>
    </div>
  );
};

export default Banner;
