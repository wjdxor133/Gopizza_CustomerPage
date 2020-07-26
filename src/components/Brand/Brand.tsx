import React, { useState } from "react";
import styled from "styled-components";
import { VideoConfig } from "../../config";

import Fade from "react-reveal/Fade";

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
        <Fade bottom>
          <h1>BRAND FILM</h1>
        </Fade>
        <ButtonWrap>
          <VideoBtn onClick={VideoSelect(0)}>혼밥편</VideoBtn>
          <VideoBtn onClick={VideoSelect(1)}>집관편</VideoBtn>
          <VideoBtn onClick={VideoSelect(2)}>미드편</VideoBtn>
          <VideoBtn onClick={VideoSelect(3)}>10분컷편</VideoBtn>
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
  width: 100%;
  background-color: #fff6e1;
  padding: 2em 0;
  h1 {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: #4c2003;
    text-align: center;
    padding-bottom: 2%;
  }
  video {
    width: 50%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const VideoBtn = styled.button`
  width: 70px;
  height: 25px;
  background-color: #472c1a;
  color: #fff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  margin-left: 0.3em;
  &:hover {
    cursor: pointer;
    background-color: #f86d0d;
  }
`;

const Iframe = styled.iframe`
  margin: 0 auto;
`;
