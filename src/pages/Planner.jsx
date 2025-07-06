import { useState } from 'react';
import PlanList from '../components/Planner/PlanCategoryItem';
import { SemesterTab, Title, TabContainer, HaederContainer } from '../styles/Planner.styles';
import { PageWrapper } from '../styles/Graduation.styles';
import Footer from '../components/Footer';

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

const categories = ['학업', '진로', '알바'];

const PlannerPage = () => {
  const [selectedSemester, setSelectedSemester] = useState("1학년 1학기");
  const [plans, setPlans] = useState([]);

  return (
    <>
      <PageWrapper>
        <HaederContainer>
          <Title>플래너</Title>
          <TabContainer>
            {semesters.map((semester) => (
              <SemesterTab
                key={semester}
                $active={semester === selectedSemester}
                onClick={() => setSelectedSemester(semester)}
              >
                {semester}
              </SemesterTab>
            ))}
          </TabContainer>
        </HaederContainer>
        <Title style={{fontSize: '20px', textAlign: 'start'}}>
          어떤 대학생활을 계획하셨나요?
        </Title>
        {categories.map((category) => (
          <PlanList
            key={category}
            plans={plans}
            setPlans={setPlans}
            category={category}
            selectedSemester={selectedSemester}
          />
        ))}
      </PageWrapper>
      <Footer/>
    </>
  );
};

export default PlannerPage;