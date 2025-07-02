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
  color: #444;
  margin-bottom: 0vh;
`;

export const TitleMain = styled.h1`
  font-size: 60px;
  font-weight: 900;
  text-align: center;
  color: #140B77;
  white-space: pre-line;
  margin-top: 1vh;
  margin-bottom: 15vh;
`;

export const LoginButton = styled(Button)`
  margin-top: 2vh;
  height: 48px;
  font-weight: 400;
`;

export const Signup = styled.div`
  font-size: 15px;
  margin-top: 2vh;
`;

export const SignupLink = styled(Link)`
  color: inherit;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
