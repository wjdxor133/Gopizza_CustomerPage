import React from "react";
import Header from "../../components/Header/Header";
import Brand from "../../components/Brand/Brand";
// import HowToGopizza from "../../components/HowToGopizza/HowToGopizza";
import ApplicationKakao from "../../components/Application/ApplicationKakao";
import ApplicationInsta from "../../components/Application/ApplicationInsta";

const Main = () => {
  return (
    <>
      <Header />
      <Brand />
      <ApplicationKakao />
      <ApplicationInsta />
    </>
  );
};

export default Main;
