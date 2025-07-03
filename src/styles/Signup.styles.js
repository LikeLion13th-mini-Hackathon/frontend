import styled from "styled-components";
import { Button } from "../components/Button";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4vh;
  color: #140b77;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5vh;
`;

export const Field = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 0.8vh;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
`;

export const Required = styled.span`
  color: red;
  margin-left: 4px;
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
`;

export const SmallButton = styled(Button)`
  height: 40px;
  padding: 12px 16px;
  font-size: 10px;
  width: auto;
  border-radius: 12px;
  background-color: #000;
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
