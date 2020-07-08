import React from "react";
import Fade from "react-reveal/Fade";
// import Fade from "react-reveal/Fade";
import styled from "styled-components";
import HeaderImg from "../../img/HeaderImg.png";

const Header = () => {
  return (
    <Headers>
      <Container>
        <MainText>
          <h1>고퀄1인피자</h1>
          <h2>GOPIZZA</h2>
        </MainText>
        <ImgContainer>
          <img src={HeaderImg} alt="" />
        </ImgContainer>
        <SubText>
          <Text1>느리고, 비싸고, 큰 피자, NO!</Text1>
          <Text2>
            고퀄1인피자 <p> 고피자</p>가 딱!
          </Text2>
        </SubText>
      </Container>
    </Headers>
  );
};
export default Header;

const Headers = styled.section`
  width: 100vw;
  height: 80vh;
  position: relative;
  /* background-color: #fce7d9; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const MainText = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  h1 {
    width: 10%;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: #f86d0d;
    border-top: 3px solid #f86d0d;
    border-bottom: 3px solid #f86d0d;
    padding: 10px 0 5px 0;
  }
  h2 {
    font-size: 3.88rem;
    color: #f86d0d;
    font-family: "Oswald", sans-serif;
    font-weight: 800;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  position: relative;
  padding: 50px 0 50px 0;
  img {
    width: 40%;
    margin: 0 auto;
  }
`;

const SubText = styled.div`
  text-align: center;
`;

const Text1 = styled.div`
  color: #4c2003;
  font-size: 1.89rem;
`;

const Text2 = styled.div`
  display: flex;
  justify-content: center;
  color: #4c2003;
  font-size: 1.89rem;
  font-weight: 700;
  padding-top: 10px;
  letter-spacing: 1.2px;
  p {
    color: #f86d0d;
    padding-left: 10px;
  }
`;
