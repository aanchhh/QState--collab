// import React from 'react';
import { Routes, Route } from "react-router-dom";

import App from "./pages/App.jsx";
import Plans from "./pages/Plans.jsx"; // Ensure the name matches
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Service from "./pages/Service.jsx";
import Profile from "./pages/Profile.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Execute from "./pages/Execute.jsx";
// Dashboard
import Dashboard from "./pages/Dashboard.jsx";
import Overview from "./components/dashboard/Overview.jsx";
import EmailAutomation from "./components/dashboard/EmailAutomation.jsx";
import Html5Canvas from "./components/dashboard/Html5Canvas.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} /> {/* Same component for /home */}
      <Route path="/pricing" element={<Plans />} />{" "}
      {/* Use the uppercase component name */}
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/services" element={<Service />} />
      <Route path="/sign_up" element={<Signup />} />
      <Route path="/sign_in" element={<Signin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/execute" element={<Execute />} />
      <Route path="/contact" element={<Contact />} />{" "}
      {/* Add route for ContactUs */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/email-automation" element={<EmailAutomation />} />
      <Route path="/html5-canvas" element={<Html5Canvas />} />
    </Routes>
  );
};

export default AllRoutes;
