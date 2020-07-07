import React from "react";
import Fade from "react-reveal/Fade";
import SlideShow from "../SlideShow/SlideShow";
import styled from "styled-components";

const HowToGopizza = () => {
  return (
    <>
      <Fade bottom>
        <Promotion>
          <PromotionTop>
            <TopTextOne>피자 한 판 = 0원?</TopTextOne>
            <TopTextTwo>고피자의 놀라운 0원 이벤트</TopTextTwo>
            <TopTextThree>COMING SOON</TopTextThree>
          </PromotionTop>
          <PromotionContainer>
            <PromotionArticles>
              <ArticlesTitle>
                피자도 버거처럼
                <br /> <OrangeColor>1인 세트</OrangeColor>로 즐기자!
              </ArticlesTitle>
              <ArticlesText>
                다양한 화덕 피자 & 파스타에 사이드 메뉴를 취향 존중!
                <br />
                내가 원하는 대로 고퀄 1인 피자를 즐겨보세요!
              </ArticlesText>
              <SlideShowTitle>
                HOW TO ENJOY <OrangeColor>GOPIZZA</OrangeColor>
              </SlideShowTitle>
            </PromotionArticles>
            <SlideShow />
          </PromotionContainer>
        </Promotion>
      </Fade>
    </>
  );
};

export default HowToGopizza;

const Promotion = styled.section`
  width: 100%;
  height: 100%;
`;

const PromotionTop = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(54, 22, 1, 0.8);
  padding: 3em 0;
`;

const TopTextOne = styled.span`
  background-color: #f86d0d;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  padding: 0.1em;
`;

const TopTextTwo = styled.p`
  font-weight: bold;
  color: white;
  margin: 1em 0 0.7em 0;
`;

const TopTextThree = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const PromotionContainer = styled.div`
  width: 100%;
  height: 80%;
  background-color: #ffeab9;
`;

const PromotionArticles = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
`;

const ArticlesTitle = styled.p`
  font-size: 2rem;
  text-align: center;
  color: #472c17;
  font-weight: bold;
`;

const OrangeColor = styled.span`
  color: #f86d0d;
`;

const ArticlesText = styled.p`
  font-size: 0.8rem;
  margin: 2.5em 0;
  line-height: 1rem;
  text-align: center;
  color: #6c4a2e;
`;

const SlideShowTitle = styled.p`
  display: inline-block;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #472c17;
  border-radius: 30px;
  padding: 0.3em 3em;
`;
