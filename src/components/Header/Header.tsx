import React from "react";
import styled from "styled-components";
import CartIcon from "../../containers/Cart/CartIcon/CartIcon";

const Header = ({ history }) => {
  const goToPage = (num: number) => {
    switch (num) {
      case 1:
        return history.push("/");
      case 2:
        return history.push("/menu");
      case 3:
        return history.push("/map");
    }
  };

  return (
    <HeaderComponent>
      <HeaderTitleBox>
        <LogoText
          onClick={() => {
            goToPage(1);
          }}
        >
          GOPIZZA
        </LogoText>
        <NavTextBox>
          <NavText
            onClick={() => {
              goToPage(2);
            }}
          >
            메뉴소개
          </NavText>
          <NavText
            onClick={() => {
              goToPage(3);
            }}
          >
            매장찾기
          </NavText>
          <NavText>장바구니</NavText>
          <CartIcon />
        </NavTextBox>
      </HeaderTitleBox>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  width: 100%;
  background-color: #f86d0d;
`;

const HeaderTitleBox = styled.div`
  color: white;
  display: flex;
`;

const LogoText = styled.p`
  width: 50%;
  font-size: 2.1rem;
  font-weight: 700;
  padding: 1em 7em;

  :hover {
    cursor: pointer;
  }
`;

const NavTextBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const NavText = styled.p`
  width: 33.3%;
  font-size: 1.4rem;
  font-weight: 700;
  margin-right: 3em;

  :hover {
    cursor: pointer;
    color: #000;
  }
`;
