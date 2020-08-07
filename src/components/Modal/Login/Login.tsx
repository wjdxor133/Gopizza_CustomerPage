import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SignUp from "../SignUp/SignUp";
import ScrollLock from "../ScrollLock";

type LoginType = {
  id: string;
  pw: string;
};

const Login = () => {
  const [inputValue, setInputValue] = useState<LoginType>({
    id: "",
    pw: "",
  });
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const inputValueCheck = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("id", inputValue.id);
    console.log("pw", inputValue.pw);
  }, [inputValue]);

  const goToSignUp = () => {
    setShowSignUp(true);
  };

  ScrollLock();

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
                name="id"
                value={inputValue.id}
                placeholder="아이디 입력하시오."
                onChange={inputValueCheck}
              />
              <InputText
                name="pw"
                value={inputValue.pw}
                placeholder="비밀번호를 입력하시오."
                type="password"
                onChange={inputValueCheck}
              />
            </LoginTextBox>
          </LoginFormBox>
          <LoginBtn>로그인</LoginBtn>
          <GotoSignUpText onClick={goToSignUp}>
            계정이 없으신가요?
          </GotoSignUpText>
        </ModalBox>
      )}
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
