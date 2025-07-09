// 학점 페이지
import { useState, useEffect, useMemo } from "react";
import { GPAContainer } from "../styles/GPA.styles";
import GPAHeader from "../components/gpa/GpaHeader";
import GpaCard from "../components/gpa/GpaCard";
import GpaTable from "../components/gpa/GpaTable";
import Footer from "../components/Footer";
import {
  updateSubject,
  getSubjects,
  getSubjectStatistics,
} from "../api/subject";

function Gpa() {
  const [selectedSemester, setSelectedSemester] = useState("1학년 1학기");
  const [allSubjects, setAllSubjects] = useState({});
  const [statistics, setStatistics] = useState({
    gpa: "0.00",
    acquiredCredit: 0,
  });
  const handleSemesterChange = (semester) => setSelectedSemester(semester); // 학기 선택 핸들링
  // 통계 조회 함수
  const fetchStatistics = async () => {
    const token = localStorage.getItem("token");

    try {
      // 전체 평점, 취득 학점 전체 조회 API
      const { gpa, acquiredCredit } = await getSubjectStatistics(token);
      setStatistics({
        gpa: parseFloat(gpa).toFixed(2),
        acquiredCredit: acquiredCredit ?? 0,
      });
    } catch (err) {
      console.error("❌ 통계 조회 실패:", err);
    }
  };
  const currentSubjects = allSubjects[selectedSemester] || []; // 현재 학기의 과목 리스트
  const fixedRowCount = 8; // 빈 행 포함해서 8줄 고정

  const filledSubjects = useMemo(() => {
    const rows = [...currentSubjects];
    while (rows.length < fixedRowCount) {
      rows.push({
        id: `empty-${rows.length}`,
        subjectName: "",
        credit: 0,
        grade: "A+",
      });
    }
    return rows;
  }, [currentSubjects]);

  useEffect(() => {
    if (allSubjects[selectedSemester]) return;

    const fetchSubjects = async () => {
      const token = localStorage.getItem("token");
      const [gradeLevel, semester] = selectedSemester
        .replace("학년", "")
        .replace("학기", "")
        .split(" ")
        .map(Number);

      try {
        // 학기별 과목 전체 조회 API
        const rawSubjects = await getSubjects(gradeLevel, semester, token);
        const normalized = rawSubjects.map((item) => ({
          id: item.id,
          subjectName: item.subjectName || "",
          credit: item.credit ?? 0,
          grade: item.grade || "",
        }));

        setAllSubjects((prev) => ({
          ...prev,
          [selectedSemester]: normalized,
        }));
      } catch (err) {
        console.error("❌ 과목 불러오기 실패:", err);
      }
    };

    fetchSubjects();
  }, [selectedSemester]);

  useEffect(() => {
    fetchStatistics();
  }, []);

  return (
    <GPAContainer>
      <GPAHeader
        selectedSemester={selectedSemester}
        setSelectedSemester={handleSemesterChange}
      />

      <GpaCard overall={statistics.gpa} credits={statistics.acquiredCredit} />

      <GpaTable
        subjects={filledSubjects}
        setSubjects={async (newSubjects) => {
          setAllSubjects((prev) => ({
            ...prev,
            [selectedSemester]: newSubjects,
          }));

          const token = localStorage.getItem("token");
          const patchable = newSubjects.filter(
            (subj) => !`${subj.id}`.startsWith("empty")
          );

          try {
            for (const subj of patchable) {
              // 과목 등록/수정 API
              await updateSubject(
                subj.id,
                {
                  subjectName: subj.subjectName,
                  credit: subj.credit,
                  grade: subj.grade,
                },
                token
              );
            }
            await fetchStatistics(); // 여기서 통계 다시 조회해서 카드 실시간 반영
          } catch (err) {
            console.error("❌ 과목 업데이트 실패:", err);
          }
        }}
        selectedSemester={selectedSemester}
      />

      <Footer />
    </GPAContainer>
  );
}

export default Gpa;
