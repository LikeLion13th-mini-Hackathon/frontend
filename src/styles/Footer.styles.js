import styled from "styled-components";

export const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
  z-index: 100;
  transform: translateY(-10%);
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #888;
`;

export const NavIcon = styled.div`
  font-size: 24px;
  margin-bottom: 4px;
`;

export const NavLabel = styled.span`
  font-size: 14px;
`;
