import React from "react";
import styled from "styled-components";

const CartDropDown = () => {
  return (
    <CartDropDownComponent>
      <CartDropDownTop>
        <CartItem>hello</CartItem>
      </CartDropDownTop>
      <CartDropDownBottom>
        <CartBtn>주문하기</CartBtn>
      </CartDropDownBottom>
    </CartDropDownComponent>
  );
};

export default CartDropDown;

const CartDropDownComponent = styled.div`
  width: 100%;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 0%;
  right: 0%;
  z-index: 5;
`;

const CartDropDownTop = styled.div``;

const CartDropDownBottom = styled.div`
  margin: 0.5em auto;
`;

const CartItem = styled.div`
  color: #000;
`;

const CartBtn = styled.button`
  background-color: #472c17;
  color: white;
  display: inline-block;
  :hover {
    cursor: pointer;
  }
`;
