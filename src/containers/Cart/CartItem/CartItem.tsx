import React from "react";
import styled from "styled-components";

type CartItemPropsType = {
  cartItem: CartItemPropsMemberType;
};

type CartItemPropsMemberType = {
  name: string;
  img_url: string;
  price: number;
  quantity: number;
};

const CartItem = ({
  cartItem: { name, img_url, price, quantity },
}: CartItemPropsType) => {
  return (
    <CartItemComponent>
      <CartItemBox>
        <img src={img_url} alt={name}></img>
        <CartItemTextBox>
          <CartItemText>{name}</CartItemText>
          <CartItemText>수량: {quantity}</CartItemText>
          <CartItemText>{price * quantity}원</CartItemText>
        </CartItemTextBox>
      </CartItemBox>
    </CartItemComponent>
  );
};

export default CartItem;

const CartItemComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  margin: 15px 0;
`;

const CartItemBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  img {
    width: 40%;
  }
`;

const CartItemTextBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 1em;
`;

const CartItemText = styled.p`
  font-size: 0.9rem;
  color: #000;
  margin: 0.3em;
`;
