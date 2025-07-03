import styled from "styled-components";

export const Button = styled.button`
  width: 85%;
  max-width: 360px;
  height: 55px;
  background-color: #140b77;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
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
