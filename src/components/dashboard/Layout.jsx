import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Banner />
      <Header name="Riya" className="mx-10 mt-5">
        Welcome,{" "}
      </Header>
      <Navbar />
    </div>
  );
};

export default Layout;
