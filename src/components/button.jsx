import styled from "styled-components";

export const Button = styled.button`
  width: 80vw;
  max-width: 360px;
  height: 7vh;
  background-color: #140b77;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 1vh;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
