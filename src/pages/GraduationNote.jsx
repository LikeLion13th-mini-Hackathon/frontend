import { useParams } from "react-router-dom";
import MemoPage from "../components/Note";

function GraduationMemoPage() {
  const { category } = useParams();

  const categories = {
    gpa: "학점",
    toeic: "토익",
    project: "졸업작품",
  };

  return (
    <MemoPage
      pageTitle="내가 해야 할 건 ..."
      dummyData={{
        id: category,
        name: categories[category],
        note: "",
      }}
      showTrash={false}
    />
  );
}

export default GraduationMemoPage;