import React from "react";
import Background from "./Background";
import Layout from "./Layout";
import Header from "./Header";
const Html5Canvas = () => {
  return (
    <div>
      <Background>
        <Layout />
        <Header name="Html5Canvas" className=""></Header>
      </Background>
    </div>
  );
};
export default Html5Canvas;
