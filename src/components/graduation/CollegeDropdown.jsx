import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { LuSchool } from "react-icons/lu";
import { MdOutlineBook } from "react-icons/md";
import { 
  DropdownHeader, 
  DropdownText, 
  SelectButton, 
  ButtonList, 
  DropdownContainer, 
  SearchButton, 
  SearchButtonContainer
} from "../../styles/Graduation.styles";

export default function CollegeDropdown({ collegeState, majorState, dropdownState, onSearch }) {
  const { college, setCollege } = collegeState;
  const { major, setMajor } = majorState;
  const { isCollegeOpen, setIsCollegeOpen, isMajorOpen, setIsMajorOpen } = dropdownState;

  const colleges = [
    '경영대학', '공과대학', '글로벌정경대학',
    '도시과학대학', '동북아국제통상물류학부', '법학부', '사범대학',
    '사회과학대학', '생활과학기술대학', '예술체육대학', '융합자유전공대학',
    '자연과학대학', '정보기술대학', '인문대학'
  ];

  const majors = {
    '경영대학': ['경영학과', '회계학과', '경영정보학과'],
    '공과대학': ['컴퓨터공학과', '전자공학과', '기계공학과'],
    '글로벌정경대학': ['국제통상학과', '정치학과', '경제학과'],
    '도시과학대학': ['도시공학과', '환경공학과', '건축학과'],
    '동북아국제통상물류학부': ['국제물류학과', '국제통상학과'],
    '법학부': ['법학과'],
    '사범대학': ['교육학과', '유아교육과', '초등교육과'],
    '사회과학대학': ['사회학과', '심리학과', '사회복지학과'],
    '생활과학기술대학': ['식품영양학과', '의류학과', '가정관리학과'],
    '융합자유전공대학': ['융합자유전공학과'],
    '자연과학대학': ['수학과', '물리학과', '화학과'],
    '정보기술대학': ['소프트웨어학과', '데이터사이언스학과', '인공지능학과'],
    '인문대학': ['국어국문학과', '영어영문학과', '철학과']
  };  
  
  const toggleCollege = () => setIsCollegeOpen(!isCollegeOpen);
  const toggleMajor = () => setIsMajorOpen(!isMajorOpen);

  const selectCollege = (c) => {
    setCollege(c);
    setIsMajorOpen(true); // 학과 드롭다운 열기
    setMajor('');
  };

  const selectMajor = (m) => {
    setMajor(m);
  };

  return (
    <DropdownContainer>
      <div>
        <DropdownHeader onClick={toggleCollege}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LuSchool size={20} color='#140B77'/>
            <DropdownText>{'단과대학'}</DropdownText>
          </div>
          {isCollegeOpen ? <IoIosArrowUp size={20} color='#140B77'/> : <IoIosArrowDown size={20} color='#140B77'/>}
        </DropdownHeader>
        {isCollegeOpen && (
          <ButtonList>
            {colleges.map((c) => (
              <SelectButton
                key={c}
                isSelected={college === c}
                onClick={() => selectCollege(c)}
              >
                {c}
              </SelectButton>
            ))}
          </ButtonList>
        )}
      </div>
      <div>
        <DropdownHeader onClick={toggleMajor}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdOutlineBook size={20} color='#140B77'/>
            <DropdownText>{'학과'}</DropdownText>
          </div>
          {isMajorOpen ? <IoIosArrowUp size={20} color='#140B77'/> : <IoIosArrowDown size={20} color='#140B77'/>}
        </DropdownHeader>
        {isMajorOpen && college && (
          <ButtonList>
            {majors[college]?.map((m) => (
              <SelectButton
                key={m}
                isSelected={major === m}
                onClick={() => selectMajor(m)}
              >
                {m}
              </SelectButton>
            ))}
          </ButtonList>
        )}
      </div>
        {college && isMajorOpen && (
          <SearchButtonContainer>
            <SearchButton disabled={!college || !major} onClick={onSearch}>
              조회하기
            </SearchButton>
          </SearchButtonContainer>)}
    </DropdownContainer>
  );
}