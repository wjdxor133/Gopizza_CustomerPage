import React, { useEffect } from "react";
// import KakaoPlusBtn from "./KakaoPlusBtn/KakaoPlusBtn";
import styled from "styled-components";
import kakaoPlus from "../../assets/img/kakaoPlus.png";
import Fade from "react-reveal/Fade";

import { kakaoApiKey } from "../../core/api/api";

declare global {
  interface Window {
    Kakao: any;
  }
}

const ApplicationKakao = () => {
  useEffect(() => {
    window.Kakao.init(`${kakaoApiKey}`);
    window.Kakao.PlusFriend.createAddFriendButton({
      container: "#plusfriend-addfriend-button",
      plusFriendId: "_dYsxjxb", // 플러스친구 홈 URL에 명시된 id로 설정합니다.
    });
  }, []);

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
        <KakaoBtn>
          <div id="plusfriend-addfriend-button"></div>
        </KakaoBtn>
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

const KakaoBtn = styled.div`
  width: 12%;
  position: absolute;
  z-index: 999;
  top: 55%;
  left: 28.5%;
`;
