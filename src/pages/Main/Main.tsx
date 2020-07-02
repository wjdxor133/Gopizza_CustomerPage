import React from "react";
import Header from "../../components/Header/Header";
import Events from "../../components/Events/Events";
import HowToGopizza from "../../components/HowToGopizza/HowToGopizza";
import Application from "../../components/Application/Application";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <Header />
      <Events />
      <HowToGopizza />
      <Application />
    </>
  );
};

export default Main;
