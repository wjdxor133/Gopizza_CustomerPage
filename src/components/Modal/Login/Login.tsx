import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUp from "../SignUp/SignUp";
import ScrollLock from "../ScrollLock";

import { auth } from "../../../core/utils/firebase/firebase";

type LoginType = {
  email: string;
  password: string;
};

const Login = ({ showLoginModal, setLoginModal }) => {
  const [inputValue, setInputValue] = useState<LoginType>({
    email: "",
    password: "",
  });
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const inputValueCheck = (evnet) => {
    const { name, value } = evnet.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  useEffect(() => {}, [inputValue]);

  const goToSignUp = () => {
    setShowSignUp(true);
  };

  const handleSubmit = async (evnet) => {
    const { email, password } = inputValue;
    evnet.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setInputValue({
        email: "",
        password: "",
      });
      toast.success("로그인 되었습니다.", {
        position: "bottom-center",
        autoClose: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  ScrollLock();
  showLoginModal();

  return (
    <LoginComponent>
      {showSignUp ? (
        <SignUp />
      ) : (
        <ModalBox>
          <LoginTilte>LOGIN</LoginTilte>
          <LoginFormBox>
            <LoginTextBox>
              <LoginText>아이디 </LoginText>
              <LoginText>비밀번호 </LoginText>
            </LoginTextBox>
            <LoginTextBox>
              <InputText
                name="email"
                value={inputValue.email}
                placeholder="이메일을 입력하시오."
                onChange={inputValueCheck}
              />
              <InputText
                name="password"
                value={inputValue.password}
                placeholder="비밀번호를 입력하시오."
                type="password"
                onChange={inputValueCheck}
              />
            </LoginTextBox>
          </LoginFormBox>
          <LoginBtnBox>
            <LoginBtn onClick={handleSubmit}>로그인</LoginBtn>
            <CloseBtn onClick={() => setLoginModal(false)}>닫기</CloseBtn>
          </LoginBtnBox>
          <GotoSignUpText onClick={goToSignUp}>
            계정이 없으신가요?
          </GotoSignUpText>
        </ModalBox>
      )}
      <ToastContainer />
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

const LoginTilte = styled.p`
  font-size: 2rem;
  margin-bottom: 1em;
`;

const LoginFormBox = styled.div`
  display: flex;
  align-items: center;
`;

const LoginTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;

const LoginText = styled.p`
  font-size: 1rem;
  padding: 1em 0;
`;

const InputText = styled.input`
  border: 1px solid #000;
  margin: 1em 0 1em 1em;
  padding: 0.3em;
`;

const LoginBtnBox = styled.div`
  display: flex;
`;

const LoginBtn = styled.button`
  font-size: 1.2rem;
  background-color: #472c17;
  color: white;
  padding: 0.5em 1em;
  margin-bottom: 1em;

  :hover {
    cursor: pointer;
  }
`;

const GotoSignUpText = styled.p`
  font-size: 0.9rem;
  color: gray;
  :hover {
    color: #000;
    cursor: pointer;
  }
`;

const CloseBtn = styled.button`
  font-size: 1.2rem;
  background-color: #472c17;
  color: white;
  padding: 0.5em 1em;
  margin-bottom: 1em;
  margin-left: 1em;

  :hover {
    cursor: pointer;
  }
`;
