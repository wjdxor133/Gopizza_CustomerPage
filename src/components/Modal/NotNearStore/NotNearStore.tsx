import React from "react";
// import ScrollLock from "../ScrollLock";
import styled from "styled-components";
// 모달창이 뜨는 순간 스크롤을 없애는 함수

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
    <>
      <NotNearStroeModal>
        {order ? (
          <ModalBox>
            <h1>요기요로 주문하시겠습니까?</h1>
            <p onClick={closeModal}>닫기</p>
          </ModalBox>
        ) : (
          <ModalBox>
            <h1>근처에 가까운 매장이 없습니다.</h1>
            <p>이 지역 신청하기 GO!</p>
            <p onClick={closeModal}>닫기</p>
          </ModalBox>
        )}
      </NotNearStroeModal>
    </>
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
  position: fixed;
  background-color: white;
  padding: 2em 4em;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    text-align: center;
  }
`;
