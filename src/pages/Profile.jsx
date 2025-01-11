// import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { server_URI } from "../constants";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Service from "../components/ServiceForm";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUserProfile = async () => {
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
        setUserProfile(data);
      } catch (err) {
        setError(err.message);
        navigate("/sign_in");
      }
    };

    if (auth.isAuthenticated) {
      fetchUserProfile();
    } else {
      navigate("/sign_in");
    }
  }, [auth, navigate]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Profile Information</h1>
          <p>
            <strong>Username:</strong> {auth.user.username}
          </p>
          <p>
            <strong>Email:</strong> {auth.user.email}
          </p>
        </div>
        <Service />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Profile;
