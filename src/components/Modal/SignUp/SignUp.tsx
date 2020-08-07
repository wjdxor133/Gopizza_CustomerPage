import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { signInWithGoogle } from "../../../core/utils/firebase/firebase";

type SignUpInputType = {
  name: string;
  id: string;
  pw: string;
  pwConfirm: string;
};

const SignUp = () => {
  const [inputValue, setInputValue] = useState<SignUpInputType>({
    name: "",
    id: "",
    pw: "",
    pwConfirm: "",
  });

  const inputValueCheck = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {}, [inputValue]);

  return (
    <SignUpComponent>
      <SignUpTilte>SignUp</SignUpTilte>
      <SignUpFormBox>
        <SignUpTextBox>
          <SignUpText>이름 </SignUpText>
          <SignUpText>아이디 </SignUpText>
          <SignUpText>비밀번호 </SignUpText>
          <SignUpText>비밀번호 확인 </SignUpText>
        </SignUpTextBox>
        <SignUpTextBox>
          <InputText
            name="name"
            value={inputValue.name}
            placeholder="이름을 입력하시오."
            onChange={inputValueCheck}
          />
          <InputText
            name="id"
            value={inputValue.id}
            placeholder="아이디를 입력하시오."
            onChange={inputValueCheck}
          />
          <InputText
            name="pw"
            value={inputValue.pw}
            placeholder="비밀번호를 입력하시오."
            type="password"
            onChange={inputValueCheck}
          />
          <InputText
            name="pwConfirm"
            value={inputValue.pwConfirm}
            placeholder="다시 입력하시오."
            type="password"
            onChange={inputValueCheck}
          />
        </SignUpTextBox>
      </SignUpFormBox>
      <SignUpBtn>회원가입</SignUpBtn>
      <SignUpBtn onClick={signInWithGoogle}> Sign in with Google </SignUpBtn>
    </SignUpComponent>
  );
};

export default SignUp;

const SignUpComponent = styled.div`
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

const SignUpTilte = styled.p`
  font-size: 2rem;
  margin-bottom: 1em;
`;

const SignUpFormBox = styled.div`
  display: flex;
  align-items: center;
`;

const SignUpTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;

const SignUpText = styled.p`
  font-size: 1rem;
  padding: 1em 0;
`;

const InputText = styled.input`
  border: 1px solid #000;
  margin: 0.8em 0 0.8em 1em;
  padding: 0.3em;
`;

const SignUpBtn = styled.button`
  font-size: 1.2rem;
  background-color: #472c17;
  color: white;
  padding: 0.5em 1em;
  margin-bottom: 1em;

  :hover {
    cursor: pointer;
  }
`;
