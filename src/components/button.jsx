import styled from "styled-components";

export const Button = styled.button`
  width: 38vh;
  background-color: #1e0066;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 12px 32px;
  cursor: pointer;
  transition: opacity 0.5s ease;

  &:active {
    opacity: 0.1;
  }
`;
