import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

interface MenuListType {
  name: string;
  en_name: string;
  tag_text: string;
  img_url: string;
  price: number;
}

type MenuLisptProps = {
  menuNum: number;
};

const MenuList = ({ menuNum }: MenuLisptProps) => {
  const [menuData, setMenuData] = useState<Array<MenuListType[]>>([]);

  useEffect(() => {
    const apiData = async () =>
      await axios.get("/data/menuData.json").then((res) => {
        return setMenuData(res.data.data);
      });
    apiData();
  }, [menuNum]);
  console.log("menuData", menuData[menuNum]);
  return (
    <MenuListComponent>
      <MenuListBox>
        {menuData.length > 0 &&
          menuData[menuNum].map((menu, idx: number) => {
            return (
              <MenuItem key={idx}>
                <img src={`${menu.img_url}`} alt=" "></img>
                <p>{menu.name}</p>
                <p>{menu.en_name}</p>
                <p>{menu.price}원</p>
                <p>#{menu.tag_text}</p>
                <button>장바구니 추가</button>
              </MenuItem>
            );
          })}
      </MenuListBox>
    </MenuListComponent>
  );
};

export default MenuList;

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

const MenuItem = styled.li`
  width: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 3em;
  margin-bottom: 1em;
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
  }
`;
