import styled from "styled-components";

export const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: clamp(60px, 8vh, 80px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 5px;
  z-index: 100;
  background-color: rgb(243, 243, 243);
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #888;

  &.active {
    color: #140b77;
    font-weight: bold;
  }
`;

export const NavIcon = styled.div`
  font-size: 20px;
  margin-bottom: 2px;
`;

export const NavLabel = styled.span`
  font-size: 13px;
`;
