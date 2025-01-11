// import React from "react";
import loadingGif from "../assets/loadingLogo.gif";
// import staticLogo from "../assets/qstate_logo.png";

const LoadingLogo = ({ isGif }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <img
        src={loadingGif}
        alt="loading"
        className={`absolute w-[30%] ${isGif ? "" : "animate-moveToNavbar "}`}
      />
    </div>
  );
};

export default LoadingLogo;
