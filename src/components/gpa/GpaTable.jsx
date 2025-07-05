import { useNavigate } from "react-router-dom";
import {
  TableSection,
  TableHeader,
  TableTitle,
  Table,
  TableRow,
  TableHead,
  SubjectCell,
  TableBodyCell,
} from "../../styles/GPA.styles";
import { RiStickyNoteAddLine } from "react-icons/ri";

function GpaTable({ subjects, setSubjects, semester }) {
  // 노트로 이동 관리
  const navigate = useNavigate();
  const handleNoteClick = (subjectId) => {
    navigate(`/note/${subjectId}`);
  };

  const gradeToPoint = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };

  const handleChange = (id, field, value) => {
    const updatedSubjects = subjects.map((subj) =>
      subj.id === id ? { ...subj, [field]: value } : subj
    );
    setSubjects(updatedSubjects);
  };

  return (
    <TableSection>
      <TableHeader>
        <TableTitle>{semester}</TableTitle>
      </TableHeader>

      <Table>
        <thead>
          <TableRow>
            <TableHead>과목명</TableHead>
            <TableHead>학점</TableHead>
            <TableHead>성적</TableHead>
          </TableRow>
        </thead>

        <tbody>
          {subjects.map((subject) => (
            <TableRow key={subject.id}>
              <SubjectCell>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "2vw",
                  }}
                >
                  {subject.subjectName}
                  <RiStickyNoteAddLine
                    size={20}
                    onClick={() => handleNoteClick(subject.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </SubjectCell>

              <TableBodyCell>
                <select
                  style={{ border: "none", backgroundColor: "white" }}
                  value={subject.credit}
                  onChange={(e) =>
                    handleChange(subject.id, "credit", Number(e.target.value))
                  }
                >
                  {[1, 2, 3].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </TableBodyCell>

              <TableBodyCell>
                <select
                  style={{ border: "none", backgroundColor: "white" }}
                  value={subject.grade}
                  onChange={(e) =>
                    handleChange(subject.id, "grade", e.target.value)
                  }
                >
                  {Object.keys(gradeToPoint).map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </TableBodyCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableSection>
  );
}

export default GpaTable;
