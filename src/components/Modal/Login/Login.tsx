import React, { useState } from "react";
import styled from "styled-components";
import ScrollLock from "../ScrollLock";

const Login = () => {
  ScrollLock();

  return (
    <LoginComponent>
      <ModalBox>
        <p>로그인</p>
        <p>아이디</p>
        <p>비밀번호</p>
      </ModalBox>
    </LoginComponent>
  );
};

export default Login;

const LoginComponent = styled.div`
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
`;
