import React from "react";

const Line = ({ rotate = 0, width = 1052, className = "" }) => {
  return (
    <svg
      className={`transform ${className}`}
      width={width}
      height="1"
      viewBox="0 0 1052 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "center",
      }}
    >
      <path
        d="M0 1L1052 0"
        stroke="white"
        strokeOpacity="0.8"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Line;
