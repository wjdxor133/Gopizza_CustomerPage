import React, { useState } from "react";
import styled from "styled-components";
import { VideoConfig } from "../../config";

// import Fade from "react-reveal/Fade";

const selVideo = {
  0: {
    src: `${VideoConfig}/m20p-MjGnVE`,
  },
  1: {
    src: `${VideoConfig}/B1Q2i1JGrOs`,
  },
  2: {
    src: `${VideoConfig}/zTDSrj7b8rw`,
  },
  3: {
    src: `${VideoConfig}/47aSfcOqi48`,
  },
};

// type BrandProps = { onClick: (VideoSelect: number) => void };

const Brand = () => {
  const [view, setView] = useState<any>(0);
  const VideoSelect = (num: number) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      setView(num);
    };
  };
  let test: string = selVideo[view].src;

  return (
    <ContentWrap>
      <Container>
        <h1>BRAND FILM</h1>
        <ButtonWrap>
          <Video01Btn onClick={VideoSelect(0)}>혼밥편</Video01Btn>
          <Video02Btn onClick={VideoSelect(1)}>집관편</Video02Btn>
          <Video03Btn onClick={VideoSelect(2)}>미드편</Video03Btn>
          <Video04Btn onClick={VideoSelect(3)}>10분컷편</Video04Btn>
        </ButtonWrap>
        <Iframe
          width="560"
          height="315"
          src={test}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></Iframe>
      </Container>
    </ContentWrap>
  );
};

export default Brand;

const ContentWrap = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: #fff6e1;
  h1 {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: #4c2003;
    text-align: center;
    padding-bottom: 2%;
  }
  video {
    position: absolute;
    width: 50%;
    top: 0;
    left: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Video01Btn = styled.button`
  width: 70px;
  height: 25px;
  background-color: #472c1a;
  color: #fff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
`;
const Video02Btn = styled.button`
  width: 70px;
  height: 25px;
  background-color: #472c1a;
  color: #fff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
`;
const Video03Btn = styled.button`
  width: 70px;
  height: 25px;
  background-color: #472c1a;
  color: #fff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
`;
const Video04Btn = styled.button`
  width: 70px;
  height: 25px;
  background-color: #472c1a;
  color: #fff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
`;

const Iframe = styled.iframe`
  margin: 0 auto;
`;
