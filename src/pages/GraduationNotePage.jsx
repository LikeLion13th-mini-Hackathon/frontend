import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MemoPage from "../components/Note";
import {
  fetchGraduationMemo,
  createGraduationMemo,
  updateGraduationMemo,
  deleteGraduationMemo,
} from "../api/graduationMemo";

function GraduationNote() {
  const { category } = useParams();

  const categories = {
    gpa: "학점",
    toeic: "토익",
    project: "졸업작품",
  };

  const apiCategoryMap = {
    gpa: "GPA",
    toeic: "TOEIC",
    project: "GRADUATION_PROJECT",
  };

  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [memoId, setMemoId] = useState(null);

  // ✅ 메모 조회
  const loadMemo = async () => {
    setLoading(true);
    try {
      const data = await fetchGraduationMemo(apiCategoryMap[category]);
      if (data && data.length > 0) {
        setNote(data[0].content);
        setMemoId(data[0].id);
      } else {
        setNote("");
        setMemoId(null);
      }
    } catch (err) {
      console.error("메모 조회 실패:", err);
      setNote("");
      setMemoId(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ 메모 저장/수정
  const saveMemo = async (content) => {
    try {
      if (memoId) {
        await updateGraduationMemo(memoId, content);
        alert("메모가 수정되었습니다.");
      } else {
        const data = await createGraduationMemo(
          apiCategoryMap[category],
          content
        );
        alert("메모가 저장되었습니다.");
        if (data?.id) setMemoId(data.id);
      }
      setNote(content);
    } catch (err) {
      console.error("메모 저장 실패:", err);
      alert("저장에 실패했습니다.");
    }
  };

  // ✅ 메모 삭제
  const handleDelete = async () => {
    if (!memoId) return;
    try {
      await deleteGraduationMemo(memoId);
      setNote("");
      setMemoId(null);
      alert("메모가 삭제되었습니다.");
    } catch (err) {
      console.error("메모 삭제 실패:", err);
      alert("삭제에 실패했습니다.");
    }
  };

  useEffect(() => {
    loadMemo();
  }, [category]);

  return (
    <MemoPage
      pageTitle="내가 해야 할 건..."
      dummyData={{
        id: category,
        name: categories[category],
        note: note,
      }}
      onSave={saveMemo}
      onDelete={handleDelete}
      showTrash={true}
      isLoading={loading}
    />
  );
}

export default GraduationNote;
