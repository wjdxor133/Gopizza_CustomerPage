import React from "react";
import Header from "../../components/Header/Header";
import Events from "../../components/Events/Events";
import HowToGopizza from "../../components/HowToGopizza/HowToGopizza";
import Application from "../../components/Application/Application";
import "./Main.scss";
import Map from "../../components/Map/Map";

const Main = () => {
  return (
    <>
      <Header />
      <Events />
      <HowToGopizza />
      <Application />
      <Map />
    </>
  );
};

export default Main;
