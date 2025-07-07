import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Note from "../components/Note";
import axios from "axios";

function SubjectNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const [subjectName, setSubjectName] = useState("알 수 없음");
  const [loading, setLoading] = useState(true);

  // ✅ 메모 불러오기
  useEffect(() => {
    const fetchSubjectMemo = async () => {
      try {
        const res = await axios.get(`http://YOUR_SERVER_URL/api/memo/${id}`);
        setNote(res.data.memo || "");
        setSubjectName(res.data.subjectName || "알 수 없음");
      } catch (err) {
        console.error("과목 메모 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjectMemo();
  }, [id]);

  // ✅ 메모 저장
  const handleSave = async (content) => {
    try {
      await axios.put(`http://YOUR_SERVER_URL/api/memo/${id}`, {
        memo: content,
      });
      alert("메모가 저장되었습니다.");
    } catch (err) {
      console.error("메모 저장 실패:", err);
      alert("저장 실패");
    }
  };

  // ✅ 메모 삭제
  const handleDelete = async () => {
    try {
      await axios.delete(`http://YOUR_SERVER_URL/api/memo/${id}`);
      setNote("");
      alert("메모가 삭제되었습니다.");
    } catch (err) {
      console.error("메모 삭제 실패:", err);
      alert("삭제 실패");
    }
  };

  return (
    <Note
      pageTitle="과목 메모"
      dummyData={{
        id,
        name: subjectName,
        note,
      }}
      onSave={handleSave}
      onDelete={handleDelete}
      showTrash={true}
      isLoading={loading}
    />
  );
}

export default SubjectNotePage;
