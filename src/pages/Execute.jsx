import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { server_URI } from "../constants";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Service from "../components/ServiceForm";
import { login } from "../authSlice";
import { feTurbulence } from "framer-motion/client";

const Execute = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleExecution = async () => {
    const user_id = auth.user["_id"];
    const company_name = auth.user["company_name"];
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("company_name", company_name);

    try {
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_QSTATE_DOMAIN + "/execute/",
        {
          method: "POST",
          headers: {
            authorization: auth.token,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("email automation succeeded", data);
        setMessage("AI agent is successfully executed.");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else {
        console.log("EA failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      // setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAuthUrl = async () => {
    setLoading(true);
    const userId = auth.user["_id"]; // Replace with actual user ID logic
    try {
      const response = await fetch(
        `${import.meta.env.VITE_QSTATE_DOMAIN}/get-auth-url/${userId}`
      );
      const data = await response.json();
      // setAuthUrl(data.auth_url);
      console.log(data);
      console.log(data.auth_url);
      // Open the URL in a new window
      window.open(data.auth_url, "_blank");
    } catch (error) {
      console.error("Error fetching auth URL:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${server_URI}/profile/${auth.user["_id"]}`,
        {
          method: "GET",
          headers: {
            authorization: auth.token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }
      const data = await response.json();
      dispatch(login({ user: data, token: data["token"] }));
      console.log(auth);
    } catch (err) {
      setError(err.message);
      // navigate("/sign_in");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(auth);
    if (!auth.isAuthenticated) {
      navigate("/sign_in");
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Profile Information</h1>
          <p>
            <strong>Username:</strong> {auth.user ? auth.user.username : ""}
          </p>
          <p>
            <strong>Email:</strong> {auth.user ? auth.user.email : ""}
          </p>
        </div>
        {auth.user && !auth.user.gtoken && (
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <button
              className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              disabled={loading}
              onClick={() => {
                fetchAuthUrl();
              }}
            >
              <span className="text-neutral-700 dark:text-neutral-300 text-sm justify-center">
                Create Token
              </span>
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <button
              className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              disabled={loading}
              onClick={() => fetchUser()}
            >
              <span className="text-neutral-700 dark:text-neutral-300 text-sm justify-center">
                Refresh
              </span>
            </button>
          </div>
        )}
        {/* {message && (
            <p className="text-teal-500 mt-2 justify-center flex">{message}</p>
          )} */}
        {auth.user && auth.user.gtoken && (
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <button
              className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              disabled={loading}
              onClick={() => {
                handleExecution();
              }}
            >
              <span className="text-neutral-700 dark:text-neutral-300 text-sm justify-center">
                {loading ? "Executing..." : "Execute"}
              </span>
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <button
              className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              disabled={loading}
              onClick={() => fetchUser()}
            >
              <span className="text-neutral-700 dark:text-neutral-300 text-sm justify-center">
                Refresh
              </span>
            </button>
          </div>
        )}

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Execute;
