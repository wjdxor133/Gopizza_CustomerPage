import React from "react";
import ScrollLock from "../ScrollLock";
import "./NotNearStore.scss";

// 모달창이 뜨는 순간 스크롤을 없애는 함수
ScrollLock();

interface NotNearStoreProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const NotNearStore = ({ setShowModal, showModal }: NotNearStoreProps) => {
  const closeModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="NotNearStroe">
      <div className="modalBox">
        <h1>근처에 가까운 매장이 없습니다.</h1>
        <p onClick={closeModal}>닫기</p>
      </div>
    </div>
  );
};

export default NotNearStore;
