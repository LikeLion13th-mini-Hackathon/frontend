import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  gap: 2vh;
`;

export const DotWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 4vh;
`;

export const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? "#1e0066" : "#ccc")};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: ${(props) => (props.$show ? "auto" : "none")};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => `-${props.$index * 100}%`});
`;
