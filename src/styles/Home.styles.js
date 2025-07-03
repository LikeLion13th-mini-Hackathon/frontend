import styled from "styled-components";
import { Button } from "../components/Button";

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
  color: #767676;
  margin-bottom: 1vh;
`;

export const TitleMain = styled.h1`
  font-size: 60px;
  font-weight: 900;
  text-align: center;
  color: #140b77;
  white-space: pre-line;
  margin-top: 1vh;
  margin-bottom: 5vh;
  line-height: 1.1;
`;

export const DotWrapper = styled.div`
  display: flex;
  gap: 7px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#1e0066" : "#ccc")};
`;

export const SubText = styled.p`
  font-size: 16px;
  color: #111111;
  font-weight: 500;
  margin-top: 3vh;
  margin-bottom: 7vh;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.8s ease;
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
`;
