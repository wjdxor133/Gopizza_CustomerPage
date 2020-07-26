import React, { useEffect } from "react";
import { apiKey } from "../../../config";
import styled from "styled-components";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoPlus = () => {
  useEffect(() => {
    window.Kakao.init(`${apiKey}`);
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
  width: 12%;
  position: absolute;
  z-index: 999;
  top: 55%;
  left: 28.5%;
`;
