import React from "react";
import KakaoPlusBtn from "./KakaoPlusBtn/KakaoPlusBtn";
import InstaConnect from "./InstaConnect/InstaConnect";
import Fade from "react-reveal/Fade";
import "./Application.scss";

const Application = () => {
  return (
    <section className="Application">
      <Fade top>
        <h1>카카오 채널 등록 유도 & 인스타그램 방문 유도</h1>
      </Fade>
      <KakaoPlusBtn />
      <InstaConnect />
    </section>
  );
};

export default Application;
