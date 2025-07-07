import styled, { keyframes } from "styled-components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  padding: 5vh 0;
  overflow: hidden;
`;

export const TitleSmall = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #767676;
  margin-bottom: 5vh;
`;

// 움직이는 애니메이션
const float = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-7px); }
  100% { transform: translateY(0); }
`;
export const BeeImg = styled.img`
  width: 20vh;
  margin-bottom: 5vh;
  animation: ${float} 3s ease-in-out infinite;
`;

export const LoginButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vh;
  margin-top: 1vh;
  width: 85%;
  background-color: white;
  color: #1f1f1f;
  border: 1px solid #767676;
`;

export const SignupLink = styled(Link)`
  font-size: 14px;
  color: #767676;
  margin-top: 3vh;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
