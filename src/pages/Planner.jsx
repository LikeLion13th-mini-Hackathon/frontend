// 플래너 페이지
import { useState, useEffect } from "react";
import PlanCategory from "../components/Planner/PlanCategory";
import {
  SemesterTab,
  Title,
  TabContainer,
  HaederContainer,
} from "../styles/Planner.styles";
import { PageWrapper } from "../styles/Graduation.styles";
import Footer from "../components/Footer";
import { getPlannerBySemester } from "../api/planner";

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

const categories = ["학업", "진로", "알바"];

const Planner = () => {
  const [selectedSemester, setSelectedSemester] = useState("1학년 1학기");
  const [plans, setPlans] = useState([]);

  const fetchPlans = async () => {
    try {
      // 플래너 계획 학기별 조회 API
      const res = await getPlannerBySemester(selectedSemester);
      setPlans(res);
    } catch (err) {
      console.error("❌ 플래너 불러오기 실패", err);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, [selectedSemester]);

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
        <Title style={{ fontSize: "20px", textAlign: "start" }}>
          어떤 대학생활을 계획하셨나요?
        </Title>
        {categories.map((category) => (
          <PlanCategory
            key={category}
            plans={plans}
            setPlans={setPlans}
            category={category}
            selectedSemester={selectedSemester}
          />
        ))}
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Planner;
