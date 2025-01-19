import React from "react";
import Background from "./Background";
import Layout from "./Layout";
import Header from "./Header";
const Overview = () => {
  return (
    <div>
      <Background>
        <Layout />
        <Header name="Overview" className=""></Header>
      </Background>
    </div>
  );
};
export default Overview;
