import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0000008A;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Box = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  width: 90%;
  min-width: 300px;
  max-width: 500px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1rem;
  background: none;
  border: none;
  color: #767676;
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 13px;
  font-weight: bold;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1.5vh 2vh;
  margin: 2vh auto;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  margin: 2vh auto;
`;

export const OptionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5vh 6vh;
  background-color: #F0F0F0;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  color: ${(props) => props.color || "#000"};
`;

export const ButtonLabel = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #111111;
`;