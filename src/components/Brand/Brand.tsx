import React from "react";
import styled from "styled-components";
import config from "../../config";
// import gopizza_video01 from "../../video/gopizza_video01.mp4";

// import Fade from "react-reveal/Fade";

const selVideo = {
  0: {
    src: `${config.gopizzaVideo}/m20p-MjGnVE`,
    check: 1,
  },
  1: {
    src: `${config.gopizzaVideo}/zTDSrj7b8rw`,
    check: 1,
  },
  2: {
    src: `${config.gopizzaVideo}/B1Q2i1JGrOs`,
    check: 1,
  },
  3: {
    src: `${config.gopizzaVideo}/47aSfcOqi48`,
    check: 1,
  },
};

const Brand = () => {
  return (
    <ContentWrap>
      <h1>BRAND FILM</h1>
      {/* <video controls>
        <source src={gopizza_video01} type="video/mp4" />
      </video> */}
    </ContentWrap>
  );
};

export default Brand;

const ContentWrap = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: #fff6e1;
  position: relative;
  h1 {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: #4c2003;
  }
  video {
    position: absolute;
    width: 50%;
    top: 0;
    left: 0;
  }
`;
