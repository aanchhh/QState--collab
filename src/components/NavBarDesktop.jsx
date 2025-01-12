import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { qstate_logo } from "../assets";
import Button from "./Button";
import { logout } from "../authSlice";
import { useState, useEffect } from "react";

const NavBarDesktop = () => {
  const navigate = useNavigate();
  const pathname = useLocation();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [scrollingUp, setScrollingUp] = useState(true); // Initially true to show navbar on load
  const [lastScrollY, setLastScrollY] = useState(0); // To track scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollingUp(false);
      } else {
        // Scrolling up
        setScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navigation = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Services", url: "/services" },
    { id: 3, title: "Pricing", url: "/pricing" },
    { id: 4, title: "Blogs", url: "/blogs" },
    { id: 5, title: "Contact", url: "/contact" },
  ];

  return (
    <div
      className={`fixed ${
        scrollingUp ? "top-3" : "-top-[200px]"
      } left-[32px]  w-full px-4  h-20 justify-center z-50 text-center pl-4 pr-4 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between px-10 py-3">
        <a className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={qstate_logo} alt="Q State" width={190} height={40} />
        </a>

        <nav className=" flex space-x-10  justify-center lg:flex-row cursor-pointer backdrop-blur-xl bg-n-3 px-4 py-4 bg-opacity-20 border border-n-3 rounded-full -translate-x-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              onClick={() => navigate(item.url)}
              className={`text-white text-sm transition-colors hover:text-color-1 uppercase  ${
                item.url === pathname.pathname ? "text-bold" : ""
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {!auth.isAuthenticated ? (
          <div className="backdrop-blur-xl border border-n-2 flex text-center bg-n-1 bg-opacity-5 translate-y-1 -translate-x-16 rounded-3xl">
            <a
              onClick={() => navigate("/sign_up")}
              className="mr-5  text-white translate-y-3 translate-x-4 font-code font-medium  rounded-xl  hover:cursor-pointer transition-colors hover:text-color-1 lg:block"
            >
              Register
            </a>
            <Button
              className="hidden lg:flex bg-gradient-to-r from-n-3 to-n-4 rounded-3xl border border-l-2 border-l-n-2"
              onClick={() => navigate("/sign_in")}
            >
              Log in
            </Button>
          </div>
        ) : (
          <a
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
            className="hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            Logout
          </a>
        )}
      </div>
    </div>
  );
};

export default NavBarDesktop;
