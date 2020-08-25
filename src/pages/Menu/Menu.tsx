import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import MenuList from "../../containers/MenuList/MenuList";
import Footer from "../../components/Footer/Footer";

const Menu = ({ history }) => {
  const [menuNum, setMenuNum] = useState<number>(0);
  const munuBar: string[] = [
    "피자",
    "파스타",
    "사이드 & 디저트",
    "음료",
    "패키지",
    "토핑 & 소스",
  ];

  const changeMenuList = (num) => {
    setMenuNum(num);
  };

  return (
    <MenuComponent>
      <Header history={history} />
      <ImgBox>
        <Img
          src="https://www.gopizza.kr/wp-content/uploads/2019/04/메뉴-카테고리-메인-이미지화질-개선.png"
          alt="메뉴-카테고리-메인-이미지화질-개선.png"
        ></Img>
        <ImgText>
          신선한 재료를
          <br /> 화덕으로 뜨겁게
          <br />
          <span className="imgText">
            가성비 최고의 고피자 메뉴를 만나보세요.
          </span>
        </ImgText>
      </ImgBox>
      <NavBar>
        <NavTextBox>
          {munuBar.map((menu: string, idx: number) => {
            return (
              <NavText
                key={idx}
                onClick={() => {
                  changeMenuList(idx);
                }}
              >
                {menu}
              </NavText>
            );
          })}
        </NavTextBox>
      </NavBar>
      <MenuList menuNum={menuNum} />
      <Footer />
    </MenuComponent>
  );
};

export default Menu;

const MenuComponent = styled.div`
  width: 100%;
  height: 100vh;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgText = styled.p`
  position: absolute;
  top: 35%;
  left: 15%;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);

  .imgText {
    font-size: 2rem;
  }
`;

const NavBar = styled.div`
  width: 100%;
  background-color: #f6f6f6;
`;

const NavTextBox = styled.div`
  margin: 0 auto;
  padding: 2em 0;
  display: flex;
  justify-content: center;
`;

const NavText = styled.p`
  margin: 0 2em;
  font-size: 1.2rem;
  color: #666;
  :hover {
    cursor: pointer;
  }
`;
