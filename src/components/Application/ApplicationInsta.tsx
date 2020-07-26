import React from "react";
import styled from "styled-components";
import InstaConnect from "./InstaConnect/InstaConnect";
import Fade from "react-reveal/Fade";

const ApplicationInsta = () => {
  return (
    <ContentWrap>
      <Content>
        <Fade bottom>
          <TextWrap>
            <h1>매주 올라오는 #고피자</h1>
            <TextBoxWrap>
              <TextBoxOrange>고피자 인스타그램</TextBoxOrange>
              <TextBoxWhite>팔로우 GO!</TextBoxWhite>
            </TextBoxWrap>
          </TextWrap>
        </Fade>
        <FollowWrpa>
          <Fade bottom>
            <a href="https://www.instagram.com/gopizza.kr/?hl=ko">
              <Gopizza>
                <i className="fab fa-instagram"></i>
                #고피자
              </Gopizza>
              <Follow>
                팔로우하기 <i className="fas fa-chevron-right"></i>
              </Follow>
            </a>
          </Fade>
        </FollowWrpa>
        <InstaConnect />
        <GradientOverlay />
      </Content>
    </ContentWrap>
  );
};

export default ApplicationInsta;

const ContentWrap = styled.section`
  width: 100%;
  background-color: #fff6e1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const TextWrap = styled.div`
  text-align: center;
  margin: 2em 0;
  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: "Roboto", sans-serif;
    color: #4c2003;
    margin-bottom: 15px;
  }
`;

const TextBoxWrap = styled.div`
  display: flex;
  width: 100%;
`;

const TextBoxOrange = styled.span`
  margin-left: auto;
  padding: 5px 10px;
  color: #fff;
  background-color: #ff6602;
  font-size: 1.8rem;
  font-weight: 700;
`;
const TextBoxWhite = styled.span`
  padding: 5px 10px;
  margin-right: auto;
  color: #ff6602;
  background-color: #fff;
  font-size: 2rem;
  font-weight: 700;
`;

const FollowWrpa = styled.span`
  margin: 0 auto;
  display: flex;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 0.6rem 1rem;
  border-radius: 30px;
  background-color: #492c19;
  a {
    display: flex;
  }
`;
const Gopizza = styled.span`
  color: #ff6602;
  display: flex;
  i {
    width: 15px;
    height: 15px;
    color: #fff;
    margin-right: 6px;
  }
`;
const Follow = styled.span`
  color: #fff;
  padding-left: 5px;
  display: flex;
  i {
    width: 15px;
    height: 15px;
    margin-left: 6px;
  }
`;

const GradientOverlay = styled.div`
  width: 100%;
  background: linear-gradient(#f9d8b3, #fff6e1);
`;
