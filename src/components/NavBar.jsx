import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { logout } from "../authSlice";

const NavBar = ({ fadeInPage }) => {
  const navigate = useNavigate();
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        scrollingUp ? "top-6" : "-top-[200px]"
      } left-[32px] w-[1200px] p-2 h-20 justify-center z-50 text-center pl-4 pr-4 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center px-5 lg:px-10 py-5 -translate-y-6">
        <div
          className={`block w-[5rem] xl:mr-8  transition duration-1000 ${
            fadeInPage ? "fixed top-8 left-12 " : ""
          }`}
        >
          <img
            src={"/src/assets/qstate_logo.png"}
            width={190}
            height={40}
            alt="Q State"
            className="w-full scale-150"
          />
        </div>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden lg:flex"
          } fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="flex flex-col items-center justify-center lg:flex-row cursor-pointer backdrop-blur-lg pl-4 pr-4 bg-n-3 bg-opacity-20 border border-n-3 rounded-3xl ">
            {navigation.map((item) => (
              <a
                key={item.id}
                onClick={() => navigate(item.url)}
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
        <div className="backdrop-blur-xl border border-n-2 flex text-center bg-n-1 translate-y-1 bg-opacity-5 -translate-x-15 rounded-3xl">
          {!auth.isAuthenticated && (
            <a
              onClick={() => navigate("/sign_up")}
              className="button hidden mr-8 text-white translate-y-3 translate-x-5 transition-colors hover:text-n-3 hover:cursor-pointer lg:block"
            >
              Register
            </a>
          )}
          {!auth.isAuthenticated && (
            <Button
              className="hidden lg:flex bg-gradient-to-r  from-n-3 to-n-4 rounded-3xl"
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
