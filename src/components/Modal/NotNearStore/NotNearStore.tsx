import React from "react";
// import ScrollLock from "../ScrollLock";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

interface NotNearStoreProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  order: boolean;
}

const NotNearStore = ({
  setShowModal,
  showModal,
  order,
}: NotNearStoreProps) => {
  const closeModal = () => {
    setShowModal(!showModal);
  };

  console.log("order", order);
  return (
    <NotNearStroeModal>
      {order ? (
        <ModalBox>
          <Fade bottom>
            <ModalText>
              <img
                src="https://lh3.googleusercontent.com/GeKNtsJ1KS94IOR8BfkzTyn8BGWomBkgqnokyBJX6AE0zpMm_gWub-nBl0KYnz8rTDU=s180-rw"
                alt=""
              ></img>
              <p>요기요로 주문하시겠습니까?</p>
            </ModalText>
            <a href="https://www.yogiyo.co.kr/mobile/#/" onClick={closeModal}>
              주문하기!
            </a>
            <p onClick={closeModal}>닫기</p>
          </Fade>
        </ModalBox>
      ) : (
        <ModalBox>
          <Fade bottom>
            <h1>근처에 가까운 매장이 없습니다.</h1>
            <h2 onClick={closeModal}>이 지역 신청하기 GO!</h2>
          </Fade>
        </ModalBox>
      )}
    </NotNearStroeModal>
  );
};

export default NotNearStore;

const NotNearStroeModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  background-color: white;
  font-size: 2rem;
  padding: 2em 4em;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  a {
    text-decoration: underline;
    padding-bottom: 0.5em;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }

  span {
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ModalText = styled.div`
  display: flex;
  align-items: center;

  img {
    display: inline;
    width: 50px;
    height: 50px;
  }
`;
