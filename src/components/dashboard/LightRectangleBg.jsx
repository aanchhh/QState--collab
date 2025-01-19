import React from "react";

const LightRectangleBg = ({ children, width = "auto", height = "auto" }) => {
  return (
    <div
      className="bg-white bg-opacity-30 p-4 border border-gray-300 rounded"
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default LightRectangleBg;
