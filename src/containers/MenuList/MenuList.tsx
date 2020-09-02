import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import styled from "styled-components";
import Login from "../../components/Modal/Login/Login";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addItem } from "../../redux/cart/cartActions";

interface MenuListType {
  id: number;
  name: string;
  en_name: string;
  tag_text: string;
  img_url: string;
  price: number;
}

type MenuLisptProps = {
  menuNum: number;
  currentUser: firebase.User | null;
  addItem: (item: MenuListType) => void;
};

const MenuList = ({ menuNum, currentUser, addItem }: MenuLisptProps) => {
  const [menuData, setMenuData] = useState<Array<MenuListType[]>>([]);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const apiData = () => {
      setTimeout(async () => {
        await axios.get("/data/menuData.json").then((res) => {
          setMenuData(res.data.data);
          setIsLoading(false);
        });
      }, 500);
      setIsLoading(true);
    };
    apiData();
  }, [menuNum]);

  const showLoginModal = () => {
    if (currentUser === null) {
      setLoginModal(true);
    } else if (currentUser !== null) {
      setLoginModal(false);
    }
  };

  return (
    <MenuListComponent>
      {loginModal ? (
        <Login showLoginModal={showLoginModal} setLoginModal={setLoginModal} />
      ) : null}
      {isLoading === true ? (
        <LoadingBox>
          <LoadingText>Loading...</LoadingText>
        </LoadingBox>
      ) : (
        <MenuListBox>
          {menuData.length > 0 &&
            menuData[menuNum].map((menu) => {
              return (
                <MenuItem key={menu.id}>
                  <img src={`${menu.img_url}`} alt=" "></img>
                  <p>{menu.name}</p>
                  <p>{menu.en_name}</p>
                  <p>{menu.price}원</p>
                  <p>#{menu.tag_text}</p>
                  <button
                    onClick={() => {
                      showLoginModal();
                      addItem(menu);
                      if (currentUser !== null)
                        toast(`${menu.name} 추가!`, {
                          position: "bottom-center",
                          autoClose: 1500,
                        });
                    }}
                  >
                    장바구니 추가
                  </button>
                </MenuItem>
              );
            })}
        </MenuListBox>
      )}
      <ToastContainer />
    </MenuListComponent>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);

const MenuListComponent = styled.div`
  width: 100%;
  background-color: #f6f6f6;
`;

const MenuListBox = styled.ul`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
`;

const LoadingBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const LoadingText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  opacity: 0.5;
  padding: 3em;
`;

const MenuItem = styled.li`
  width: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 3em;
  margin-bottom: 1.5em;
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  img {
    width: 100%;
    margin-bottom: 1em;
  }
  p {
    margin: 0.4em 0;
    :nth-child(2) {
      font-weight: bold;
    }

    :nth-child(5) {
      font-size: 0.85rem;
    }
  }
  button {
    background-color: #472c17;
    color: white;
    margin-top: 1em;
    padding: 1em;
    font-weight: bold;
    border-radius: 3px;

    :hover {
      cursor: pointer;
    }
  }
`;
