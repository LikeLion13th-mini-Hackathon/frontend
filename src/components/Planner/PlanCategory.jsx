import { RightSection } from "../../styles/PlannerCategoryItem.styles";
import { ItemWrapper, LeftSection, Devider, CategoryItem } from "../../styles/PlannerCategoryItem.styles";
import { useNavigate } from "react-router-dom";

const PlanCategory = ({ plans, category, selectedSemester }) => {

  const navigate = useNavigate();

  const filteredPlans = plans.filter(plan =>
    plan.category === category && plan.semester.replace(/\s/g, '') === selectedSemester.replace(/\s/g, '')
  );

  const handleClick = () => {
    navigate(`/plans/${selectedSemester}/${category}`)
  }

  return (
    <ItemWrapper onClick={handleClick}>
      <LeftSection>
        {category}
      </LeftSection>
      <Devider />
      <RightSection>
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan) => (
            <CategoryItem key={plan.id}>
              <span style={{ color: "#140B77", fontSize: "16px", marginRight: "0.7em" }}>•</span> {plan.goal}
            </CategoryItem>
          ))
        ) : (
          <CategoryItem>등록된 계획이 없습니다.</CategoryItem>
        )}
      </RightSection>
    </ItemWrapper>
  )
};

export default PlanCategory;