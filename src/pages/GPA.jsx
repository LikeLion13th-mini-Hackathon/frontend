import { useState, useEffect } from "react";
import { GPAContainer } from "../styles/GPA.styles";
import GPAHeader from "../components/gpa/GpaHeader";
import GpaCard from "../components/gpa/GpaCard";
import GpaTable from "../components/gpa/GpaTable";
import Footer from "../components/Footer";
import axios from "axios";

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

function Gpa() {
  const [selectedSemester, setSelectedSemester] = useState("1학년 1학기");
  const [allSubjects, setAllSubjects] = useState({});
  const [statistics, setStatistics] = useState({
    gpa: "0.00",
    acquiredCredit: 0,
  });

  // 학기 선택 핸들링
  const handleSemesterChange = (semester) => setSelectedSemester(semester);

  // 전체 과목을 flat하게 만든 배열
  const allSubjectsArray = Object.values(allSubjects).flat();

  // 현재 학기의 과목 리스트
  const currentSubjects = allSubjects[selectedSemester] || [];

  // 빈 행 포함해서 8줄 고정
  const fixedRowCount = 8;
  const filledSubjects = [...currentSubjects];
  while (filledSubjects.length < fixedRowCount) {
    filledSubjects.push({
      id: `empty-${filledSubjects.length}`,
      subjectName: "",
      credit: 0,
      grade: "A+",
    });
  }

  // 선택된 학기의 과목 리스트 조회
  useEffect(() => {
    const fetchSubjects = async () => {
      const token = localStorage.getItem("token");
      const [gradeLevel, semester] = selectedSemester
        .replace("학년", "")
        .replace("학기", "")
        .split(" ")
        .map(Number);

      try {
        // 주소 수정 필요
        const res = await axios.get("http://localhost:5000/api/subject", {
          params: { gradeLevel, semester },
          headers: { Authorization: `Bearer ${token}` },
        });

        const normalized = res.data.map((item) => ({
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
        console.error("과목 불러오기 실패:", err);
      }
    };

    fetchSubjects();
  }, [selectedSemester]);

  // 전체 평점 및 취득 학점 통계 조회
  useEffect(() => {
    const fetchStatistics = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(
          // 주소 수정 필요
          "http://localhost:5000/api/subject/statistics",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const { gpa, acquiredCredit } = res.data;
        setStatistics({
          gpa: parseFloat(gpa).toFixed(2),
          acquiredCredit: acquiredCredit ?? 0,
        });
      } catch (err) {
        console.error("통계 조회 실패:", err);
      }
    };

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
              await axios.patch(
                // 주소 수정 필요
                `http://localhost:5000/api/subject/${subj.id}`,
                {
                  subjectName: subj.subjectName,
                  credit: subj.credit,
                  grade: subj.grade,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            }
          } catch (err) {
            console.error("과목 업데이트 실패:", err);
          }
        }}
        selectedSemester={selectedSemester}
      />

      <Footer />
    </GPAContainer>
  );
}

export default Gpa;
