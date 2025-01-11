import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import Footer from "../components/Footer.jsx";
import OnlyLogo from "../components/OnlyLogo.jsx";
import GoogleAuth from "../components/googleAuth.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Label } from "../components/ui/label.jsx";
import { Input } from "../components/ui/input.jsx";
import { cn } from "../utils/cn.js";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../authSlice.jsx";
import LoadingBar from 'react-top-loading-bar';  // Importing the LoadingBar

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
    const response = await fetch(import.meta.env.VITE_QSTATE_DOMAIN + "/glogin");
    if (response.ok) {
      const data = await response.json();
      console.log("Sign-in successful", data);
      setMessage("Sign-in successful");
      dispatch(login({ user: data, token: data["token"] }));
      
      setProgress(100); // Sets progress to 100% once login is successful
      setTimeout(() => navigate("/profile/"), 1000);
    } else {
      setProgress(100); // Sets progress to 100% even if it fails, to complete the loading
      setErrorMessage("Sign-in failed. Please check your credentials.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setErrorMessage("");
    setProgress(30); // Sets initial progress when form is submitted

    const usernameOrEmail = e.target["username-or-email"].value.trim();
    const password = e.target.password.value.trim();

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameOrEmail);

    const userData = {
      [isEmail ? "email" : "username"]: usernameOrEmail,
      password: password,
    };

    if (!usernameOrEmail || !password) {
      setProgress(100); // Sets progress to 100% if fields are empty
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_QSTATE_DOMAIN + "/esign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Sign-in successful", data);
        setMessage("Sign-in successful");
        dispatch(login({ user: data, token: data["token"] }));

        setProgress(100); // Sets progress to 100% once login is successful
        setTimeout(() => navigate("/profile/"), 1000);
      } else {
        setProgress(100); // Sets progress to 100% if it fails
        setErrorMessage("Sign-in failed. Please check your credentials.");
      }
    } catch (error) {
      setProgress(100); // Sets progress to 100% even if an error occurs
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome Back
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Sign in to your account
      </p>

      <LoadingBar
        color="cyan" 
        height={4} // Specifies the height of the loading bar as 4px
        progress={progress} // Controls the progress of the loading bar using the progress state
        // className="transition-all duration-300 ease-in-out" // Adds smooth animation for progress changes
        // style={{ height: '4px' }}
      />
      <form className="my-8" onSubmit={handleSubmit}>
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

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          type="submit"
          disabled={loading}
        >
          Sign In &rarr;
          <BottomGradient />
        </button>
        <div>
          {message && (
            <p className="text-teal-500 mt-2 justify-center flex">{message}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 mt-2 justify-center flex">{errorMessage}</p>
          )}
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

        <GoogleOAuthProvider clientId="857513170935-1i8o8a4ghqfad9afg1sgnf40s673tg2v.apps.googleusercontent.com">
          <GoogleAuth />
        </GoogleOAuthProvider>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

        <div>
          <p className="text-neutral-600 text-sm max-w-sm mt-4 mb-4 dark:text-neutral-300">
            Don&apos;t Have an Account?
          </p>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button" // Change to button to handle onClick
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
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
