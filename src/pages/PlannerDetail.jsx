import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PlanDetailItem from "../components/Planner/PlanDetailItem";
import { PageWrapper } from '../styles/Graduation.styles';
import Footer from '../components/Footer';

const PlanDetail = () => {
  const { semester, category } = useParams();  // URL 파라미터 읽기
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // API 추가
    const dummyPlans = [
      { id: 1, semester: "1학년 1학기", category: "학업", goal: "계획내용1\n아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 아주 긴 내용 " },
      { id: 2, semester: "1학년 1학기", category: "학업", goal: "계획내용2" },
      { id: 3, semester: "1학년 2학기", category: "진로", goal: "계획내용3" },
    ];
    setPlans(dummyPlans);
  }, []);

  const filteredPlans = plans.filter(
    (plan) => plan.semester === semester && plan.category === category
  );

  return (
    <>
      <PageWrapper>
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan) => (
            <PlanDetailItem key={plan.id} plan={plan} />
          ))
        ) : (
          <p>등록된 계획이 없습니다.</p>
        )}
      </PageWrapper>
      <Footer/>
    </>
  );
};

export default PlanDetail;