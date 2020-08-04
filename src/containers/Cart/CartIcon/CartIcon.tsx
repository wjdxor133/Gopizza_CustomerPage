import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CartDropDown from "../CartDropDown/CartDropDown";
import { toggleCartHidden } from "../../../redux/cart/cartActions";

const CartIcon = ({ toggleCartHidden, hidden }) => {
  console.log("hidden", hidden);
  return (
    <CartIconComponent onClick={toggleCartHidden}>
      <CartNumber>0</CartNumber>
      {hidden ? null : <CartDropDown />}
    </CartIconComponent>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden: hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

const CartIconComponent = styled.div`
  width: 100%;
`;

const CartNumber = styled.p`
  position: absolute;
  top: 32px;
  right: 21%;
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
