import React from "react";

const CustomButton = ({
  text = "Click Me", // Default text
  onClick = () => {}, // Default click handler
  className = "", // Additional custom styles via Tailwind
  tabIndex = 0, // Accessibility
  ariaLabel = "Button", // Accessibility
}) => {
  return (
    <div className="flex flex-col">
      <button
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        onClick={onClick}
        className={`px-16 py-6 w-full text-xl font-bold text-white bg-white bg-opacity-20 border border-white border-opacity-20 rounded-[40px] transition-all hover:bg-opacity-30 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
