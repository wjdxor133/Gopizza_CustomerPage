import React from "react";
import Header from "../../components/Header/Header";
import HowToGopizza from "../../components/HowToGopizza/HowToGopizza";
import ApplicationKakao from "../../components/Application/ApplicationKakao";
import ApplicationInsta from "../../components/Application/ApplicationInsta";
import Brand from "../../components/Brand/Brand";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import woowa from "../../img/woowa.png";
import yogiyo from "../../img/yogiyo.png";

const Main = ({ history }) => {
  const gotoMap = () => {
    history.push("/Map");
  };
  return (
    <>
      <Header />
      <Brand />
      <HowToGopizza />
      <ApplicationKakao />
      <ApplicationInsta />
      <FindSection>
        <FindStore>
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
            <FindDeliveryImges>
              {/* 임시로 인라인 style 넣음 */}
              <div style={{ backgroundColor: "red", width: "50%" }}>h1</div>
              <ImgWoowa src={woowa}></ImgWoowa>
              <ImgYogiyo src={yogiyo}></ImgYogiyo>
            </FindDeliveryImges>
            <FindDeliveryTitle>
              배달의민족과 요기요에서도
              <br />
              <OrangeColor>고피자</OrangeColor>를<OrangeColor>검색</OrangeColor>
              해보세요!
            </FindDeliveryTitle>
            <FindDeliveryText>*배달 가능 지역에 한함</FindDeliveryText>
          </FindDeliveryBox>
        </FindDelivery>
      </FindSection>
      <Footer />
    </>
  );
};

const FindSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FindStore = styled.div`
  width: 50%;
  background-image: url("https://www.gopizza.kr/wp-content/uploads/2019/03/pizza-spicy-cheese-chicken-400x300.jpg");
  text-align: center;
`;

const AlphaDiv = styled.div`
  background-color: rgba(255, 204, 167, 0.3);
  padding: 2em 0;
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
`;

const FindDeliveryBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FindDeliveryImges = styled.div`
  display: flex;
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
