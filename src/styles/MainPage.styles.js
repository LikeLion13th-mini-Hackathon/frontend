import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 14vh;
`;

// 헤더바 스타일
export const HeaderWrapper = styled.div`
  background-color: #1e0066;
  padding: 20px;
  padding-bottom: 40px;
  color: white;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateText = styled.div`
  font-size: 12px;
  opacity: 0.8;
`;

export const LoginButton = styled.button`
  background-color: white;
  color: #1e0066;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
`;

export const HelloText = styled.div`
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;

//
