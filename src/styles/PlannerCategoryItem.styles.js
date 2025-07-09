import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0.5em 1em;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2vh;

  cursor: pointer;
  &:hover {
    background-color: #EBF0F7;
  }
`;

export const LeftSection = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #140b77;
  display: flex;
  align-items: center;
  padding: 5vh;
`;

export const RightSection = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5vh;
  margin: 0em 2em;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Devider = styled.div`
  width: 0.5px;
  height: auto;
  background-color: #A6A6AB;
  margin: 0 1em;
`;

