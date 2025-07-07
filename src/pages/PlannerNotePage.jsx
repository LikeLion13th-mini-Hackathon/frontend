import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Note from "../components/Note";
import { EditButton } from "../styles/Note.styles";
import { FaPen } from "react-icons/fa";

function PlannerNotePage() {
  const { semester, category } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [plannerId, setPlannerId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const displayCategory = {
    학업: "학업 계획",
    진로: "진로 계획",
    알바: "알바 계획",
  };

  // ✅ 학기 + 카테고리로 메모 불러오기
  useEffect(() => {
    const fetchPlanner = async () => {
      try {
        const res = await axios.get(
          `http://34.227.53.193:8081/api/planner/semester?semester=${semester}`
        );

        const matched = res.data.find(
          (plan) => plan.category === category && !plan.deletedAt
        );
        if (matched) {
          setNote(matched.goal);
          setPlannerId(matched.id);
        }
      } catch (err) {
        console.error("불러오기 실패", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanner();
  }, [semester, category]);

  // ✅ 저장 핸들러
  const handleSave = async (content) => {
    try {
      if (plannerId) {
        await axios.put(`http://34.227.53.193:8081/api/planner/${plannerId}`, {
          semester,
          category,
          goal: content,
        });
      } else {
        await axios.post("http://34.227.53.193:8081/api/planner", {
          semester,
          category,
          goal: content,
        });
      }

      alert("저장 완료!");
      navigate(-1);
    } catch (err) {
      console.error("저장 실패", err);
      alert("저장 실패");
    }
  };

  // ✅ 삭제 핸들러
  const handleDelete = async () => {
    try {
      if (!plannerId) return;
      await axios.delete(`http://34.227.53.193:8081/api/planner/${plannerId}`);
      alert("삭제 완료!");
      navigate(-1);
    } catch (err) {
      console.error("삭제 실패", err);
      alert("삭제 실패");
    }
  };

  return (
    <>
      <Note
        pageTitle="플래너"
        dummyData={{
          id: plannerId,
          name: `${semester} ${displayCategory[category] || category}`,
          note: note,
        }}
        showTrash={true}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        isLoading={loading}
        onSave={handleSave}
        onDelete={handleDelete} // ✅ Note에 삭제 함수 전달
      />
      <EditButton onClick={() => setIsEditing(true)}>
        <FaPen size={20} color="white" />
      </EditButton>
    </>
  );
}

export default PlannerNotePage;
