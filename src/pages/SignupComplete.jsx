import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import BeeFace from "../assets/BeeFace.png";
import MainLogo from "../assets/MainLogo.png";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-10%);
`;

export const TitleSmall = styled.p`
  margin-top: 2vh;
  margin-bottom: 5vh;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const TitleMain = styled.h1`
  font-size: 60px;
  font-weight: 900;
  text-align: center;
  color: #140b77;
  white-space: pre-line;
  margin-bottom: 0vh;
`;

export default function SignupComplete() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <img src={BeeFace} style={{ width: "15%", marginBottom: "2vh" }} />
      <img src={MainLogo} style={{ width: "35%", marginBottom: "3vh" }} />
      <TitleSmall>회원가입이 완료되었습니다!</TitleSmall>
      <Button onClick={handleLoginClick} style={{ marginBottom: "1.5vh" }}>
        로그인
      </Button>
      <Button onClick={handleHomeClick}>홈 화면으로</Button>
    </Container>
  );
}
