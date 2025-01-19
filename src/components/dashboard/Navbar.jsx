import React from "react";
import { NavLink } from "react-router-dom"; // For active styling

// Data array for navigation links
const navItems = [
  { id: 1, label: "Overview", path: "/overview" },
  { id: 2, label: "Email Automation", path: "/email-automation" },
  { id: 3, label: "HTML5 Canvas", path: "/html5-canvas" },
];

// Reusable Navbar Component
const Navbar = ({ items }) => {
  return (
    <nav className=" items-center   px-6 py-4 bg-transparent shadow-md">
      {/* Navigation Links */}
      <div className="flex space-x-6 justify-between mx-40">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `text-lg font-medium text-slate-50 ${
                isActive
                  ? "text-yellow-200 border-b-2 border-yellow-200 "
                  : "text-slate-50"
              } hover:text-yellow-100`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

// Default Export
export default Navbar;
