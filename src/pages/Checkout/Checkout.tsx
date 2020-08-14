import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckOutItem from "../../containers/CheckOutItem/CheckOutItem";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

const Checkout = ({ history, cartItems, total }) => {
  return (
    <CheckoutComponent>
      <Header history={history} />
      <CheckoutMain>
        <CheckoutTitle>장바구니</CheckoutTitle>
        <CheckoutContent>
          <CheckoutContentNav>
            <ContentNavText>메뉴</ContentNavText>
            <ContentNavText>수량</ContentNavText>
            <ContentNavText>가격</ContentNavText>
            <ContentNavText>삭제</ContentNavText>
          </CheckoutContentNav>
          <CheckoutList>
            {cartItems.map((cartItem) => {
              return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
            })}
          </CheckoutList>
        </CheckoutContent>
        <PriceText>TOTAL: {total}원</PriceText>
      </CheckoutMain>
      <Footer />
    </CheckoutComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);

const CheckoutComponent = styled.div`
  width: 100%;
`;

const CheckoutMain = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const CheckoutTitle = styled.p`
  font-size: 2.8rem;
  font-weight: 300;
  text-align: center;
  margin: 1em auto;
`;

const CheckoutContent = styled.div`
  width: 100%;
`;

const CheckoutContentNav = styled.div`
  display: flex;
  border: 1px solid #000;
  border-left-style: none;
  border-right-style: none;
  padding: 1.5em 0;
`;

const ContentNavText = styled.p`
  font-size: 1rem;
  text-align: center;
  width: 16.6%;
  :nth-child(1) {
    width: 50%;
  }
`;

const CheckoutList = styled.ul`
  width: 100%;
`;

const PriceText = styled.p`
  text-align: right;
  font-size: 2rem;
`;
