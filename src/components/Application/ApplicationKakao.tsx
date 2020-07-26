import React from "react";
import KakaoPlusBtn from "./KakaoPlusBtn/KakaoPlusBtn";
import styled from "styled-components";
import kakaoPlus from "../../img/kakaoPlus.png";
import Fade from "react-reveal/Fade";

const ApplicationKakao = () => {
  return (
    <ContentWrap>
      <Header>
        <Fade bottom>
          <h1>고피자 톡채널 추가하GO</h1>
          <h2>고피자 소식 받자!</h2>
        </Fade>
      </Header>
      <KakaoPlusImg>
        <img src={kakaoPlus} alt="" />
        <KakaoPlusBtn />
      </KakaoPlusImg>
    </ContentWrap>
  );
};

export default ApplicationKakao;

const ContentWrap = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  padding: 2em 0;
  background-color: #f86d0d;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  position: relative;
  display: flex;
  justify-content: center;
  img {
    width: 50%;
  }
`;
