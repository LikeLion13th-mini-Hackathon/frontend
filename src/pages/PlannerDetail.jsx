// 플래너 페이지 (상세)
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PlanDetailItem from "../components/Planner/PlanDetailItem";
import { PageWrapper } from "../styles/Graduation.styles";
import { HaederContainer, Title } from "../styles/Planner.styles";
import { FaPen } from "react-icons/fa";
import { EditButton } from "../styles/Note.styles";
import Footer from "../components/Footer";
import { getPlannerBySemester } from "../api/planner";

const PlanDetail = () => {
  const navigate = useNavigate();
  const { semester, category } = useParams(); // URL 파라미터 읽기

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const goToWritePage = () => {
    navigate(`/planner-note/${semester}/${category}`);
  };

  const fetchPlans = async () => {
    try {
      // 플래너 계획 학기별 조회
      const data = await getPlannerBySemester(semester);
      const filtered = data.filter(
        (plan) => plan.category === category && !plan.deletedAt
      );
      setPlans(filtered);
    } catch (err) {
      console.error("❌ 플래너 조회 실패:", err);
      setPlans([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const filteredPlans = plans.filter(
    (plan) => plan.category === category && !plan.deletedAt
  );

  return (
    <>
      <PageWrapper>
        <HaederContainer>
          <Title>플래너</Title>
        </HaederContainer>
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan) => (
            <PlanDetailItem key={plan.id} plan={plan} onRefresh={fetchPlans} />
          ))
        ) : (
          <p>등록된 계획이 없습니다.</p>
        )}
        <EditButton onClick={goToWritePage}>
          <FaPen size={20} color="white" />
        </EditButton>
      </PageWrapper>
      <Footer activeLabel="플래너"/>
    </>
  );
};

export default PlanDetail;
