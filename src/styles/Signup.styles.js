import styled from "styled-components";
import { Button } from "../components/Button";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 7vw;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6vh;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
`;

export const Required = styled.span`
  color: red;
  margin-left: 4px;
  font-size: 16px;
`;

export const Input = styled.input`
  height: 40px;
  padding: 12px;
  font-size: 12px;
  border-radius: 12px;
  border: 1px solid #ccc;
  &::placeholder {
    color: #999;
  }
`;

export const Select = styled.select`
  height: 40px;
  padding: 12px;
  font-size: 12px;
  color: #999;
  border-radius: 12px;
  border: 1px solid #ccc;
  flex: 1;
  background-color: white;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SubmitButton = styled(Button)`
  position: fixed;
  bottom: 4vh;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  padding: 16px;
  background-color: #140b77;
  color: white;
  z-index: 1000;
  box-sizing: border-box;
`;
