import { useParams } from "react-router-dom";
import MemoPage from "../components/Note";

function SubjectNotePage() {
  const { id } = useParams();
  return (
    <MemoPage
      pageTitle="과목 메모"
      dummyData={{
        id,
        name: "자료구조",
        note: "자료구조 과목 메모입니다.",
      }}
    />
  );
}

export default SubjectNotePage;