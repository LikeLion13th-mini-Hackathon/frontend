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
import { updateSubject } from "../../api/subject";

function GpaTable({ subjects, setSubjects, selectedSemester }) {
  const navigate = useNavigate();

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

  const handleChange = async (id, field, value) => {
    const updatedSubjects = subjects.map((subj) =>
      subj.id === id ? { ...subj, [field]: value } : subj
    );
    setSubjects(updatedSubjects);

    const target = updatedSubjects.find((s) => s.id === id);

    // 서버로 PATCH 요청 보내기 (빈 값 제외)
    if (target.subjectName.trim() && target.credit > 0 && target.grade) {
      try {
        await updateSubject(id, {
          subjectName: target.subjectName,
          credit: target.credit,
          grade: target.grade,
        });
        console.log("✅ 과목 수정 완료");
      } catch (err) {
        console.error("❌ 과목 수정 실패", err);
      }
    }
  };

  // 고정된 행 수를 위해 부족한 부분은 빈 과목으로 채움
  const fixedRowCount = 8;
  const displaySubjects = [
    ...subjects,
    ...Array.from({ length: fixedRowCount - subjects.length }, (_, i) => ({
      id: `empty-${i}`,
      subjectName: "",
      credit: 0,
      grade: "A+",
    })),
  ];

  return (
    <TableSection>
      <TableHeader>
        <TableTitle>{selectedSemester}</TableTitle>
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
          {displaySubjects.map((subject) => (
            <TableRow key={subject.id}>
              <SubjectCell>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "2vw",
                    gap: "8px",
                  }}
                >
                  <input
                    type="text"
                    value={subject.subjectName || ""}
                    onChange={(e) =>
                      handleChange(subject.id, "subjectName", e.target.value)
                    }
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      color: "inherit",
                      width: "100%",
                    }}
                    placeholder="과목명"
                  />

                  {subject.subjectName.trim() && (
                    <RiStickyNoteAddLine
                      size={20}
                      onClick={() => navigate(`/note/${subject.id}`)}
                      style={{ cursor: "pointer", flexShrink: 0 }}
                    />
                  )}
                </div>
              </SubjectCell>

              <TableBodyCell>
                <select
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    color: "inherit",
                  }}
                  value={subject.credit}
                  onChange={(e) =>
                    handleChange(subject.id, "credit", Number(e.target.value))
                  }
                >
                  {[0, 1, 2, 3].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </TableBodyCell>

              <TableBodyCell>
                <select
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    color: "inherit",
                  }}
                  value={subject.grade || "A+"}
                  onChange={(e) =>
                    handleChange(subject.id, "grade", e.target.value)
                  }
                >
                  {Object.keys(gradeToPoint).map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                  <option value="P">P</option>
                  <option value="NP">NP</option>
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
