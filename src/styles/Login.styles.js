import styled from "styled-components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-55px);
`;

export const TitleSmall = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #767676;
  margin-bottom: 1vh;
`;

export const TitleMain = styled.h1`
  font-size: 62px;
  font-weight: 900;
  text-shadow: 0 0 1px currentColor;
  text-align: center;
  color: #140b77;
  white-space: pre-line;
  margin-top: 1vh;
  margin-bottom: 2vh;
  line-height: 1;
`;

export const LoginButton = styled(Button)`
  margin-top: 1vh;
  width: 85%;
  background-color: white;
  color: #1f1f1f;
  border: 1px solid #767676;
  display: flex;
  align-items: center;
  justify-content: center;
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
