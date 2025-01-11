import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import Footer from "../components/Footer.jsx";
import OnlyLogo from "../components/OnlyLogo.jsx";
import GoogleAuth from "../components/googleAuth.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Label } from "../components/ui/label.jsx";
import { Input } from "../components/ui/input.jsx";
import { cn } from "../utils/cn.js";
// import { IconBrandGoogle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useState } from "react";
import darkGradient from "../assets/dark-gradient.png";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const navigate = useNavigate(); // Create navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert("Password length must be greater than 8");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.reEnterPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    if (!isEmail) {
      setErrorMessage("Enter a valid Email address");
    }

    setLoading(true); // Set loading to true

    try {
      const backend_url = import.meta.env.VITE_QSTATE_DOMAIN;
      console.log(backend_url);
      const response = await fetch(backend_url + "/esign_up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Sign-up successful");
        setTimeout(() => {
          navigate("/sign_in");
        }, 2000);
      } else {
        setErrorMessage(result.message || "Sign-up failed");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setErrorMessage("An error occurred. Please try again.");
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
        Welcome to QState
      </h2>
      <p className="relative z-10 text-neutral-600  text-sm text-center mt-2 dark:text-neutral-300">
        Create Your Account
      </p>

      <form className="my-8 relative z-10" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Yuvraj"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Singh"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">User Name</Label>
          <Input
            id="username"
            placeholder="Yuvraj"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Gradientdescent@ml.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="reEnterPassword">Re-enter password</Label>
          <Input
            id="reEnterPassword"
            placeholder="••••••••"
            type="password"
            value={formData.reEnterPassword}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <div className="flex space-x-3 justify-center">
          <GoogleOAuthProvider clientId="857513170935-1i8o8a4ghqfad9afg1sgnf40s673tg2v.apps.googleusercontent.com">
            <GoogleAuth />
          </GoogleOAuthProvider>
          <button
            className=" flex-1   bg-gradient-to-r relative group/btn from-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700 block dark:bg-zinc-800 rounded-full justify-self-center max-w-60 text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={loading}
          >
            Sign Up &rarr;
            <BottomGradient />
          </button>
        </div>
        <div className="justify-center mb-10">
          {loading && <p className="mt-2 justify-center flex">Loading...</p>}
          {message && (
            <p className="text-teal-500 mt-2 justify-center flex">{message}</p>
          )}
          {passwordError && (
            <p className="text-red-500 justify-center flex">{passwordError}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 justify-center flex">{errorMessage}</p>
          )}
        </div>
        <div>
          <p className="ext-neutral-600 text-center text-sm ml-12 max-w-sm mt-4 mb-4 dark:text-neutral-300">
            Already a Member?
          </p>
        </div>
        <button
          onClick={() => navigate("/sign_in")}
          className="bg-gradient-to-r relative group/btn from-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700 block dark:bg-zinc-800 rounded-full justify-self-center w-full max-w-80  text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign In &rarr;
          <BottomGradient />
        </button>
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

const Signup = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <OnlyLogo />
        <br></br>
        <SignupForm />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Signup;
