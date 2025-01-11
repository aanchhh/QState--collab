// import { qstate_logo } from "../assets"; // Make sure this path is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate

const OnlyLogo = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-7 bg-n-8/90 backdrop-blur-sm">
      {/* Added the same background and backdrop-blur classes as in Code 2 */}
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a
          className="block w-[12rem] xl:mr-8 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <img
            src={"/src/assets/qstate_logo.png"}
            width={190}
            height={40}
            alt="Brainwave"
          />
        </a>
      </div>
    </div>
  );
};

export default OnlyLogo;
