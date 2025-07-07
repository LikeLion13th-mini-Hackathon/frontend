import styled from "styled-components";

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #FFFFFF;
  border-bottom: 0.5px solid #A6A6AB;

  cursor: pointer;
`;

export const DropdownText = styled.div`
  font-size: 16px;
  color:rgb(0, 0, 0);
  font-weight: bold;
  padding: 0 10px;
`;

export const SelectButton = styled.button`
  border: 1px solid #140B77;
  border-radius: 20px;
  background-color: ${props => props.isSelected ? '#140B77' : '#FFFFFF'};
  color: ${props => props.isSelected ? '#FFFFFF' : '#140B77'};
  padding: 7px 20px;
  font-size: 11px;
  font-weight: 600;

  cursor: pointer;
`;

export const ButtonList = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #FFFFFF;
`;

export const SearchButton = styled.button`
  background-color: #140B77;
  color: #FFFFFF;
  border-radius: 20px;
  padding: 7px 20px;
  font-size: 11px;
  font-weight: 600;

  cursor: pointer;
  &:disabled {
    background-color: #79797B;
    cursor: not-allowed;
  }
`;

export const Header = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #140B77;
  margin: 2vh;
  margin-top: 0;
`;

export const PageWrapper = styled.div`
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const MemoContainer = styled.div`
  margin-bottom: 20vh;
`;

export const Card = styled.div`
  position: relative;
  min-height: 280px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  background-color: #EBF0F7;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const EmptyMemo = styled.div`
  white-space: pre-wrap; /* 줄바꿈 유지 */
  text-align: center;
  color: #AEAEAE;
  font-size: 14px;
`;

export const MemoText = styled.p`
  font-size: 14px;
  color: #111111;
  white-space: pre-wrap; /* 줄바꿈 유지 */
  margin: 0;
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 3vh;
  right: 3vh;
  background-color: #2d2d8f;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const RequirementWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
`;

export const DepartmentName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #140B77;
`;

export const RequirementContent = styled.pre`
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 1.6;
  color: #333;
`;