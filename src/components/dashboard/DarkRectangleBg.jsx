import React from "react";

const DarkRectangleBg = ({ children, width = "auto", height = "auto" }) => {
  return (
    <div
      className="bg-black bg-opacity-30 p-4 border border-gray-900 rounded"
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default DarkRectangleBg;
