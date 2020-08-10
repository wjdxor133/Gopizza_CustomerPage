import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CartDropDown from "../CartDropDown/CartDropDown";

import { toggleCartHidden } from "../../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../../redux/cart/cartSelectors";

const CartIcon = ({ toggleCartHidden, hidden, itemCount }) => {
  console.log("hidden", hidden);
  return (
    <CartIconComponent onClick={toggleCartHidden}>
      <CartNumber>{itemCount}</CartNumber>
      {hidden ? null : <CartDropDown />}
    </CartIconComponent>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

const CartIconComponent = styled.button`
  width: 100%;
`;

const CartNumber = styled.p`
  position: absolute;
  top: 32px;
  right: 17.1%;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  background-color: #472c17;
  padding: 0.3em 0.5em;
  border-radius: 45%;
  :hover {
    cursor: pointer;
  }
`;
