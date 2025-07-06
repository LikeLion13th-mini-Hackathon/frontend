import BeeImage from "../../assets/Bee6.png";
import { RequirementWrapper, DepartmentName, RequirementContent } from "../../styles/Graduation.styles";

export default function Requirement({ requirement, isQueried }) {
  return (
    <RequirementWrapper>
      {!isQueried ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <img src={BeeImage} alt="캐릭터" style={{ width: "25vh" }} />
          <p style={{ color: '#AEAEAE', fontSize: '14px' }}>
            학과를 먼저 선택해주세요.
          </p>
        </div>
      ) : (
        <>
          <DepartmentName>{requirement.departmentName}</DepartmentName>
          <RequirementContent>{requirement.additionalRequirements}</RequirementContent>
        </>
      )}
    </RequirementWrapper>
  );
}