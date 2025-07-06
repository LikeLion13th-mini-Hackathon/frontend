import { useState } from "react";
import { GPAContainer } from "../styles/GPA.styles";
import GPAHeader from "../components/gpa/GpaHeader";
import GpaCard from "../components/gpa/GpaCard";
import GpaTable from "../components/gpa/GpaTable";
import Footer from "../components/Footer";

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

const initialData = {
  "1학년 1학기": [
    { id: 1, subjectName: "긴제목의과목1", credit: 3, grade: "A+" },
    { id: 2, subjectName: "과목2", credit: 3, grade: "B+" },
  ],
  "1학년 2학기": [
    { id: 3, subjectName: "과목3", credit: 2, grade: "A0" },
    { id: 4, subjectName: "과목4", credit: 3, grade: "C+" },
  ],
};

function Gpa() {
  const [selectedSemester, setSelectedSemester] = useState("1학년 1학기");
  const [allSubjects, setAllSubjects] = useState(initialData);

  const handleSemesterChange = (semester) => setSelectedSemester(semester);

  const allSubjectsArray = Object.values(allSubjects).flat();

  const calculateGpa = () => {
    const validSubjects = allSubjectsArray.filter(
      (subj) =>
        gradeToPoint.hasOwnProperty(subj.grade) && // 패논패는 제외
        typeof subj.credit === "number" &&
        !isNaN(subj.credit) &&
        subj.credit > 0
    );

    const totalCredits = validSubjects.reduce(
      (acc, subj) => acc + subj.credit,
      0
    );
    const totalPoints = validSubjects.reduce(
      (acc, subj) => acc + subj.credit * gradeToPoint[subj.grade],
      0
    );

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const totalValidCredits = allSubjectsArray.reduce(
    (acc, subj) =>
      subj.grade in gradeToPoint &&
      typeof subj.credit === "number" &&
      subj.credit > 0
        ? acc + subj.credit
        : acc,
    0
  );

  const currentSubjects = allSubjects[selectedSemester] || [];

  // 빈 행 포함해서 8줄 맞추기
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

  return (
    <GPAContainer>
      <GPAHeader
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
      />

      <GpaCard
        overall={calculateGpa()}
        credits={allSubjectsArray.reduce((acc, subj) => {
          if (typeof subj.credit !== "number" || subj.credit <= 0) return acc;
          if (subj.grade === "NP") return acc; // NP는 무조건 제외
          return acc + subj.credit; // P 포함, GPA 성적 포함
        }, 0)}
      />

      <GpaTable
        subjects={filledSubjects}
        setSubjects={(newSubjects) =>
          setAllSubjects((prev) => ({
            ...prev,
            [selectedSemester]: newSubjects,
          }))
        }
        selectedSemester={selectedSemester}
      />

      <Footer />
    </GPAContainer>
  );
}

export default Gpa;
