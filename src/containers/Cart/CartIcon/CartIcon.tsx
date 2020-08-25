import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartDropDown from "../CartDropDown/CartDropDown";

import { toggleCartHidden } from "../../../redux/cart/cartActions";
import { selectCartHidden } from "../../../redux/cart/cartSelectors";
import { selectCartItemsCount } from "../../../redux/cart/cartSelectors";

const CartIcon = ({ toggleCartHidden, hidden, itemCount, history }) => {
  console.log("hidden", hidden);
  return (
    <CartIconComponent onClick={toggleCartHidden}>
      <CartNumber>{itemCount}</CartNumber>
      {hidden ? null : <CartDropDown history={history} />}
    </CartIconComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

const CartIconComponent = styled.div`
  width: 20px;
  position: absolute;
  top: 32px;
  display: inline-block;
`;

const CartNumber = styled.p`
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
