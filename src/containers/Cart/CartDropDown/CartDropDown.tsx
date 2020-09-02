import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../../redux/cart/cartSelectors";

const CartDropDown = ({ cartItems, history }) => {
  const goToCheckoutPage = () => {
    history.push("/checkout");
  };
  return (
    <CartDropDownComponent>
      <CartDropDownTop>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <CartDropDownText>항목이 없습니다.</CartDropDownText>
        )}
      </CartDropDownTop>
      <CartDropDownBottom>
        <CartBtn onClick={goToCheckoutPage}>주문하기</CartBtn>
      </CartDropDownBottom>
    </CartDropDownComponent>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);

const CartDropDownComponent = styled.div`
  width: 300px;
  background-color: white;
  color: #000;
  text-align: center;
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

const CartDropDownText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 4em;
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
