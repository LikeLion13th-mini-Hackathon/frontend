import styled from "styled-components";

export const HaederContainer = styled.div`
  padding: 1vh;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  color: #140b77;
  margin-top: 0;
`;

export const TabContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  margin: 4vh 0;
  margin-top: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SemesterTab = styled.div`
  white-space: nowrap;
  font-size: 14px;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  color: ${(props) => (props.$active ? "#140b77" : "#888")};
  border-bottom: ${(props) => (props.$active ? "2px solid #140b77" : "none")};
  padding-bottom: 0.2vh;
  cursor: pointer;
`;
