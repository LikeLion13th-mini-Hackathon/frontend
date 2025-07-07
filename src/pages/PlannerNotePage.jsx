import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Note from "../components/Note";
import { EditButton } from "../styles/Note.styles";
import { FaPen } from "react-icons/fa";
import {
  getPlannerBySemester,
  createPlanner,
  updatePlanner,
  deletePlanner,
} from "../api/planner";

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
        const res = await getPlannerBySemester(semester);
        const matched = res.find(
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
        await updatePlanner(plannerId, {
          semester,
          category,
          goal: content,
        });
      } else {
        const res = await createPlanner({
          semester,
          category,
          goal: content,
        });
        if (res.id) setPlannerId(res.id);
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
      await deletePlanner(plannerId);
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
          note,
        }}
        showTrash={true}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        isLoading={loading}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <EditButton onClick={() => setIsEditing(true)}>
        <FaPen size={20} color="white" />
      </EditButton>
    </>
  );
}

export default PlannerNotePage;
