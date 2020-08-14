import React from "react";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

const CheckOutItem = ({ cartItem: { name, img_url, price, quantity } }) => {
  return (
    <CheckOutItemComponent>
      <ImgContainer>
        <img src={img_url} alt={name}></img>
        <CheckOutItemName>{name}</CheckOutItemName>
      </ImgContainer>
      <CheckOutTextBox>
        <CheckOutBoxItem>{quantity}</CheckOutBoxItem>
        <CheckOutBoxItem>{price}원</CheckOutBoxItem>
        <CheckOutBoxItem>
          <MdDeleteForever size="24" />
        </CheckOutBoxItem>
      </CheckOutTextBox>
    </CheckOutItemComponent>
  );
};

export default CheckOutItem;

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
`;

const CheckOutItemName = styled.p`
  text-align: center;
  width: 50%;
`;

const CheckOutTextBox = styled.div`
  width: 50%;
  display: flex;
`;

const CheckOutBoxItem = styled.p`
  width: 33.3%;
  text-align: center;
`;
