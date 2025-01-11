import React, { useState } from "react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../authSlice.jsx";

async function getUserInfo(codeResponse) {
  var response = await fetch(
    import.meta.env.VITE_QSTATE_DOMAIN + "/google_login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: codeResponse.code }),
    }
  );
  return await response.json();
}

async function getProtected() {
  var response = await fetch("/protected", {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((msg) => console.log(msg));
}
export default function GoogleAuth() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      var userData = await getUserInfo(codeResponse);

      // setMessage("Sign-in successful");
      dispatch(login({ user: userData, token: userData["token"] }));
      console.log("Sign in success", userData);
      setMessage("Google Sign in Successful");
      setTimeout(() => {
        navigate("/profile/");
      }, 1000);
    },
  });

  const handleLogout = () => {
    getProtected();
    setLoggedIn(false);
  };

  return (
    <div className="flex flex-col space-y-4 mb-4 w-60 justify-self-center self-center">
      {message && (
        <p className="text-teal-500 mt-2 justify-center flex">{message}</p>
      )}

      <button
        className=" flex space-x-2 items-center self-center  bg-gradient-to-r relative group/btn from-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700  dark:bg-zinc-800 rounded-full justify-self-center w-56   text-white hover:border-2 hover:border-neutral-300 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="button" // Changed to button to prevent form submission
        onClick={() => googleLogin()}
      >
        <IconBrandGoogle className="h-4 w-8 pl-1 text-neutral-800 dark:text-neutral-300 justify-center" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm justify-center">
          Continue with Google
        </span>
        <BottomGradient />
      </button>
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
