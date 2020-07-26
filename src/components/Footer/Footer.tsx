import React from "react";
import styled from "styled-components";
import { TiArrowSortedUp } from "react-icons/ti";

const Footer = () => {
  return (
    <FooterComponent>
      <FooterBox>
        <FooterLeft>
          <FooterLeftTop>
            <FooterText>
              <FooterTextBold>가맹문의 | </FooterTextBold>070-4469-6747
            </FooterText>
            <FooterText>
              <FooterTextBold>대표전화 | </FooterTextBold>1800-8972
            </FooterText>
            <FooterText>
              <FooterTextBold>이메일 | </FooterTextBold>gofficial@gopizza.kr
            </FooterText>
          </FooterLeftTop>
          <FooterLeftbottom>
            <FooterText>주식회사 고피자 | 대표이사 임재원 |</FooterText>
            <FooterText>
              서울특별시 마포구 독막로19길 26 씨코빌딩 1층, 2층
            </FooterText>
            <FooterText>사업자 등록번호 | 571-87-00783</FooterText>
            <FooterTextSmall>
              @2020 GOPIZZA Co. All rights reserved.
            </FooterTextSmall>
          </FooterLeftbottom>
        </FooterLeft>
        <FooterRight>
          <FooterRightTop>
            <FooterRightTopBox>
              <TiArrowSortedUp size="18" color="#f86d0d" />
              <FooterTopText>TOP</FooterTopText>
            </FooterRightTopBox>
          </FooterRightTop>
          <FooterRightBottom>
            <img
              src="https://www.gopizza.kr/wp-content/uploads/2020/06/good_franchise.png"
              alt=""
            ></img>
            <img
              src="https://www.gopizza.kr/wp-content/uploads/2020/06/brand_1_enblem_01.png"
              alt=""
            ></img>
            <img
              src="https://www.gopizza.kr/wp-content/uploads/2020/06/HACCP-icon.png"
              alt=""
            ></img>
            <FooterLogoText>GOPIZZA</FooterLogoText>
          </FooterRightBottom>
        </FooterRight>
      </FooterBox>
    </FooterComponent>
  );
};

const FooterComponent = styled.div`
  width: 100%;
  background-color: #f86d0d;
  padding: 2em 0;
`;

const FooterBox = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const FooterLeft = styled.div``;

const FooterLeftTop = styled.div`
  margin-bottom: 2.5em;
`;

const FooterLeftbottom = styled.div``;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterRightTop = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const FooterRightTopBox = styled.div`
  width: 18%;
  background-color: #fff;
  text-align: center;
  line-height: 0.7rem;
  border-radius: 50%;
  padding: 0.2em 0 0.8em 0;
`;

const FooterTopText = styled.p`
  color: #f86d0d;
  font-size: 1.1rem;
  font-weight: bold;
`;
const FooterRightBottom = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    margin-right: 0.5em;
  }
`;

const FooterText = styled.p`
  color: white;
  font-size: 0.8rem;
  margin: 0.7em 0;
`;

const FooterTextSmall = styled.p`
  color: white;
  font-size: 0.6rem;
  margin: 0.7em 0;
`;

const FooterTextBold = styled.span`
  font-size: 0.85rem;
  font-weight: bold;
`;

const FooterLogoText = styled.span`
  color: white;
  font-weight: bold;
  font-size: 2rem;
`;

export default Footer;
