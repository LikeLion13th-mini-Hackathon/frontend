import { useState } from "react";
import axios from "axios";
import { fetchGraduationRequirement } from "../api/graduation";
import CollegeDropdown from "../components/graduation/CollegeDropdown";
import { Header, PageWrapper } from "../styles/Graduation.styles";
import GraduationMemo from "../components/graduation/GraduationMemo";
import Footer from "../components/Footer";
import Requirement from "../components/graduation/GradRequirement";

export default function Graduation() {
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [isCollegeOpen, setIsCollegeOpen] = useState(false);
  const [isMajorOpen, setIsMajorOpen] = useState(false);
  const [graduationRequirement, setGraduationRequirement] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 졸업요건 조회
  const handleSearch = async () => {
    setIsSearched(true);
    setIsLoading(true);
    try {
      const data = await fetchGraduationRequirement(major);
      setGraduationRequirement(data[0] || null);
    } catch (err) {
      console.error("졸업 요건 조회 실패:", err);
      setGraduationRequirement(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageWrapper>
        <Header>졸업요건</Header>
        <CollegeDropdown
          collegeState={{ college, setCollege }}
          majorState={{ major, setMajor }}
          dropdownState={{
            isCollegeOpen,
            setIsCollegeOpen,
            isMajorOpen,
            setIsMajorOpen,
          }}
          onSearch={handleSearch}
        />
        <Requirement
          requirement={graduationRequirement}
          isQueried={isSearched}
          isLoading={isLoading}
        />
        <GraduationMemo />
      </PageWrapper>
      <Footer />
    </>
  );
}
