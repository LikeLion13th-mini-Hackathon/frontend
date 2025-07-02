import styled from "styled-components";

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
  color: #1e0066;
  white-space: pre-line;
  margin-top: 1vh;
  margin-bottom: 5vh;
`;

export const IconCircle = styled.div`
  width: 160px;
  height: 160px;
  background-color: #d2ccec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-bottom: 30px;
`;

export const DotWrapper = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#1e0066" : "#ccc")};
`;

export const SubText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 2vh;
  margin-bottom: 6vh;
`;
