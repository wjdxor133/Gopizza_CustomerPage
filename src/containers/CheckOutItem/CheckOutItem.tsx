import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartActions";

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, img_url, price, quantity } = cartItem;
  return (
    <CheckOutItemComponent>
      <ImgContainer>
        <img src={img_url} alt={name}></img>
        <CheckOutItemName>{name}</CheckOutItemName>
      </ImgContainer>
      <CheckOutTextBox>
        <CheckOutBoxItem>
          <CheckOutQuantityBtn onClick={() => removeItem(cartItem)}>
            &#10094;
          </CheckOutQuantityBtn>
          {quantity}
          <CheckOutQuantityBtn onClick={() => addItem(cartItem)}>
            &#10095;
          </CheckOutQuantityBtn>
        </CheckOutBoxItem>
        <CheckOutBoxItem>{price}원</CheckOutBoxItem>
        <CheckOutBoxItem onClick={() => clearItem(cartItem)}>
          <MdDeleteForever size="25" />
        </CheckOutBoxItem>
      </CheckOutTextBox>
    </CheckOutItemComponent>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);

const CheckOutItemComponent = styled.ul`
  display: flex;
  padding: 2em 0;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }
  :hover {
    cursor: pointer;
  }
`;

const CheckOutItemName = styled.p`
  text-align: center;
  width: 50%;
`;

const CheckOutTextBox = styled.div`
  width: 50%;
  display: flex;

  :nth-child(2) {
    :hover {
      cursor: pointer;
    }
  }
`;

const CheckOutBoxItem = styled.p`
  width: 33.3%;
  text-align: center;
`;

const CheckOutQuantityBtn = styled.div`
  display: inline-flex;
  padding: 0 1em;
  font-weight: 300;

  :hover {
    cursor: pointer;
  }
`;
