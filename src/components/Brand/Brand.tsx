import React from "react";
import Fade from "react-reveal/Fade";

const Brand = () => {
  return (
    <section className="brand">
      <Fade top>
        <h1>프리 피자 데이 고지</h1>
      </Fade>
      <Fade>
        <p>
          머천다이징 이미지 활용 (7월 3일까지 이미지 소스 공유 가능, 행사 명칭
          및 세부 사항 6월 29일까지 확정)
          <br />
          고피자의 업그레이드 된 도우 맛을 기존 및 신규 고객들이 직접 맛보실 수
          있도록, 무료 샘플링 데이를 2회 실시.
        </p>
      </Fade>
    </section>
  );
};

export default Brand;
