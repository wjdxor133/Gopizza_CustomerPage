import React, { useEffect } from "react";
import styled from "styled-components";
// import Fade from "react-reveal/Fade";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoPlus = () => {
  useEffect(() => {
    window.Kakao.init("aa9ca5d115739e988fab0a879015627a");
    window.Kakao.PlusFriend.createAddFriendButton({
      container: "#plusfriend-addfriend-button",
      plusFriendId: "_dYsxjxb", // 플러스친구 홈 URL에 명시된 id로 설정합니다.
    });
  }, []);

  return (
    <KakaoBtn>
      <div id="plusfriend-addfriend-button"></div>
    </KakaoBtn>
  );
};

export default KakaoPlus;

const KakaoBtn = styled.div`
  /* display: flex;
  justify-content: center; */
  position: relative;
  z-index: 10;
  div {
    width: 5%;
  }
`;
