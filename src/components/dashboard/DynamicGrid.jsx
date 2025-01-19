import React from "react";

const DynamicGrid = ({ children, columns = 3, gap = 4, className = "" }) => {
  return (
    <div
      className={`grid grid-cols-${columns} gap-${gap} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};

export default DynamicGrid;
