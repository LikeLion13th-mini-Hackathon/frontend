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

// 더미데이터
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
  const handleSubjectsChange = (semester, newSubjects) => {
    setAllSubjects((prev) => ({ ...prev, [semester]: newSubjects }));
  };

  const allSubjectsArray = Object.values(allSubjects).flat();

  const calculateGpa = () => {
    const totalCredits = allSubjectsArray.reduce(
      (acc, subj) => acc + subj.credit,
      0
    );
    const totalPoints = allSubjectsArray.reduce(
      (acc, subj) => acc + subj.credit * gradeToPoint[subj.grade],
      0
    );
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const currentSubjects = allSubjects[selectedSemester] || [];

  return (
    <GPAContainer>
      <GPAHeader
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
      />

      <GpaCard
        overall={calculateGpa()}
        credits={allSubjectsArray.reduce((acc, subj) => acc + subj.credit, 0)}
      />

      <GpaTable
        subjects={allSubjects[selectedSemester] || []}
        setSubjects={(newSubjects) =>
          setAllSubjects((prev) => ({
            ...prev,
            [selectedSemester]: newSubjects,
          }))
        }
      />
      <Footer />
    </GPAContainer>
  );
}

export default Gpa;
