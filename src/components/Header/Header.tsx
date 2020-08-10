import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { auth } from "../../core/utils/firebase/firebase";
import { createUserProfileDocument } from "../../core/utils/firebase/firebase";
import { setCurrentUser } from "../../redux/user/userActions";
import CartIcon from "../../containers/Cart/CartIcon/CartIcon";

const Header = ({ history, setCurrentUser }) => {
  const [curUserState, setCurUserState] = useState<firebase.User | null>(null);
  const goToPage = (num: number) => {
    switch (num) {
      case 1:
        return history.push("/");
      case 2:
        return history.push("/menu");
      case 3:
        return history.push("/map");
    }
  };

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      setCurUserState(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, undefined);
        console.log("userRef", userRef);
        userRef?.onSnapshot((snapShot) => {
          console.log("snapShot", snapShot);
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
      console.log("user", userAuth);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <HeaderComponent>
      <HeaderTitleBox>
        <LogoText
          onClick={() => {
            goToPage(1);
          }}
        >
          GOPIZZA
        </LogoText>
        <NavTextBox>
          <NavText
            onClick={() => {
              goToPage(2);
            }}
          >
            메뉴소개
          </NavText>
          <NavText
            onClick={() => {
              goToPage(3);
            }}
          >
            매장찾기
          </NavText>
          <NavText>
            장바구니
            <CartIcon />
          </NavText>
          {/* <CartIcon /> */}
          {curUserState ? (
            <NavText onClick={() => auth.signOut()}>로그아웃</NavText>
          ) : null}
        </NavTextBox>
      </HeaderTitleBox>
    </HeaderComponent>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.cuurentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderComponent = styled.div`
  width: 100%;
  background-color: #f86d0d;
`;

const HeaderTitleBox = styled.div`
  color: white;
  display: flex;
`;

const LogoText = styled.p`
  width: 50%;
  font-size: 2.1rem;
  font-weight: 700;
  padding: 1em 7em;

  :hover {
    cursor: pointer;
  }
`;

const NavTextBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const NavText = styled.p`
  width: 25%;
  font-size: 1.4rem;
  font-weight: 700;
  /* margin-right: 3em; */

  :nth-child(3) {
    margin-top: 1em;
  }

  :hover {
    cursor: pointer;
    color: #000;
  }
`;
