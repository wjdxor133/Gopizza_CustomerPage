import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CartItem from "../CartItem/CartItem";

const CartDropDown = ({ cartItems }) => {
  console.log("cartItems", cartItems);
  return (
    <CartDropDownComponent>
      <CartDropDownTop>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </CartDropDownTop>
      <CartDropDownBottom>
        <CartBtn>주문하기</CartBtn>
      </CartDropDownBottom>
    </CartDropDownComponent>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);

const CartDropDownComponent = styled.div`
  width: 20%;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 60px;
  right: 10px;
  z-index: 5;
  border: 1px solid #472c17;
`;

const CartDropDownTop = styled.div`
  height: 300px;
  overflow-y: auto;
`;

const CartDropDownBottom = styled.div`
  margin: 0.5em auto;
`;

const CartBtn = styled.button`
  background-color: #472c17;
  color: white;
  display: inline-block;
  padding: 1em 2em;
  :hover {
    cursor: pointer;
  }
`;
