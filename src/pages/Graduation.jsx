import { useState } from 'react';
import CollegeDropdown from '../components/graduation/CollegeDropdown';
import { Header, PageWrapper } from '../styles/Graduation.styles';
import GraduationMemo from '../components/graduation/GraduationMemo';
import Footer from '../components/Footer';
import Requirement from '../components/graduation/GradRequirement';

export default function Graduation() {
  const [college, setCollege] = useState('');
  const [major, setMajor] = useState('');
  const [isSeaeched, setIsSearched] = useState(false);
  const [isCollegeOpen, setIsCollegeOpen] = useState(false);
  const [isMajorOpen, setIsMajorOpen] = useState(false);

  const graduationRequirements = [
    {
      "departmentName": "디자인학부",
      "additionalRequirements": "✅ 졸업논문:\n- 졸업논문은 실기발표로 공개발표로 되어야 하며 심사평가 합격기준은 D급 이상\n\n✅ 영어졸업인증제:\n- 2010학년도 이후 입학자 및 해당 학년으로 편입학 한 자\n- TOEIC 990 / TOEFL(iBT) 120 / New TEPS 990 / IELTS 9 / SPEAKING 200 / WRITING 200 / OPIc AD\n- 예술체육대학, 야간학과(부): TOEIC 600 / TOEFL(iBT) 68 / New TEPS 257 / IELTS 5.5 / SPEAKING 110 / WRITING 120 / OPIc IL\n"
    }
  ];

  const handleSearch = () => {
    console.log(`Selected Major: ${major}`);

    // API 호출

    setIsSearched(true);
  };



  return (
    <>
      <PageWrapper>
        <Header>졸업 요건</Header>
        <CollegeDropdown
          collegeState={{ college, setCollege }}
          majorState={{ major, setMajor }}
          dropdownState={{
            isCollegeOpen, setIsCollegeOpen,
            isMajorOpen, setIsMajorOpen
          }}
          onSearch={handleSearch}
        />
        <Requirement />
        <GraduationMemo />
      </PageWrapper>
      <Footer />
    </>
  );
}