// 학점 페이지 - 헤더
import { Wrapper, Title, TabContainer, Tab } from "../../styles/GPA.styles";

function GPAHeader({ selectedSemester, setSelectedSemester }) {
  const semesters = [
    "1학년 1학기",
    "1학년 2학기",
    "2학년 1학기",
    "2학년 2학기",
    "3학년 1학기",
    "3학년 2학기",
    "4학년 1학기",
    "4학년 2학기",
    "5학년 1학기",
    "5학년 2학기",
    "6학년 1학기",
    "6학년 2학기",
    "기타 학기",
  ];

  return (
    <Wrapper>
      <Title>학점 계산기</Title>
      <TabContainer>
        {semesters.map((semester) => (
          <Tab
            key={semester}
            active={semester === selectedSemester}
            onClick={() => setSelectedSemester(semester)}
          >
            {semester}
          </Tab>
        ))}
      </TabContainer>
    </Wrapper>
  );
}

export default GPAHeader;
