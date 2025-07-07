import { useState } from "react";
import axios from "axios";
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

  const handleSearch = async () => {
    console.log(`Selected Major: ${major}`);
    setIsSearched(true);
    setIsLoading(true);

    // ✅ 졸업요건 조회
    try {
      const res = await axios.get(
        `http://34.227.53.193:8081/api/graduation/department?name=${encodeURIComponent(
          major
        )}`
      );
      if (res.data && res.data.length > 0) {
        setGraduationRequirement(res.data[0]);
      } else {
        setGraduationRequirement(null);
      }
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
