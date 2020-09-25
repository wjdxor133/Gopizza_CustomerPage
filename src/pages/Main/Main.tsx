import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Brand from "../../components/Brand/Brand";
import HowToGopizza from "../../components/HowToGopizza/HowToGopizza";
import ApplicationKakao from "../../components/Application/ApplicationKakao";
import ApplicationInsta from "../../components/Application/ApplicationInsta";
import Footer from "../../components/Footer/Footer";
import naverBrandLocation from "../../assets/img/naver_brand_location.jpg";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeaderImg from "../../assets/img/HeaderImg.png";
import woowa from "../../assets/img/woowa.png";
import yogiyo from "../../assets/img/yogiyo.png";

type MainPropsType = {
  img: string;
};

const Main = ({ history }) => {
  const gotoMap = () => {
    history.push("/Map");
  };
  return (
    <MainComponent>
      <MainHeaders>
        <Container>
          <MainText>
            <h1>고퀄1인피자</h1>
            <h2>GOPIZZA</h2>
          </MainText>
          <Fade bottom>
            <ImgContainer>
              <img src={HeaderImg} alt="HeaderImg.png" />
            </ImgContainer>
          </Fade>
          <Fade bottom>
            <SubText>
              <Text1>느리고, 비싸고, 큰 피자, NO!</Text1>
              <Text2>
                고퀄1인피자 <p> 고피자</p>가 딱!
              </Text2>
            </SubText>
          </Fade>
        </Container>
      </MainHeaders>
      {/* <MainHeader /> */}
      <Brand />
      <HowToGopizza history={history} />
      <ApplicationKakao />
      <ApplicationInsta />
      <FindSection>
        <FindStore img={naverBrandLocation}>
          <AlphaDiv>
            <FindStoreTitle>
              내 주변 가장 가까운
              <br /> 고피자 매장을 찾아보세요!
            </FindStoreTitle>
            <FindStoreTag>#고퀄1인피자 #rightnow</FindStoreTag>
            <FindStoreBtn onClick={gotoMap}>
              <BsSearch size="14" color="#f86d0d" />
              <FindStoreText>매장 찾기</FindStoreText>
              <MdKeyboardArrowRight size="17" />
            </FindStoreBtn>
          </AlphaDiv>
        </FindStore>
        <FindDelivery>
          <FindDeliveryBox>
            <FindDeliveryTitle>
              배달의민족과 요기요에서도
              <br />
              <OrangeColor>고피자</OrangeColor>를<OrangeColor>검색</OrangeColor>
              해보세요!
            </FindDeliveryTitle>
            <FindDeliveryText>*배달 가능 지역에 한함</FindDeliveryText>
          </FindDeliveryBox>
          <FindDeliveryImges>
            <ImgWoowa src={woowa}></ImgWoowa>
            <ImgYogiyo src={yogiyo}></ImgYogiyo>
          </FindDeliveryImges>
        </FindDelivery>
      </FindSection>
      <Footer />
    </MainComponent>
  );
};

const MainComponent = styled.div``;

const MainHeaders = styled.section`
  width: 100%;
  margin: 2em 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MainText = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  h1 {
    display: inline-block;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 700;
    color: #f86d0d;
    border-top: 3px solid #f86d0d;
    border-bottom: 3px solid #f86d0d;
    padding: 10px 0 5px 0;
  }
  h2 {
    font-size: 3.88rem;
    color: #f86d0d;
    font-weight: 800;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
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

const FindSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const FindStore = styled.div<MainPropsType>`
  width: 50%;
  background-image: url(${(props) => props.img && props.img});
  text-align: center;
`;

const AlphaDiv = styled.div`
  background-color: rgba(255, 204, 167, 0.5);
  padding: 3em;
`;

const FindStoreTitle = styled.p`
  color: #472c17;
  font-weight: bold;
`;

const FindStoreTag = styled.p`
  margin: 1em 0;
  color: #f86d0d;
  font-weight: bold;
`;

const FindStoreText = styled.p`
  font-weight: 400;
  margin-left: 0.3em;
`;

const FindStoreBtn = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  padding: 0.4em;
  font-size: 0.8rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const FindDelivery = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1em 0;
`;

const FindDeliveryBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FindDeliveryImges = styled.div`
  display: flex;
  img {
    width: 40px;
    height: 40px;
    margin-left: 0.5em;
  }
`;

const ImgWoowa = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 8px;
  border-radius: 5px;
`;

const ImgYogiyo = styled.img`
  width: 35px;
  height: 35px;
`;

const FindDeliveryTitle = styled.p`
  font-weight: bold;
  margin: 0.5em 0;
`;

const OrangeColor = styled.span`
  font-weight: bold;
  color: #f86d0d;
`;

const FindDeliveryText = styled.p`
  font-size: 0.6rem;
  font-weight: bold;
  color: #8d837a;
  text-align: left;
`;

export default Main;
