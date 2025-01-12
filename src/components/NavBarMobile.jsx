import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { qstate_logo } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";

const NavBarMobile = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const navigate = useNavigate();

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const navigation = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Services", url: "/services" },
    { id: 3, title: "Pricing", url: "/pricing" },
    { id: 4, title: "Blogs", url: "/blogs" },
    { id: 5, title: "Contact", url: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full p-4 bg-opacity-90 z-50 text-center ">
      <div className="flex items-center justify-between px-5">
        <a onClick={() => navigate("/")} className="min-w-[150px]">
          <img src={qstate_logo} alt="Q State" width={150} height={30} />
        </a>
        <button
          onClick={toggleNavigation}
          className="border border-n-1 bg-blur-md bg-n-3 bg-opacity-50  p-2 rounded-md"
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
      {openNavigation && (
        <div className="mt-4 flex flex-col space-y-4 bg-blur-md bg-n-3 bg-opacity-50 p-4 rounded-xl">
          {navigation.map((item) => (
            <a
              key={item.id}
              onClick={() => {
                navigate(item.url);
                setOpenNavigation(false);
              }}
              className="text-white uppercase transition-colors hover:text-color-1 text-sm"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarMobile;
