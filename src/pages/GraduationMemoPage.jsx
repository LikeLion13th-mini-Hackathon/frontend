import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MemoPage from "../components/Note";
import axios from "axios";

function GraduationMemoPage() {
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
  const fetchMemo = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://34.227.53.193:8081/api/graduation-memo?category=${apiCategoryMap[category]}`
      );
      if (res.data && res.data.length > 0) {
        setNote(res.data[0].content);
        setMemoId(res.data[0].id);
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

  // ✅ 메모 저장 or 수정
  const saveMemo = async (content) => {
    try {
      if (memoId) {
        // 수정
        await axios.put(
          `http://34.227.53.193:8081/api/graduation-memo/${memoId}`,
          {
            content,
          }
        );
        alert("메모가 수정되었습니다.");
      } else {
        // 등록
        const res = await axios.post(
          "http://34.227.53.193:8081/api/graduation-memo",
          {
            category: apiCategoryMap[category],
            content,
          }
        );
        alert("메모가 저장되었습니다.");
        if (res.data && res.data.id) {
          setMemoId(res.data.id);
        }
      }
      setNote(content);
    } catch (err) {
      console.error("메모 저장 실패:", err);
      alert("저장에 실패했습니다.");
    }
  };

  // ✅ 메모 삭제
  const deleteMemo = async () => {
    if (!memoId) return;
    try {
      await axios.delete(
        `http://34.227.53.193:8081/api/graduation-memo/${memoId}`
      );
      setNote("");
      setMemoId(null);
      alert("메모가 삭제되었습니다.");
    } catch (err) {
      console.error("메모 삭제 실패:", err);
      alert("삭제에 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchMemo();
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
      onDelete={deleteMemo}
      showTrash={true}
      isLoading={loading}
    />
  );
}

export default GraduationMemoPage;
