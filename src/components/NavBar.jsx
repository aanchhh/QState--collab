import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { qstate_logo } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { logout } from "../authSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true); // Initially true to show navbar on load
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
    <div
      className={`fixed ${
        scrollingUp ? "-top-10" : "-top-[200px]" // Navbar comes back when scrolling up, moves up when scrolling down
      } left-[32px] w-full p-2 h-20 justify-center z-50 text-center pl-4 pr-4 transition-all duration-300 ease-in-out`}
    >
      <div
        className="flex items-center px-5 lg:px-10 py-5 
      translate-y-10"
      >
        <a
          className="block w-[12rem] xl:mr-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={qstate_logo} width={190} height={40} alt="Q State" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden lg:flex"
          } fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="flex flex-col items-center justify-center lg:flex-row cursor-pointer backdrop-blur-lg pl-4 pr-4 bg-n-3 bg-opacity-20 border border-n-3 rounded-3xl -translate-x-6">
            {navigation.map((item) => (
              <a
                key={item.id}
                onClick={() => {
                  navigate(item.url);
                }}
                className={`block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.url === pathname.pathname
                    ? "lg:text-n-1"
                    : "lg:text-n-1/50"
                } px-6 py-6 lg:py-4 lg:text-sm lg:font-semibold`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        <div className="backdrop-blur-xl border border-n-2 flex text-center bg-n-1 bg-opacity-5 translate-y-1 -translate-x-16 rounded-2xl">
          {!auth.isAuthenticated && (
            <a
              onClick={() => navigate("/sign_up")}
              className="hidden mr-8 text-white translate-y-3 translate-x-4 font-code font-medium transition-colors rounded-xl hover:text-n-3 hover:cursor-pointer lg:block"
            >
              REGISTER
            </a>
          )}
          {!auth.isAuthenticated && (
            <Button
              className="hidden lg:flex bg-gradient-to-r from-n-3 to-n-4 rounded-2xl border border-l-2 border-l-n-2"
              onClick={() => navigate("/sign_in")}
            >
              Log in
            </Button>
          )}
          {auth.isAuthenticated && (
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

          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
