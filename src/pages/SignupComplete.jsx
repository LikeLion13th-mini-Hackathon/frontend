import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleSmall = styled.p`
  margin-top: 0vh; 
  margin-bottom: 15vh;
  font-size: 20px;
  color: #000;
`;

export const TitleMain = styled.h1`
  font-size: 60px;
  font-weight: 900;
  text-align: center;
  color: #140B77;
  white-space: pre-line;
  margin-bottom: 0vh;
`;

export default function SignupComplete () {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/login");
  };

  return (
    <Container>
      <TitleMain>메인{"\n"}타이틀</TitleMain>
      <TitleSmall>회원가입이 완료되었습니다!</TitleSmall>
      <Button onClick={handleHomeClick}>로그인</Button>
    </Container>
  );
}