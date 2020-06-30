import React from "react";
import KakaoPlusBtn from "./KakaoPlusBtn/KakaoPlusBtn";
import InstaConnect from "./InstaConnect/InstaConnect";
import "./Application.scss";

const Application = () => {
  return (
    <section className="Application">
      <h1>카카오 채널 등록 유도 & 인스타그램 방문 유도</h1>
      <KakaoPlusBtn />
      {/* <InstaConnect /> */}
    </section>
  );
};

export default Application;
