import React from "react";
import KakaoPlusBtn from "./KakaoPlusBtn/KakaoPlusBtn";
import styled from "styled-components";
import kakaoPlus from "../../img/kakaoPlus.png";
// import Fade from "react-reveal/Fade";

const ApplicationKakao = () => {
  return (
    <ContentWrap>
      <Header>
        <h1>고피자 톡채널 추가하GO</h1>
        <h2>고피자 소식 받자!</h2>
      </Header>
      <KakaoPlusImg>
        <img src={kakaoPlus} alt="" />
      </KakaoPlusImg>
      <BtnWrap>
        <p>클릭하고, 바로 고피자 톡채널 추가하기!</p>
        <KakaoPlusBtn />
      </BtnWrap>
    </ContentWrap>
  );
};

export default ApplicationKakao;

const ContentWrap = styled.div`
  width: 100vw;
  height: 70vh;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  height: 20%;
  background-color: #f86d0d;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
  h1 {
    color: #fff;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    font-size: 1.9rem;
  }
  h2 {
    color: #4c2003;
    font-weight: 700;
    font-size: 1.66rem;
    font-family: "Roboto", sans-serif;
    padding-top: 7px;
  }
`;

const KakaoPlusImg = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  img {
    width: 55%;
  }
`;

const BtnWrap = styled.div`
  position: relative;
  left: 27%;
  top: 30%;
  p {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: #4c2003;
  }
`;
