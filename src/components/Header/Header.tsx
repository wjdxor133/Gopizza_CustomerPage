import React from "react";
import Fade from "react-reveal/Fade";
import "./Header.scss";

const Header = () => {
  return (
    <section className="Header">
      <Fade>
        <h1>Header "고퀄 1인 피자 고피자!"</h1>
      </Fade>
      <Fade bottom>
        <p>
          브랜드 영상 촬영 footage 사용 가능 TOP5 피자 제품 컷 활용(브랜드 영상
          또는 기존 POP 이미지)
        </p>
      </Fade>
    </section>
  );
};
export default Header;
