import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2vh;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2vh;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #140b77;
  margin: 0 0.5vh;
`;

export const Devider = styled.div`
  height: 0.5px;
  width: auto;
  background-color: #A6A6AB;
  margin: 1vh 0; 
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.1vh; 
  width: 100%;
`;

export const Content = styled.div`
  font-size: 0.8rem;
  line-height: 1.5; 
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  flex: 1;
  margin-top: 8px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  line-height: 1.5;
  width: 100%;
  padding: 0; 
  box-sizing: border-box;
  font-size: inherit; 
  font-family: inherit;
`;