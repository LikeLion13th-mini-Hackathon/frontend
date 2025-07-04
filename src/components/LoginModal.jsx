import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 10;
  left: 10;
  width: 100vw;
  height: 120vh; // 내 화면엔 이게 맞는데 테스트할 때 정확한 위치 수정 필요
  background-color: hsla(0, 0%, 0%, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 6vh;
  border-radius: 12px;
  width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 6px;
  }

  button {
    margin-top: 4vh;
    padding: 1.5vh;
    background-color: #140b77;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
