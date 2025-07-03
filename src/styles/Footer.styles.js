import styled from "styled-components";

export const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7vh; // ȭ�鿡 ���� ���� �ʿ��Ҽ���
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 5px; // �Ƹ���.. ���� �ʿ�
  z-index: 100;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #888;
`;

export const NavIcon = styled.div`
  font-size: 20px;
  margin-bottom: 2px;
`;

export const NavLabel = styled.span`
  font-size: 13px;
`;
