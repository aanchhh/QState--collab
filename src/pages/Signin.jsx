import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import Footer from "../components/Footer.jsx";
import OnlyLogo from "../components/OnlyLogo.jsx";
import GoogleAuth from "../components/googleAuth.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Label } from "../components/ui/label.jsx";
import { Input } from "../components/ui/input.jsx";
import { cn } from "../utils/cn.js";
// import { IconBrandGoogle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../authSlice.jsx";
import LoadingBar from "react-top-loading-bar";
import darkGradient from "../assets/dark-gradient.png";

function SigninForm() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // State for progress

  const handleGoogleLogin = async () => {
    setProgress(30); // Set initial progress
    const response = await fetch(
      import.meta.env.VITE_QSTATE_DOMAIN + "/glogin"
    );
    if (response.ok) {
      const data = await response.json();
      console.log("Sign-in successful", data);
      setMessage("Sign-in successful");
      dispatch(login({ user: data, token: data["token"] }));

      setProgress(100); // Set progress to 100% once login is successful
      setTimeout(() => navigate("/profile/"), 1000);
    } else {
      setProgress(100); // Set progress to 100% even if it fails, to complete the loading
      setErrorMessage("Sign-in failed. Please check your credentials.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setErrorMessage("");
    setProgress(30); // Set initial progress when form is submitted

    const usernameOrEmail = e.target["username-or-email"].value.trim();
    const password = e.target.password.value.trim();

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameOrEmail);

    const userData = {
      [isEmail ? "email" : "username"]: usernameOrEmail,
      password: password,
    };

    if (!usernameOrEmail || !password) {
      setProgress(100); // Set progress to 100% if fields are empty
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_QSTATE_DOMAIN + "/esign_in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Sign-in successful", data);
        setMessage("Sign-in successful");
        dispatch(login({ user: data, token: data["token"] }));

        setProgress(100); // Set progress to 100% once login is successful
        setTimeout(() => navigate("/profile/"), 1000);
      } else {
        setProgress(100); // Set progress to 100% if it fails
        setErrorMessage("Sign-in failed. Please check your credentials.");
      }
    } catch (error) {
      setProgress(100); // Set progress to 100% even if an error occurs
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-8 md:py-10 md:mb-36 md:px-12 shadow-input bg-cover bg-center  shadow-slate-500 "
      style={{ backgroundImage: `url(${darkGradient})` }}
    >
      <button
        className="absolute top-4 right-8 text-lg font-bold hover:text-gray-800 dark:text-neutral-300 dark:hover:text-neutral-500 focus:outline-none z-20"
        onClick={() => navigate("/home")} // Adjust the navigation as needed
        aria-label="Close"
      >
        X
      </button>
      <div className="absolute  inset-0 bg-black bg-opacity-30  "></div>
      <h2 className="relative z-10 font-extrabold text-3xl  text-center text-neutral-800  bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-500  text-transparent bg-clip-text">
        Welcome Back!
      </h2>
      <p className=" relative z-10 text-neutral-600  text-sm text-center mt-2 dark:text-neutral-300">
        Sign in to your account
      </p>

      {/* LoadingBar added here */}
      <LoadingBar
        color="cyan"
        height={4} // You can use inline styles or custom classes for the height
        progress={progress}
        className="transition-all duration-300 ease-in-out" // You can apply Tailwind transition effects here
        style={{ height: "4px" }} // Inline style for height if needed
      />
      {/* <ClipLoader
        display="block"
        margin="0 auto"
        borderColor="red"
        color="#fff"
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}

      <form className="my-8 relative z-10" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <LabelInputContainer>
            <Label htmlFor="username-or-email">
              User Name or Email Address
            </Label>
            <Input
              id="username-or-email"
              placeholder="username or email@address.com"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            required
          />
        </LabelInputContainer>
        {/* //buttons flex google and signup */}
        <div className="flex space-x-3 justify-center">
          <GoogleOAuthProvider clientId="857513170935-1i8o8a4ghqfad9afg1sgnf40s673tg2v.apps.googleusercontent.com">
            <GoogleAuth />
          </GoogleOAuthProvider>

          <button
            className=" flex-1   bg-gradient-to-r relative group/btn from-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700 block dark:bg-zinc-800 rounded-full justify-self-center max-w-60 text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={loading}
          >
            Sign In &rarr;
            <BottomGradient />
          </button>
        </div>
        <div>
          {message && (
            <p className="text-teal-500 mt-2 justify-center flex">{message}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 mt-2 justify-center flex">
              {errorMessage}
            </p>
          )}
        </div>
        <div className="">
          <p className="text-neutral-600 text-center text-sm ml-12 max-w-sm mt-4 mb-4 dark:text-neutral-300">
            Don&apos;t Have an Account?
          </p>
          <button
            className="bg-gradient-to-r relative group/btn from-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700 block dark:bg-zinc-800 rounded-full justify-self-center w-full max-w-80  text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]" // Change to button to handle onClick
            onClick={() => navigate("/sign_up")} // Navigate to /sign_up
          >
            Register &rarr;
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full mb-4", className)}>
      {children}
    </div>
  );
};

const Signin = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <OnlyLogo />
        <br />
        <SigninForm />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Signin;
