import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-55px);
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
  transition: opacity 0.8s ease;
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
