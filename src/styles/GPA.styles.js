import styled from "styled-components";

export const GPAContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 14vh;
`;

// 헤더 (학기 선택 영역)
export const Wrapper = styled.div`
  padding: 2.5vh;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  color: #140b77;
  margin: 2vh;
  margin-top: 0;
`;

export const TabContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.div`
  white-space: nowrap;
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-bottom: ${(props) => (props.active ? "2px solid #140b77" : "none")};
  color: ${(props) => (props.active ? "#140b77" : "#888")};
  padding-bottom: 0.2vh;
  cursor: pointer;
`;

// 학점 카드 영역
export const GpaCardWrapper = styled.div`
  border-radius: 16px;
  padding: 2vh;
  margin: 0 7vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const GpaSection = styled.div`
  text-align: center;
  flex: 1;

  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }
`;

export const GpaLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #140b77;
  margin-bottom: 0.5vh;
`;

export const GpaValue = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #140b77;
`;

export const GpaMax = styled.span`
  font-size: 14px;
  color: #bbb;
  margin-left: 0.5vw;
`;

// 과목 테이블 영역
export const TableSection = styled.section`
  padding: 0 3vh;
  margin-top: 1vh;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableTitle = styled.h2`
  font-size: 20px;
  color: #140b77;
  font-weight: bold;
  margin-bottom: 1vh;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 1vh 0;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  border: 1px solid #ccc;
  background-color: rgb(233, 239, 255);
`;

export const TableBodyCell = styled.td`
  padding: 1.2vh 0;
  font-size: 14px;
  border: 1px solid #ccc;
`;

export const SubjectCell = styled.td`
  text-align: left;
  padding-left: 1vw;
  width: 65%;
  border: 1px solid #ccc;
  font-size: 14px;
`;
