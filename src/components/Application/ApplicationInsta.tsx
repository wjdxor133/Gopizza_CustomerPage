import React from "react";
import styled from "styled-components";
import InstaConnect from "./InstaConnect/InstaConnect";
import instagram_Icon from "../../img/instagram_Icon.png";

const ApplicationInsta = () => {
  return (
    <ContentWrap>
      <Content>
        <TextWrap>
          <h1>매주 올라오는 #고피자</h1>
          <TextBoxWrap>
            <TextBoxOrange>고피자 인스타그램</TextBoxOrange>
            <TextBoxWhite>팔로우 GO!</TextBoxWhite>
          </TextBoxWrap>
        </TextWrap>
        <FollowWrpa href={"https://www.instagram.com/gopizza.kr/?hl=ko"}>
          <Gopizza>
            {/* <img src={instagram_Icon} /> */}
            <i className="fab fa-instagram"></i>
            #고피자
          </Gopizza>
          <Follow>
            팔로우하기 <i className="fas fa-chevron-right"></i>
          </Follow>
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
  height: 120vh;
  background-color: #fff6e1;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextWrap = styled.div`
  text-align: center;
  margin-bottom: 55px;
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

const TextBoxOrange = styled.div`
  width: 17%;
  margin-left: auto;
  padding: 5px 10px;
  color: #fff;
  background-color: #ff6602;
  font-size: 1.8rem;
  font-weight: 700;
`;
const TextBoxWhite = styled.div`
  width: 15%;
  padding: 5px 10px;
  margin-right: auto;
  color: #ff6602;
  background-color: #fff;
  font-size: 2rem;
  font-weight: 700;
`;

const FollowWrpa = styled.a`
  width: 14.2%;
  margin: 0 auto;
  display: flex;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 0.6rem 1rem;
  border-radius: 30px;
  background-color: #492c19;
`;
const Gopizza = styled.div`
  color: #ff6602;
  display: flex;
  i {
    width: 15px;
    height: 15px;
    color: #fff;
    margin-right: 6px;
  }
`;
const Follow = styled.div`
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
  height: 62%;
  background: linear-gradient(#f9d8b3, #fff6e1);
  position: absolute;
  bottom: 0;
`;
