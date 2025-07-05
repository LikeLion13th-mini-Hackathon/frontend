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

  const handleChange = (id, field, value) => {
    const updatedSubjects = subjects.map((subj) => {
      if (subj.id === id) {
        const updated = { ...subj, [field]: value };
        if (
          subj.isPlaceholder &&
          field === "subjectName" &&
          value.trim() !== ""
        ) {
          updated.isPlaceholder = false; // 유효한 과목으로 전환
        }
        return updated;
      }
      return subj;
    });
    setSubjects(updatedSubjects);
  };

  // 상태에서 렌더링용 배열 직접 만들기
  const fixedRowCount = 8;
  const displaySubjects = [
    ...subjects,
    ...Array.from({ length: fixedRowCount - subjects.length }, (_, i) => ({
      id: `empty-${i}`,
      subjectName: "",
      credit: "",
      grade: "",
      isPlaceholder: true,
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
                      backgroundColor: subject.isPlaceholder
                        ? "#f9f9f9"
                        : "white",
                      color: subject.isPlaceholder ? "#ccc" : "inherit",
                      width: "100%",
                    }}
                    placeholder="과목명"
                  />

                  {!subject.isPlaceholder && (
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
                  disabled={subject.isPlaceholder}
                  style={{
                    border: "none",
                    backgroundColor: subject.isPlaceholder
                      ? "#f9f9f9"
                      : "white",
                    color: subject.isPlaceholder ? "#ccc" : "inherit",
                  }}
                  value={subject.credit || ""}
                  onChange={(e) =>
                    handleChange(subject.id, "credit", Number(e.target.value))
                  }
                >
                  <option value="" disabled>
                    0
                  </option>
                  {[1, 2, 3].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </TableBodyCell>

              <TableBodyCell>
                <select
                  disabled={subject.isPlaceholder}
                  style={{
                    border: "none",
                    backgroundColor: subject.isPlaceholder
                      ? "#f9f9f9"
                      : "white",
                    color: subject.isPlaceholder ? "#ccc" : "inherit",
                  }}
                  value={subject.grade || ""}
                  onChange={(e) =>
                    handleChange(subject.id, "grade", e.target.value)
                  }
                >
                  <option value="" disabled>
                    A+
                  </option>
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
