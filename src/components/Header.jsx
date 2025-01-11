import NavBar from "./NavBar";

const Header = ({ fadeInPage }) => {
  // const [moveToNavbar, setMoveToNavbar] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setMoveToNavbar(true); // Trigger the movement after 4 seconds
  //   }, 4000);

  //   return () => clearTimeout(timer); // Clean up the timer
  // }, []);

  return (
    <div>
      <NavBar fadeInPage={fadeInPage} />
    </div>
  );
};

export default Header;
